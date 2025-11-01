import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InfoCards from "@/components/InfoCards";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <InfoCards />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
