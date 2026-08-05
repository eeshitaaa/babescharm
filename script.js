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
    await document.fonts.load('52px "Parisienne"');
  }
  if (!frontImage.complete || !frontImage.naturalWidth) {
    await frontImage.decode();
  }
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
  context.fillStyle = "rgba(141, 75, 113, 0.16)";
  context.filter = "blur(18px)";
  context.beginPath();
  context.ellipse(centerX, charmY + charmSize * 0.94, charmSize * 0.27, 18, 0, 0, Math.PI * 2);
  context.fill();
  context.restore();

  context.save();
  context.filter = getComputedStyle(frontImage).filter || "none";
  context.drawImage(frontImage, charmX, charmY, charmSize, charmSize);
  context.restore();

  const lines = engravingLines();
  context.save();
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.font = '52px "Parisienne", cursive';
  context.fillStyle = "#5a301c";
  context.shadowColor = "rgba(255, 246, 196, 0.88)";
  context.shadowBlur = 0;
  context.shadowOffsetY = 1;
  const lineHeight = 48;
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
    const mimeType = MediaRecorder.isTypeSupported("video/webm;codecs=vp9")
      ? "video/webm;codecs=vp9"
      : "video/webm";
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
    saveBlob(blob, "my-heart-locket.webm");
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
  });
});

updateEngraving();
