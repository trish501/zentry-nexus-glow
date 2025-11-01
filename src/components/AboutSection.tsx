import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".scroll-fade-in");
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="scroll-fade-in">
            <h2 className="text-5xl font-bold mb-6 text-glow">
              The Future of Gaming is Here
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              Zentry is not just a platform—it's a revolution. We're building a metaverse
              where every game you play, every achievement you earn, and every connection
              you make becomes part of your eternal gaming legacy.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Join millions of gamers who are already part of the Zentry universe. Experience
              cross-game progression, exclusive rewards, and a community that celebrates
              your passion for gaming.
            </p>
            <Button
              size="lg"
              className="gaming-gradient text-lg px-8 py-6 hover:scale-105 transition-transform"
            >
              Join the Revolution
            </Button>
          </div>

          <div className="scroll-fade-in relative">
            <div className="glass-morphism rounded-3xl p-8 animate-float">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full gaming-gradient flex items-center justify-center text-2xl font-bold shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Connect Your Games</h3>
                    <p className="text-muted-foreground">
                      Link all your gaming accounts into one unified profile
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full gaming-gradient flex items-center justify-center text-2xl font-bold shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Build Your Legacy</h3>
                    <p className="text-muted-foreground">
                      Earn rewards and achievements that matter across all games
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full gaming-gradient flex items-center justify-center text-2xl font-bold shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Join the Community</h3>
                    <p className="text-muted-foreground">
                      Connect with gamers worldwide and compete in epic challenges
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-glow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
