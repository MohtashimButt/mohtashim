import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  const contactLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/MohtashimButt',
      color: 'hover:bg-[#333] hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/mohtashim-butt-a451b5206/',
      color: 'hover:bg-[#0077B5] hover:text-white'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:mohtashim.lums@gmail.com',
      color: 'hover:bg-[#EA4335] hover:text-white'
    }
  ];

  return (
    <section id="contact" className="py-20 gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 px-8 py-4 bg-card rounded-xl shadow-card transition-smooth border border-border ${link.color} group animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <link.icon className="w-6 h-6" />
                <span className="font-medium text-lg">{link.name}</span>
              </a>
            ))}
          </div>
          
          <div className="mt-12 p-8 bg-card rounded-2xl shadow-card border border-border animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <p className="text-muted-foreground mb-4">
              Prefer to send a direct message?
            </p>
            <a
              href="mailto:your.email@gmail.com"
              className="inline-block px-8 py-3 gradient-primary text-white rounded-lg font-medium shadow-elegant hover:shadow-xl hover:scale-105 transition-smooth"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
