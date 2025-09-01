import Header from "@/components/Header";
import SocialLinks from "@/components/SocialLinks";
import RecommendedReading from "@/components/RecommendedReading";
import ResearchPapers from "@/components/ResearchPapers";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <SocialLinks />
      <RecommendedReading />
      <ResearchPapers />
      
      <footer className="w-full bg-white py-8">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="text-center text-slate-600 text-sm">
            <p className="flex items-center justify-center gap-1">
              Made with 
              <span className="text-red-500">❤️</span>
              by Julian Flieller
            </p>
            <div className="flex items-center justify-center gap-4 mt-2">
              <a
                href="https://github.com/fliellerjulian/blog"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-blue-600 transition-colors"
              >
                Source code
              </a>
              <span className="text-slate-300">•</span>
              <span className="text-slate-500">
                © {new Date().getFullYear()}
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
