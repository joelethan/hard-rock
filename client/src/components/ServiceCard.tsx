import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  href?: string;
}

export default function ServiceCard({ title, description, image, icon: Icon, href = "#" }: ServiceCardProps) {
  return (
    <Card className="group overflow-visible hover-elevate cursor-pointer">
      <div className="relative h-48 overflow-hidden rounded-t-lg">
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
      <CardContent className="p-6">
        <h3 className="font-heading font-semibold text-xl mb-2 text-foreground">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {description}
        </p>
        <Button 
          variant="ghost" 
          className="gap-2 p-0 h-auto font-medium text-primary hover:text-primary/80"
          data-testid={`button-learn-more-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          Learn More
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardContent>
    </Card>
  );
}
