import Navbar from '@/components/Navbar';
import Home from '@/components/Home';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Publications from '@/components/Publications';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Resume from '@/components/Resume';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Home />
      <Education />
      <Experience />
      <Publications />
      <Projects />
      <Contact />
      <Resume />
      
      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Mohtashim Butt. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
