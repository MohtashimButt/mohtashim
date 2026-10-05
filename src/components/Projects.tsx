import { Github, ExternalLink } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project4 from '@/assets/project-4.jpg';

interface Project {
  title: string;
  image?: string;
  description: string[];
  github: string;
  demo?: string;
  poster?: string;
}

const projects: Project[] = [
  {
    title: "Urban Green-Space Segmentation",
    image: project1,
    description: [
      "Developed a deep-learning model for urban green-space segmentation using satellite imagery and conducted spatio-temporal analysis across developing countries.",
      "Research published at IEEE IGARSS 2025.",
    ],
    github: "https://github.com/MohtashimButt/urban-greenspace-segmentation"
  },
  {
    title: "Automatic Annotation Tool via Semi-Supervised Learning",
    image: project2,
    description: [
      "Trained and fine-tuned a DeepLabv3-ResNet model on manual petroglyph annotations to generate masks and label JSONs for unseen images from a single bounding box.",
    ],
    github: "https://github.com/MohtashimButt/Semi-supervised-annotation-tool",
  },
  {
    title: "Cloud-Native Ride-Hailing Microservices",
    description: [
      "Designed and deployed five containerized backend services on AWS ECS Fargate behind an internal ALB, with ECR and path-based API routing.",
      "Served the frontend with S3 and CloudFront.",
    ],
    github: "https://github.com/MohtashimButt/ride-hailing-user-service",
  },
  {
    title: "Lane Segmentation for Autonomous Driving",
    image: project4,
    description: [
      "Combined LaneNet segmentation, YOLOv7 vehicle detection, and dynamic homography to render a real-time orthographic lane view.",
    ],
    github: "https://github.com/MohtashimButt/LaneDetectionProject"
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
              {project.image && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
              )}

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {project.title}
                </h3>

                <ul className="space-y-2 mb-6">
                  {project.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-sm leading-relaxed">{item}</span>
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

                  {/* Poster button: visible only when poster link exists */}
                  {project.poster && (
                    <a
                      href={project.poster}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-border text-foreground rounded-lg hover:bg-muted transition-smooth font-medium"
                    >
                      <ExternalLink size={18} />
                      Poster
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
