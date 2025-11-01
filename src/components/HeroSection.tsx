import { useState } from "react";
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

  const handleNextVideo = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videoSources.length);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
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
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="mb-6 text-6xl md:text-8xl font-bold text-glow animate-float">
          Enter the{" "}
          <span className="gaming-gradient bg-clip-text text-transparent">
            Zentry
          </span>
        </h1>
        <p className="mb-12 max-w-2xl text-xl text-muted-foreground">
          Where gamers unite, legends are born, and the impossible becomes reality.
          Join the revolution and experience gaming like never before.
        </p>
        
        <div className="flex gap-4">
          <Button
            size="lg"
            className="gaming-gradient text-lg px-8 py-6 hover:scale-105 transition-transform animate-pulse-glow"
          >
            Start Your Journey
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={handleNextVideo}
            className="glass-morphism text-lg px-8 py-6 hover:scale-105 transition-transform group"
          >
            NEXT
            <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Video Indicators */}
        <div className="absolute bottom-12 flex gap-2">
          {videoSources.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentVideoIndex(index);
                  setIsTransitioning(false);
                }, 300);
              }}
              className={`h-2 w-12 rounded-full transition-all ${
                index === currentVideoIndex
                  ? "bg-primary"
                  : "bg-muted hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
