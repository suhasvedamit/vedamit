export type FeatureGroup = {
  title: string;
  items: string[];
};

export type CaseStudy = {
  category: string;
  title: string;
  description: string;
  technologies: string[];
  features: FeatureGroup[];
  outcomes: string[];
};

/** Sourced from https://suhasvedamit.github.io/vedamit/portfolio/ */
export const caseStudies: CaseStudy[] = [
  {
    category: "AI/ML Solution",
    title: "AI-Based Document Classification System",
    description:
      "Implemented an AI-based document classification system using Google Cloud Vertex AI to automate the categorization and analysis of legal and business documents.",
    technologies: [
      "Google Vertex AI",
      "BERT",
      "Google Cloud Storage",
      "Google Cloud Functions",
      "Python (Flask)",
      "Google Drive",
    ],
    features: [
      {
        title: "Document Classification",
        items: [
          "Utilized Vertex AI's AutoML for training a custom text classification model",
          "Capable of categorizing documents into predefined categories",
          "Ensures accurate categorization with minimal human supervision",
        ],
      },
      {
        title: "Data Extraction",
        items: [
          "Leveraged Vertex AI for building models to extract key data fields",
          "Used NLP techniques to identify and extract relevant data points",
          "Automated extraction of dates, amounts, customer names, and addresses",
        ],
      },
      {
        title: "Custom Model Training",
        items: [
          "Utilized Vertex AI Workbench for custom model training",
          "Integrated BERT for NLP tasks and TensorFlow for data extraction",
          "Fine-tuned models on business-specific datasets",
        ],
      },
      {
        title: "Cloud Integration",
        items: [
          "Secure document storage in Google Cloud Storage",
          "Automated document pipeline using Cloud Functions",
          "Seamless integration with existing systems",
        ],
      },
      {
        title: "Real-Time Processing",
        items: [
          "Real-time document processing via API endpoint",
          "On-demand classification and extraction",
          "Automatic handling of document processing in seconds",
        ],
      },
      {
        title: "Compliance Monitoring",
        items: [
          "Automatic compliance checking against guidelines",
          "Generation of compliance reports",
          "Continuous monitoring and validation",
        ],
      },
    ],
    outcomes: [
      "Reduced processing time from hours to minutes",
      "Achieved over 95% accuracy in classification",
      "Scalable to process thousands of documents",
      "Significant cost reduction in manual processing",
    ],
  },
  {
    category: "AI/ML Solution",
    title: "Customer Churn Prediction System",
    description:
      "Built a powerful AI-based Customer Churn Prediction System using Amazon SageMaker for a telecom company to predict and prevent customer churn.",
    technologies: [
      "Amazon SageMaker",
      "Python (Scikit-learn, Pandas, NumPy)",
      "AWS Lambda",
      "API Gateway",
      "Amazon RDS (PostgreSQL)",
      "React.js + AWS Amplify",
    ],
    features: [
      {
        title: "Predictive Modeling",
        items: [
          "Machine learning model with 92% accuracy",
          "Comprehensive feature analysis",
          "Customer behavior prediction",
        ],
      },
      {
        title: "Automated Model Training",
        items: [
          "Amazon SageMaker AutoPilot integration",
          "Automatic algorithm selection",
          "Monthly model retraining pipelines",
        ],
      },
      {
        title: "Real-Time Prediction API",
        items: [
          "SageMaker Endpoints deployment",
          "Instant churn risk scoring",
          "CRM system integration",
        ],
      },
      {
        title: "Actionable Insights",
        items: [
          "Interactive scoring dashboard",
          "Risk assessment visualization",
          "Automated retention action triggers",
        ],
      },
      {
        title: "Model Monitoring",
        items: [
          "SageMaker Model Monitor integration",
          "Drift detection",
          "Automated retraining triggers",
        ],
      },
    ],
    outcomes: [
      "18% reduction in customer churn",
      "$300K annual revenue increase",
      "40% reduction in manual efforts",
      "Scalable to 1M+ customer predictions",
    ],
  },
  {
    category: "Agentic AI Solution",
    title: "Intelligent Business Process Automation with CrewAI",
    description:
      "Developed an advanced business process automation system using CrewAI, implementing autonomous AI agents that collaborate to handle complex business workflows and decision-making processes.",
    technologies: [
      "CrewAI",
      "Python",
      "LangChain",
      "OpenAI GPT-4",
      "FastAPI",
      "PostgreSQL",
      "Redis",
    ],
    features: [
      {
        title: "Multi-Agent Collaboration",
        items: [
          "Implemented specialized AI agents for different business functions",
          "Created a hierarchical agent structure for complex decision-making",
          "Developed inter-agent communication protocols",
        ],
      },
      {
        title: "Process Automation",
        items: [
          "Automated end-to-end business workflows",
          "Intelligent task distribution and prioritization",
          "Real-time process monitoring and optimization",
        ],
      },
      {
        title: "Decision Support System",
        items: [
          "AI-powered decision analysis and recommendations",
          "Risk assessment and mitigation strategies",
          "Automated compliance checking and validation",
        ],
      },
      {
        title: "Integration & Scalability",
        items: [
          "Seamless integration with existing business systems",
          "Horizontal and vertical scaling capabilities",
          "Modular architecture for easy expansion",
        ],
      },
      {
        title: "Monitoring & Analytics",
        items: [
          "Real-time performance monitoring",
          "Advanced analytics and reporting",
          "Predictive maintenance and optimization",
        ],
      },
    ],
    outcomes: [
      "75% reduction in manual process handling",
      "60% improvement in decision-making speed",
      "40% cost reduction in operational processes",
      "99.9% uptime for critical business processes",
    ],
  },
  {
    category: "Full-Stack Development",
    title: "Enterprise Account Management Platform",
    description:
      "Built a comprehensive account management platform for financial institutions, featuring advanced security, real-time transaction processing, and intelligent reporting capabilities.",
    technologies: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "Docker",
      "AWS",
      "JWT Authentication",
    ],
    features: [
      {
        title: "Account Management",
        items: [
          "Multi-currency account support",
          "Real-time balance updates",
          "Transaction history and reconciliation",
          "Automated account statements",
        ],
      },
      {
        title: "Security & Compliance",
        items: [
          "Multi-factor authentication",
          "Role-based access control",
          "Audit logging and monitoring",
          "GDPR and PCI compliance",
        ],
      },
      {
        title: "Transaction Processing",
        items: [
          "Real-time transaction processing",
          "Automated payment scheduling",
          "Batch processing capabilities",
          "Transaction validation and verification",
        ],
      },
      {
        title: "Reporting & Analytics",
        items: [
          "Customizable dashboards",
          "Real-time analytics",
          "Automated report generation",
          "Data visualization tools",
        ],
      },
      {
        title: "Integration Capabilities",
        items: [
          "RESTful API architecture",
          "Third-party system integration",
          "Webhook support",
          "API documentation and SDK",
        ],
      },
    ],
    outcomes: [
      "50% reduction in transaction processing time",
      "99.99% system uptime",
      "Zero security breaches since launch",
      "Support for 1M+ daily transactions",
    ],
  },
];
