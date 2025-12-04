import { Leaf, Users, Globe, Sparkles } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Committed to eco-friendly practices that preserve our environment for future generations.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building strong relationships through cooperation and shared growth.",
  },
  {
    icon: Globe,
    title: "Innovation",
    description: "Embracing modern techniques while honoring traditional farming wisdom.",
  },
  {
    icon: Sparkles,
    title: "Excellence",
    description: "Striving for the highest quality in all our services and products.",
  },
];

export default function MissionSection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-2">
              Our Mission
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              Unity And Cooperation Towards Development
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              At Hard Rock Farming and Development Association, we believe in the power of 
              nature to heal, educate, and inspire. Our model farm serves as a beacon of 
              sustainable agriculture and community development across East Africa.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              "Zero Harm Tolerance to Natural Vegetation Cover" - this principle guides 
              everything we do, from our farming practices to our rehabilitation programs.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Go Green Uganda
              </div>
              <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Go Green East Africa
              </div>
              <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Go Green World
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value) => (
              <div 
                key={value.title}
                className="p-6 rounded-lg bg-background border border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
