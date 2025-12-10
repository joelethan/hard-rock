import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronDown, MapPin, Leaf } from "lucide-react";
import { heroImage, logoImage } from "@/lib/images";

export default function Hero() {
  const [, setLocation] = useLocation();
  
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <img 
            src={logoImage} 
            alt="Hard Rock Logo" 
            className="h-24 md:h-32 w-auto drop-shadow-2xl"
          />
        </div>
        
        <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-4 drop-shadow-lg">
          Hard Rock
        </h1>
        <p className="font-heading font-semibold text-xl md:text-2xl text-white/90 mb-2">
          Farming and Development Association
        </p>
        <p className="text-lg md:text-xl text-white/80 italic mb-8">
          "Where Nature Speaks Volume"
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button 
            size="lg" 
            className="gap-2 text-base px-8 backdrop-blur-sm"
            data-testid="button-explore-services"
            onClick={scrollToServices}
          >
            <Leaf className="w-5 h-5" />
            Explore Our Services
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="gap-2 text-base px-8 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            data-testid="button-plan-visit"
            onClick={() => setLocation("/plan-your-visit")}
          >
            <MapPin className="w-5 h-5" />
            Plan Your Visit
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6 text-white/70 text-sm">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            East Africa Region
          </span>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:inline">Uganda - Kenya - Tanzania</span>
        </div>
      </div>

      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full"
        data-testid="button-scroll-down"
        aria-label="Scroll to services"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
