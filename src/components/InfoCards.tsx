import { useEffect, useRef } from "react";

const cards = [
  {
    title: "Radiant",
    description: "Cross-world, cross-game experiences that connect players across dimensions",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Zigma",
    description: "A gaming realm where your achievements transcend individual games",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Nexus",
    description: "The ultimate hub connecting all gaming universes into one epic metaverse",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Azul",
    description: "Immersive virtual worlds where imagination meets cutting-edge technology",
    gradient: "from-green-500 to-teal-500",
  },
];

const InfoCards = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="mb-16 text-center scroll-fade-in visible">
          <h2 className="text-5xl font-bold mb-4 text-glow">
            Discover Your Universe
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore interconnected realms where every game, every player, and every moment matters
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="scroll-fade-in group relative overflow-hidden rounded-2xl p-8 glass-morphism hover:scale-[1.02] transition-all duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-10 group-hover:opacity-20 transition-opacity`}
              />
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">{card.title}</h3>
                <p className="text-muted-foreground text-lg">{card.description}</p>
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-primary/20 to-transparent rounded-tl-full blur-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
