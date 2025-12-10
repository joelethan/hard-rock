import agroTourismImage from "@assets/stock_images/agro_tourism_farm_to_baeaf1f4.jpg";
import livestockImage from "@assets/stock_images/cattle_livestock_gra_70d95a83.jpg";
import gardensImage from "@assets/stock_images/beautiful_botanical__daa35215.jpg";
import rehabilitationImage from "@assets/stock_images/nature_therapy_outdo_43f57d7a.jpg";
import horticultureImage from "@assets/stock_images/greenhouse_horticult_3e8f1132.jpg";
import orchardImage from "@assets/stock_images/tropical_orchard_fru_358b35b8.jpg";
import therapyImage from "@assets/image_1764876733447.png";
import image1 from "@assets/image_1764876749009.png";
import image2 from "@assets/image_1764876726015.png";
import image4 from "@assets/image_1764876739807.png";
import stockImage1 from "@assets/stock_images/beautiful_green_agri_b334b90f.jpg";
import stockImage4 from "@assets/stock_images/farm_workers_harvest_ed367884.jpg";
import logoImage from "@assets/image_1764876717686.png";
import { Palmtree, Tractor, Trees, Heart, Flower2, TreePine, type LucideIcon } from "lucide-react";

export { logoImage, stockImage1 as heroImage };

export interface ServiceData {
  slug: string;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
}

export interface ProgramData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: LucideIcon;
  features: string[];
}

export const servicesList: ServiceData[] = [
  {
    slug: "agro-tourism",
    title: "Agro-Tourism",
    description: "Experience farm life firsthand with guided tours, hands-on activities, and educational programs. Connect with nature and learn sustainable farming practices.",
    image: agroTourismImage,
    icon: Palmtree,
  },
  {
    slug: "agriculture-livestock",
    title: "Agriculture & Livestock",
    description: "Sustainable farming practices with diverse crop cultivation and responsible livestock management. Quality produce for local and regional markets.",
    image: livestockImage,
    icon: Tractor,
  },
  {
    slug: "gardens-recreation",
    title: "Gardens for Recreation",
    description: "Beautiful botanical gardens and recreational spaces for relaxation, events, and family activities. A peaceful escape into nature's beauty.",
    image: gardensImage,
    icon: Trees,
  },
  {
    slug: "rehabilitation-services",
    title: "Rehabilitation Services",
    description: "Nature-based therapy programs promoting mental wellness and recovery. Healing through connection with the natural environment.",
    image: rehabilitationImage,
    icon: Heart,
  },
  {
    slug: "horticulture-programs",
    title: "Horticulture Programs",
    description: "Expert cultivation of plants, flowers, and ornamental gardens. Training programs and nursery services for aspiring horticulturists.",
    image: horticultureImage,
    icon: Flower2,
  },
];

export const programsList: ProgramData[] = [
  {
    slug: "orchard-wing",
    title: "Orchard Wing",
    subtitle: "Where Nature Speaks Volume",
    description: "Our Orchard Wing features diverse fruit tree plantations including citrus, mango, and tropical varieties. Experience the beauty of our orchards while learning about sustainable fruit cultivation and agroforestry practices.",
    image: orchardImage,
    icon: TreePine,
    features: ["Guided Orchard Tours", "Fruit Picking Experiences", "Agroforestry Training"],
  },
  {
    slug: "culture-nature-therapy",
    title: "Culture & Nature Therapy Ambassador",
    subtitle: "Life is understood backwards but lived forward",
    description: "Our therapeutic programs combine cultural heritage with nature-based healing. We offer rehabilitation services that promote mental wellness through connection with the natural environment and traditional practices.",
    image: therapyImage,
    icon: Heart,
    features: ["Nature-Based Therapy", "Cultural Healing Programs", "Wellness Retreats"],
  },
];

export const serviceImages: Record<string, string> = {
  "agro-tourism": agroTourismImage,
  "agriculture-livestock": livestockImage,
  "gardens-recreation": gardensImage,
  "rehabilitation-services": rehabilitationImage,
  "horticulture-programs": horticultureImage,
};

export const programImages: Record<string, string> = {
  "orchard-wing": orchardImage,
  "culture-nature-therapy": therapyImage,
};

export const galleryImages = [
  { src: image1, alt: "Hard Rock Farm Welcome Sign", category: "Farm" },
  { src: stockImage1, alt: "Farm Aerial View", category: "Farm" },
  { src: image2, alt: "Go Green East Africa Campaign", category: "Events" },
  { src: agroTourismImage, alt: "Agro Tourism Experience", category: "Tourism" },
  { src: therapyImage, alt: "Culture and Nature Therapy", category: "Programs" },
  { src: livestockImage, alt: "Livestock Grazing", category: "Livestock" },
  { src: image4, alt: "Domestic Pigeons Psychology Study", category: "Research" },
  { src: stockImage4, alt: "Farm Workers Harvesting", category: "Farm" },
  { src: gardensImage, alt: "Beautiful Botanical Gardens", category: "Gardens" },
  { src: rehabilitationImage, alt: "Nature Therapy Session", category: "Programs" },
  { src: horticultureImage, alt: "Greenhouse Horticulture", category: "Horticulture" },
  { src: orchardImage, alt: "Tropical Orchard Fruits", category: "Orchard" },
];

export function getServiceImage(slug: string): string {
  return serviceImages[slug] || agroTourismImage;
}

export function getProgramImage(slug: string): string {
  return programImages[slug] || orchardImage;
}
