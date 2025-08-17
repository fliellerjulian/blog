import Header from '@/components/Header';
import SocialLinks from '@/components/SocialLinks';
import RecommendedReading from '@/components/RecommendedReading';
import ResearchPapers from '@/components/ResearchPapers';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <SocialLinks />
      <RecommendedReading />
      <ResearchPapers />
      
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400">
            © {new Date().getFullYear()} Julian Flieller. Built with Next.js and passion for AI research.
          </p>
        </div>
      </footer>
    </div>
  );
}
