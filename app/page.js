{/* Imported from components*/ }
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

{/* Navigation bar imported from components*/ }
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[url('/images/stardust.png')] bg-center bg-auto">
      {/* Navigation Bar*/}
      <Navbar />

      <div className="container mt-24 mx-auto px-12 py-4">
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}


/// bg-[url('/images/Seaside_EnviornmentBG.png')] bg-auto bg-center bg-repeat-x
/// <main className="flex min-h-screen flex-col bg-[url('/images/stardust.png')] bg-center bg-auto">