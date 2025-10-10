import { BookOpen } from 'lucide-react';
import igrssLogo from '@/assets/igarss_logo.png';

interface Publication {
  title: string;
  authors: string;
  conference: string;
  logo?: string;
  year: string;
  doi: string;
}

const publications: Publication[] = [
  {
    title: "Geographically Generalisable Urban Green Space Segmentation for Developing Countries",
    authors: "Mohtashim Butt, Nawaal Siddique, Fatima Naweed, Zubair Khalid",
    conference: "IEEE International Geoscience and Remote Sensing Symposium, Brisbane, Australia",
    logo: igrssLogo,
    year: "2025",
    doi: "https://drive.google.com/file/d/1PH3w9LA_aVHwLkxBeJiJKXSDpn7Rn0sU/view?usp=sharing"
  }
];

const Publications = () => {
  return (
    <section id="publications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Publications</h2>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-elegant transition-smooth border border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                {/* logo block */}
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 overflow-hidden">
                  {pub.logo ? (
                    <img
                      src={pub.logo}
                      alt={`${pub.title} logo`}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-primary" />
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <a
                    href={pub.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-bold text-foreground hover:text-primary transition-smooth inline-block mb-2"
                  >
                    {pub.title}
                  </a>

                  <p className="text-muted-foreground mb-2">{pub.authors}</p>

                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">{pub.conference}</span>
                    {' • '}
                    {pub.year}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
