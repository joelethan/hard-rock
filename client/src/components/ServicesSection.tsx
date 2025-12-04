import ServiceCard from "./ServiceCard";
import { Palmtree, Tractor, Trees, Heart, Flower2 } from "lucide-react";

import agroTourismImage from "@assets/stock_images/agro_tourism_farm_to_baeaf1f4.jpg";
import livestockImage from "@assets/stock_images/cattle_livestock_gra_70d95a83.jpg";
import gardensImage from "@assets/stock_images/beautiful_botanical__daa35215.jpg";
import rehabilitationImage from "@assets/stock_images/nature_therapy_outdo_43f57d7a.jpg";
import horticultureImage from "@assets/stock_images/greenhouse_horticult_3e8f1132.jpg";

const services = [
  {
    title: "Agro-Tourism",
    description: "Experience farm life firsthand with guided tours, hands-on activities, and educational programs. Connect with nature and learn sustainable farming practices.",
    image: agroTourismImage,
    icon: Palmtree,
  },
  {
    title: "Agriculture & Livestock",
    description: "Sustainable farming practices with diverse crop cultivation and responsible livestock management. Quality produce for local and regional markets.",
    image: livestockImage,
    icon: Tractor,
  },
  {
    title: "Gardens for Recreation",
    description: "Beautiful botanical gardens and recreational spaces for relaxation, events, and family activities. A peaceful escape into nature's beauty.",
    image: gardensImage,
    icon: Trees,
  },
  {
    title: "Rehabilitation Services",
    description: "Nature-based therapy programs promoting mental wellness and recovery. Healing through connection with the natural environment.",
    image: rehabilitationImage,
    icon: Heart,
  },
  {
    title: "Horticulture Programs",
    description: "Expert cultivation of plants, flowers, and ornamental gardens. Training programs and nursery services for aspiring horticulturists.",
    image: horticultureImage,
    icon: Flower2,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-2">
            What We Offer
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg">
            From agro-tourism experiences to rehabilitation services, we offer a diverse range of programs 
            that connect people with nature and promote sustainable development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              image={service.image}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
