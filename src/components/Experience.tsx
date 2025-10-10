import { Briefcase } from 'lucide-react';
import dfkiLogo from '@/assets/dfki_logo.png';
import careemLogo from '@/assets/careem_logo.png';
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
    role: "Guest Researcher",
    company: "German Research Center for Artificial Intelligence",
    logo: dfkiLogo,
    location: "Kaiserslautern, Germany (Remote)",
    period: "May 2025 - Present",
    responsibilities: [
      {
        text: "Built a Python app (and deployed using Gunicorn/Nginx) for an explainable GAT-based network graph using D3JS to predict gut-microbe to disease links across 120 diseases for potential drug-discovery.",
        link: "https://sds-genetic-interaction-analysis.opendfki.de/gut_brain/",
      },
      "Fine-tuned 100+ LLMs from Hugging Face for protein/DNA/RNA sequence classification, regression, and interaction.",
      {
        text: "Deployed 32 embedding methods, 24 ML classifiers with 3 data types via containerized Python app (FLASK).",
        link: "https://sds-genetic-interaction-analysis.opendfki.de/bio-experiment/",
      },
      {
        text: "Built an LLM-based research assistant leveraging AI agents (researcher, evaluator, experiment proposer) to suggest a novel hypothesis and research path.",
        link: "https://sds-genetic-interaction-analysis.opendfki.de/biomedical_discovery/",
      },
    ],
  },
  {
    role: "Software Engineer",
    company: "Careem",
    logo: careemLogo,
    location: "Dubai, UAE (Remote)",
    period: "Aug 2024 - May 2025",
    responsibilities: [
      "Updated a GOLANG microservice to add a bot for automatically creating a JIRA ticket against a Slack message.",
      "Stabilized two Go microservices by adding test coverage, optimizing SLO/SLA latencies, mitigating security vulnerabilities, and onboarding services to Dynatrace.",
      "Migrated a legacy internal tool to a Java+TypeScript+Vite micro-frontend, integrating it into Careem's central portal adopted by the Food team.",
      "Built a cross-microservice monitoring dashboard with SQL, Python, and internal tools, later adopted by the central engineering department for monitoring microservices.",
    ],
  },
  {
    role: "Machine Learning Intern",
    company: "Centre for Water Informatics and Technology.",
    location: "Lahore, Pakistan",
    period: "May 2023 - June 2023",
    logo: lumsLogo,
    responsibilities: [
      "Integrated four ESP-32 cameras to develop a low-cost unit for capturing a multi-directional (360°) view.",
      "Automated image capture, upload, and retrieval via a self-hosted site using PHP, Python, Arduino, and HTML.",
      "Contributed to open-source projects and team documentation",
      {
        text: "Fine-tuned a tiny-Yolov5 model for forest fire detection in the retrieved images to trigger an alarm.",
        link: "https://drive.google.com/file/d/1FvFCpzB2lRfscsHDdbdYB4m29-HbWsTE/view?usp=sharing",
      }

    ],
  },
];

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
                          {exp.company === "Centre for Water Informatics and Technology."
                            ? "Final Report"
                            : "Tool Link"}
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
