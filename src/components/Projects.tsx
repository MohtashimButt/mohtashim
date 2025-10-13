import { Github, ExternalLink } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import project4 from '@/assets/project-4.jpg';
import project5 from '@/assets/project-5.jpg';

interface Project {
  title: string;
  image: string;
  description: string[];
  github: string;
  demo?: string;
  poster?: string;
}

const projects: Project[] = [
  {
    title: "Geographically Generalisable DL Model for Greenspace Segmentation in Urban Areas",
    image: project1,
    description: [
      "Investigated the Land Use Land Cover remote sensing dataset from ESA, Sentinel, and Landsat satellites.",
      "Researched about different vegetation indices (NDVI, NDWI) using QGIS software that may shape urban mobility.",
      "Developed a DL model for urban greenspace segmentation and did spatio-temporal analysis of greenspaces for low-income countries (published at IGARSS).",
    ],
    github: "https://github.com/MohtashimButt/urban-greenspace-segmentation"
  },
  {
    title: "Digital Heritage Conservation using Semi-Supervised Learning",
    image: project2,
    description: [
      "Curated a dataset of around 1000+ petroglyphs from Chillas region of Northern Pakistan.",
      "Created a Deep Learning model to segment petroglyphs using semi-supervised learning.",
      "Automated the annotation + segmentation pipeline by incorporating DL model within LabelMe tool.",
    ],
    github: "https://github.com/MohtashimButt/Semi-supervised-annotation-tool",
  },
  {
    title: "Conversational Story Generator",
    image: project3,
    description: [
      "Fine-tuned BERT/GPT-3.5 on STORIUM dataset as a storyline guidance model following MCQA approach.",
      "Leveraged GPT-3.5 API for paragraph generation and DALL-E stable diffusion model for image generation.",
      "Deployed the project's frontend (JS) on Vercel and backend (python) on Pythonanywhere.",
    ],
    github: "https://github.com/yourusername/cloud-automation",
    demo: "https://gen-ai-woad.vercel.app/",
    poster: "https://www.canva.com/design/DAGEc-SOpm0/9g8xip8uJ2YFQd_gyd9uKA/view"
  },
  {
    title: "Learning Management System with RBAC",
    image: project5,
    description: [
      "Implemented frontend (in React JS) and backend (in Express) of a role-based access LMS.",
      "Created db schema, set up MongoDB cluster, and applied CRUD operations via self-engineered API calls.",
    ],
    github: "https://github.com/MohtashimButt/LMS"
  },
  {
    title: "Real-Time Lane Segmentation and Street's Top-View Generation via dashcam",
    image: project4,
    description: [
      "Designed an algorithm that takes video from a dashcam to automatically segment the road lane (using LaneNet) architecture) and detect vehicles (using the Yolov7 model) to assist in self-driving.",
      "Developed a dynamic homography mechanism to display a real-time orthographic top-view of the Lane.",
    ],
    github: "https://github.com/MohtashimButt/LaneDetectionProject"
  }
];

const Projects = () => {
  // URL to link STORIUM to; change if you prefer a different destination
  const storiumUrl = 'https://storium.com/';

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
                  {project.description.map((item, idx) => {
                    // split around the word STORIUM (case-sensitive)
                    const parts = item.split(/(STORIUM)/g);
                    return (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-sm leading-relaxed">
                          {parts.map((part, i) =>
                            part === 'STORIUM' ? (
                              <a
                                key={i}
                                href={storiumUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline font-medium"
                              >
                                {part}
                              </a>
                            ) : (
                              <span key={i}>{part}</span>
                            )
                          )}
                        </span>
                      </li>
                    );
                  })}
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
