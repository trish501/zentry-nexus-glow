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
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
        {/* Centered NEXT Button */}
        <button
          onClick={handleNextVideo}
          className="circular-next-button group"
        >
          <span className="text-2xl font-bold">NEXT</span>
          <ChevronRight className="absolute right-8 top-1/2 -translate-y-1/2 w-8 h-8 group-hover:translate-x-1 transition-transform" />
        </button>

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
