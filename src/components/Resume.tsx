import { Download, FileText } from 'lucide-react';
import resumePdf from '@/assets/Mohtashim_BUTT_Resume_.pdf'; // Vite/CRA: import works. Next.js: put file in /public and use '/Mohtashim_BUTT_Resume_.pdf'

const Resume = () => {
  // If using Next.js, change to: const resumeUrl = '/Mohtashim_BUTT_Resume_.pdf'
  const resumeUrl = resumePdf;

  const lastUpdated = new Date().toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section id="resume" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Resume</h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border animate-fade-in">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Professional Resume</h3>
                  <p className="text-muted-foreground">View or download my full resume</p>
                </div>
              </div>

              <a
                href={resumeUrl}
                download="Mohtashim_Butt_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 gradient-primary text-white rounded-lg hover:shadow-elegant transition-smooth font-medium whitespace-nowrap"
              >
                <Download size={20} />
                Download PDF
              </a>
            </div>

            {/* PDF Viewer */}
            <div
              className="relative w-full bg-muted rounded-xl overflow-hidden"
              style={{ height: '600px' }}
            >
              {resumeUrl ? (
                // Primary approach: iframe. Fallback: object tag
                <iframe
                  src={resumeUrl}
                  title="Resume PDF"
                  className="w-full h-full border-0"
                  // allowFullScreen optional
                />
              ) : (
                // Only show placeholder when no resume is available
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="text-center">
                    <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-4">
                      Place your resume PDF in the <code className="bg-secondary px-2 py-1 rounded">public/</code> or update the import path
                    </p>
                    <p className="text-sm text-muted-foreground">The PDF viewer will display here once the file is available</p>
                  </div>
                </div>
              )}
            </div>

            <p className="text-sm text-muted-foreground text-center mt-6">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
