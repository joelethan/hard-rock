import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import MissionSection from "@/components/MissionSection";
import FeaturedPrograms from "@/components/FeaturedPrograms";
import Gallery from "@/components/Gallery";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ServicesSection />
        <MissionSection />
        <FeaturedPrograms />
        <Gallery />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
