export type Service = {
  slug: string
  tag: string
  title: string
  subtitle: string
  description: string
  image: string
  color: string
  stats: { value: string; label: string }[]
  features: { title: string; desc: string }[]
  process: { step: string; title: string; desc: string }[]
  highlights: string[]
}

export const SERVICES: Service[] = [
  {
    slug: "customer-experience",
    tag: "CX",
    title: "Customer Experience",
    subtitle: "Every interaction. Every channel. Every time.",
    description:
      "Our Customer Experience teams are trained to represent your brand with empathy, professionalism, and precision. We manage every touchpoint — voice, email, chat, and social — delivering consistent, high-quality support that builds loyalty and drives retention. From onboarding to escalation resolution, we become an extension of your team.",
    image:
      "https://png.pngtree.com/png-clipart/20250423/original/pngtree-call-center-operator-beautiful-woman-png-image_20866444.png",
    color: "#ede9fc",
    stats: [
      { value: "95%+", label: "CSAT Score" },
      { value: "< 30s", label: "Avg Response Time" },
      { value: "24 / 7", label: "Availability" },
      { value: "Omni", label: "Channel Coverage" },
    ],
    features: [
      {
        title: "Omni-Channel Management",
        desc: "Unified support across voice, email, live chat, social media, and messaging apps — seamlessly integrated.",
      },
      {
        title: "Empathy-First Training",
        desc: "Agents undergo rigorous empathy and de-escalation training to handle every customer interaction with care.",
      },
      {
        title: "Real-Time Escalation",
        desc: "Instant escalation protocols ensure complex issues reach the right person without delay.",
      },
      {
        title: "Quality Monitoring",
        desc: "Every interaction is scored and reviewed against strict quality benchmarks to maintain excellence.",
      },
      {
        title: "Voice of Customer Insights",
        desc: "We capture and synthesize customer feedback to surface actionable insights for your business.",
      },
      {
        title: "Complaint Resolution",
        desc: "Structured resolution frameworks that turn dissatisfied customers into loyal advocates.",
      },
    ],
    process: [
      { step: "01", title: "Discovery & Mapping", desc: "We audit your current CX landscape and map every customer journey touchpoint." },
      { step: "02", title: "Agent Training", desc: "Custom training programs built around your brand voice, product, and policies." },
      { step: "03", title: "Deployment", desc: "Phased launch with dedicated QA oversight and real-time monitoring from day one." },
      { step: "04", title: "Performance Optimization", desc: "Continuous coaching cycles and KPI reviews to drive constant improvement." },
    ],
    highlights: [
      "Dedicated brand ambassadors trained on your products",
      "SLA-backed response and resolution guarantees",
      "CSAT, NPS, and CES tracking in real time",
      "Seamless CRM and helpdesk integrations",
    ],
  },
  {
    slug: "technical-support",
    tag: "TECH",
    title: "Technical Support",
    subtitle: "Complex problems solved on first contact.",
    description:
      "Our certified technical agents bring deep product knowledge and structured troubleshooting methodology to every interaction. Whether it's Tier 1 password resets or complex Tier 3 infrastructure issues, our specialists resolve problems efficiently — reducing repeat contacts and increasing customer confidence in your product.",
    image:
      "https://res.cloudinary.com/geecu3mo/image/upload/v1787678993/637a7387-f603-4412-b3f7-a49192640e5b-removebg-preview.png",
    color: "#e0f0ff",
    stats: [
      { value: "89%", label: "First Contact Resolution" },
      { value: "Tier 1–3", label: "Support Levels" },
      { value: "24 / 7", label: "Technical Coverage" },
      { value: "500+", label: "Certifications Held" },
    ],
    features: [
      {
        title: "Multi-Tier Support",
        desc: "Structured Tier 1, 2, and 3 support paths ensuring every issue is handled at the right level.",
      },
      {
        title: "Remote Diagnostics",
        desc: "Advanced remote troubleshooting tools that resolve issues without needing on-site visits.",
      },
      {
        title: "SLA Management",
        desc: "Rigorous SLA tracking with automated alerts to ensure response and resolution targets are always met.",
      },
      {
        title: "Knowledge Base Development",
        desc: "We build and maintain living documentation to reduce resolution time and empower customers to self-serve.",
      },
      {
        title: "Escalation Protocols",
        desc: "Clear, structured escalation paths that get critical issues to senior engineers without friction.",
      },
      {
        title: "Device & Software Management",
        desc: "Support for hardware, software, SaaS platforms, and connected devices across enterprise environments.",
      },
    ],
    process: [
      { step: "01", title: "Product Deep-Dive", desc: "Intensive training on your tech stack, product architecture, and known issue libraries." },
      { step: "02", title: "Tooling Integration", desc: "We integrate with your ticketing, CRM, and diagnostic platforms for seamless workflows." },
      { step: "03", title: "Tiered Deployment", desc: "Agents deployed by skill level with intelligent routing to match issue complexity." },
      { step: "04", title: "Knowledge Optimization", desc: "Ongoing refinement of scripts, macros, and knowledge articles based on real cases." },
    ],
    highlights: [
      "Certified agents across major platforms and technologies",
      "First-contact resolution focus to reduce ticket backlog",
      "Real-time ticket tracking and escalation visibility",
      "Proactive issue detection through pattern analysis",
    ],
  },
  {
    slug: "sales-lead-generation",
    tag: "SALES",
    title: "Sales & Lead Generation",
    subtitle: "Revenue-driven teams built to convert.",
    description:
      "Our Sales and Lead Generation specialists are trained closers and consultative sellers who operate as a true extension of your revenue team. We run outbound prospecting campaigns, qualify inbound leads, manage pipelines, and drive measurable revenue outcomes — all with full transparency into performance metrics and ROI.",
    image:
      "https://png.pngtree.com/png-clipart/20231019/original/pngtree-smart-business-man-png-image_13371408.png",
    color: "#fef3e0",
    stats: [
      { value: "35%+", label: "Avg Conversion Rate" },
      { value: "2×", label: "Pipeline Growth" },
      { value: "Full", label: "CRM Integration" },
      { value: "ROI", label: "Transparent Reporting" },
    ],
    features: [
      {
        title: "Lead Qualification",
        desc: "Structured qualification frameworks (BANT, MEDDIC) to ensure only sales-ready leads reach your closers.",
      },
      {
        title: "Outbound Prospecting",
        desc: "High-volume, targeted outbound calling and email campaigns to fill your pipeline with qualified opportunities.",
      },
      {
        title: "Inbound Conversion",
        desc: "Trained agents capturing and converting every inbound inquiry with speed and consultative expertise.",
      },
      {
        title: "CRM Integration",
        desc: "Native integration with Salesforce, HubSpot, Pipedrive, and more for seamless pipeline management.",
      },
      {
        title: "Script Optimization",
        desc: "Data-driven script refinement using call recordings and conversion analytics to maximize results.",
      },
      {
        title: "Revenue Reporting",
        desc: "Full-funnel visibility from first touch to closed deal, with real-time dashboards and weekly reviews.",
      },
    ],
    process: [
      { step: "01", title: "ICP Definition", desc: "We work with your team to define your ideal customer profile and target segments." },
      { step: "02", title: "Campaign Setup", desc: "Build outreach sequences, scripts, and qualification criteria tailored to your offer." },
      { step: "03", title: "Pipeline Activation", desc: "Launch campaigns with daily performance tracking and rapid iteration on what works." },
      { step: "04", title: "Revenue Review", desc: "Weekly pipeline reviews and monthly revenue reporting with full attribution." },
    ],
    highlights: [
      "Dedicated sales pods aligned to your product and market",
      "BANT and MEDDIC qualification methodologies",
      "Full CRM data hygiene and pipeline integrity",
      "Commission-aligned performance incentives available",
    ],
  },
  {
    slug: "back-office",
    tag: "OPS",
    title: "Back Office",
    subtitle: "Efficient processing. Zero bottlenecks.",
    description:
      "Our Back Office operations teams handle the behind-the-scenes work that keeps your business running — document processing, data entry, order management, compliance checks, and more. With strict accuracy standards and ISO-certified processes, we free your front office to focus on customers while we handle the operational backbone.",
    image:
      "https://static.vecteezy.com/system/resources/previews/035/914/352/non_2x/ai-generated-3d-cartoon-man-in-white-suit-businessman-character-on-transparent-background-png.png",
    color: "#e8faf0",
    stats: [
      { value: "99.9%", label: "Processing Accuracy" },
      { value: "< 48h", label: "Standard Turnaround" },
      { value: "ISO", label: "Process Certified" },
      { value: "24 / 7", label: "Processing Windows" },
    ],
    features: [
      {
        title: "Data Entry & Management",
        desc: "High-accuracy data entry with double-verification protocols across any data format or system.",
      },
      {
        title: "Document Processing",
        desc: "Digitization, indexing, and processing of contracts, invoices, forms, and compliance documents.",
      },
      {
        title: "Claims Management",
        desc: "End-to-end claims intake, validation, and processing with full audit trail documentation.",
      },
      {
        title: "Order Processing",
        desc: "Fast and accurate order entry, fulfillment coordination, and exception handling.",
      },
      {
        title: "Compliance Checks",
        desc: "Systematic compliance verification ensuring every transaction meets regulatory and policy requirements.",
      },
      {
        title: "Operational Reporting",
        desc: "Daily, weekly, and monthly reporting packages giving you full visibility into processing volumes and accuracy.",
      },
    ],
    process: [
      { step: "01", title: "Process Audit", desc: "Map your existing back-office workflows to identify efficiency gaps and automation opportunities." },
      { step: "02", title: "SOP Development", desc: "Build standardized operating procedures tailored to your data and document types." },
      { step: "03", title: "QA Framework", desc: "Implement dual-verification and random sampling QA protocols to guarantee accuracy." },
      { step: "04", title: "Continuous Improvement", desc: "Regular reviews to refine processes, reduce turnaround time, and increase throughput." },
    ],
    highlights: [
      "99.9% accuracy SLA on all data processing",
      "Dual-entry verification on critical documents",
      "Secure data handling with full compliance",
      "Scalable capacity up or down with your volume",
    ],
  },
  {
    slug: "multilingual-support",
    tag: "MULTI",
    title: "Multilingual Support",
    subtitle: "Speak their language. Build their trust.",
    description:
      "Communicate with your customers in their native language with our team of 30+ language specialists. Our multilingual agents are not just translators — they are culturally fluent representatives who understand regional nuances, local expectations, and communication styles. We give your brand a genuinely local voice in every market you serve.",
    image:
      "https://res.cloudinary.com/geecu3mo/image/upload/v1787679017/images__2_-removebg-preview.png",
    color: "#fff0f5",
    stats: [
      { value: "30+", label: "Languages Supported" },
      { value: "50+", label: "Countries Covered" },
      { value: "24 / 7", label: "Global Coverage" },
      { value: "Native", label: "Speaker Standard" },
    ],
    features: [
      {
        title: "Native Language Speakers",
        desc: "All agents are native or near-native speakers, ensuring natural, fluent customer conversations.",
      },
      {
        title: "Cultural Localization",
        desc: "Agents trained on regional cultural expectations, idioms, and communication preferences.",
      },
      {
        title: "Translation Services",
        desc: "Real-time and batch translation for documentation, chat, and email support workflows.",
      },
      {
        title: "Regional Expertise",
        desc: "Dedicated regional teams with in-depth knowledge of local regulations and market conditions.",
      },
      {
        title: "Time Zone Coverage",
        desc: "Global follow-the-sun model ensuring native language support is available around the clock.",
      },
      {
        title: "Language Quality Assurance",
        desc: "Native QA reviewers scoring every interaction for linguistic accuracy and cultural appropriateness.",
      },
    ],
    process: [
      { step: "01", title: "Language Assessment", desc: "Identify the languages your customers use and priority markets to serve." },
      { step: "02", title: "Agent Selection", desc: "Source and train native speakers with cultural expertise in your target regions." },
      { step: "03", title: "Localization Testing", desc: "Validate scripts, templates, and knowledge base content in each target language." },
      { step: "04", title: "Global Deployment", desc: "Launch with follow-the-sun scheduling for continuous native language availability." },
    ],
    highlights: [
      "Native speakers — not automated translation tools",
      "Cultural training embedded in every program",
      "Consistent brand voice across all languages",
      "Rapid language expansion as you grow into new markets",
    ],
  },
  {
    slug: "real-time-analyst",
    tag: "RTA",
    title: "Real-Time Analyst Services",
    subtitle: "On the floor. In the moment. Always responsive.",
    description:
      "Our Real-Time Analysts are embedded on the operations floor, monitoring every metric as it happens. They watch queue volumes, agent availability, handle times, and SLA adherence in real time — and they act immediately when deviations occur. RTAs are the nerve center of a high-performing contact center, and ours are the best in the business.",
    image:
      "https://thumbs.wbm.im/pw/small/e95ecc1f7d563d10107eb82d1542b263.png",
    color: "#eef6ff",
    stats: [
      { value: "< 5min", label: "Deviation Response" },
      { value: "100%", label: "Floor Coverage" },
      { value: "Live", label: "Dashboard Monitoring" },
      { value: "Real-Time", label: "Coaching & Alerts" },
    ],
    features: [
      {
        title: "Live Floor Monitoring",
        desc: "Continuous real-time oversight of all agents, queues, and KPIs across every channel simultaneously.",
      },
      {
        title: "Instant Coaching",
        desc: "RTAs provide in-the-moment guidance to agents during complex or escalating interactions.",
      },
      {
        title: "Deviation Alerts",
        desc: "Automated and manual alerts triggered the moment metrics deviate from target thresholds.",
      },
      {
        title: "Performance Dashboards",
        desc: "Live dashboards showing AHT, ASA, abandonment rate, adherence, and occupancy in real time.",
      },
      {
        title: "Queue Management",
        desc: "Dynamic staffing adjustments and queue rebalancing to manage volume spikes without SLA breaches.",
      },
      {
        title: "Shift-Level Reporting",
        desc: "Interval and shift-end reports capturing performance variance and corrective actions taken.",
      },
    ],
    process: [
      { step: "01", title: "Tool Integration", desc: "Connect your WFM, ACD, and reporting platforms for unified real-time visibility." },
      { step: "02", title: "Threshold Calibration", desc: "Set SLA targets, alert thresholds, and escalation triggers for every key metric." },
      { step: "03", title: "RTA Assignment", desc: "Deploy experienced RTAs with defined spans of control and response protocols." },
      { step: "04", title: "Reporting Cadence", desc: "Establish interval, daily, and weekly reporting rhythms for management visibility." },
    ],
    highlights: [
      "Sub-5-minute response to any performance deviation",
      "24/7 RTA coverage across all operating hours",
      "Integrated with your existing WFM and ACD tools",
      "Proactive staffing adjustments to prevent SLA misses",
    ],
  },
  {
    slug: "workforce-performance",
    tag: "WFM",
    title: "Workforce & Performance",
    subtitle: "The right people. The right place. The right time.",
    description:
      "Our Workforce Management and Performance teams combine predictive scheduling, real-time adherence monitoring, and data-driven coaching to keep your operation running at peak efficiency. We forecast demand, plan capacity, schedule optimally, and continuously track performance — giving you the operational foundation to hit every target, every month.",
    image:
      "https://res.cloudinary.com/geecu3mo/image/upload/v1787679937/robot-blank-sign-removebg-preview.png",
    color: "#f0f7ee",
    stats: [
      { value: "95%+", label: "Schedule Adherence" },
      { value: "30%", label: "Efficiency Gain" },
      { value: "Predictive", label: "Demand Forecasting" },
      { value: "Daily", label: "Performance Reviews" },
    ],
    features: [
      {
        title: "Predictive Scheduling",
        desc: "AI-assisted demand forecasting that builds optimal schedules weeks in advance, reducing over and understaffing.",
      },
      {
        title: "Capacity Planning",
        desc: "Strategic headcount modeling aligned to volume forecasts, attrition, and business growth projections.",
      },
      {
        title: "Performance Analytics",
        desc: "Agent-level and team-level KPI tracking across AHT, quality, adherence, and productivity metrics.",
      },
      {
        title: "Shrinkage Management",
        desc: "Systematic tracking and management of all shrinkage factors to protect your staffed hours.",
      },
      {
        title: "Volume Forecasting",
        desc: "Multi-variable forecasting models accounting for seasonality, campaigns, and historical patterns.",
      },
      {
        title: "KPI Optimization Programs",
        desc: "Targeted coaching plans tied directly to individual and team performance gaps identified in data.",
      },
    ],
    process: [
      { step: "01", title: "Data Integration", desc: "Pull historical volume, handle time, and adherence data into our forecasting models." },
      { step: "02", title: "Baseline Forecasting", desc: "Build your first demand forecast and scheduling model against validated baselines." },
      { step: "03", title: "WFM System Setup", desc: "Deploy scheduling, adherence tracking, and reporting within your WFM platform." },
      { step: "04", title: "Continuous Refinement", desc: "Weekly forecast accuracy reviews and monthly model recalibration for continuous improvement." },
    ],
    highlights: [
      "Forecast accuracy above 95% across all volume types",
      "Automated schedule publishing and shift management",
      "Real-time adherence alerts for proactive intervention",
      "Monthly capacity planning aligned to business growth",
    ],
  },
  {
    slug: "ai-automation",
    tag: "AI",
    title: "AI & Automation",
    subtitle: "Intelligent scale without losing the human touch.",
    description:
      "We deploy AI and automation not to replace people, but to make them dramatically more effective. Our AI-assisted workflows handle repetitive tasks, surface real-time guidance to agents, and automate routine processes — allowing your human team to focus on complex, high-value interactions where empathy and judgment matter most.",
    image:
      "https://res.cloudinary.com/geecu3mo/image/upload/v1787678994/AI_agent_utilities.webp",
    color: "#f3eeff",
    stats: [
      { value: "60%", label: "Task Automation Rate" },
      { value: "40%", label: "Cost Reduction" },
      { value: "Human+AI", label: "Blended Model" },
      { value: "Always", label: "Continuously Learning" },
    ],
    features: [
      {
        title: "AI-Assisted Agents",
        desc: "Real-time AI guidance tools that surface suggested responses, relevant knowledge articles, and next-best actions during live interactions.",
      },
      {
        title: "Intelligent Chatbots",
        desc: "Conversational AI handling tier-1 inquiries 24/7, with seamless handoff to live agents when needed.",
      },
      {
        title: "Process Automation (RPA)",
        desc: "Robotic process automation eliminating manual, repetitive back-office tasks with zero errors.",
      },
      {
        title: "AI Quality Monitoring",
        desc: "Automated QA scoring of 100% of interactions, identifying coaching opportunities at scale.",
      },
      {
        title: "Predictive Analytics",
        desc: "Machine learning models forecasting customer needs, churn risk, and upsell opportunities before they surface.",
      },
      {
        title: "Natural Language Processing",
        desc: "NLP-powered sentiment analysis and intent detection across voice, chat, and email channels.",
      },
    ],
    process: [
      { step: "01", title: "Automation Assessment", desc: "Map your current workflows to identify the highest-value automation opportunities." },
      { step: "02", title: "AI Tool Selection", desc: "Select and configure the right AI tools for your use case — copilot, chatbot, or RPA." },
      { step: "03", title: "Pilot & Validate", desc: "Run controlled pilots with human oversight to validate accuracy and customer experience impact." },
      { step: "04", title: "Scale & Optimize", desc: "Scale proven automations with continuous model training and performance monitoring." },
    ],
    highlights: [
      "Human-in-the-loop design — AI augments, not replaces",
      "Chatbots trained on your specific product and policies",
      "100% interaction coverage for AI quality scoring",
      "Continuous model improvement from live interaction data",
    ],
  },
]

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug)
}
