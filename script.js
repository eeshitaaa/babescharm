const locket = document.querySelector("#locket");
const locketText = document.querySelector("#locketText");
const frontEngraving = document.querySelector("#frontEngraving");
const charCount = document.querySelector("#charCount");
const flipButton = document.querySelector("#flipButton");
const finishButtons = document.querySelectorAll("[data-finish]");
const downloadImageButton = document.querySelector("#downloadImage");
const downloadVideoButton = document.querySelector("#downloadVideo");
const downloadStatus = document.querySelector("#downloadStatus");
const frontImage = document.querySelector(".locket-front .locket-art");

const EXPORT_SIZE = 900;
let exportImageCache = null;
let exportCacheFinish = "";

function engravingLines() {
  const value = locketText.value.trim() || "babes";
  const lines = [];
  for (let index = 0; index < value.length; index += 8) {
    lines.push(value.slice(index, index + 8));
  }
  return lines;
}

function setDownloadStatus(message) {
  downloadStatus.textContent = message;
}

async function prepareExport() {
  if (document.fonts?.load) {
    await document.fonts.load('70px "Parisienne"');
  }
  if (!frontImage.complete || !frontImage.naturalWidth) {
    await frontImage.decode();
  }
}

function clamp(value) {
  return Math.max(0, Math.min(255, value));
}

function rgbToHsl(red, green, blue) {
  const r = red / 255;
  const g = green / 255;
  const b = blue / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const lightness = (max + min) / 2;
  if (max === min) return [0, 0, lightness];
  const delta = max - min;
  const saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
  let hue;
  if (max === r) hue = (g - b) / delta + (g < b ? 6 : 0);
  else if (max === g) hue = (b - r) / delta + 2;
  else hue = (r - g) / delta + 4;
  return [hue / 6, saturation, lightness];
}

function hueToRgb(p, q, hue) {
  let value = hue;
  if (value < 0) value += 1;
  if (value > 1) value -= 1;
  if (value < 1 / 6) return p + (q - p) * 6 * value;
  if (value < 1 / 2) return q;
  if (value < 2 / 3) return p + (q - p) * (2 / 3 - value) * 6;
  return p;
}

function hslToRgb(hue, saturation, lightness) {
  if (saturation === 0) {
    const value = lightness * 255;
    return [value, value, value];
  }
  const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
  const p = 2 * lightness - q;
  return [
    hueToRgb(p, q, hue + 1 / 3) * 255,
    hueToRgb(p, q, hue) * 255,
    hueToRgb(p, q, hue - 1 / 3) * 255,
  ];
}

function transformExportPixels(imageData, finish) {
  if (finish === "gold") return imageData;
  const pixels = imageData.data;
  for (let index = 0; index < pixels.length; index += 4) {
    if (pixels[index + 3] === 0) continue;
    let red = pixels[index];
    let green = pixels[index + 1];
    let blue = pixels[index + 2];
    let [hue, saturation, lightness] = rgbToHsl(red, green, blue);
    if (finish === "rose") {
      hue = (hue + 307 / 360) % 1;
      saturation = Math.min(1, saturation * 1.08);
      lightness = Math.min(1, lightness * 1.02);
      [red, green, blue] = hslToRgb(hue, saturation, lightness);
    } else if (finish === "chrome") {
      const luminance = red * 0.2126 + green * 0.7152 + blue * 0.0722;
      red = red * 0.12 + luminance * 0.88;
      green = green * 0.12 + luminance * 0.88;
      blue = blue * 0.12 + luminance * 0.88;
      [hue, saturation, lightness] = rgbToHsl(red, green, blue);
      [red, green, blue] = hslToRgb(hue, saturation * 0.5, lightness * 1.12);
      red = (red - 128) * 0.94 + 128;
      green = (green - 128) * 0.94 + 128;
      blue = (blue - 128) * 0.94 + 128;
    }
    pixels[index] = clamp(red);
    pixels[index + 1] = clamp(green);
    pixels[index + 2] = clamp(blue);
  }
  return imageData;
}

function getExportImage(size) {
  const finish = locket.dataset.finish || "gold";
  if (exportImageCache && exportCacheFinish === finish) return exportImageCache;
  const imageCanvas = document.createElement("canvas");
  imageCanvas.width = size;
  imageCanvas.height = size;
  const imageContext = imageCanvas.getContext("2d");
  imageContext.drawImage(frontImage, 0, 0, size, size);
  if (finish !== "gold") {
    const pixels = imageContext.getImageData(0, 0, size, size);
    imageContext.putImageData(transformExportPixels(pixels, finish), 0, 0);
  }
  exportImageCache = imageCanvas;
  exportCacheFinish = finish;
  return imageCanvas;
}

function drawExportFrame(context, canvas, offsetY = 0, time = 0) {
  const width = canvas.width;
  const height = canvas.height;
  context.clearRect(0, 0, width, height);
  context.fillStyle = "#fff0f7";
  context.fillRect(0, 0, width, height);

  const centerX = width / 2;
  const charmSize = Math.min(width * 0.76, 700);
  const charmX = centerX - charmSize / 2;
  const charmY = (height - charmSize) / 2 + offsetY;

  context.save();
  const shadowY = charmY + charmSize * 0.94;
  const shadowGradient = context.createRadialGradient(
    centerX,
    shadowY,
    0,
    centerX,
    shadowY,
    charmSize * 0.34,
  );
  shadowGradient.addColorStop(0, "rgba(141, 75, 113, 0.10)");
  shadowGradient.addColorStop(0.48, "rgba(141, 75, 113, 0.045)");
  shadowGradient.addColorStop(1, "rgba(141, 75, 113, 0)");
  context.fillStyle = shadowGradient;
  context.beginPath();
  context.ellipse(centerX, shadowY, charmSize * 0.27, 18, 0, 0, Math.PI * 2);
  context.fill();
  context.restore();

  context.drawImage(getExportImage(charmSize), charmX, charmY, charmSize, charmSize);

  const lines = engravingLines();
  context.save();
  context.textAlign = "center";
  context.textBaseline = "middle";
  const previewLocketSize = locket.getBoundingClientRect().width || 510;
  const previewFontSize = parseFloat(getComputedStyle(frontEngraving).fontSize) || 52;
  const exportFontSize = Math.round(previewFontSize * (charmSize / previewLocketSize));
  context.font = `${exportFontSize}px "Parisienne", cursive`;
  context.fillStyle = "#5a301c";
  context.shadowColor = "rgba(255, 246, 196, 0.88)";
  context.shadowBlur = 0;
  context.shadowOffsetY = 1;
  const lineHeight = Math.round(exportFontSize * 0.92);
  const textY = charmY + charmSize * 0.55 - ((lines.length - 1) * lineHeight) / 2;
  lines.forEach((line, index) => context.fillText(line, centerX, textY + index * lineHeight));
  context.restore();
}

function saveBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

async function downloadPicture() {
  downloadImageButton.disabled = true;
  setDownloadStatus("making your picture...");
  try {
    await prepareExport();
    const canvas = document.createElement("canvas");
    canvas.width = EXPORT_SIZE;
    canvas.height = EXPORT_SIZE;
    drawExportFrame(canvas.getContext("2d"), canvas);
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
    saveBlob(blob, "my-heart-locket.png");
    setDownloadStatus("saved your picture ♡");
  } catch (error) {
    setDownloadStatus("picture download was not available");
  } finally {
    downloadImageButton.disabled = false;
  }
}

async function downloadVideo() {
  if (!window.MediaRecorder || !HTMLCanvasElement.prototype.captureStream) {
    setDownloadStatus("video download is not supported in this browser");
    return;
  }
  downloadVideoButton.disabled = true;
  setDownloadStatus("making your video...");
  try {
    await prepareExport();
    const canvas = document.createElement("canvas");
    canvas.width = EXPORT_SIZE;
    canvas.height = EXPORT_SIZE;
    const context = canvas.getContext("2d");
    const stream = canvas.captureStream(30);
    const mimeTypes = [
      "video/mp4;codecs=avc1.42E01E,mp4a.40.2",
      "video/webm;codecs=vp9",
      "video/webm",
    ];
    const mimeType = mimeTypes.find((type) => MediaRecorder.isTypeSupported(type));
    if (!mimeType) throw new Error("No supported video format");
    const recorder = new MediaRecorder(stream, { mimeType });
    const chunks = [];
    recorder.ondataavailable = (event) => event.data.size && chunks.push(event.data);
    const finished = new Promise((resolve) => {
      recorder.onstop = () => resolve(new Blob(chunks, { type: mimeType }));
    });
    const duration = 3600;
    const started = performance.now();
    recorder.start();
    const render = (now) => {
      const elapsed = now - started;
      const progress = Math.min(elapsed / duration, 1);
      drawExportFrame(context, canvas, Math.sin(progress * Math.PI * 2) * -18, elapsed);
      if (progress < 1) requestAnimationFrame(render);
      else recorder.stop();
    };
    requestAnimationFrame(render);
    const blob = await finished;
    const extension = mimeType.startsWith("video/mp4") ? "mp4" : "webm";
    saveBlob(blob, `my-heart-locket.${extension}`);
    setDownloadStatus("saved your video ♡");
  } catch (error) {
    setDownloadStatus("video download was not available");
  } finally {
    downloadVideoButton.disabled = false;
  }
}

function updateEngraving() {
  const value = locketText.value.trim() || " ";
  frontEngraving.replaceChildren();
  [...value].forEach((character, index) => {
    if (index > 0 && index % 8 === 0) {
      frontEngraving.append(document.createElement("br"));
    }
    frontEngraving.append(document.createTextNode(character));
  });
  charCount.textContent = locketText.value.length + "/16";
}

locketText.addEventListener("input", updateEngraving);
downloadImageButton.addEventListener("click", downloadPicture);
downloadVideoButton.addEventListener("click", downloadVideo);

flipButton.addEventListener("click", () => {
  const showingBack = locket.classList.toggle("is-back");
  flipButton.setAttribute("aria-pressed", String(showingBack));
  flipButton.lastChild.textContent = showingBack ? " show front" : " show back";
});

finishButtons.forEach((button) => {
  button.addEventListener("click", () => {
    finishButtons.forEach((option) => {
      const active = option === button;
      option.classList.toggle("is-active", active);
      option.setAttribute("aria-pressed", String(active));
    });
    locket.dataset.finish = button.dataset.finish;
    exportImageCache = null;
    exportCacheFinish = "";
  });
});

updateEngraving();
