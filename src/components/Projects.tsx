import { Github, ExternalLink } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';

interface Project {
  title: string;
  image: string;
  description: string[];
  github: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "Machine Learning Pipeline",
    image: project1,
    description: [
      "Built scalable ML pipeline processing 1M+ records daily",
      "Implemented feature engineering and model training automation",
      "Deployed using Docker and Kubernetes for high availability",
      "Achieved 95% accuracy on production data"
    ],
    github: "https://github.com/yourusername/ml-pipeline"
  },
  {
    title: "Real-time Analytics Dashboard",
    image: project2,
    description: [
      "Developed interactive dashboard with D3.js and React",
      "Real-time data streaming using WebSocket connections",
      "Optimized queries reducing load time by 60%",
      "Responsive design supporting mobile and desktop"
    ],
    github: "https://github.com/yourusername/analytics-dashboard",
    demo: "https://demo.example.com"
  },
  {
    title: "Cloud Infrastructure Automation",
    image: project1,
    description: [
      "Automated AWS infrastructure deployment with Terraform",
      "Implemented CI/CD pipeline using GitHub Actions",
      "Reduced deployment time from hours to minutes",
      "Cost optimization saving 30% on cloud expenses"
    ],
    github: "https://github.com/yourusername/cloud-automation"
  },
  {
    title: "API Gateway Service",
    image: project2,
    description: [
      "Designed microservices gateway handling 10K+ requests/sec",
      "Implemented rate limiting and authentication middleware",
      "Built monitoring dashboard with metrics and alerting",
      "99.99% uptime with automatic failover"
    ],
    github: "https://github.com/yourusername/api-gateway"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-smooth border border-border group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {project.title}
                </h3>
                
                <ul className="space-y-2 mb-6">
                  {project.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 gradient-primary text-white rounded-lg hover:shadow-elegant transition-smooth font-medium"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-secondary text-foreground rounded-lg hover:bg-muted transition-smooth font-medium"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
