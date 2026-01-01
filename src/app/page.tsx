import Header from '@/components/header';
import Hero from '@/components/sections/hero';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Certificates from '@/components/sections/certificates';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Skills />
        <Projects />
        <Certificates />
        <Footer />
      </main>
    </div>
  );
}
