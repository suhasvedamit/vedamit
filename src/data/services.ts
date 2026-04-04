export type Service = {
  slug: string;
  title: string;
  tagline: string;
  /** Two-part H1: first segment plain, second gets gradient (concat ≈ tagline). */
  taglineParts: readonly [string, string];
  description: string;
  /** Long-form paragraphs for the detail page. */
  narrative: readonly string[];
  /** Client-facing outcomes / value props. */
  outcomes: readonly string[];
  bullets: readonly string[];
  /** Pills under the hero description. */
  heroPills: readonly string[];
  /** Hero right-hand card copy. */
  heroAside: {
    kicker: string;
    title: string;
    body: string;
  };
};

export const services: Service[] = [
  {
    slug: "ai-machine-learning",
    title: "AI & Machine Learning",
    tagline:
      "Production-grade intelligence—evaluated, monitored, and built to last.",
    taglineParts: [
      "Production-grade intelligence—",
      "evaluated, monitored, and built to last.",
    ],
    description:
      "Cutting-edge AI solutions including Large Language Models (LLM), Machine Learning, and Deep Learning to transform your business operations.",
    heroPills: ["Evals & monitoring", "LLM & ML", "Production APIs", "Governance"],
    heroAside: {
      kicker: "Models you can run",
      title: "From experiment to dependable production",
      body: "We pair modeling with integration, observability, and guardrails—so performance stays measurable as usage and stakes grow.",
    },
    narrative: [
      "We help teams graduate from experiments to systems that ship: LLMs, classical ML, and deep learning applied where they measurably cut cost, improve quality, or unlock new products.",
      "You get the full stack—not just notebooks. We pair modeling with integration, evaluation, observability, and sensible guardrails so performance stays trustworthy as traffic and stakes grow.",
    ],
    outcomes: [
      "Clear success metrics and evaluation plans before a single model ships",
      "APIs, batch pipelines, or product surfaces wired to real workflows",
      "Monitoring, versioning, and documentation your engineers can run with",
      "Pragmatic roadmap from pilot to scale—no science-project drift",
    ],
    bullets: [
      "LLM Operations & Integration",
      "Natural Language Processing",
      "Computer Vision Solutions",
      "Predictive Analytics",
      "Custom AI Model Development",
      "AI Strategy Consulting",
    ],
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    tagline: "Repeatable operations. Fewer bottlenecks. More room to innovate.",
    taglineParts: [
      "Repeatable operations. Fewer bottlenecks. ",
      "More room to innovate.",
    ],
    description:
      "Streamline your business with smart automation. We design AI systems that automate repetitive tasks, optimize workflows, and drive efficiency across your operations.",
    heroPills: ["Workflow design", "HITL controls", "Tool integrations", "Playbooks"],
    heroAside: {
      kicker: "Less manual work",
      title: "Automation that fits how you operate",
      body: "We map friction, wire AI into real systems, and leave audit-friendly controls so teams scale without proportional hiring.",
    },
    narrative: [
      "Automation should feel invisible: work moves faster, errors drop, and your people spend time on judgment—not copy-paste. We design AI-assisted workflows that respect approvals, audit trails, and the messy reality of enterprise data.",
      "From intake to fulfillment, we map friction, instrument the process, and automate the boring middle so teams scale without proportional hiring.",
    ],
    outcomes: [
      "Mapped processes with measurable before/after throughput",
      "Human-in-the-loop controls where decisions need oversight",
      "Integrations with the tools you already use—CRM, ERP, support, docs",
      "Operational playbooks so improvements keep compounding",
    ],
    bullets: [
      "Process Automation & Workflow Optimization",
      "Predictive Analytics & Business Intelligence",
      "Smart Workflow Automation",
      "Natural Language Processing (NLP)",
      "AI-Based Personalization",
      "Intelligent Document Management",
    ],
  },
  {
    slug: "agentic-ai",
    title: "Agentic AI Services",
    tagline: "Autonomous agents that execute—with boundaries you define.",
    taglineParts: [
      "Autonomous agents that execute—",
      "with boundaries you define.",
    ],
    description:
      "Empower your business with autonomous AI agents that think, act, and learn independently — handling complex tasks without constant human intervention.",
    heroPills: ["Tool policies", "Traceability", "Escalation paths", "Multi-agent"],
    heroAside: {
      kicker: "Autonomy with guardrails",
      title: "Agents that act—and stay accountable",
      body: "Explicit tools, permissions, and telemetry so autonomy improves throughput without turning operations into a black box.",
    },
    narrative: [
      "Agentic AI shines when tasks are multi-step, context-heavy, and too expensive to staff 24/7. We architect agents with explicit tools, policies, and escalation paths so autonomy never means unpredictability.",
      "Whether it’s research, operations, or customer workflows, we focus on outcomes: fewer handoffs, faster resolution, and telemetry that shows what the agent did—and why.",
    ],
    outcomes: [
      "Tooling and permissions model tailored to your risk profile",
      "Traceable actions: logs, retries, and human override where it matters",
      "Prompt and policy iteration grounded in real task success rates",
      "Roadmap from single agent to orchestrated multi-agent systems",
    ],
    bullets: [
      "Autonomous Task Management",
      "Intelligent Customer Interaction",
      "Automated Decision-Making",
      "Self-Learning Business Processes",
      "End-to-End Workflow Automation",
      "Intelligent Process Optimization",
    ],
  },
  {
    slug: "ai-integration",
    title: "AI Integration",
    tagline: "Your stack stays yours—we embed intelligence where it helps most.",
    taglineParts: [
      "Your stack stays yours—",
      "we embed intelligence where it helps most.",
    ],
    description:
      "Supercharge your current tools with the power of AI. We seamlessly integrate AI capabilities into your existing software and platforms.",
    heroPills: ["Legacy & SaaS", "APIs & adapters", "Safe rollouts", "On-call ready"],
    heroAside: {
      kicker: "Meet systems where they are",
      title: "Native-feeling AI in your product",
      body: "Contracts, latency budgets, feature flags, and runbooks—so new AI capabilities don’t destabilize what already works.",
    },
    narrative: [
      "The best AI rollout is the one people actually use. We meet your systems where they are: legacy apps, SaaS, mobile, and data warehouses—then add models, retrieval, and UX that feel native.",
      "Integration work is integration discipline: contracts, error handling, latency budgets, and rollout plans that don’t destabilize production.",
    ],
    outcomes: [
      "Stable APIs and adapters that fit your release cadence",
      "Data access patterns that respect privacy and compliance",
      "Feature flags and phased rollouts to de-risk adoption",
      "Runbooks for on-call teams when models misbehave",
    ],
    bullets: [
      "Legacy System Integration",
      "API Development & Integration",
      "Cloud Platform Integration",
      "Third-Party Tool Integration",
      "Custom Integration Solutions",
      "Integration Testing & Support",
    ],
  },
  {
    slug: "ai-as-a-product",
    title: "AI as a Product",
    tagline: "From concept to a product customers pay for—and trust.",
    taglineParts: [
      "From concept to ",
      "a product customers pay for—and trust.",
    ],
    description:
      "Transform innovative AI ideas into market-ready products. From concept to launch, we help you design, develop, and deploy AI-powered solutions.",
    heroPills: ["Positioning", "MVP → GA", "Reliability story", "Launch kit"],
    heroAside: {
      kicker: "Beyond the demo",
      title: "Software buyers recognize as serious",
      body: "UX, billing hooks, analytics, and ops glue—so your AI story holds up in procurement, onboarding, and renewal.",
    },
    narrative: [
      "Building an AI product is more than a model card. We shape positioning, onboarding, pricing surfaces, and the reliability story buyers expect from serious software.",
      "You get product thinking plus delivery: UX, backend, billing hooks, analytics, and the operational glue that turns a demo into a business.",
    ],
    outcomes: [
      "Differentiated positioning and a roadmap buyers understand",
      "MVP → GA path with milestones tied to revenue or usage",
      "Quality bars for latency, uptime, and model behavior",
      "Launch collateral: docs, support flows, and success metrics",
    ],
    bullets: [
      "AI Product Strategy",
      "SaaS Platform Development",
      "AI-Driven Mobile Apps",
      "Custom AI Solutions",
      "Product Testing & QA",
      "Launch & Support",
    ],
  },
  {
    slug: "customized-ai-solutions",
    title: "Customized AI Solutions",
    tagline: "Built around your domain—not a generic template with your logo.",
    taglineParts: [
      "Built around your domain—",
      "not a generic template with your logo.",
    ],
    description:
      "Tailored AI solutions built around your unique business needs. We develop fully customized AI systems crafted specifically for your industry and goals.",
    heroPills: ["Domain workshops", "Your data & rules", "Compliance-aware", "Handoff"],
    heroAside: {
      kicker: "Co-designed with you",
      title: "AI shaped by how you work",
      body: "Discovery, prototypes, and delivery aligned to your constraints—regulations, edge cases, and the expertise only your team has.",
    },
    narrative: [
      "Off-the-shelf AI rarely understands your constraints: regulations, proprietary data, edge cases, and the workflows only your team knows. We co-design solutions that encode that expertise.",
      "Expect a partnership: discovery workshops, iterative prototypes, and delivery that aligns with how your org actually ships software.",
    ],
    outcomes: [
      "Requirements anchored in stakeholder workflows—not buzzwords",
      "Custom models, rules, and retrieval tuned to your corpus",
      "Deployment options that match your infra and compliance posture",
      "Knowledge transfer so you’re not locked to a black box",
    ],
    bullets: [
      "Industry-Specific Solutions",
      "Custom AI Development",
      "Predictive Analytics",
      "Intelligent Automation",
      "Business Process Optimization",
      "Ongoing Support & Maintenance",
    ],
  },
  {
    slug: "data-intelligence",
    title: "Data Intelligence",
    tagline: "Trustworthy data pipelines. Answers leadership can act on.",
    taglineParts: [
      "Trustworthy data pipelines. ",
      "Answers leadership can act on.",
    ],
    description:
      "Comprehensive data solutions to help you make informed business decisions and drive growth through data-driven insights.",
    heroPills: ["Warehousing", "Lineage & quality", "BI & metrics", "ML-ready"],
    heroAside: {
      kicker: "One source of truth",
      title: "Pipelines and definitions you can defend",
      body: "Ingestion, modeling, and governance so dashboards reconcile—and downstream AI doesn’t inherit silent data debt.",
    },
    narrative: [
      "Insight without trustworthy data is theater. We engineer ingestion, modeling, and governance so metrics are reproducible and dashboards tell one truth.",
      "From warehouses to BI layers, we optimize for freshness, cost, and clarity—so analysts spend time on decisions, not firefighting broken joins.",
    ],
    outcomes: [
      "Documented data models and lineage teams can rely on",
      "Pipelines with monitoring, backfills, and failure recovery",
      "Executive-ready reporting with consistent definitions",
      "Scalable foundations for ML and automation downstream",
    ],
    bullets: [
      "Data Engineering",
      "Data Warehouse Solutions",
      "Big Data Processing",
      "Data Governance",
      "Master Data Management",
      "Business Intelligence",
    ],
  },
  {
    slug: "full-stack-development",
    title: "Full-Stack Development",
    tagline: "End-to-end systems—fast UX, solid APIs, cloud-native ops.",
    taglineParts: [
      "End-to-end systems—",
      "fast UX, solid APIs, cloud-native ops.",
    ],
    description:
      "End-to-end development solutions using modern technologies and frameworks to build scalable and robust applications.",
    heroPills: ["Modern stacks", "Tests & CI/CD", "Performance & a11y", "Clean handoff"],
    heroAside: {
      kicker: "Ship with confidence",
      title: "Products that feel fast and hold up on-call",
      body: "Interfaces people enjoy, APIs teams trust, and observability baked in—so velocity doesn’t trade away reliability.",
    },
    narrative: [
      "We build products the way users experience them: snappy interfaces, predictable APIs, and infrastructure that survives traffic spikes and on-call nights.",
      "Our squads blend frontend craft with backend discipline—testing, observability, and CI/CD—so velocity doesn’t trade away reliability.",
    ],
    outcomes: [
      "Architecture reviews that balance speed with maintainability",
      "Automated tests and deployment pipelines from day one",
      "Performance and accessibility treated as features, not extras",
      "Handoff docs that help your team own the codebase confidently",
    ],
    bullets: [
      "React.js Development",
      "Node.js Backend",
      "Python/Django",
      "Java Enterprise Solutions",
      "MEAN/MERN Stack",
      "Cloud-Native Applications",
    ],
  },
  {
    slug: "mobile-development",
    title: "Mobile Development",
    tagline: "Native polish. Cross-platform reach. Experiences people keep.",
    taglineParts: [
      "Native polish. Cross-platform reach. ",
      "Experiences people keep.",
    ],
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
    heroPills: ["iOS & Android", "RN & Flutter", "Store-ready", "Analytics built-in"],
    heroAside: {
      kicker: "Built for real devices",
      title: "Flows that survive flaky networks",
      body: "Platform conventions, offline patterns, and release discipline—so your app earns retention, not one-star reviews.",
    },
    narrative: [
      "Mobile users vote with their thumbs. We design flows that respect small screens, flaky networks, and platform conventions—while still feeling unmistakably on-brand.",
      "Whether you need native performance or shared codebase efficiency, we ship with store readiness, analytics, and update strategy in mind.",
    ],
    outcomes: [
      "App Store / Play-ready builds with clear release checklists",
      "Offline-first patterns where connectivity is uncertain",
      "Instrumentation for retention, crashes, and key funnels",
      "Maintenance plan for OS updates and device fragmentation",
    ],
    bullets: [
      "iOS Development",
      "Android Development",
      "React Native Apps",
      "Flutter Development",
      "Mobile UI/UX Design",
      "App Maintenance & Support",
    ],
  },
  {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    tagline: "Scale safely. Pay for what you use. Sleep better at deploy time.",
    taglineParts: [
      "Scale safely. Pay for what you use. ",
      "Sleep better at deploy time.",
    ],
    description:
      "Scalable cloud infrastructure and services to optimize your business operations and reduce costs.",
    heroPills: ["AWS · Azure · GCP", "IaC & SRE", "Cost guardrails", "DR tested"],
    heroAside: {
      kicker: "Cloud with intent",
      title: "Landing zones teams can actually use",
      body: "Migrations, serverless or containers, and pipelines matched to compliance and spend—without locking you into slide-deck architecture.",
    },
    narrative: [
      "Cloud is leverage when it’s intentional: right-sized services, automated pipelines, and security defaults that don’t slow teams down.",
      "We design landing zones, migrations, and serverless or container patterns that match your compliance needs and cost profile—not a vendor slide deck.",
    ],
    outcomes: [
      "Infrastructure as code and repeatable environment promotion",
      "Cost visibility with guardrails and autoscaling policies",
      "CI/CD and observability aligned to SLOs you care about",
      "Disaster recovery and backup strategies you’ve actually tested",
    ],
    bullets: [
      "AWS Cloud Services",
      "Azure Solutions",
      "Google Cloud Platform",
      "DevOps & CI/CD",
      "Cloud Migration",
      "Serverless Architecture",
    ],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    tagline: "Reduce real risk—not checkbox theater.",
    taglineParts: ["Reduce real risk—", "not checkbox theater."],
    description:
      "Comprehensive security solutions to protect your digital assets and ensure data privacy.",
    heroPills: ["Threat modeling", "Hardening", "Pentests", "Dev-friendly fixes"],
    heroAside: {
      kicker: "Security that ships",
      title: "Findings turned into backlog you can execute",
      body: "Prioritized remediation, secure defaults, and evidence that helps with customers and auditors—without blocking delivery.",
    },
    narrative: [
      "Security is a product requirement: breaches erode trust overnight. We help you prioritize fixes that matter—threat modeling, hardening, and continuous validation.",
      "From audits to pen tests to secure SDLC practices, we translate findings into engineering tasks your team can schedule and ship.",
    ],
    outcomes: [
      "Prioritized remediation mapped to business impact",
      "Secure defaults for APIs, cloud, and access control",
      "Testing evidence suitable for customers and auditors",
      "Developer-friendly guidance that speeds safe shipping",
    ],
    bullets: [
      "Security Audits",
      "Penetration Testing",
      "Access Control",
      "Cloud Security",
      "API Security",
      "Compliance Management",
    ],
  },
  {
    slug: "website-development",
    title: "Website Development",
    tagline:
      "Websites that feel premium, load instantly, and turn visitors into real conversations.",
    taglineParts: [
      "Websites that feel premium, load instantly, and ",
      "turn visitors into real conversations.",
    ],
    description:
      "Brand-forward sites and landing experiences engineered for speed, search visibility, and clear next steps—so your first impression matches the quality of your work.",
    heroPills: [
      "Core Web Vitals",
      "SEO-ready",
      "Conversion UX",
      "Accessible by default",
    ],
    heroAside: {
      kicker: "Your storefront, 24/7",
      title: "Built to rank, scroll, and convert",
      body: "Clean IA, persuasive CTAs, structured data, and performance budgets baked in—so marketing can iterate without breaking speed or SEO.",
    },
    narrative: [
      "Most “pretty” sites still leak trust: slow LCP, vague headlines, forms that feel like homework. We design around how people skim, compare, and decide—then ship markup and assets that stay fast on real devices and networks.",
      "From flagship marketing sites to campaign landers and light CMS workflows, you get measurable targets (speed, accessibility, events), sensible hosting and caching, and a codebase your team—or ours—can evolve.",
    ],
    outcomes: [
      "Hero and funnel copy aligned with how buyers actually decide—not generic filler",
      "Technical SEO, schema, and metadata hygiene that search engines can parse with confidence",
      "Analytics, heatmaps, and conversion events wired so you can improve with data",
      "Editor-friendly patterns when you need marketing to ship updates without a release train",
    ],
    bullets: [
      "Responsive business websites",
      "Landing pages that convert",
      "Fast, SEO-friendly implementation",
      "Online inquiry & contact flows",
      "Lightweight CMS setup if needed",
      "Ongoing support & enhancements",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function serviceDetailPath(slug: string): string {
  return `/services/${slug}`;
}
