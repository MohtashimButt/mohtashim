import { Briefcase } from 'lucide-react';
import acornLogo from '@/assets/acorn.png';
import careemLogo from '@/assets/careem_logo.png';
import cityAtLumsLogo from '@/assets/cityatlums.png';
import lumsLogo from '@/assets/lums_logo.png';

interface ExperienceItem {
  role: string;
  company: string;
  logo?: string;
  location: string;
  period: string;
  responsibilities: (string | { text: string; link: string })[];
}

const experiences: ExperienceItem[] = [
  {
    role: "AI & Automation Engineer",
    company: "Acorn IT Services LLC.",
    logo: acornLogo,
    location: "California, USA (Remote)",
    period: "Nov. 2025 - Present",
    responsibilities: [
      "Built a full-stack data platform end-to-end, including an API layer, a 21-table RDS PostgreSQL data model, and an AWS Bedrock/Claude inference stage for automated per-client analytical reports.",
      "Designed the data ingestion and PII-scrubbing pipeline to run at $50/month against a $250 budget.",
      "Shipped 10+ backend automation services integrating REST APIs including Autotask and Datto RMM across 70 clients, cutting approximately 350 hours of manual work per month.",
      "Engineered an end-to-end monitoring pipeline (API polling, FastAPI, InfluxDB, and Grafana) for job health across 70 clients, saving $100/month.",
      "Led experiment design and evaluation for an AI ticket-classification model across 8 queues and 257 skills, reaching approximately 90% routing accuracy while keeping compliance-sensitive paths deterministic.",
      "Diagnosed and resolved L1-L3 infrastructure issues across 70+ client environments, using recurring failure data to prioritize automation targets.",
    ],
  },
  {
    role: "Software Engineer 1",
    company: "Careem (Uber Inc.)",
    logo: careemLogo,
    location: "Dubai, UAE (Remote)",
    period: "Aug. 2024 - Sept. 2025",
    responsibilities: [
      "Developed a bot in Go for Slack-to-JIRA ticket creation, automating 80% of the Mobile team's GitHub PR workflows.",
      "Owned a production Go backend microservice, driving test coverage to 90%, managing SLO/SLA latencies, mitigating security vulnerabilities, and building Dynatrace log and metrics monitoring.",
      "Rebuilt an internal tool's backend and frontend in Go and a TypeScript/Vite micro-frontend architecture, integrating it into a centralized portal.",
      "Designed and maintained a centralized data and health dashboard spanning several backend microservices, combining SQL-based data analysis with a Python-driven internal-tooling backend.",
    ],
  },
  {
    role: "Research Assistant",
    company: "CITY at LUMS",
    logo: cityAtLumsLogo,
    location: "Lahore, Pakistan",
    period: "Aug. 2023 - Aug. 2024",
    responsibilities: [
      "Collected satellite imagery via GEID, annotated with LabelMe, and hosted on Roboflow.",
      "Developed a geographically transferable DL model for binary segmentation of urban greenspace.",
      "Integrated NDVI mask as a post-processing step for enhanced segmentation.",
      "Automated stitching of segmented greenspace images for visualizing Islamabad's F-7 Sector.",
      "First authored a peer-reviewed paper on this work, published at IEEE IGARSS 2025.",
    ],
  },
  {
    role: "Machine Learning Intern",
    company: "Centre for Water Informatics and Technology",
    logo: lumsLogo,
    location: "Lahore, Pakistan",
    period: "May 2023 - June 2023",
    responsibilities: [
      "Built a full-stack embedded system using four ESP-32 cameras, a self-hosted PHP/Python/Arduino backend, and a tiny-YOLOv5 model fine-tuned on captured frames for real-time forest-fire detection.",
      {
        text: "Read the project report.",
        link: "https://drive.google.com/file/d/1FvFCpzB2lRfscsHDdbdYB4m29-HbWsTE/view?usp=sharing",
      },
    ],
  },
  {
    role: "Teaching Assistant",
    company: "Lahore University of Management Sciences",
    location: "Lahore, Pakistan",
    period: "Fall 2023 & Spring 2024",
    logo: lumsLogo,
    responsibilities: [
      "Teaching Assistant for Deep Learning (CS-5312), Spring 2025.",
      "Teaching Assistant for Software Engineering (CS-360), Spring 2024.",
      "Teaching Assistant for Computer Vision Fundamentals (CS-5310), Fall 2023.",
      "Teaching Assistant for Programming Fundamentals (CS-200), Spring 2023.",
      "Teaching Assistant for Computational Problem Solving (CS-100), Fall 2022.",
      "Teaching Assistant for Calculus 1 (MATH-101), Spring 2022.",
    ],
  },
];

const getLinkText = (company: string) => {
  if (company === "Centre for Water Informatics and Technology") return "Project report";
  return "Related link";
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Work Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-smooth border border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header row: logo + company (left) | role (right) */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-2">
                <div className="flex items-center gap-4">
                  {exp.logo ? (
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-16 h-16 object-contain"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Briefcase className="w-8 h-8 text-primary" />
                    </div>
                  )}
                  <p className="text-xl font-semibold text-primary">{exp.company}</p>
                </div>
                <h3 className="text-2xl font-bold text-foreground text-right">{exp.role}</h3>
              </div>

              {/* Sub-row: location (left) | date (right) */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
                <p className="text-muted-foreground italic">{exp.location}</p>
                <p className="text-sm text-muted-foreground mt-1 md:mt-0">{exp.period}</p>
              </div>

              {/* Responsibilities */}
              <ul className="space-y-2 mt-4">
                {exp.responsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary mt-1.5">•</span>
                    {typeof item === "string" ? (
                      <span>{item}</span>
                    ) : (
                      <span>
                        {item.text}{" "}
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          {getLinkText(exp.company)}
                        </a>
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
