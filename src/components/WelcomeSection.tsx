const WelcomeSection = () => {
  return (
    <section className="relative min-h-screen w-full bg-background flex flex-col items-center justify-center px-6">
      <div className="text-center space-y-32">
        {/* Welcome to Zentry - Typewriter */}
        <h2 className="text-2xl font-normal text-foreground typewriter-text">
          welcome to zentry
        </h2>

        {/* Big Animated Text */}
        <h1 className="text-6xl md:text-8xl font-black max-w-6xl leading-tight color-changing-text">
          DISCOVER THE WORLD'S
          <br />
          LARGEST SHARED ADVENTURE
        </h1>
      </div>
    </section>
  );
};

export default WelcomeSection;
