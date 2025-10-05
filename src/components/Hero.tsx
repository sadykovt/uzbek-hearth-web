import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroPlov from "@/assets/hero-plov.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroPlov})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>
      
      <div className="pattern-overlay absolute inset-0 opacity-30" />
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-2xl">
          Samarkand
        </h1>
        <p className="text-xl md:text-3xl text-white/95 mb-4 font-light tracking-wide">
          Authentic Uzbek Cuisine
        </p>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Experience the rich flavors and warm hospitality of Uzbekistan in every dish
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-warm text-lg px-8 py-6"
            onClick={() => scrollToSection('menu')}
          >
            View Menu <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6"
            onClick={() => scrollToSection('reservation')}
          >
            Reserve Table
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
