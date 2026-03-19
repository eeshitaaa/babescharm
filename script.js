const STORAGE_KEY = "solana-marketer-os-progress-v1";

const sources = [
  {
    title: "Solana Network Upgrades",
    url: "https://solana.com/news/solana-network-upgrades",
    note:
      "Official roadmap page used for Vote Account V4, XDP, and protocol-level block revenue distribution context.",
  },
  {
    title: "Solana Ecosystem Report: February 2026",
    url: "https://solana.com/news/state-of-solana-february-2026",
    note:
      "Used for current institutional adoption, payments, TVL, DEX flow, and liquid staking product context.",
  },
  {
    title: "Actions and Blinks",
    url: "https://solana.com/developers/guides/advanced/actions",
    note:
      "Used for transaction-native distribution, Actions identity, and Blink-based growth surface design.",
  },
  {
    title: "Token Extensions",
    url: "https://solana.com/docs/tokens/extensions",
    note:
      "Used for Token Extensions, metadata, transfer fees, interest-bearing tokens, pausable mints, and confidential transfer concepts.",
  },
  {
    title: "What is Staking?",
    url: "https://solana.com/learn/what-is-staking",
    note:
      "Used for native staking, liquid staking, validator selection, reward cadence, and core user education language.",
  },
  {
    title: "Post Mortem: ZK ElGamal Proof Program Bug, June 2025",
    url: "https://solana.com/news/post-mortem-june-25-2025",
    note:
      "Used for security coordination, confidential transfer risk framing, and protocol upgrade response lessons.",
  },
  {
    title: "Firedancer Documentation",
    url: "https://docs.firedancer.io/",
    note:
      "Used for validator-client diversity context in the current-state resilience section.",
  },
];

const course = [
  {
    week: 1,
    slug: "market-map",
    theme: "Solana market map",
    track: "foundation",
    outcome:
      "Build the base mental model: what Solana is, why marketers care, and how product, liquidity, and culture connect.",
    days: [
      lesson(
        1,
        "Why Solana wins attention cycles",
        "Map the chain as a market, not just a protocol.",
        "A senior marketer must understand why users, builders, and capital choose Solana in different market regimes.",
        [
          "Know the main narratives: speed, low fees, consumer UX, composability, and capital efficiency.",
          "Separate chain-level story from app-level story. Good marketers do not let ecosystem hype hide weak product positioning.",
          "Track the demand stack: retail trading, stablecoin payments, NFT/consumer experiments, memecoin velocity, and institutional settlement.",
          "Understand that Solana marketing often compresses product and ecosystem marketing into one motion. That creates leverage and confusion at the same time.",
        ],
        "Write a 250-word brief explaining Solana to three audiences: a retail trader, a startup founder, and a CFO exploring stablecoin settlement.",
        "If you can explain the same chain differently without losing precision, you are operating like a strategist instead of a content intern.",
        quiz([
          q(
            "Which framing is strongest for a senior Solana marketer?",
            [
              "Only talk about TPS because infrastructure metrics sell themselves",
              "Tie chain strengths to specific user jobs and product categories",
              "Focus on price action because products are secondary",
            ],
            1,
            "Infrastructure metrics matter only when connected to concrete user outcomes."
          ),
          q(
            "What makes Solana ecosystem marketing unusually compressed?",
            [
              "It has no app layer",
              "Chain narrative and product narrative often move together",
              "Only institutional users matter",
            ],
            1,
            "On Solana, product launches often reinforce chain-level positioning."
          ),
        ])
      ),
      lesson(
        2,
        "Architecture for non-engineers",
        "Learn just enough technical structure to market honestly.",
        "You need technical compression skill: enough depth to avoid errors, not enough jargon to lose the room.",
        [
          "Solana uses an account model. Data lives in accounts, and programs operate on those accounts.",
          "Transactions package multiple instructions, which is why composability can feel fast and product-like.",
          "Parallel execution matters for product storytelling because it supports throughput for many independent state changes.",
          "Consensus, execution, networking, and RPC are separate concepts. Mixing them creates sloppy marketing claims.",
        ],
        "Create a one-slide visual that explains accounts, programs, transactions, and RPC in plain English for a non-technical growth team.",
        "The standard is clarity without lying. Avoid saying 'database' or 'server' if the comparison breaks the model.",
        quiz([
          q(
            "What is the best plain-English description of a Solana program?",
            ["A wallet", "Onchain logic that reads and writes accounts", "A validator reward pool"],
            1,
            "Programs are the executable logic layer."
          ),
          q(
            "Why should marketers separate RPC from the chain itself?",
            [
              "Because RPC only matters to validators",
              "Because app performance issues can come from infrastructure access, not protocol failure",
              "Because RPC is unrelated to user experience",
            ],
            1,
            "A bad RPC experience can feel like chain failure to users, so the distinction matters."
          ),
        ])
      ),
      lesson(
        3,
        "Fees, latency, and finality",
        "Understand the user-facing performance terms you will keep repeating in campaigns.",
        "Speed claims become credibility traps if you cannot explain what is actually fast and when it breaks.",
        [
          "Differentiate transaction submission, confirmation, and finality in user messaging.",
          "Low base fees do not remove the need to discuss priority fees during congestion.",
          "Marketers should know when to promise cheap execution versus predictable execution.",
          "Good UX copy explains pending, failed, retried, and expired states without making the chain sound broken.",
        ],
        "Audit three Solana apps you know. Screenshot their transaction state messaging and rewrite each message to be clearer and more trustworthy.",
        "A good marketer reduces support tickets by writing transaction language better than the average wallet does.",
        quiz([
          q(
            "Why is 'near-instant' a safer claim than 'instant'?",
            [
              "Because every transaction has the same latency",
              "Because user-perceived completion depends on signing, propagation, confirmation, and app handling",
              "Because low fees cause delays",
            ],
            1,
            "The full transaction lifecycle includes more than protocol inclusion."
          ),
          q(
            "Which issue should still be discussed during high demand periods?",
            ["Priority fees", "DNS records", "Email deliverability"],
            0,
            "Priority fees directly affect user expectations during congestion."
          ),
        ])
      ),
      lesson(
        4,
        "The ecosystem stack",
        "Learn the categories that shape the Solana buyer journey.",
        "A senior marketer should see how wallets, infra, DeFi, consumer apps, and payments reinforce each other.",
        [
          "Core buckets: wallets, validators, RPC/infra, DEXs, lending, perps, staking, stablecoins, NFTs, payments, consumer apps, data tools.",
          "Map where discovery happens versus where value is captured. These are often not the same app.",
          "Understand aggregator power. Routing layers often own mindshare even when liquidity sits elsewhere.",
          "The strongest ecosystem campaigns show category connectivity, not isolated feature drops.",
        ],
        "Build a one-page ecosystem map with 10 categories and note which layer most influences acquisition, activation, retention, and liquidity.",
        "You should be able to explain where a new protocol sits and who really owns the user relationship.",
        quiz([
          q(
            "Why do aggregators matter in Solana marketing?",
            [
              "They often control user discovery and execution flow",
              "They replace validators",
              "They remove the need for tokenomics",
            ],
            0,
            "Users often remember the interface that routed the trade, not the venue that held liquidity."
          ),
          q(
            "What is a weak ecosystem map?",
            [
              "One that separates infrastructure from apps",
              "One that ignores where attention is captured and where value settles",
              "One that includes wallets",
            ],
            1,
            "Strategic mapping needs both traffic and monetization layers."
          ),
        ])
      ),
      lesson(
        5,
        "Wallet UX and trust",
        "Treat wallet flows as conversion funnels.",
        "Most marketers underweight wallet friction even though it directly controls activation and retention.",
        [
          "Wallet creation, funding, signing, and permissions are acquisition bottlenecks.",
          "Every signature request is a trust event. Reduce ambiguity and explain why the user is signing.",
          "State changes should be previewed in user language: spend, stake, swap, lock, delegate, withdraw.",
          "Security education is part of growth. Unsafe growth loops eventually become reputation debt.",
        ],
        "Review one wallet onboarding flow and one in-app signature flow. Write a conversion memo with 5 friction points and 5 copy fixes.",
        "Senior operators treat UX friction and safety warnings as performance marketing variables.",
        quiz([
          q(
            "What is a signature request in marketing terms?",
            ["A billing event", "A trust and conversion moment", "A validator vote"],
            1,
            "Every signature affects confidence and drop-off."
          ),
          q(
            "Which copy is strongest?",
            [
              "Approve transaction",
              "Sign this message",
              "Swap 25 USDC for SOL. Network fee estimated below.",
            ],
            2,
            "Specific state-change language reduces fear and confusion."
          ),
        ])
      ),
      lesson(
        6,
        "Research discipline",
        "Build a repeatable system for staying current without drowning in noise.",
        "You cannot market well in crypto if your inputs are only CT vibes and team Telegram messages.",
        [
          "Use a source ladder: official docs, protocol dashboards, product UI, block explorers, analytics platforms, then social commentary.",
          "Separate primary facts from market interpretation.",
          "Always note the date for metrics, launches, outages, and governance changes.",
          "For product launches, capture: user problem, onchain mechanic, monetization, risk, and market timing.",
        ],
        "Create a repeatable research template with fields for product thesis, metrics, risks, narrative hook, and evidence links.",
        "This is your operating system for the next 11 weeks.",
        quiz([
          q(
            "What should be highest in your source ladder?",
            ["Official docs and protocol disclosures", "Influencer threads", "Rumor channels"],
            0,
            "Primary sources reduce error and narrative drift."
          ),
          q(
            "Why should you always attach dates to crypto metrics?",
            [
              "Because metrics are unstable and context changes fast",
              "Because dates look professional",
              "Because dashboards require it",
            ],
            0,
            "The same number can imply different things a week later."
          ),
        ])
      ),
      lesson(
        7,
        "Week 1 synthesis",
        "Convert the mental model into messaging discipline.",
        "This review day is where you stop memorizing and start synthesizing.",
        [
          "Rehearse how chain narrative, app narrative, and user narrative fit together.",
          "Check whether you can explain technical ideas without defaulting to jargon or memes.",
          "Identify the difference between a product advantage, a market trend, and an ecosystem-level tailwind.",
          "Practice writing with enough precision that an operator would not cringe reading it.",
        ],
        "Record a 3-minute voice note pitching Solana as a market to an investor or founder. Then rewrite it as a homepage hero, a thread hook, and a sales intro.",
        "If the framing survives three formats, it is probably coherent.",
        quiz([
          q(
            "Which statement shows synthesis instead of parroting?",
            [
              "Solana is fast",
              "Solana’s low-friction transaction environment changes what products can ask users to do repeatedly",
              "Solana has validators",
            ],
            1,
            "This connects infrastructure to product design."
          ),
          q(
            "What is the main goal of the weekly review day?",
            [
              "Add more jargon",
              "Turn facts into useful strategic language",
              "Skip assignments",
            ],
            1,
            "The weekly review should sharpen operating judgment."
          ),
        ])
      ),
    ],
  },
  {
    week: 2,
    slug: "token-design",
    theme: "Token design and cap tables",
    track: "foundation",
    outcome:
      "Understand supply, float, unlocks, token utility, and how token design translates into market perception and campaign strategy.",
    days: [
      lesson(
        1,
        "Token vocabulary that actually matters",
        "Get precise on max supply, total supply, circulating supply, float, FDV, and emission schedules.",
        "Most token marketing is damaged by imprecise supply language.",
        [
          "Max supply is not the same as current supply, and current supply is not the same as circulating supply.",
          "Float matters because tradable supply affects volatility, market depth, and how listings perform.",
          "FDV is a heuristic, not a verdict. Use it with unlock schedules and actual demand.",
          "Token stories must explain who owns supply, when it unlocks, and what demand is expected to absorb it.",
        ],
        "Pick three Solana tokens and write a supply snapshot: max supply, current float, unlock risks, and why the market might misread the token.",
        "You should be able to explain why a token can look cheap per coin but expensive in structure.",
        quiz([
          q(
            "What is circulating supply?",
            [
              "All tokens that will ever exist",
              "Tokens currently available to the market or otherwise in effective circulation",
              "Only tokens held by the team",
            ],
            1,
            "Circulating supply refers to tokens the market treats as live supply."
          ),
          q(
            "Why is FDV incomplete on its own?",
            [
              "Because it ignores future float timing and demand quality",
              "Because it only applies to Bitcoin",
              "Because market cap is always better",
            ],
            0,
            "FDV without unlock context can be misleading."
          ),
        ])
      ),
      lesson(
        2,
        "Emissions, vesting, and unlock psychology",
        "Learn how token supply schedules affect narrative windows and campaign timing.",
        "A launch calendar without unlock awareness is malpractice.",
        [
          "Vesting and cliff schedules create predictable narrative pressure points.",
          "Emissions can support growth if paired with retained utility and real usage, but they can also mask weak PMF.",
          "Smart marketers plan around unlock windows, not against them.",
          "Investor, team, foundation, treasury, ecosystem, and community buckets should each be explained differently.",
        ],
        "Build a mock 6-month comms calendar around a token with a large cliff unlock in month four. Include pre-emptive education and market expectation management.",
        "Great token comms reduce surprise, not just fear.",
        quiz([
          q(
            "What does a large cliff unlock usually require from marketing?",
            [
              "Silence so fewer people notice",
              "A proactive narrative around usage, treasury logic, and expected sell pressure",
              "A full rebrand",
            ],
            1,
            "Proactive framing is better than defensive scrambling."
          ),
          q(
            "Which bucket usually needs the most explanation to retail holders?",
            ["Investor/team/foundation unlock structures", "Decimals", "Logo colors"],
            0,
            "Ownership concentration and unlock timing matter directly to holders."
          ),
        ])
      ),
      lesson(
        3,
        "Token utility versus forced utility",
        "Identify whether a token’s role is organic, optional, or cosmetic.",
        "Senior marketers must tell the truth about what a token actually does.",
        [
          "Good utility usually ties to access, governance, payments, yield rights, fee rebates, collateral, or coordination.",
          "Forced utility is when teams bolt on token requirements without improving user outcomes.",
          "The right question is not 'does it have utility?' but 'does utility create durable demand and retention?'",
          "You should be able to explain when a product works without the token and whether that is a bug or a feature.",
        ],
        "Review one Solana token and classify each utility claim as core, optional, cosmetic, or extraction-heavy. Write a 200-word verdict.",
        "Credibility comes from being willing to say when a token is not yet economically essential.",
        quiz([
          q(
            "Which is the best test for token utility?",
            [
              "It appears on the homepage",
              "It changes behavior in a way users value and repeat",
              "It has a mascot",
            ],
            1,
            "Durable behavior change is stronger than symbolic positioning."
          ),
          q(
            "What is forced utility?",
            [
              "Utility aligned with user needs",
              "Token usage inserted mainly to manufacture demand",
              "Governance participation",
            ],
            1,
            "Forced utility often harms product adoption."
          ),
        ])
      ),
      lesson(
        4,
        "Token Program and Token Extensions",
        "Understand how token capabilities can become product features.",
        "On Solana, token mechanics can be part of product packaging, compliance, treasury design, and UX.",
        [
          "Solana has the original Token Program and the Token Extensions Program, often referred to as Token-2022.",
          "Extensions include features such as metadata, transfer fees, memo transfer, interest-bearing tokens, pausable mints, token groups, and confidential transfer support.",
          "Extensions must be planned at initialization because many cannot be added later.",
          "This changes GTM because token design choices can directly shape audience fit and business model.",
        ],
        "Draft two product concepts that rely on Token Extensions: one for a consumer rewards token and one for an enterprise/stablecoin-like product.",
        "Marketers who understand token capabilities can shape better product positioning much earlier.",
        quiz([
          q(
            "Why do Token Extensions matter to marketers?",
            [
              "They only affect validator hardware",
              "They can turn token mechanics into visible product and business-model features",
              "They replace wallets",
            ],
            1,
            "Extensions affect compliance, UX, pricing, and monetization stories."
          ),
          q(
            "What is an important planning constraint of many extensions?",
            [
              "They are only available on testnet",
              "Many must be chosen before account initialization",
              "They always reduce fees",
            ],
            1,
            "Extension planning is front-loaded."
          ),
        ])
      ),
      lesson(
        5,
        "Cap tables, treasuries, and runway messaging",
        "Translate token ownership structure into strategic communication.",
        "Markets care who owns supply, who controls treasury, and how incentives will be deployed.",
        [
          "Treasury is not automatically a bullish word. It needs a mandate, reporting logic, and capital policy.",
          "A good cap table narrative explains decentralization path, strategic holders, and operating runway.",
          "Treasury deployment must align with ecosystem goals: liquidity, grants, BD, security, or buybacks if applicable.",
          "Do not overstate decentralization if voting power or supply concentration says otherwise.",
        ],
        "Write a sample investor FAQ for a protocol treasury. Cover governance rights, spending authority, runway, and token-holder concerns.",
        "If treasury language sounds vague, the market assumes misalignment.",
        quiz([
          q(
            "What does a strong treasury narrative include?",
            [
              "Only the wallet address",
              "Mandate, deployment logic, and accountability",
              "A single chart without commentary",
            ],
            1,
            "Treasury communication should explain use and control, not just size."
          ),
          q(
            "What should marketers avoid claiming?",
            [
              "Decentralization that the ownership and governance data do not support",
              "A clear runway estimate",
              "Supply transparency",
            ],
            0,
            "Nothing destroys trust faster than provably false decentralization claims."
          ),
        ])
      ),
      lesson(
        6,
        "Launches, meme assets, and ethical hype",
        "Understand launch energy without becoming reckless.",
        "Solana culture rewards speed and creativity, but bad launch hygiene compounds fast.",
        [
          "Meme launches, fair launches, and incentive-heavy launches each create different expectation structures.",
          "Liquidity conditions, wallet support, routing visibility, and social proof matter more than generic awareness.",
          "Memecoin dynamics can teach distribution, but they should not become your only marketing framework.",
          "Senior marketers know where hype helps discovery and where it starts manufacturing liabilities.",
        ],
        "Pick a recent token launch archetype and write a post-mortem: what drove attention, what sustained it, and what would have made it more durable.",
        "The assignment is not to moralize. It is to build judgment.",
        quiz([
          q(
            "What is the main risk of importing memecoin tactics into every product launch?",
            [
              "Too much documentation",
              "Attention may outrun product reality and create fast trust decay",
              "It increases uptime",
            ],
            1,
            "Memecoin velocity can become a liability for infrastructure or fintech-style products."
          ),
          q(
            "Which factor often matters most in the first hours of a launch?",
            [
              "Routing/liquidity visibility and social proof",
              "A 50-page whitepaper",
              "Office location",
            ],
            0,
            "Discovery and execution pathways shape the opening window."
          ),
        ])
      ),
      lesson(
        7,
        "Week 2 synthesis",
        "Combine token design and market communication into one operator memo.",
        "If you cannot connect supply mechanics to narrative choices, your token marketing is incomplete.",
        [
          "Review how supply, float, utility, treasury, and launch shape market perception.",
          "Practice explaining token structure in public language without dumbing it down past usefulness.",
          "Know when to frame a token as governance, access, collateral, yield-bearing, or loyalty-aligned.",
          "Never let visual branding outrun economic clarity.",
        ],
        "Write a one-page launch memo for a hypothetical Solana token covering supply, unlocks, utility, target audience, GTM, and key risk disclosures.",
        "This is the first assignment that should read like an internal operating document, not a school exercise.",
        quiz([
          q(
            "What should lead a serious token launch memo?",
            [
              "Mascot design",
              "Economic structure and target user behavior",
              "Follower count",
            ],
            1,
            "Economic logic comes before stylistic wrapping."
          ),
          q(
            "What is the clearest signal of weak token marketing?",
            [
              "High precision about supply",
              "Narrative that ignores unlocks and real demand",
              "Audience segmentation",
            ],
            1,
            "Ignoring structural reality is the fastest way to lose credibility."
          ),
        ])
      ),
    ],
  },
  {
    week: 3,
    slug: "staking",
    theme: "Staking and validator economics",
    track: "defi",
    outcome:
      "Explain native staking, liquid staking, validator economics, commissions, MEV flow, and how these ideas impact positioning.",
    days: [
      lesson(
        1,
        "How staking really works",
        "Learn the native staking model well enough to teach it and compare it against liquid staking.",
        "Staking is a core Solana behavior. If you market DeFi or treasury products, you need fluency here.",
        [
          "Users delegate SOL to validators; they do not usually hand custody to the validator in the native model.",
          "Rewards are tied to network inflation and validator performance, with epoch-based accrual.",
          "Solana’s public educational material currently describes rewards around roughly 5-7% annualized, though actual realized yield varies.",
          "The user cares about yield, lockup, safety, and flexibility. Your messaging must answer all four.",
        ],
        "Write beginner-friendly staking copy for a wallet app. Then write a more advanced version for a treasury manager.",
        "The vocabulary should change, but the facts should not.",
        quiz([
          q(
            "In native staking, what does the user mainly grant a validator?",
            ["Full custody of funds", "Delegated stake weight", "A market making license"],
            1,
            "Native staking delegates voting power/stake participation rather than ordinary custody transfer."
          ),
          q(
            "What cadence do Solana educational materials use for rewards?",
            ["Hourly", "Per epoch, roughly every 2-3 days", "Only annually"],
            1,
            "Reward accrual is commonly described on an epoch schedule."
          ),
        ])
      ),
      lesson(
        2,
        "Choosing validators and reading commissions",
        "Understand the validator selection factors users should care about.",
        "Validator selection is partly a product issue and partly a trust-marketing issue.",
        [
          "Key user-facing factors: uptime, commission, stake concentration, reputation, performance, and decentralization impact.",
          "A higher commission is not automatically worse if the validator contributes meaningful service or decentralization value.",
          "Wallet UIs strongly influence validator flow. Defaults become hidden marketing decisions.",
          "Senior marketers should know how validator distribution affects ecosystem resilience narratives.",
        ],
        "Create a validator comparison table for a wallet UI. Include five metrics and write one sentence explaining each metric in plain English.",
        "Good staking UX teaches users to evaluate tradeoffs instead of blindly chasing headline APY.",
        quiz([
          q(
            "Which factor is NOT enough on its own when choosing a validator?",
            ["Commission rate", "Historical uptime", "Stake concentration"],
            0,
            "Users need a multi-factor view, not a single metric."
          ),
          q(
            "Why do wallet defaults matter in staking?",
            [
              "They shape user delegation flow and ecosystem stake concentration",
              "They change max supply",
              "They remove reward variability",
            ],
            0,
            "Default UX can materially influence decentralization."
          ),
        ])
      ),
      lesson(
        3,
        "Liquid staking and liquid staking tokens",
        "Learn the user value and protocol risk of staking derivatives.",
        "Liquid staking is one of the easiest places for marketers to oversimplify risk.",
        [
          "Liquid staking gives users a tokenized claim on staked SOL that can be used in DeFi.",
          "The pitch is flexibility and capital efficiency; the tradeoff includes smart contract, depeg, and protocol-specific risks.",
          "Liquid staking tokens can stack yield narratives, but marketers need to separate base staking rewards from additional incentives or MEV-linked components.",
          "Institutional wrappers can package liquid staking for new audiences without removing underlying complexity.",
        ],
        "Write a comparison page between native staking and liquid staking with a risk matrix: liquidity, smart-contract exposure, yield source, and exit behavior.",
        "Do not hide the tradeoffs in fine print.",
        quiz([
          q(
            "What is the main value proposition of liquid staking?",
            [
              "No risk",
              "Liquidity and capital efficiency while staying staked",
              "Guaranteed higher rewards",
            ],
            1,
            "The main benefit is flexibility, not guaranteed superior yield."
          ),
          q(
            "What should marketers separate clearly in liquid staking messaging?",
            [
              "Base staking rewards versus extra yield sources",
              "Logo versus color palette",
              "Validator names versus wallet names",
            ],
            0,
            "Yield stacking can mislead if all sources are blended together."
          ),
        ])
      ),
      lesson(
        4,
        "MEV, Jito, and yield narratives",
        "Understand where extra staking-linked yield can come from and how to describe it responsibly.",
        "MEV-linked yield creates a strong hook but also needs cleaner explanation than most landing pages currently provide.",
        [
          "Validators may earn block revenue from fees, priority fees, and MEV when producing blocks.",
          "Solana’s official upgrades page notes work underway for block revenue distribution to delegators at the protocol level.",
          "Some liquid staking products already market a dual-yield story that includes staking rewards and redistributed block tips.",
          "The marketer’s job is to explain the source of yield, the dependency stack, and the risks if routing or validator dynamics shift.",
        ],
        "Draft a yield explainer for a liquid staking product. Include a one-line summary, a detailed source-of-yield section, and a risks box.",
        "Users should know whether they are buying stake yield, protocol emissions, MEV distribution, or a blend.",
        quiz([
          q(
            "What new protocol-level direction is highlighted on the Solana upgrades page?",
            [
              "Removing all validator commissions",
              "Automatic block revenue distribution to delegators",
              "Eliminating staking rewards",
            ],
            1,
            "The roadmap highlights distribution of block revenue to delegators."
          ),
          q(
            "Why is a 'dual yield' message risky if written poorly?",
            [
              "It can blur distinct revenue sources into one implied guarantee",
              "It is too technical to mention",
              "It only matters for NFTs",
            ],
            0,
            "Yield source clarity is essential for trust."
          ),
        ])
      ),
      lesson(
        5,
        "Institutional staking",
        "Learn how staking is packaged for treasuries, funds, and conservative operators.",
        "Institutional marketing is mostly about operational confidence, reporting, and risk language.",
        [
          "Institutions care about custody, reporting, liquidity, approval workflows, and counterparty exposure.",
          "A staking product for institutions must sound less like speculation and more like treasury infrastructure.",
          "Packaging matters: APIs, reporting, auditability, and policy alignment are often stronger hooks than APY.",
          "Avoid retail-native language when talking to finance teams. 'Yield' is rarely enough without operational detail.",
        ],
        "Write a B2B landing page section for an institutional staking or treasury product on Solana. Lead with workflow benefits, not hype.",
        "Good B2B crypto marketing sounds like infrastructure with upside, not casino copy with logos.",
        quiz([
          q(
            "What usually matters more to institutional buyers than slogan-driven APY talk?",
            [
              "Operational controls and reporting",
              "Meme velocity",
              "Mascot-led branding",
            ],
            0,
            "Institutional buyers optimize for process integrity."
          ),
          q(
            "How should institutional staking usually be framed?",
            [
              "As treasury infrastructure and controlled yield exposure",
              "As a moonshot",
              "As pure community engagement",
            ],
            0,
            "The strongest framing is operational and risk-aware."
          ),
        ])
      ),
      lesson(
        6,
        "Staking objections and FAQ strategy",
        "Prepare for the questions users and partners will actually ask.",
        "The best staking pages are built around objections, not around self-congratulation.",
        [
          "Common user questions: Can I lose principal? How long to unstake? Who holds funds? What if the validator performs badly?",
          "Common partner questions: What are fees? What are the dependencies? How is yield generated? How are risks disclosed?",
          "Good FAQ design lowers support load and improves trust conversion.",
          "If the answer is nuanced, do not flatten it into a false promise.",
        ],
        "Write 10 staking FAQs with concise answers for a product page. Then rewrite 3 of them for a regulated-finance audience.",
        "This is conversion copy with real financial consequences, so treat it carefully.",
        quiz([
          q(
            "What should a staking FAQ prioritize?",
            [
              "Tension points that block trust and action",
              "Abstract mission statements",
              "Internal team culture",
            ],
            0,
            "FAQs should answer decision-blocking questions."
          ),
          q(
            "What is the risk of flattening a nuanced staking answer?",
            [
              "You may create misleading expectations",
              "You may sound too academic",
              "You will reduce site speed",
            ],
            0,
            "Over-simplification can become a trust and compliance problem."
          ),
        ])
      ),
      lesson(
        7,
        "Week 3 synthesis",
        "Turn staking knowledge into a positioning framework.",
        "By now, you should be able to market staking products without confusing native, liquid, and yield-enhanced variants.",
        [
          "Rehearse staking as a security model, a user behavior, a product feature, and a treasury instrument.",
          "Know how validator economics affects the product layer.",
          "Keep yield source attribution clear in all materials.",
          "Understand where staking narrative overlaps with DeFi narrative and where it should stay separate.",
        ],
        "Create a competitor matrix comparing three staking-related products on target audience, value prop, risk, yield source, and strongest marketing angle.",
        "This is the point where your language should start sounding commercially useful.",
        quiz([
          q(
            "What is the strongest sign you understand staking product positioning?",
            [
              "You use APY in every headline",
              "You can distinguish security model, liquidity profile, and yield source by product",
              "You avoid technical terms entirely",
            ],
            1,
            "Product clarity requires distinguishing the layers."
          ),
          q(
            "When does staking narrative overlap with DeFi narrative?",
            [
              "When staked assets are reused in financial strategies",
              "Only during outages",
              "Never",
            ],
            0,
            "Liquid staking and related products bridge the two."
          ),
        ])
      ),
    ],
  },
  {
    week: 4,
    slug: "defi-primitives",
    theme: "DeFi primitives",
    track: "defi",
    outcome:
      "Gain real working understanding of AMMs, pools, CLMMs, orderbooks, lending, liquidation, oracles, and yield sources.",
    days: [
      lesson(
        1,
        "AMMs and liquidity pools",
        "Understand what a pool is and how it creates a market.",
        "If you cannot explain a pool clearly, you cannot market most DeFi products on Solana.",
        [
          "AMMs price assets through formulas and inventory rather than relying only on traditional orderbook matching.",
          "Liquidity providers deposit assets into pools and earn fees or incentives.",
          "Marketing should explain what the LP is providing, how fees are earned, and what risks exist.",
          "Volume alone is not enough; fee quality and retention quality matter.",
        ],
        "Write a plain-English explainer: 'What is a pool?' Use one retail version and one version for an institutional market maker.",
        "If your pool explainer sounds mystical, rewrite it.",
        quiz([
          q(
            "What does a liquidity pool primarily provide?",
            [
              "A validator commission schedule",
              "An inventory base for trading and price discovery",
              "A governance vote",
            ],
            1,
            "Pools provide assets that trading systems can route against."
          ),
          q(
            "What should LP marketing include besides fees?",
            ["Risk and capital behavior", "Only APR", "Only TVL"],
            0,
            "Fees without risk framing is incomplete."
          ),
        ])
      ),
      lesson(
        2,
        "Concentrated liquidity and range management",
        "Learn why CLMMs change the LP story.",
        "Concentrated liquidity is a product behavior, not just a technical optimization.",
        [
          "CLMMs let LPs provide liquidity within chosen price ranges.",
          "This can improve capital efficiency but adds management complexity and exposure to being out of range.",
          "Your messaging should make clear who the product is for: passive LPs, active LPs, or vault users.",
          "Products wrapping CLMM complexity into vault strategies are really selling operational simplification.",
        ],
        "Create a landing-page comparison between a standard AMM LP and a CLMM/vault LP strategy. Include user-fit guidance.",
        "The best CLMM copy is honest about the need for management or automation.",
        quiz([
          q(
            "What is the main tradeoff of concentrated liquidity?",
            [
              "Lower capital efficiency",
              "Higher efficiency with more management complexity",
              "No trading activity",
            ],
            1,
            "Concentrated liquidity improves efficiency but raises operational demands."
          ),
          q(
            "What are CLMM vault products often selling?",
            [
              "Just branding",
              "Simplification of active range management",
              "Validator hardware",
            ],
            1,
            "Vaults often abstract away the operational layer."
          ),
        ])
      ),
      lesson(
        3,
        "Orderbooks, RFQ, and aggregators",
        "Learn the alternate execution models users may not notice but marketers must understand.",
        "Execution quality is part of product value, even when users only see a swap button.",
        [
          "Some products use orderbooks, some AMMs, some RFQ systems, and many route across multiple venues.",
          "Aggregators can optimize for price, depth, route reliability, and wallet UX.",
          "Marketers should understand when best execution is a feature versus when it is just table stakes.",
          "Attribution gets tricky when the front-end brand, router, and liquidity venue are all different entities.",
        ],
        "Map one swap journey from wallet click to final execution. Identify who owns demand, route logic, liquidity, and support risk.",
        "This assignment trains you to see hidden product layers.",
        quiz([
          q(
            "Why do aggregators matter beyond convenience?",
            [
              "They can materially affect execution quality and user trust",
              "They issue more tokens",
              "They remove slippage entirely",
            ],
            0,
            "Routing quality changes user outcome."
          ),
          q(
            "What makes attribution tricky in swap products?",
            [
              "Multiple brands may participate in one execution path",
              "Transactions are private",
              "AMMs do not use wallets",
            ],
            0,
            "Demand capture and execution venue are often different."
          ),
        ])
      ),
      lesson(
        4,
        "Lending, borrowing, and collateral",
        "Understand utilization, collateral factors, and liquidation risk well enough to market them responsibly.",
        "Lending products are easy to oversell if you only talk APY and ignore the balance-sheet logic.",
        [
          "Supply APY comes from borrower demand, protocol incentives, or both.",
          "Borrowing power depends on collateral quality, loan-to-value settings, and risk engine design.",
          "Liquidation is not a bug; it is a risk-management mechanism users need to understand before borrowing.",
          "The strongest messaging frames lending as capital utility with explicit constraints.",
        ],
        "Write a user education module for a lending app covering deposit yield, borrowing, utilization, and liquidation risk.",
        "Your copy should lower reckless borrowing, not encourage it.",
        quiz([
          q(
            "What is a common source of deposit APY in lending protocols?",
            [
              "Borrower demand and sometimes incentives",
              "Validator voting alone",
              "NFT royalties",
            ],
            0,
            "Deposit yield depends on the protocol’s borrow side and incentive layer."
          ),
          q(
            "How should liquidation be framed?",
            [
              "As a random punishment",
              "As a core risk-management mechanism",
              "As a growth campaign",
            ],
            1,
            "Liquidation protects protocol solvency."
          ),
        ])
      ),
      lesson(
        5,
        "Perps, leverage, and funding rates",
        "Understand the core mechanics behind perpetual futures products.",
        "Perps are a major attention engine in crypto and a major source of misunderstood risk.",
        [
          "Perpetuals let traders take leveraged directional exposure without expiry dates.",
          "Funding rates help keep perp prices aligned with spot markets.",
          "Open interest, funding, liquidation levels, and insurance funds are key marketing literacy terms.",
          "A serious marketer should avoid glamorizing leverage while still explaining why active traders care.",
        ],
        "Build a glossary for a perp exchange with definitions for leverage, maintenance margin, funding, open interest, and liquidation.",
        "You are writing for users who may lose money if your language is vague.",
        quiz([
          q(
            "What is funding in perps primarily used for?",
            [
              "Keeping perpetual prices aligned with spot incentives",
              "Paying validators",
              "Minting governance tokens",
            ],
            0,
            "Funding helps anchor perp markets."
          ),
          q(
            "What should perp marketing avoid?",
            [
              "Over-glamorizing leverage and hiding risk",
              "Explaining margin",
              "Showing how liquidation works",
            ],
            0,
            "Risk disclosure is essential in leveraged products."
          ),
        ])
      ),
      lesson(
        6,
        "Oracles and why data quality is marketing-relevant",
        "Learn how external pricing data influences the trustworthiness of financial products.",
        "Marketers often ignore oracles until a bad market event exposes them.",
        [
          "Lending, perps, and many structured products depend on accurate and timely price feeds.",
          "Oracle design affects liquidation reliability, pricing integrity, and user trust.",
          "In communications, treat oracle reliability as part of product risk infrastructure.",
          "Users do not need every implementation detail, but they do need to know how the product stays fair under stress.",
        ],
        "Write a product trust section explaining how a DeFi app manages market data quality and bad-price-event risk.",
        "Trust pages should not read like legal filler.",
        quiz([
          q(
            "Why are oracles marketing-relevant?",
            [
              "They affect user outcomes in key financial workflows",
              "They choose token logos",
              "They replace protocol teams",
            ],
            0,
            "Price-feed quality becomes a user-trust issue during stress."
          ),
          q(
            "What should users understand about oracle handling?",
            [
              "How the product protects fairness under volatile conditions",
              "The full codebase",
              "Nothing at all",
            ],
            0,
            "A product should explain its safety logic in usable language."
          ),
        ])
      ),
      lesson(
        7,
        "Week 4 synthesis",
        "Combine all major DeFi primitives into one usable framework.",
        "This is where DeFi stops being a vocabulary list and becomes a market map.",
        [
          "Know the difference between earning fees, earning borrow yield, earning incentives, and taking directional risk.",
          "Be able to explain why users choose swaps, LPing, lending, or perps for different jobs.",
          "Treat every yield source as a business model question, not just a number.",
          "Start practicing category-based positioning language.",
        ],
        "Write a one-page DeFi primer for a non-crypto CMO who needs to understand what pools, lending, and perps do on Solana.",
        "If they can make decisions after reading it, you did it right.",
        quiz([
          q(
            "What is the best way to compare DeFi products?",
            [
              "By TVL only",
              "By user job, risk source, yield source, and liquidity behavior",
              "By mascot quality",
            ],
            1,
            "Category comparisons need behavior and risk, not just size."
          ),
          q(
            "What does this week’s synthesis aim to build?",
            [
              "A usable operator framework",
              "Only glossary memorization",
              "A validator client",
            ],
            0,
            "The point is practical commercial fluency."
          ),
        ])
      ),
    ],
  },
  {
    week: 5,
    slug: "defi-market-structure",
    theme: "DeFi market structure on Solana",
    track: "defi",
    outcome:
      "See how major Solana DeFi categories connect: routing, liquidity venues, lending, perps, stablecoins, and payments.",
    days: [
      lesson(
        1,
        "Routing and aggregation as product power",
        "Study why the router layer often owns the narrative.",
        "The user often remembers the route entrypoint, not the underlying venue.",
        [
          "Aggregators reduce search costs and collapse fragmented liquidity into a cleaner UX.",
          "Routing quality can become the core product moat for swappers and downstream partners.",
          "For marketers, this changes attribution and partnership strategy.",
          "The strongest positioning explains why routing is better, not just that it exists.",
        ],
        "Write a homepage value proposition for a routing product aimed at advanced traders versus retail swappers.",
        "Each segment should care about a different execution promise.",
        quiz([
          q(
            "Why do routers often capture outsized mindshare?",
            [
              "They are the user’s execution entrypoint",
              "They own every liquidity pool",
              "They eliminate counterparty risk",
            ],
            0,
            "The user relationship often starts at the routing layer."
          ),
          q(
            "What should routing positioning emphasize?",
            ["Execution quality and experience", "Only TVL", "Only branding"],
            0,
            "Route quality is the core value story."
          ),
        ])
      ),
      lesson(
        2,
        "DEXs, venues, and liquidity identity",
        "Learn how execution venues differentiate when users trade through front ends and aggregators.",
        "If you market a venue, you need to know what users and partners still credit you for.",
        [
          "Venues can differentiate through liquidity depth, specialized pairs, incentive design, LP tools, or partner integrations.",
          "Some venues are brands users visit directly; others win as invisible infrastructure.",
          "Liquidity mining is not positioning. It is a temporary input that may or may not create habit.",
          "Understand whether the venue is selling trader loyalty, LP tooling, integrator trust, or all three.",
        ],
        "Choose one venue-style product and write a differentiation memo: why should users or partners care if the router abstracts the venue away?",
        "This is a harder question than most product pages admit.",
        quiz([
          q(
            "When a router abstracts venues, what must the venue still justify?",
            [
              "Its unique value to users, LPs, or integrators",
              "Its office rent",
              "Its team bios only",
            ],
            0,
            "Hidden infrastructure still needs a real edge."
          ),
          q(
            "Why is liquidity mining alone weak positioning?",
            [
              "It can attract temporary mercenary activity without durable habit",
              "It is too technical",
              "It lowers TVL",
            ],
            0,
            "Incentives are not the same as product loyalty."
          ),
        ])
      ),
      lesson(
        3,
        "Structured vaults and managed yield",
        "Understand how products package complexity into a simpler promise.",
        "Vaults are often marketing wrappers around strategy, automation, and risk management.",
        [
          "Vault products can abstract CLMM management, lending loops, basis trades, or treasury deployment logic.",
          "The promise is usually convenience, optimization, or institutional discipline.",
          "Marketers should explain both the abstracted complexity and the residual risks.",
          "A clean vault narrative answers: what happens under the hood, for whom, and why not DIY.",
        ],
        "Create a product page section for a managed yield vault. Include 'who this is for' and 'what the strategy does under the hood.'",
        "Users deserve to know what has been simplified, not just that something is 'smart.'",
        quiz([
          q(
            "What is a vault often packaging?",
            [
              "Automation around a strategy users could theoretically manage themselves",
              "A new validator client",
              "Only a governance forum",
            ],
            0,
            "Vaults often wrap complexity into a simpler UX."
          ),
          q(
            "What should vault marketing always explain?",
            [
              "Residual risk and strategy behavior",
              "Only the APR",
              "Only brand tone",
            ],
            0,
            "Abstraction does not remove risk."
          ),
        ])
      ),
      lesson(
        4,
        "Stablecoins, settlement, and payment rails",
        "Study why stablecoins are central to Solana’s institutional and product narrative.",
        "Stablecoins tie together DeFi, payments, treasury management, and infrastructure marketing.",
        [
          "Stablecoins are not just trading pairs; they are settlement rails, treasury assets, payroll tools, and merchant/payment primitives.",
          "The February 2026 ecosystem report highlights payments infrastructure and major institutions using Solana rails.",
          "For product marketers, stablecoin messaging should connect speed, cost, compliance, and operational workflow.",
          "The strongest angle changes by audience: consumers want convenience, businesses want cost/settlement gains, institutions want reliability and controls.",
        ],
        "Write a multi-audience messaging matrix for a Solana stablecoin payment product: freelancer, SMB, enterprise treasury, and bank partner.",
        "This category rewards audience-specific copy more than chain-generic slogans.",
        quiz([
          q(
            "Why are stablecoins strategically important on Solana?",
            [
              "They link trading, payments, treasury, and settlement use cases",
              "They remove the need for wallets",
              "They are only useful in NFT markets",
            ],
            0,
            "Stablecoins connect multiple product categories."
          ),
          q(
            "What should enterprise payment messaging emphasize?",
            ["Workflow reliability and controls", "Memes first", "Validator mascots"],
            0,
            "Enterprise buyers care about operations and trust."
          ),
        ])
      ),
      lesson(
        5,
        "Onchain metrics that matter",
        "Learn which numbers are signal and which are vanity.",
        "Senior marketers need a metrics hierarchy that maps to product health.",
        [
          "TVL, DEX volume, active addresses, transaction count, retention, deposit growth, and revenue all mean different things.",
          "A number only matters if you know what behavior generated it and whether it is durable.",
          "Denominate DeFi metrics carefully. SOL-denominated and USD-denominated views can tell different stories.",
          "For launch reporting, connect metrics to the funnel stage they represent.",
        ],
        "Take one protocol and define a metrics stack: attention, activation, liquidity depth, retained usage, monetization, and risk.",
        "Stop letting single-metric screenshots do all the storytelling.",
        quiz([
          q(
            "Why can TVL be misleading on its own?",
            [
              "Because it says little about usage quality or revenue by itself",
              "Because it is always fake",
              "Because only wallets matter",
            ],
            0,
            "TVL is useful but incomplete."
          ),
          q(
            "Why track SOL-denominated and USD-denominated views separately?",
            [
              "To separate price effects from asset and behavior changes",
              "To make charts larger",
              "To avoid audits",
            ],
            0,
            "Different denominators tell different stories."
          ),
        ])
      ),
      lesson(
        6,
        "Case-study teardown",
        "Train yourself to evaluate a Solana DeFi product like a strategist.",
        "You now have enough vocabulary to stop being impressed by dashboards alone.",
        [
          "Evaluate category, user job, liquidity model, yield source, risk engine, audience, and growth loop.",
          "Find the difference between feature strength and narrative strength.",
          "Look for dependency risk: oracle, router, incentives, custodial rails, token price, and stablecoin availability.",
          "Finish with a clear judgment: durable, cyclical, incentive-dependent, or fragile.",
        ],
        "Choose a live Solana DeFi product and write a 1-page teardown using the framework above.",
        "This assignment is deliberately open-ended. Use your own judgment.",
        quiz([
          q(
            "What is the goal of a protocol teardown?",
            [
              "To collect screenshots only",
              "To understand real drivers of user value, growth, and fragility",
              "To rank logo quality",
            ],
            1,
            "The teardown should expose strategic truth."
          ),
          q(
            "What is a dependency risk?",
            [
              "A critical external or internal system the product relies on",
              "A typo in the brand name",
              "A community meme",
            ],
            0,
            "Dependency risk often explains why products fail under stress."
          ),
        ])
      ),
      lesson(
        7,
        "Week 5 synthesis",
        "Connect market structure to GTM.",
        "This week should leave you thinking in systems, not in isolated products.",
        [
          "User acquisition, routing, execution, liquidity, and treasury behavior are connected.",
          "The best marketers know which layer their product controls and which layers it depends on.",
          "Category narratives should match the product’s actual leverage point.",
          "Partnership strategy often follows market-structure reality more than brand desire.",
        ],
        "Write an internal GTM memo for a Solana DeFi product explaining which ecosystem layers you need to partner with and why.",
        "If you identify dependencies clearly, BD and marketing get sharper together.",
        quiz([
          q(
            "What does systems thinking in DeFi marketing mean?",
            [
              "Understanding how user flow, liquidity, execution, and distribution interact",
              "Only posting daily charts",
              "Avoiding technical knowledge",
            ],
            0,
            "Systems thinking links layers into strategy."
          ),
          q(
            "What often follows market-structure reality?",
            [
              "Partnership priorities",
              "Office furniture",
              "Domain length",
            ],
            0,
            "Partnership strategy should reflect real dependencies."
          ),
        ])
      ),
    ],
  },
  {
    week: 6,
    slug: "cefi-and-institutions",
    theme: "CeFi, institutions, and treasury products",
    track: "growth",
    outcome:
      "Learn how Solana products are framed for exchanges, banks, custodians, fintechs, treasury teams, and institutional DeFi users.",
    days: [
      lesson(
        1,
        "CeFi, DeFi, and hybrid rails",
        "Understand the spectrum rather than treating categories as pure opposites.",
        "Many real products are hybrids: onchain settlement with offchain controls, custodial wrappers, or policy-gated access.",
        [
          "CeFi emphasizes controlled environments, support, and compliance wrappers.",
          "DeFi emphasizes open access, composability, and self-custody.",
          "Hybrid models combine regulated or operational rails with onchain execution or settlement.",
          "Marketing must explain what is onchain, what is offchain, and who controls the critical steps.",
        ],
        "Classify five crypto products as CeFi, DeFi, or hybrid. For each, write a one-line note about the user-trust implication.",
        "Mislabeling hybrid products is one of the most common credibility errors in crypto marketing.",
        quiz([
          q(
            "Why is the CeFi/DeFi split often too simplistic?",
            [
              "Because many products combine onchain and offchain components",
              "Because DeFi no longer exists",
              "Because exchanges are blockchains",
            ],
            0,
            "Many modern products are hybrids."
          ),
          q(
            "What must hybrid-product marketing explain clearly?",
            [
              "Which functions are onchain, offchain, and controlled by whom",
              "Only the APY",
              "Only the brand mission",
            ],
            0,
            "Control boundaries matter a lot in trust-building."
          ),
        ])
      ),
      lesson(
        2,
        "Exchanges, listings, and liquidity support",
        "Learn how token visibility and tradability are created.",
        "Listings are not only BD wins; they are product-distribution events with downstream expectations.",
        [
          "Exchange support affects discoverability, fiat access, and market depth.",
          "Liquidity support, MM relationships, and token distribution policy shape post-listing behavior.",
          "Do not market a listing as success if the downstream market structure is weak.",
          "A good listing narrative sets realistic expectations and explains access, not just prestige.",
        ],
        "Write a listing announcement draft plus an internal checklist of what must be true operationally before publishing it.",
        "You are training for launch discipline, not just hype.",
        quiz([
          q(
            "What is a weak listing announcement?",
            [
              "One that celebrates prestige but ignores actual access and market structure",
              "One that explains user benefits",
              "One that states timing clearly",
            ],
            0,
            "A listing should connect to real user access and liquidity."
          ),
          q(
            "Why are market makers and liquidity support relevant to marketers?",
            [
              "Because post-listing behavior shapes perception and retention",
              "Because they design logos",
              "Because they remove unlock schedules",
            ],
            0,
            "Market quality affects brand trust after launch."
          ),
        ])
      ),
      lesson(
        3,
        "Custody, permissions, and institutional trust",
        "Understand what enterprise buyers need to hear before they care about yield or growth.",
        "Institutional adoption is frequently won by process design rather than bold creative.",
        [
          "Core buyer concerns include asset control, approvals, reporting, segregation, and counterparty management.",
          "Marketing should translate technical controls into operator confidence.",
          "The buyer journey usually includes legal, finance, compliance, and technical stakeholders.",
          "If your product touches treasury or settlement, operational trust is the product.",
        ],
        "Create a stakeholder map for an institutional Solana treasury product and define what each buyer persona needs to believe.",
        "Complex B2B crypto sales fail when marketers write for only one decision-maker.",
        quiz([
          q(
            "What is often the primary product in institutional crypto?",
            ["Operational trust and control", "Community memes", "Thread virality"],
            0,
            "Trust architecture is the product for many institutions."
          ),
          q(
            "Why build a stakeholder map?",
            [
              "Different buyers care about different proof points",
              "To slow the sales cycle",
              "To avoid reporting",
            ],
            0,
            "Multi-stakeholder sales need tailored messaging."
          ),
        ])
      ),
      lesson(
        4,
        "Stablecoin treasury and cash-management narratives",
        "Learn how to position Solana for operational finance use cases.",
        "Treasury products need sober language and concrete workflows.",
        [
          "Frame stablecoins as operating cash rails, not only trading instruments.",
          "Common angles: faster settlement, global payouts, yield management, and programmable treasury controls.",
          "Connect DeFi yield options to treasury risk appetite. Not every treasury should be pitched on the same product set.",
          "Enterprise copy should specify workflow outcomes: reconcile faster, settle cheaper, pay globally, track clearly.",
        ],
        "Write a landing-page hero and three proof blocks for a Solana-based treasury management product.",
        "You are selling a workflow improvement, not chain fandom.",
        quiz([
          q(
            "How should treasury stablecoin products usually be positioned?",
            [
              "As workflow and settlement improvements with explicit controls",
              "As degen yield adventures",
              "As NFT collectibles",
            ],
            0,
            "Treasury buyers care about operational outcomes."
          ),
          q(
            "What should enterprise proof blocks include?",
            [
              "Specific operational outcomes",
              "Only slogans",
              "Only token price charts",
            ],
            0,
            "Workflow evidence is stronger than generic enthusiasm."
          ),
        ])
      ),
      lesson(
        5,
        "Partnership storytelling",
        "Learn how to announce integrations, banks, custodians, and infra partners without writing empty logos-on-a-slide copy.",
        "Partnerships matter when they change user access, trust, or product functionality.",
        [
          "State what the partnership unlocks: deposits, custody, settlement, liquidity, compliance, reach, or distribution.",
          "Avoid partnership announcements that cannot answer 'so what?' in one sentence.",
          "For institutional audiences, tie logos to operational capability.",
          "The best partnership content shows before-and-after workflow.",
        ],
        "Take a hypothetical Solana partnership and write a launch announcement that answers 'what changed for the user?' in the first paragraph.",
        "You should be allergic to vague partnership copy by now.",
        quiz([
          q(
            "What makes a partnership announcement strong?",
            [
              "It explains the capability or access unlocked for the user",
              "It lists many logos",
              "It avoids specifics",
            ],
            0,
            "Announcements need a concrete outcome."
          ),
          q(
            "What question should every partnership answer quickly?",
            ["So what changed?", "Who designed the deck?", "What color is the logo?"],
            0,
            "The user impact should be obvious."
          ),
        ])
      ),
      lesson(
        6,
        "Compliance-adjacent communication",
        "Learn the discipline needed when describing financial products without overpromising.",
        "Crypto teams often create avoidable legal and reputational risk with loose language.",
        [
          "Avoid implying guarantees where there are variable outcomes.",
          "Do not hide dependency risks, access limitations, or jurisdictional constraints.",
          "Use plain disclosures that humans can understand.",
          "The goal is not sterile copy. It is accurate persuasion.",
        ],
        "Rewrite a hype-heavy crypto landing page section into cleaner, compliance-friendlier language while preserving conversion strength.",
        "Strong communication can be both persuasive and careful.",
        quiz([
          q(
            "What should product copy avoid in financial contexts?",
            [
              "Implied guarantees and hidden constraints",
              "Clear disclosures",
              "Audience-specific language",
            ],
            0,
            "Loose financial language creates obvious risk."
          ),
          q(
            "What is the aim of compliance-aware marketing?",
            [
              "Accurate persuasion",
              "No persuasion at all",
              "Only legal jargon",
            ],
            0,
            "The standard is clear, accurate, useful communication."
          ),
        ])
      ),
      lesson(
        7,
        "Week 6 synthesis",
        "Turn institutional understanding into a messaging system.",
        "This week should make your writing sound more credible to operators and finance teams.",
        [
          "Differentiate CeFi, DeFi, and hybrid language clearly.",
          "Lead with workflow outcomes and control surfaces in institutional messaging.",
          "Treat partnerships and listings as capability changes, not vanity moments.",
          "Use careful financial language without draining all momentum from the copy.",
        ],
        "Write a full one-page messaging architecture for a Solana treasury or institutional DeFi product: hero, proof points, objections, FAQ, and disclosure principles.",
        "This is the closest thing so far to a real-world go-to-market asset.",
        quiz([
          q(
            "What should institutional messaging usually lead with?",
            [
              "Workflow and control improvements",
              "Meme quality",
              "Price speculation",
            ],
            0,
            "Operational value should lead."
          ),
          q(
            "How should partnerships be framed for enterprise audiences?",
            [
              "As capability and trust improvements",
              "As social proof only",
              "As entertainment",
            ],
            0,
            "Capability change matters more than logo count."
          ),
        ])
      ),
    ],
  },
  {
    week: 7,
    slug: "growth-and-positioning",
    theme: "Growth, positioning, and distribution",
    track: "growth",
    outcome:
      "Build senior-level marketing judgment around segmentation, messaging, channels, partnerships, and lifecycle design.",
    days: [
      lesson(
        1,
        "Audience segmentation in Solana",
        "Stop writing one message for 'the community.'",
        "The ecosystem includes traders, LPs, devs, founders, creators, treasury teams, and institutions. They do not want the same thing.",
        [
          "Segment by user job, risk appetite, sophistication, and distribution channel.",
          "A protocol can have multiple audiences, but each asset should prioritize one primary conversion path.",
          "Different audiences require different proof: speed, yield, trust, integrations, or culture.",
          "Positioning becomes clearer when you choose who the product is not for.",
        ],
        "Create a segmentation grid for a Solana product with primary, secondary, and tertiary audiences plus message proof points.",
        "This is one of the highest-leverage operator habits in marketing.",
        quiz([
          q(
            "What is a weak audience category?",
            ["Everyone in crypto", "Active LPs using automated vaults", "Treasury teams seeking settlement rails"],
            0,
            "Useful segments are behavior-specific."
          ),
          q(
            "Why say who a product is not for?",
            [
              "It sharpens positioning and expectation fit",
              "It lowers clarity",
              "It removes product-market fit",
            ],
            0,
            "Exclusion often improves precision."
          ),
        ])
      ),
      lesson(
        2,
        "Messaging hierarchy",
        "Build a system from category claim down to proof and objection handling.",
        "Senior marketers do not write isolated taglines. They design message stacks.",
        [
          "Start with category, then core value proposition, then audience-specific proof.",
          "Build around the user’s desired outcome and the mechanism that makes it plausible.",
          "Include objection handling early; it reduces both bounce and support load.",
          "In crypto, proof often needs to combine product mechanics and social proof.",
        ],
        "Write a messaging hierarchy for a Solana DeFi product with: category line, hero, three proofs, top objections, and one line for each audience segment.",
        "If the hierarchy is strong, the rest of the campaign becomes easier.",
        quiz([
          q(
            "What should come before a tagline in strategic thinking?",
            [
              "Category and core value proposition",
              "Merchandise ideas",
              "Community memes",
            ],
            0,
            "Taglines sit inside a broader message hierarchy."
          ),
          q(
            "Why handle objections inside the messaging system?",
            [
              "Because trust barriers are part of conversion design",
              "Because objections should stay hidden",
              "Because landing pages should avoid nuance",
            ],
            0,
            "Objection handling is a core conversion tool."
          ),
        ])
      ),
      lesson(
        3,
        "Content systems and thought leadership",
        "Use content as an operating layer, not a posting habit.",
        "Strong crypto content translates complexity into recurring trust and demand.",
        [
          "Build content lanes: education, market commentary, product proof, partner proof, and customer stories.",
          "Thought leadership should compress insight, not repeat consensus with nicer formatting.",
          "Use executives, PMs, researchers, and BD leads as distinct voices where appropriate.",
          "A content system should map to funnel stages and market cycles.",
        ],
        "Design a monthly content engine for a Solana product with five recurring formats and one owner for each format.",
        "If content has no operating role, it becomes decorative.",
        quiz([
          q(
            "What makes thought leadership valuable?",
            [
              "Original synthesis that helps the audience think better",
              "Posting every hour",
              "Copying popular threads",
            ],
            0,
            "Insight density matters more than volume."
          ),
          q(
            "Why create content lanes?",
            [
              "To align recurring content with user needs and funnel stages",
              "To reduce clarity",
              "To avoid ownership",
            ],
            0,
            "Lanes make content systematic."
          ),
        ])
      ),
      lesson(
        4,
        "Social distribution and community loops",
        "Understand how Solana-native conversation flows affect product attention.",
        "Crypto social is part media, part support, part market signal.",
        [
          "Channels differ by role: X for narrative velocity, Discord/Telegram for support and community, newsletters and podcasts for depth, events for trust transfer.",
          "Community loops work when participation changes user identity or access, not just follower counts.",
          "Marketers must know the difference between transient attention and retained social capital.",
          "Social proof should help users understand the product, not just create FOMO.",
        ],
        "Map a 30-day launch distribution plan across X, Discord, partners, KOLs, and owned media. Explain why each channel exists.",
        "Every channel should have a job.",
        quiz([
          q(
            "What is a healthy community loop?",
            [
              "One that changes participation, identity, or access in a durable way",
              "One that relies only on giveaways",
              "One with no support function",
            ],
            0,
            "Durability matters more than raw attention."
          ),
          q(
            "Why should each channel have a defined job?",
            [
              "Because channels serve different distribution and trust functions",
              "Because all channels are identical",
              "Because volume is enough",
            ],
            0,
            "Channel purpose shapes strategy."
          ),
        ])
      ),
      lesson(
        5,
        "Lifecycle and retention marketing",
        "Design communication beyond the launch moment.",
        "Most crypto teams overinvest in day-one attention and underinvest in post-activation behavior.",
        [
          "Key lifecycle moments: onboarding, first transaction, first deposit, first yield event, risk event, and reactivation.",
          "Retention communication should align with product habit loops, not generic newsletters.",
          "Good lifecycle design explains what to do next and why it matters now.",
          "For financial products, state changes should trigger education as well as engagement.",
        ],
        "Design a lifecycle messaging sequence for a new user of a Solana DeFi product from signup to day 30.",
        "This should read like product strategy, not just CRM work.",
        quiz([
          q(
            "What is a common crypto marketing failure?",
            [
              "Overweighting launch attention and underweighting retention",
              "Too much user education",
              "Too much segmentation",
            ],
            0,
            "Retention design is often neglected."
          ),
          q(
            "What should lifecycle messaging follow?",
            [
              "Product habit loops and risk moments",
              "Only the social calendar",
              "Only meme trends",
            ],
            0,
            "Lifecycle design should follow actual product behavior."
          ),
        ])
      ),
      lesson(
        6,
        "Analytics and attribution for crypto products",
        "Measure what actually links message, product, and onchain behavior.",
        "Attribution gets harder when wallets are pseudonymous and user journeys cross apps.",
        [
          "Blend web analytics, referral logic, wallet behavior, onchain events, and CRM data where possible.",
          "Do not pretend perfect attribution exists; build useful directional models instead.",
          "Use campaign design to create cleaner attribution opportunities.",
          "Senior marketers care about decision usefulness more than false precision.",
        ],
        "Draft an attribution framework for a Solana product launch with leading indicators, lagging indicators, and known blind spots.",
        "If you can state the blind spots clearly, you are already ahead of most teams.",
        quiz([
          q(
            "What is the right goal for crypto attribution?",
            [
              "Useful directional decision support",
              "False certainty",
              "Ignoring onchain behavior",
            ],
            0,
            "Perfect attribution is rare; useful attribution is possible."
          ),
          q(
            "Why should campaign design consider attribution?",
            [
              "To create clearer measurement opportunities",
              "To reduce conversions",
              "To avoid segmentation",
            ],
            0,
            "Measurement starts before launch."
          ),
        ])
      ),
      lesson(
        7,
        "Week 7 synthesis",
        "Build a repeatable GTM operating model.",
        "This week should make your marketing thinking feel less random and more systems-driven.",
        [
          "Know the stack: segment, position, prove, distribute, retain, measure.",
          "Treat community as one system inside GTM, not the whole system.",
          "Use product mechanics as messaging proof rather than decorative jargon.",
          "Plan for behavior change, not just attention spikes.",
        ],
        "Write a GTM blueprint for a Solana launch using the stack above. Keep it to one page and make every sentence actionable.",
        "This is a document a head of marketing could actually use.",
        quiz([
          q(
            "What is the GTM stack from this week?",
            [
              "Segment, position, prove, distribute, retain, measure",
              "Post, pray, pump, pivot",
              "Design, merch, memes, mystery",
            ],
            0,
            "The stack is meant to be reusable."
          ),
          q(
            "What should marketing plan for?",
            ["Behavior change", "Attention only", "Only token price"],
            0,
            "Behavior change is the durable target."
          ),
        ])
      ),
    ],
  },
  {
    week: 8,
    slug: "actions-consumer-growth",
    theme: "Actions, consumer surfaces, and viral design",
    track: "growth",
    outcome:
      "Understand how Solana-native distribution surfaces such as Actions and Blinks affect product design and growth strategy.",
    days: [
      lesson(
        1,
        "Actions and Blinks mental model",
        "Learn why Solana transactions can become distribution objects.",
        "This changes how marketers think about the relationship between content, links, and execution.",
        [
          "Solana Actions are standard APIs that return signable transactions or messages.",
          "Blinks are client experiences that render those Actions through URLs and interactive contexts.",
          "This means a transaction can move closer to the point of attention instead of forcing the user into a separate flow.",
          "The marketing implication: conversion surfaces can become portable and embedded.",
        ],
        "Write a product note explaining Actions and Blinks to a non-technical growth team. Focus on why they matter for distribution and conversion.",
        "If you can frame this well, you will see product surface area others miss.",
        quiz([
          q(
            "What do Solana Actions return?",
            [
              "Signable transactions or messages through a standard API flow",
              "Only memes",
              "Validator credentials",
            ],
            0,
            "Actions are transaction-oriented APIs."
          ),
          q(
            "Why are Blinks strategically interesting?",
            [
              "They can bring onchain action closer to where attention already exists",
              "They remove wallets entirely",
              "They eliminate security checks",
            ],
            0,
            "Blinks change the distribution surface."
          ),
        ])
      ),
      lesson(
        2,
        "Distribution design for transaction-native media",
        "Think about URLs, wallets, feeds, and apps as conversion surfaces.",
        "When transactions become more link-like, creative and product choices merge.",
        [
          "The ideal experience reduces context switching between interest and action.",
          "But wallet support, verification, and client behavior still matter, so fallbacks are critical.",
          "Action identity can help attribute transaction activity to a provider or campaign flow.",
          "Growth teams should think about which user actions deserve a portable, link-native format.",
        ],
        "Design one growth campaign that uses an Action/Blink-style flow. Specify the user action, channel, fallback, and attribution plan.",
        "The core question is simple: which transaction becomes more powerful when moved into the feed?",
        quiz([
          q(
            "What remains important even if an Action is portable?",
            [
              "Fallback handling and wallet/client support",
              "Only logo design",
              "None of the above",
            ],
            0,
            "Portable actions still depend on client support and UX fallbacks."
          ),
          q(
            "Why might Action identity matter to marketers?",
            [
              "It can help attribute onchain activity to a specific provider or campaign",
              "It chooses validator commissions",
              "It replaces analytics",
            ],
            0,
            "Attribution is a major practical benefit."
          ),
        ])
      ),
      lesson(
        3,
        "Consumer product loops on Solana",
        "Study what makes a consumer crypto product feel shareable rather than merely onchain.",
        "Shareability without utility is noise. Utility without social transmission is often invisible.",
        [
          "Consumer products can use collectibles, identity, tipping, payments, memberships, or lightweight financial actions.",
          "Low-friction transactions can support repeated actions if the user benefit is obvious and immediate.",
          "The best consumer loop combines social proof, habit, and a meaningful state change.",
          "Marketers should ask what users are proud to share, not just what they can do.",
        ],
        "Pick a consumer behavior and sketch a Solana-native loop with trigger, action, reward, and share mechanic.",
        "Do not default to points unless they improve the loop.",
        quiz([
          q(
            "What makes a consumer onchain loop durable?",
            [
              "A useful repeated action paired with social or identity reinforcement",
              "High gas fees",
              "Only a token ticker",
            ],
            0,
            "Durability comes from value plus transmission."
          ),
          q(
            "What question should marketers ask about sharing?",
            [
              "What are users proud to share?",
              "Can we force invites?",
              "Can we remove value from the action?",
            ],
            0,
            "Shareability works best when it aligns with identity or utility."
          ),
        ])
      ),
      lesson(
        4,
        "Referral systems, rewards, and abuse control",
        "Build incentive loops without creating a farm.",
        "In crypto, badly designed incentives get optimized by people who are better at extraction than your growth team is.",
        [
          "Rewards should map to real user value created, not superficial clicks.",
          "Sybil resistance, anti-abuse rules, and reward pacing matter.",
          "Referral systems should be modeled as economics problems, not only viral mechanics.",
          "The clearest reward systems align with retention or funded activation, not vanity events.",
        ],
        "Design a referral program for a Solana app. Include reward triggers, anti-abuse checks, and a note on how you would measure retained value.",
        "Senior marketers think like economists when building loops.",
        quiz([
          q(
            "What is the main risk of badly designed crypto incentives?",
            [
              "They attract extraction behavior instead of retained value",
              "They improve retention too much",
              "They slow down websites",
            ],
            0,
            "Poor incentives attract farmers and sybils."
          ),
          q(
            "What should rewards ideally align with?",
            [
              "Real value creation or retained activation",
              "Raw impressions only",
              "Anonymous clicks only",
            ],
            0,
            "Sustainable incentives reward useful behavior."
          ),
        ])
      ),
      lesson(
        5,
        "Creator, community, and brand surface design",
        "Learn how creators and communities fit into Solana growth without turning every campaign into shallow influencer spend.",
        "The right creator can compress trust and explanation at the same time.",
        [
          "Creators can educate, validate, demo, or distribute, but they should not replace product clarity.",
          "Choose creators by audience overlap and format fit, not only by follower count.",
          "Brand systems should feel distinct and intentional, especially in noisy markets.",
          "For consumer products, the brand must carry usage cues, not just aesthetic taste.",
        ],
        "Write a creator brief for a Solana product launch. Specify audience, story angle, deliverable format, and success criteria.",
        "The brief should make the creator more effective, not just more controlled.",
        quiz([
          q(
            "How should creators be chosen?",
            [
              "By audience overlap and storytelling fit",
              "By follower count only",
              "At random",
            ],
            0,
            "Fit matters more than raw reach."
          ),
          q(
            "What should brand systems do in crypto products?",
            [
              "Carry meaning and usage cues, not just style",
              "Only look expensive",
              "Hide the product logic",
            ],
            0,
            "Brand should reinforce understanding and trust."
          ),
        ])
      ),
      lesson(
        6,
        "Growth experiments and instrumentation",
        "Run consumer tests without fooling yourself.",
        "Fast iteration is good only if the team can tell signal from noise.",
        [
          "Define the behavior you want before designing the experiment.",
          "Instrument the funnel so you can see not just clicks but funded or onchain outcomes.",
          "Short-term growth experiments should feed long-term positioning, not undermine it.",
          "Document what failed and why. Institutional memory matters in fast markets.",
        ],
        "Design three growth experiments for a Solana consumer product and define what success would mean in behavioral terms.",
        "The habit here is rigorous curiosity, not random testing.",
        quiz([
          q(
            "What should be defined before the experiment?",
            [
              "The target user behavior and success metric",
              "The meme template",
              "The office playlist",
            ],
            0,
            "A test without a target behavior is noise."
          ),
          q(
            "Why document failed experiments?",
            [
              "To preserve learning and avoid repeated mistakes",
              "To make reports longer",
              "To reduce accountability",
            ],
            0,
            "Institutional memory compounds."
          ),
        ])
      ),
      lesson(
        7,
        "Week 8 synthesis",
        "Use consumer distribution surfaces as a strategic lens.",
        "This week should change how you think about links, conversion, and portable action.",
        [
          "Actions and Blinks make transactions more embeddable and distribution-aware.",
          "Consumer growth on Solana depends on repeated useful actions, not only novelty.",
          "Reward systems must resist abuse and preserve economics.",
          "Creators and brand should amplify product logic, not replace it.",
        ],
        "Write a launch concept for a Solana consumer or creator-facing app that uses an Action-driven distribution mechanic.",
        "This is where product, UX, and growth start to feel like one system.",
        quiz([
          q(
            "What changes when transactions become embeddable distribution objects?",
            [
              "Creative, product, and conversion design become more tightly linked",
              "Wallets disappear",
              "Risk vanishes",
            ],
            0,
            "This is the strategic implication of transaction-native media."
          ),
          q(
            "What should rewards preserve?",
            [
              "Economics and user-value alignment",
              "Only headline reach",
              "Nothing",
            ],
            0,
            "Bad economics breaks growth loops."
          ),
        ])
      ),
    ],
  },
  {
    week: 9,
    slug: "product-storytelling",
    theme: "Product marketing and narrative design",
    track: "growth",
    outcome:
      "Learn how to package a Solana product, choose narratives, and build proof-driven campaigns.",
    days: [
      lesson(
        1,
        "Category creation versus category entry",
        "Know when to claim a new category and when to piggyback on an existing one.",
        "Crypto teams often force category-creation language when they would win faster through better category entry.",
        [
          "Category entry works when the buyer already understands the job and needs a better option.",
          "Category creation works when the product changes what the job is or combines markets in a novel way.",
          "New category claims need more proof and more patience.",
          "The strongest strategic choice depends on market readiness, not founder ego.",
        ],
        "Choose a Solana product idea and argue both sides: should it enter an existing category or create a new one?",
        "This trains market-reading judgment.",
        quiz([
          q(
            "When is category entry often best?",
            [
              "When the buyer already understands the job-to-be-done",
              "When the product has no audience",
              "When proof is impossible",
            ],
            0,
            "Category entry leverages existing demand understanding."
          ),
          q(
            "What does category creation usually require?",
            ["More proof and education", "Less clarity", "No patience"],
            0,
            "Creating a category is expensive and evidence-heavy."
          ),
        ])
      ),
      lesson(
        2,
        "Narrative timing and market windows",
        "Learn how macro conditions, ecosystem cycles, and product readiness shape messaging.",
        "The right story at the wrong time can still fail.",
        [
          "Narratives perform differently in bull, bear, sideways, and risk-off periods.",
          "Product maturity affects which claims are safe to make.",
          "Ecosystem tailwinds can help, but borrowing a chain narrative does not replace product readiness.",
          "A senior marketer knows when to go broad and when to stay tactical.",
        ],
        "Take one product and design two narrative versions: a risk-on market version and a risk-off version.",
        "This is how you stop writing one static story for every cycle.",
        quiz([
          q(
            "What should influence narrative choice?",
            [
              "Market regime, product maturity, and ecosystem context",
              "Only logo updates",
              "Only team preference",
            ],
            0,
            "Timing changes how messages land."
          ),
          q(
            "What is a common mistake with ecosystem narratives?",
            [
              "Borrowing them as a substitute for product readiness",
              "Ignoring them entirely",
              "Dating them precisely",
            ],
            0,
            "Tailwinds help but do not fix weak products."
          ),
        ])
      ),
      lesson(
        3,
        "Proof design",
        "Choose the evidence that makes a claim believable.",
        "Every strong marketing claim needs matching proof architecture.",
        [
          "Proof can be product demo, metrics, customer stories, integrations, audits, uptime, liquidity depth, or team credibility.",
          "Different audiences trust different proof types.",
          "Proof should reduce the leap required for the user to believe the promise.",
          "Weak proof is one of the main reasons crypto messaging feels inflated.",
        ],
        "Take a product claim and design three types of proof for retail users and three for institutional buyers.",
        "You are learning how to make claims feel earned.",
        quiz([
          q(
            "What should proof do?",
            [
              "Reduce the leap required to believe the claim",
              "Replace the product",
              "Hide complexity",
            ],
            0,
            "Proof bridges promise and trust."
          ),
          q(
            "Should proof types change by audience?",
            ["Yes", "No", "Only for meme tokens"],
            0,
            "Different audiences trust different evidence."
          ),
        ])
      ),
      lesson(
        4,
        "Launch sequencing",
        "Learn how to turn a launch into a planned narrative arc instead of one announcement.",
        "Good launches unfold in stages because users need context, proof, and activation over time.",
        [
          "Useful phases: tease, educate, validate, activate, reinforce.",
          "Not every launch needs a tease phase; some need immediate clarity more than suspense.",
          "Partnerships, docs, demos, and FAQ should support the same narrative arc.",
          "The goal is not noise. It is controlled momentum.",
        ],
        "Build a 10-day launch sequence for a Solana product with day-by-day objective and asset type.",
        "If every asset says the same thing, the sequence is underdesigned.",
        quiz([
          q(
            "What is a good launch sequence trying to create?",
            [
              "Controlled momentum across context, proof, and activation",
              "One loud day only",
              "Maximum confusion",
            ],
            0,
            "Launches work best as arcs."
          ),
          q(
            "Should every launch use suspense-heavy teasing?",
            [
              "No, some launches need immediate clarity more than suspense",
              "Yes, always",
              "Only institutions hate clarity",
            ],
            0,
            "Sequence choice depends on product and audience."
          ),
        ])
      ),
      lesson(
        5,
        "Sales enablement for crypto products",
        "Support BD and partnerships with better collateral.",
        "Marketing is not only public-facing. It also helps deals close.",
        [
          "Build concise one-pagers, objection docs, comparison sheets, and demo narratives.",
          "Align BD materials with public positioning so the team is not selling two different stories.",
          "For partner-facing sales, explain integration burden and mutual upside clearly.",
          "A good enablement asset reduces both confusion and cycle length.",
        ],
        "Create a one-page partner pitch for a Solana infrastructure or DeFi product.",
        "Your writing should help another team say yes faster.",
        quiz([
          q(
            "What is the point of sales enablement?",
            [
              "To help internal teams communicate value and close deals faster",
              "To increase confusion",
              "To replace product docs entirely",
            ],
            0,
            "Enablement supports execution."
          ),
          q(
            "Why align BD and public positioning?",
            [
              "Mixed stories create trust and execution problems",
              "To reduce sales opportunities",
              "To avoid segmenting",
            ],
            0,
            "Consistency improves trust and efficiency."
          ),
        ])
      ),
      lesson(
        6,
        "Competitive positioning",
        "Learn how to compare without sounding generic or defensive.",
        "A weak comparison page usually means the product team has not decided what game it is playing.",
        [
          "Compare on workflow, economics, audience fit, risk posture, and integrations.",
          "Avoid feature-table traps that hide the real user tradeoffs.",
          "You do not need to beat every competitor on every axis.",
          "Strong positioning often comes from choosing one edge and making it obvious.",
        ],
        "Write a competitor comparison for a hypothetical Solana product against two rivals. Focus on tradeoffs, not insults.",
        "This is operator writing, not tribal posting.",
        quiz([
          q(
            "What should competitive positioning emphasize?",
            [
              "Meaningful tradeoffs and edges",
              "Insults",
              "Feature count only",
            ],
            0,
            "Tradeoff clarity is more credible than chest-thumping."
          ),
          q(
            "Do you need to win every axis?",
            ["No", "Yes", "Only in bull markets"],
            0,
            "Focused advantage is often stronger than broad mediocrity."
          ),
        ])
      ),
      lesson(
        7,
        "Week 9 synthesis",
        "Combine narrative, proof, launch design, and competition into one PMM system.",
        "This is how marketing becomes a product discipline.",
        [
          "Choose the category and narrative window deliberately.",
          "Match every claim with proof.",
          "Design launches as momentum arcs.",
          "Compare with precision and respect for tradeoffs.",
        ],
        "Write a complete PMM brief for a Solana product launch using the framework above.",
        "By this point, your output should look close to real team artifacts.",
        quiz([
          q(
            "What anchors a strong PMM system?",
            [
              "Category choice, narrative timing, proof, launch sequencing, and competition",
              "Only social media",
              "Only branding",
            ],
            0,
            "PMM is a systems role."
          ),
          q(
            "What should every claim have?",
            ["Matching proof", "A mascot", "A giveaway"],
            0,
            "Proof is non-optional."
          ),
        ])
      ),
    ],
  },
  {
    week: 10,
    slug: "risk-compliance-crisis",
    theme: "Risk, security, and crisis communication",
    track: "risk",
    outcome:
      "Understand how to talk about outages, exploits, smart-contract risk, token-risk, and incident response like an adult.",
    days: [
      lesson(
        1,
        "Risk taxonomy for Solana products",
        "Build a structured way to talk about risk.",
        "Risk communication should feel organized, not improvised after something breaks.",
        [
          "Categories include protocol risk, smart-contract risk, oracle risk, governance risk, liquidity risk, counterparty risk, regulatory risk, and UX/security risk.",
          "Different products expose users to different mixes of these risks.",
          "Marketing should not do risk analysis alone, but it must know the framework.",
          "A clear risk taxonomy improves product pages, FAQs, and crisis readiness.",
        ],
        "Create a risk matrix for three Solana product types: liquid staking, lending, and payments.",
        "This should look like a real internal doc.",
        quiz([
          q(
            "Why build a risk taxonomy?",
            [
              "To communicate product exposure clearly and systematically",
              "To make pages scarier",
              "To avoid legal review",
            ],
            0,
            "Clear categories improve trust and preparedness."
          ),
          q(
            "Do all Solana products share the same risk mix?",
            ["No", "Yes", "Only DeFi does"],
            0,
            "Risk exposure varies by product design."
          ),
        ])
      ),
      lesson(
        2,
        "Smart-contract and protocol incident basics",
        "Learn what users need to know when something fails.",
        "You do not need to be an auditor, but you do need to communicate failure modes competently.",
        [
          "Differentiate between app bug, protocol issue, dependency issue, and user security issue.",
          "State what happened, who is affected, what is paused, and what the next update timing is.",
          "Avoid speculative language during incidents.",
          "Trust during crises comes from clarity, frequency, and constraint honesty.",
        ],
        "Write a first-response incident template for a DeFi protocol with placeholders for severity, impact, mitigation, and next update time.",
        "The first message sets the tone for everything that follows.",
        quiz([
          q(
            "What should an incident update include early?",
            [
              "Impact, mitigation state, and next update timing",
              "Only optimism",
              "Only legal jargon",
            ],
            0,
            "Users need practical clarity quickly."
          ),
          q(
            "Why avoid speculation in an incident?",
            [
              "It can mislead users and damage trust further",
              "It makes the post shorter",
              "It improves recovery speed",
            ],
            0,
            "Speculation creates compounding trust problems."
          ),
        ])
      ),
      lesson(
        3,
        "Confidential transfers and the 2025 proof-program issue",
        "Study a real example of feature complexity, security response, and communication discipline.",
        "This is what current-state knowledge looks like in practice.",
        [
          "Token Extensions support confidential transfer functionality, but that area has also carried technical complexity.",
          "The official June 25, 2025 post-mortem describes a vulnerability in the ZK ElGamal Proof program and the coordinated disabling of the proof program on mainnet-beta on June 19, 2025 at epoch 805.",
          "The key marketing lesson is not 'avoid advanced features'; it is 'communicate capability and residual risk precisely.'",
          "Sophisticated products need sophisticated expectation management.",
        ],
        "Write a 300-word internal note explaining what this incident should teach a PMM or ecosystem marketer about shipping privacy-adjacent features.",
        "Use exact dates in your write-up.",
        quiz([
          q(
            "What is the key marketer lesson from the confidential transfer incident?",
            [
              "Advanced features need precise capability and risk communication",
              "Never mention privacy features",
              "Only engineers should read post-mortems",
            ],
            0,
            "The issue is precision and expectation management."
          ),
          q(
            "According to the official post-mortem, when was the proof program disabled on mainnet-beta?",
            ["June 19, 2025", "January 1, 2026", "March 20, 2026"],
            0,
            "The post-mortem states June 19, 2025 at epoch 805."
          ),
        ])
      ),
      lesson(
        4,
        "Outages, latency events, and network-health communication",
        "Learn the difference between protocol stress and application degradation.",
        "When users say 'Solana is down,' the truth can be more specific and your wording should be too.",
        [
          "Distinguish validator-client issues, RPC/provider degradation, app backend problems, wallet issues, and congestion effects.",
          "User trust improves when teams explain the layer where the issue lives.",
          "During degraded conditions, tell users what actions are safe, delayed, or discouraged.",
          "A good status communication system should exist before the incident.",
        ],
        "Create a status-page taxonomy for a Solana app with separate labels for protocol, RPC, wallet, and app-layer incidents.",
        "Layer clarity is operational empathy.",
        quiz([
          q(
            "Why should teams separate protocol and RPC issues in messaging?",
            [
              "Because user pain may stem from access infrastructure rather than protocol failure",
              "Because it sounds technical",
              "Because RPC never matters",
            ],
            0,
            "The distinction is important for user trust and diagnosis."
          ),
          q(
            "What should degraded-condition updates tell users?",
            [
              "What actions are safe, delayed, or discouraged",
              "Nothing until full recovery",
              "Only internal jargon",
            ],
            0,
            "Users need behavior guidance."
          ),
        ])
      ),
      lesson(
        5,
        "Token risk and market-structure shocks",
        "Prepare for unlocks, depegs, liquidations, and incentive unwind scenarios.",
        "Crisis communication is not only for exploits.",
        [
          "Large unlocks, stablecoin issues, liquidation cascades, and incentive changes can all trigger market trust events.",
          "Pre-briefing users on structure reduces panic and rumor spread.",
          "Reactive messaging should describe mechanics, not only emotions.",
          "After the event, teams should document what changed structurally.",
        ],
        "Write a crisis comms outline for a token facing a major unlock plus deteriorating liquidity conditions.",
        "You should focus on explanation and next actions, not spin.",
        quiz([
          q(
            "What kind of events can trigger crisis comms besides exploits?",
            [
              "Unlocks, depegs, and liquidation shocks",
              "Only design updates",
              "Only conference talks",
            ],
            0,
            "Market-structure events can become trust crises."
          ),
          q(
            "What should reactive messaging emphasize?",
            [
              "Mechanics and next actions",
              "Only reassurance",
              "Only market price",
            ],
            0,
            "Explanation beats empty reassurance."
          ),
        ])
      ),
      lesson(
        6,
        "Reputation repair and post-mortem culture",
        "Learn how teams earn trust back after something goes wrong.",
        "Reputation repair is a process, not a one-post stunt.",
        [
          "A good post-mortem explains timeline, scope, fix, and prevention steps.",
          "Users care less about perfect language than about visible competence and accountability.",
          "Trust rebuilds through transparent updates, product improvements, and consistency over time.",
          "Marketing should work with engineering and leadership, not improvise alone.",
        ],
        "Write the outline of a public post-mortem and a 30-day trust-repair content plan.",
        "The plan should include product evidence, not only tone changes.",
        quiz([
          q(
            "What rebuilds trust after an incident?",
            [
              "Transparent updates and visible product improvements",
              "Silence",
              "More giveaways",
            ],
            0,
            "Trust repair needs evidence."
          ),
          q(
            "Who should own post-incident communication?",
            [
              "A cross-functional group including marketing, engineering, and leadership",
              "Marketing alone",
              "No one publicly",
            ],
            0,
            "Credible incident response is cross-functional."
          ),
        ])
      ),
      lesson(
        7,
        "Week 10 synthesis",
        "Turn risk understanding into operational readiness.",
        "This week should make your communication calmer, more exact, and more useful under pressure.",
        [
          "Use a clear risk taxonomy.",
          "Differentiate incident layers precisely.",
          "Study real post-mortems and absorb their communication patterns.",
          "Remember that trust is built before the incident and tested during it.",
        ],
        "Build a crisis communication playbook index for a Solana company with sections for protocol events, app incidents, token events, and security issues.",
        "This is one of the most senior-looking artifacts in the whole course.",
        quiz([
          q(
            "What should risk knowledge become by the end of this week?",
            [
              "Operational readiness",
              "More fear",
              "Less documentation",
            ],
            0,
            "The goal is usable preparedness."
          ),
          q(
            "When is trust tested most clearly?",
            ["During incidents", "During logo refreshes", "During merchandise drops"],
            0,
            "Crises reveal communication quality."
          ),
        ])
      ),
    ],
  },
  {
    week: 11,
    slug: "current-state-2026",
    theme: "Current Solana state and upgrades",
    track: "risk",
    outcome:
      "Internalize the major current improvements, bottlenecks, and narrative shifts shaping Solana as of March 20, 2026.",
    days: [
      lesson(
        1,
        "Multiple validator clients and resilience",
        "Understand why client diversity matters in ecosystem storytelling.",
        "Infrastructure resilience is a brand issue when institutions and serious builders are evaluating the chain.",
        [
          "Agave remains central, while Firedancer development and adoption represent a key resilience and performance narrative.",
          "Firedancer documentation and ongoing ecosystem reporting reinforce the client-diversity and performance narrative around Solana.",
          "Client diversity reduces single-implementation risk and strengthens institutional confidence.",
          "Marketers should frame this as resilience and performance optionality, not as empty speed theater.",
        ],
        "Write a brief for a non-technical audience explaining why multiple validator clients matter for Solana’s credibility.",
        "Avoid turning this into an engineering brag list.",
        quiz([
          q(
            "Why does client diversity matter strategically?",
            [
              "It reduces single-implementation risk and improves resilience narrative",
              "It removes the need for validators",
              "It lowers circulating supply",
            ],
            0,
            "Diversity is a resilience story."
          ),
          q(
            "How should marketers frame validator-client diversity?",
            [
              "As resilience and performance optionality",
              "As a meme contest",
              "As irrelevant",
            ],
            0,
            "That framing is commercially useful and accurate."
          ),
        ])
      ),
      lesson(
        2,
        "Vote Account V4 and validator economics",
        "Learn why account structure updates matter for future economics and messaging.",
        "This is the kind of protocol detail that matters because of what it unlocks downstream.",
        [
          "The official February 3, 2026 upgrades page describes Vote Account V4 as a leaner vote-account structure.",
          "It introduces the ability for separate commission settings across different validator revenue types.",
          "The same page notes that it is foundational for future features including block revenue distribution and Alpenglow.",
          "Marketers should care because validator economics affect staking narratives, decentralization, and delegator expectations.",
        ],
        "Write a short internal note: why should the staking or validator-growth team care about Vote Account V4?",
        "Translate protocol plumbing into strategic implications.",
        quiz([
          q(
            "What does Vote Account V4 help enable according to the official upgrades page?",
            [
              "Future features such as block revenue distribution",
              "NFT royalties only",
              "Wallet recovery",
            ],
            0,
            "The roadmap explicitly links it to future validator economics changes."
          ),
          q(
            "Why is this relevant to marketers?",
            [
              "Validator economics shape staking and decentralization narratives",
              "It changes typography",
              "It replaces tokens",
            ],
            0,
            "The economic downstream matters."
          ),
        ])
      ),
      lesson(
        3,
        "Block revenue distribution to delegators",
        "Study a coming change with strong product and messaging implications.",
        "This is one of the more important current topics for staking communication.",
        [
          "The upgrades page describes work underway for protocol-level sharing of transaction-fee, priority-fee, and MEV block revenue with delegators.",
          "That would increase transparency and make validator comparison more economically expressive.",
          "If implemented broadly, staking product pages may need to explain inflation rewards separately from block-revenue sharing.",
          "This is a strong example of why 'yield' is too blunt a word for serious users.",
        ],
        "Draft a before-and-after staking explainer showing how product copy changes if block revenue distribution becomes standard.",
        "Your wording should clearly separate reward types.",
        quiz([
          q(
            "What additional revenue types does the roadmap mention besides inflation rewards?",
            [
              "Transaction fees, priority fees, and MEV-related block revenue",
              "Only ad revenue",
              "Only royalties",
            ],
            0,
            "The roadmap explicitly cites block revenue components."
          ),
          q(
            "What communication implication follows?",
            [
              "Reward sources should be separated clearly in staking copy",
              "All rewards can be merged into one vague APR",
              "No changes are needed",
            ],
            0,
            "Source clarity becomes more important."
          ),
        ])
      ),
      lesson(
        4,
        "XDP and network performance",
        "Learn why certain technical improvements matter even if users never hear the acronym.",
        "The job is to translate backend gains into believable product-level implications.",
        [
          "The Solana upgrades page lists XDP support in Agave 3.0+ as a major networking performance improvement.",
          "It describes XDP as a Linux-kernel networking shortcut that can reduce latency significantly and support higher-capacity blocks.",
          "This is not a consumer-facing campaign slogan, but it matters for ecosystem confidence and operator narratives.",
          "Marketers should know when to use technical proof selectively rather than shouting raw benchmark claims.",
        ],
        "Write a paragraph explaining XDP to an ecosystem investor and another paragraph explaining its relevance to an app founder.",
        "Precision beats spectacle here.",
        quiz([
          q(
            "What is XDP in the Solana upgrades context?",
            [
              "A validator networking performance improvement",
              "A new stablecoin",
              "A rewards token",
            ],
            0,
            "The roadmap frames it as a networking upgrade."
          ),
          q(
            "How should marketers usually use this topic?",
            [
              "As selective technical proof in the right context",
              "As the only homepage headline",
              "Not at all",
            ],
            0,
            "Context-sensitive translation is the right move."
          ),
        ])
      ),
      lesson(
        5,
        "Institutional and payments momentum in 2026",
        "Study the current traction areas affecting Solana’s external perception.",
        "Current-state credibility requires date-specific awareness.",
        [
          "The February 2026 ecosystem report highlights institutional milestones, stablecoin payment workflows, and strong onchain activity despite difficult macro conditions.",
          "Examples cited on that report include native bank deposit support, stablecoin payment infrastructure, and liquid staking ETF-related developments.",
          "For marketers, the lesson is that Solana’s story is increasingly dual-track: internet-native consumer velocity plus institutional finance rails.",
          "Your campaigns should decide which track to emphasize instead of blending them into mush.",
        ],
        "Create a narrative split-sheet with two columns: consumer/crypto-native story and institutional/payments story. Fill each with proof points and target audiences.",
        "As of March 20, 2026, you should be comfortable switching between these storylines.",
        quiz([
          q(
            "What dual-track narrative is increasingly visible on Solana?",
            [
              "Consumer/crypto-native velocity plus institutional/payments rails",
              "Only gaming",
              "Only enterprise software",
            ],
            0,
            "The ecosystem report supports this split."
          ),
          q(
            "Why should campaigns choose a track deliberately?",
            [
              "Because mixed narratives can blur audience fit and value clarity",
              "Because institutions dislike stories",
              "Because consumers read fewer words",
            ],
            0,
            "Audience clarity matters."
          ),
        ])
      ),
      lesson(
        6,
        "Open issues and where sophistication still matters",
        "Learn the current caveats, not just the wins.",
        "Senior credibility depends on acknowledging live complexity.",
        [
          "Current issues include feature complexity around advanced token functionality, evolving validator economics, dependency on client and infra adoption, and the need to explain user-facing reliability layers clearly.",
          "High performance does not remove the need for better product messaging around pending transactions, congestion, RPC issues, and risk.",
          "Institutional momentum does not erase the need for robust compliance and incident communication.",
          "The smartest marketers know what not to oversimplify.",
        ],
        "Write a 'what we should never overclaim' list for a Solana company. Include at least eight items.",
        "This assignment protects against lazy narrative drift.",
        quiz([
          q(
            "What is a mark of senior credibility?",
            [
              "Acknowledging current complexity without losing strategic conviction",
              "Only repeating wins",
              "Avoiding all technical topics",
            ],
            0,
            "Balance matters."
          ),
          q(
            "Why avoid overclaiming reliability or feature maturity?",
            [
              "Because user trust breaks quickly when claims outrun reality",
              "Because hype is illegal",
              "Because metrics are impossible",
            ],
            0,
            "Accuracy protects long-term trust."
          ),
        ])
      ),
      lesson(
        7,
        "Week 11 synthesis",
        "Turn current-state knowledge into narrative readiness.",
        "This week is your bridge from fundamentals into up-to-date strategic fluency.",
        [
          "Know the exact improvements worth mentioning and the ones best saved for technical audiences.",
          "Use dates when referring to roadmap items, incidents, and institutional milestones.",
          "Separate confirmed facts from forward-looking interpretation.",
          "Be able to brief a founder, a fund, and a fintech partner without changing the underlying truth.",
        ],
        "Write a March 20, 2026 ecosystem brief summarizing Solana’s current strengths, live issues, and strongest narratives for the next two quarters.",
        "This should sound like something a real strategy lead would send.",
        quiz([
          q(
            "What should you attach to current-state claims?",
            ["Specific dates and source context", "Only adjectives", "Nothing"],
            0,
            "Dates reduce confusion and drift."
          ),
          q(
            "What is the main goal of this synthesis week?",
            [
              "Narrative readiness grounded in current facts",
              "More jargon",
              "Only historical knowledge",
            ],
            0,
            "The point is up-to-date strategic fluency."
          ),
        ])
      ),
    ],
  },
  {
    week: 12,
    slug: "capstone",
    theme: "Capstone and operator practice",
    track: "risk",
    outcome:
      "Combine everything into strategy, PMM, risk, and execution artifacts a senior Solana marketer should be able to produce.",
    days: [
      lesson(
        1,
        "Capstone setup",
        "Choose a product and define the market clearly.",
        "You now need to prove you can operate, not just understand.",
        [
          "Pick a category: staking, payments, DEX, vault, lending, consumer app, infra, or hybrid treasury product.",
          "State the audience, market timing, category, and problem being solved.",
          "Define one primary conversion event and one retention event.",
          "Name the main risks and dependencies from day one.",
        ],
        "Select your capstone product and write the project brief in one page.",
        "Make reasonable assumptions if you do not have a real product in mind.",
        quiz([
          q(
            "What should the capstone define first?",
            [
              "Category, audience, problem, and conversion event",
              "Merch strategy",
              "Office snacks",
            ],
            0,
            "The brief anchors everything else."
          ),
          q(
            "Should risks be added later?",
            ["No, they should be identified from the start", "Yes, only after launch", "Only if asked"],
            0,
            "Senior planning includes risk early."
          ),
        ])
      ),
      lesson(
        2,
        "Write the market thesis",
        "Frame why this product should exist on Solana now.",
        "A market thesis separates 'cool idea' from 'strategic bet.'",
        [
          "Tie the product to chain strengths, user behavior, and competitive context.",
          "Explain why Solana is the right environment for this product shape.",
          "Identify what would make the thesis wrong.",
          "A good thesis shows awareness of both upside and constraints.",
        ],
        "Write a 400-word market thesis for your capstone product.",
        "Your thesis should survive skeptical reading.",
        quiz([
          q(
            "What should a market thesis include besides upside?",
            [
              "Conditions that would make it wrong",
              "Only confidence",
              "Only branding",
            ],
            0,
            "Strong theses include falsifiability."
          ),
          q(
            "Why explain why Solana is the right environment?",
            [
              "Because chain choice should support the product thesis",
              "Because all chains are identical",
              "Because users do not care",
            ],
            0,
            "The environment should matter strategically."
          ),
        ])
      ),
      lesson(
        3,
        "Design the messaging architecture",
        "Build the narrative stack for your product.",
        "This is the clearest PMM test in the whole course.",
        [
          "Create category line, hero, three proof points, objections, and risk disclosures.",
          "Tailor one variant for retail and one for institutional or advanced users if relevant.",
          "Keep claims tied to mechanics, not only aspiration.",
          "Use product truth as the center of the system.",
        ],
        "Produce the full messaging architecture document for your capstone.",
        "No fluff. Make it saleable and defensible.",
        quiz([
          q(
            "What should anchor capstone messaging?",
            [
              "Product truth and mechanics",
              "Only aspiration",
              "Only trend language",
            ],
            0,
            "The message stack should be grounded."
          ),
          q(
            "Why create audience variants?",
            [
              "Because proof and language needs vary by buyer",
              "Because clarity is bad",
              "Because products change daily",
            ],
            0,
            "Different audiences need different framing."
          ),
        ])
      ),
      lesson(
        4,
        "Design the launch",
        "Plan the rollout as a narrative and conversion sequence.",
        "This is where your GTM discipline is tested.",
        [
          "Map prelaunch education, launch proof, partner support, and activation assets.",
          "Choose channels by job, not habit.",
          "Define the success metrics and the instrumentation plan.",
          "Add fallback or crisis paths if execution quality matters.",
        ],
        "Create a launch calendar and asset list for your capstone.",
        "You should be able to run this with a real team.",
        quiz([
          q(
            "How should channels be chosen?",
            [
              "By the role they play in the launch sequence",
              "By habit only",
              "By vanity",
            ],
            0,
            "Every channel should have a job."
          ),
          q(
            "What should a launch plan include besides assets?",
            [
              "Instrumentation and fallback planning",
              "Only teasers",
              "Only hashtags",
            ],
            0,
            "Execution quality needs measurement and contingencies."
          ),
        ])
      ),
      lesson(
        5,
        "Write the risk and trust layer",
        "Show that your marketing can withstand scrutiny.",
        "This is what usually separates serious operators from loud ones.",
        [
          "List core product risks, dependency risks, and user-behavior risks.",
          "Write plain disclosures and FAQs.",
          "Add crisis communication first-response principles.",
          "Make sure the trust layer still supports conversion instead of killing it.",
        ],
        "Add a trust appendix to your capstone: risk matrix, disclosures, incident principles, and FAQ.",
        "This document should feel boring in the best possible way.",
        quiz([
          q(
            "What should the trust layer include?",
            [
              "Risks, disclosures, FAQs, and incident principles",
              "Only slogans",
              "Only token price forecasts",
            ],
            0,
            "Trust needs structured support."
          ),
          q(
            "What does serious marketing show here?",
            [
              "Ability to withstand scrutiny without losing clarity",
              "Avoidance of all risk mention",
              "Pure hype",
            ],
            0,
            "This is one of the strongest operator signals."
          ),
        ])
      ),
      lesson(
        6,
        "Present the strategy",
        "Package your thinking in an executive format.",
        "Senior marketers need to sell strategy internally as well as externally.",
        [
          "Turn your capstone into a concise presentation with clear decisions and tradeoffs.",
          "Include the why, the how, the proof, the risks, and the expected metrics.",
          "Show what assumptions are driving the plan.",
          "Keep the deck tight and operational.",
        ],
        "Create a 10-slide outline for your capstone presentation.",
        "If leadership could make decisions from it, you have done the job.",
        quiz([
          q(
            "What should an executive strategy presentation include?",
            [
              "Decisions, tradeoffs, proof, risks, and metrics",
              "Only moodboards",
              "Only tactical tasks",
            ],
            0,
            "Executives need decision-grade clarity."
          ),
          q(
            "Why state assumptions?",
            [
              "Because strategy quality depends on what must be true",
              "Because it makes the deck longer",
              "Because assumptions do not matter",
            ],
            0,
            "Assumptions reveal fragility and confidence."
          ),
        ])
      ),
      lesson(
        7,
        "Final review and next-step plan",
        "Lock in the habit of continuous learning after the 12-week course.",
        "Solana changes fast. The real skill is staying current while keeping your judgment sharp.",
        [
          "Review what you can now explain, evaluate, and produce.",
          "Keep a current-state watchlist for upgrades, product launches, token changes, incidents, and institutional developments.",
          "Maintain a weekly reading routine built on primary sources first.",
          "Continue writing operator memos. Writing forces clarity.",
        ],
        "Write your personal post-course operating plan: weekly inputs, monthly teardown habit, and one area for deeper specialization.",
        "The course ends here, but your edge comes from the maintenance routine after it.",
        quiz([
          q(
            "What is the real long-term skill after this course?",
            [
              "Staying current while preserving sound judgment",
              "Memorizing one fixed narrative forever",
              "Ignoring primary sources",
            ],
            0,
            "The ecosystem changes too fast for static knowledge."
          ),
          q(
            "What habit keeps strategic thinking sharp?",
            [
              "Regular primary-source reading and operator memo writing",
              "Only posting more",
              "Avoiding detailed analysis",
            ],
            0,
            "Writing is one of the best clarity tools."
          ),
        ])
      ),
    ],
  },
];

function lesson(day, title, summary, why, points, assignment, checkpoint, quiz) {
  return { day, title, summary, why, points, assignment, checkpoint, quiz };
}

function q(question, choices, answer, explain) {
  return { question, choices, answer, explain };
}

function quiz(items) {
  return items;
}

const flatLessons = course.flatMap((weekObj) =>
  weekObj.days.map((dayObj, index) => ({
    id: `${weekObj.week}-${index + 1}`,
    week: weekObj.week,
    day: index + 1,
    weekTheme: weekObj.theme,
    track: weekObj.track,
    weekOutcome: weekObj.outcome,
    ...dayObj,
  }))
);

const els = {
  weekList: document.getElementById("week-list"),
  lessonKicker: document.getElementById("lesson-kicker"),
  lessonTitle: document.getElementById("lesson-title"),
  lessonTheme: document.getElementById("lesson-theme"),
  lessonWeekTheme: document.getElementById("lesson-week-theme"),
  lessonSummary: document.getElementById("lesson-summary"),
  lessonWhy: document.getElementById("lesson-why"),
  lessonPoints: document.getElementById("lesson-points"),
  lessonAssignment: document.getElementById("lesson-assignment"),
  assignmentComplete: document.getElementById("assignment-complete"),
  lessonCheckpoint: document.getElementById("lesson-checkpoint"),
  quizForm: document.getElementById("quiz-form"),
  quizState: document.getElementById("quiz-state"),
  quizResult: document.getElementById("quiz-result"),
  submitQuiz: document.getElementById("submit-quiz"),
  prevLesson: document.getElementById("prev-lesson"),
  nextLesson: document.getElementById("next-lesson"),
  progressBar: document.getElementById("course-progress-bar"),
  progressText: document.getElementById("course-progress-text"),
  quizProgressText: document.getElementById("quiz-progress-text"),
  streakText: document.getElementById("streak-text"),
  resumeCourse: document.getElementById("resume-course"),
  resetProgress: document.getElementById("reset-progress"),
  sourcesList: document.getElementById("sources-list"),
  filters: Array.from(document.querySelectorAll("[data-filter]")),
};

let progress = loadProgress();
let selectedTrack = "all";
let activeLessonId = progress.lastLessonId || flatLessons[0].id;

renderSources();
renderWeekList();
renderLesson(activeLessonId);
updateProgressUI();
bindEvents();

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return { lessons: {}, lastLessonId: flatLessons[0].id };
    }
    const parsed = JSON.parse(raw);
    return {
      lessons: parsed.lessons || {},
      lastLessonId: parsed.lastLessonId || flatLessons[0].id,
    };
  } catch {
    return { lessons: {}, lastLessonId: flatLessons[0].id };
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function getLessonProgress(id) {
  return progress.lessons[id] || { assignmentDone: false, quizPassed: false };
}

function setLessonProgress(id, patch) {
  progress.lessons[id] = { ...getLessonProgress(id), ...patch };
  progress.lastLessonId = id;
  saveProgress();
  updateProgressUI();
  renderWeekList();
}

function renderSources() {
  els.sourcesList.innerHTML = sources
    .map(
      (source) => `
        <a class="source-link" href="${source.url}" target="_blank" rel="noreferrer">
          <strong>${source.title}</strong>
          <span>${source.note}</span>
        </a>
      `
    )
    .join("");
}

function renderWeekList() {
  els.weekList.innerHTML = course
    .map((weekObj) => {
      const hidden = selectedTrack !== "all" && weekObj.track !== selectedTrack;
      const completeCount = weekObj.days.filter((_, index) => getLessonProgress(`${weekObj.week}-${index + 1}`).quizPassed).length;
      const dayButtons = weekObj.days
        .map((dayObj, index) => {
          const id = `${weekObj.week}-${index + 1}`;
          const state = getLessonProgress(id);
          const activeClass = id === activeLessonId ? "is-active" : "";
          const completeClass = state.quizPassed ? "is-complete" : "";
          const status = state.quizPassed
            ? "Quiz passed"
            : state.assignmentDone
              ? "Assignment done"
              : "Not started";
          return `
            <button class="day-link ${activeClass} ${completeClass}" type="button" data-lesson-id="${id}">
              <span class="day-state">Day ${index + 1} • ${status}</span>
              <span class="day-title">${dayObj.title}</span>
            </button>
          `;
        })
        .join("");

      return `
        <section class="week-card ${hidden ? "is-hidden" : ""}">
          <div class="week-head">
            <div>
              <p class="week-meta">Week ${weekObj.week} • ${completeCount}/7 passed</p>
              <h3>${weekObj.theme}</h3>
            </div>
            <span class="topic-tag">${labelTrack(weekObj.track)}</span>
          </div>
          <p class="week-copy">${weekObj.outcome}</p>
          <div class="day-list">${dayButtons}</div>
        </section>
      `;
    })
    .join("");
}

function labelTrack(track) {
  if (track === "foundation") return "Foundation";
  if (track === "defi") return "DeFi";
  if (track === "growth") return "Growth";
  return "Risk";
}

function renderLesson(id) {
  const current = flatLessons.find((item) => item.id === id) || flatLessons[0];
  activeLessonId = current.id;
  progress.lastLessonId = current.id;
  saveProgress();

  const currentProgress = getLessonProgress(current.id);

  els.lessonKicker.textContent = `Week ${current.week} • Day ${current.day}`;
  els.lessonTitle.textContent = current.title;
  els.lessonTheme.textContent = labelTrack(current.track);
  els.lessonWeekTheme.textContent = current.weekTheme;
  els.lessonSummary.textContent = current.summary;
  els.lessonWhy.textContent = current.why;
  els.lessonAssignment.textContent = current.assignment;
  els.lessonCheckpoint.textContent = current.checkpoint;
  els.assignmentComplete.checked = currentProgress.assignmentDone;

  els.lessonPoints.innerHTML = current.points.map((point) => `<li>${point}</li>`).join("");

  els.quizForm.innerHTML = current.quiz
    .map(
      (item, index) => `
        <fieldset class="quiz-question" data-question-index="${index}">
          <legend>${index + 1}. ${item.question}</legend>
          <div class="quiz-choices">
            ${item.choices
              .map(
                (choice, choiceIndex) => `
                  <label class="quiz-choice">
                    <input type="radio" name="question-${index}" value="${choiceIndex}" />
                    <span>${choice}</span>
                  </label>
                `
              )
              .join("")}
          </div>
          <p class="quiz-explain" hidden></p>
        </fieldset>
      `
    )
    .join("");

  els.quizState.textContent = currentProgress.quizPassed ? "Passed" : "Not passed";
  els.quizResult.textContent = currentProgress.quizPassed
    ? "Quiz already passed. Re-run it any time for review."
    : "Choose one answer for each question.";
  els.quizResult.className = `quiz-result ${currentProgress.quizPassed ? "pass" : ""}`;
  renderWeekList();
}

function updateProgressUI() {
  const completeLessons = flatLessons.filter((item) => getLessonProgress(item.id).assignmentDone).length;
  const passedQuizzes = flatLessons.filter((item) => getLessonProgress(item.id).quizPassed).length;
  const percent = Math.round((completeLessons / flatLessons.length) * 100);

  els.progressBar.style.width = `${percent}%`;
  els.progressText.textContent = `${completeLessons} / ${flatLessons.length} lessons complete`;
  els.quizProgressText.textContent = `${passedQuizzes} quizzes passed`;

  if (passedQuizzes === 0) {
    els.streakText.textContent = "Start with Week 1, Day 1.";
    return;
  }

  const lastPassed = [...flatLessons].reverse().find((item) => getLessonProgress(item.id).quizPassed);
  els.streakText.textContent = `Most recent passed lesson: Week ${lastPassed.week}, Day ${lastPassed.day}.`;
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const lessonButton = event.target.closest("[data-lesson-id]");
    if (lessonButton) {
      renderLesson(lessonButton.getAttribute("data-lesson-id"));
      document.getElementById("lesson").scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    const filterButton = event.target.closest("[data-filter]");
    if (filterButton) {
      selectedTrack = filterButton.getAttribute("data-filter");
      els.filters.forEach((button) =>
        button.classList.toggle("is-active", button.getAttribute("data-filter") === selectedTrack)
      );
      renderWeekList();
    }
  });

  els.assignmentComplete.addEventListener("change", () => {
    setLessonProgress(activeLessonId, { assignmentDone: els.assignmentComplete.checked });
  });

  els.submitQuiz.addEventListener("click", submitQuiz);

  els.prevLesson.addEventListener("click", () => navigateLesson(-1));
  els.nextLesson.addEventListener("click", () => navigateLesson(1));

  els.resumeCourse.addEventListener("click", () => {
    const target = progress.lastLessonId || flatLessons[0].id;
    renderLesson(target);
    document.getElementById("lesson").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  els.resetProgress.addEventListener("click", () => {
    progress = { lessons: {}, lastLessonId: flatLessons[0].id };
    saveProgress();
    renderWeekList();
    renderLesson(flatLessons[0].id);
    updateProgressUI();
  });
}

function navigateLesson(direction) {
  const currentIndex = flatLessons.findIndex((item) => item.id === activeLessonId);
  const nextIndex = Math.min(Math.max(currentIndex + direction, 0), flatLessons.length - 1);
  renderLesson(flatLessons[nextIndex].id);
}

function submitQuiz() {
  const current = flatLessons.find((item) => item.id === activeLessonId);
  let score = 0;

  current.quiz.forEach((item, index) => {
    const fieldset = els.quizForm.querySelector(`[data-question-index="${index}"]`);
    const selected = els.quizForm.querySelector(`input[name="question-${index}"]:checked`);
    const explain = fieldset.querySelector(".quiz-explain");
    const isCorrect = selected && Number(selected.value) === item.answer;

    fieldset.classList.remove("is-correct", "is-wrong");
    fieldset.classList.add(isCorrect ? "is-correct" : "is-wrong");
    explain.hidden = false;
    explain.textContent = item.explain;

    if (isCorrect) score += 1;
  });

  const passed = score === current.quiz.length;
  setLessonProgress(activeLessonId, { quizPassed: passed });
  els.quizState.textContent = passed ? "Passed" : "Not passed";
  els.quizResult.textContent = passed
    ? `Passed ${score}/${current.quiz.length}. You have the concept level expected for today.`
    : `Scored ${score}/${current.quiz.length}. Review the explanations and try again.`;
  els.quizResult.className = `quiz-result ${passed ? "pass" : "fail"}`;
}
