import { useLocation } from "wouter";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  slug: string;
}

export default function ServiceCard({ title, description, image, icon: Icon, slug }: ServiceCardProps) {
  const [, setLocation] = useLocation();

  return (
    <button
      type="button"
      onClick={() => setLocation(`/services/${slug}`)}
      className="text-left w-full h-full rounded-lg overflow-hidden bg-card border border-border shadow-sm hover:shadow-md transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 group"
      data-testid={`card-service-${slug}`}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 w-12 h-12 rounded-lg bg-primary flex items-center justify-center shadow-lg">
          <Icon className="w-6 h-6 text-primary-foreground" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-heading font-semibold text-xl mb-2 text-foreground">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {description}
        </p>
        <span className="inline-flex items-center gap-2 font-medium text-primary group-hover:text-primary/80">
          Learn More
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </button>
  );
}
