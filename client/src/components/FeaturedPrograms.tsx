import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { programsList } from "@/lib/images";

export default function FeaturedPrograms() {
  const [, setLocation] = useLocation();

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-2">
            Featured Programs
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Special Initiatives
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover our flagship programs that combine agriculture, culture, and wellness.
          </p>
        </div>

        <div className="space-y-12 lg:space-y-16">
          {programsList.map((program, index) => (
            <div 
              key={program.slug}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative rounded-lg overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-lg bg-primary flex items-center justify-center shadow-lg">
                    <program.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
              </div>
              
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-2">
                  {program.title}
                </h3>
                <p className="text-primary font-medium italic mb-4">
                  "{program.subtitle}"
                </p>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  {program.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-foreground">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="gap-2" 
                  onClick={() => setLocation(`/programs/${program.slug}`)}
                  data-testid={`button-explore-${program.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  Explore Program
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
