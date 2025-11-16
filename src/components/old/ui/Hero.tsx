import Button from "./Button";

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  backgroundImage?: string;
}

export default function Hero({
  title = "Welcome to TubeKarma",
  subtitle = "Discover and rate your favorite videos",
  ctaText = "Get Started",
  backgroundImage,
}: HeroProps) {
  return (
    <section
      className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20"
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl mb-8">{subtitle}</p>
        <Button variant="secondary" size="lg">
          {ctaText}
        </Button>
      </div>
    </section>
  );
}

