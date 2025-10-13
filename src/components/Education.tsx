import { GraduationCap } from 'lucide-react';
import lumsLogo from '@/assets/lums_logo.png';

interface EducationItem {
  degree: string;
  institution: string;
  logo?: string;
  location: string;
  period: string;
  details: string[];
}

const education: EducationItem[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "LUMS School of Science and Engineering",
    logo: lumsLogo,
    location: "Lahore, Pakistan",
    period: "2020 - 2024",
    details: [
    //   "Comprehensive curriculum covering algorithms, data structures, software engineering, and machine learning",
    //   "Specialized coursework in artificial intelligence, computer vision, and bioinformatics",
    //   "Hands-on experience with modern programming languages and frameworks",
    //   "Research experience in machine learning applications for biomedical data analysis"
    ]
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Education
        </h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-smooth border border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header row: logo + institution (left) | degree (right) */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-2">
                <div className="flex items-center gap-4">
                  {edu.logo ? (
                    <img
                      src={edu.logo}
                      alt={`${edu.institution} logo`}
                      className="w-16 h-16 object-contain"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-primary" />
                    </div>
                  )}
                  <p className="text-xl font-semibold text-primary">{edu.institution}</p>
                </div>
                <h3 className="text-2xl font-bold text-foreground text-right">{edu.degree}</h3>
              </div>

              {/* Sub-row: location (left) | date (right) */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
                <p className="text-muted-foreground italic">{edu.location}</p>
                <p className="text-sm text-muted-foreground mt-1 md:mt-0">{edu.period}</p>
              </div>

              {/* Details */}
              <ul className="space-y-2 mt-4">
                {edu.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary mt-1.5">•</span>
                    <span>{detail}</span>
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

export default Education;
