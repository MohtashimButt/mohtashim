import professionalPhoto from '@/assets/me_but_boujee_with_white_background.png';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              Hi, I'm{' '}
              <span className="text-muted-foreground leading-relaxed">
                Mohtashim Butt
              </span>
              <span className="text-2xl ml-2">🕷️</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              I graduated in 2024 with a Bachelor's in Computer Science from {' '}
              <a
                href="https://www.sse.lums.edu.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium transition-smooth"
              >
                LUMS School of Science and Engineering
              </a>
              . With great power comes great responsibility! 🕸️
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Currently, I'm working at{' '}
              <a
                href="https://www.dfki.de/en/web"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium transition-smooth"
              >
                German Research Center for Artificial Intelligence
              </a>
              , as a Guest Researcher, I fine-tune LLMs on Protein, DNA, and RNA
              sequences for classification, regression, and interaction tasks. I
              also deploy Python Applications (Django or Flask) on Gunicorn
              (reverse proxied with Nginx). Previously, I worked as a Software
              Engineer (Backend) at {' '}
              <a
                href="https://www.careem.com/en-AE/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium transition-smooth"
              >
                Careem
              </a>{' '}
              (an everything app in the MENA region), where I developed, scaled,
              and maintained Go microservices.
            </p>
            <div className="flex gap-4 pt-4">
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3 gradient-primary text-white rounded-lg font-medium shadow-elegant hover:shadow-xl hover:scale-105 transition-smooth"
              >
                Get in Touch
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('projects');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3 bg-secondary text-foreground rounded-lg font-medium hover:bg-muted transition-smooth"
              >
                View Projects
              </button>
            </div>
          </div>

          {/* Photo Section */}
          <div
            className="flex flex-col items-center justify-center animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="relative">
              <div className="absolute inset-0 gradient-primary opacity-20 blur-3xl rounded-full" />
              <img
                src={professionalPhoto}
                alt="Professional headshot"
                className="relative rounded-2xl shadow-elegant w-full max-w-md h-auto object-cover"
              />
            </div>

            {/* Email Below Photo */}
            <p className="mt-4 text-lg text-muted-foreground font-medium hover:text-primary transition-smooth select-all">
              mohtashim.lums@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
