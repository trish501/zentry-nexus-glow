import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const videoSources = [
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
];

const HeroSection = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scrollBlur, setScrollBlur] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const blurAmount = Math.min(scrollPosition / 100, 10);
      setScrollBlur(blurAmount);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNextVideo = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videoSources.length);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section 
      className="relative h-screen w-full overflow-hidden transition-all duration-300"
      style={{ filter: `blur(${scrollBlur}px)` }}
    >
      {/* Video Background */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        <video
          key={currentVideoIndex}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={videoSources[currentVideoIndex]} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col px-6 pt-32">
        {/* Left Side Content */}
        <div className="absolute left-12 top-32">
          <h2 className="text-8xl font-black text-foreground mb-4">REDEFINE</h2>
          <p className="text-base font-normal text-foreground max-w-md mb-6">
            Enter the metagame Layer Unleash the Play Economy
          </p>
          <Button className="bg-[#d4ff00] text-background hover:bg-[#d4ff00]/90 rounded-full px-8">
            Watch Trailer
          </Button>
        </div>

        {/* Right Bottom Text */}
        <div className="absolute right-12 bottom-32">
          <h2 className="text-8xl font-black text-foreground">GAMING</h2>
        </div>

        {/* Decorative Icon - Top Right */}
        <div className="absolute right-12 top-32">
          <svg className="w-16 h-16 text-[#d4ff00]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
          </svg>
        </div>

        {/* Centered NEXT Button - Only visible on hover of button itself */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <button
            onClick={handleNextVideo}
            className="circular-next-button group/button opacity-0 hover:opacity-100 transition-opacity duration-300"
          >
            <span className="text-2xl font-bold">NEXT</span>
            <ChevronRight className="absolute right-8 top-1/2 -translate-y-1/2 w-8 h-8" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
