import HeroSection from '../components/home/HeroSection'
import StudyListSection from '../components/home/StudyListSection'
import ValueSection from '../components/home/ValueSection'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <HeroSection />
        <StudyListSection />
        <ValueSection />
      </div>
    </main>
  );
}