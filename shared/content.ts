import { LucideIcon, Palmtree, Tractor, Trees, Heart, Flower2, TreePine } from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  iconName: string;
  features: string[];
  highlights: string[];
}

export interface Program {
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  iconName: string;
  features: string[];
  benefits: string[];
  schedule?: string;
}

export interface VisitInfo {
  operatingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  admissionFees: {
    adults: string;
    children: string;
    groups: string;
    specialPrograms: string;
  };
  whatToBring: string[];
  guidelines: string[];
  contactInfo: {
    phone: string;
    email: string;
    location: string;
  };
}

export const services: Service[] = [
  {
    slug: "agro-tourism",
    title: "Agro-Tourism",
    shortDescription: "Experience farm life firsthand with guided tours, hands-on activities, and educational programs. Connect with nature and learn sustainable farming practices.",
    fullDescription: "Our Agro-Tourism program offers visitors a unique opportunity to experience authentic farm life in East Africa. From sunrise to sunset, immerse yourself in the daily rhythms of sustainable agriculture. Our guided tours take you through lush fields, introduce you to traditional and modern farming techniques, and provide hands-on experiences that connect you directly with the land. Whether you're interested in learning about crop rotation, organic farming methods, or simply want to enjoy the peace of rural life, our agro-tourism experience offers something for everyone.",
    image: "agro_tourism_farm_to_baeaf1f4.jpg",
    iconName: "Palmtree",
    features: [
      "Guided Farm Tours",
      "Hands-on Farming Activities",
      "Educational Programs",
      "Farm-to-Table Experiences",
      "Photography Opportunities"
    ],
    highlights: [
      "Learn sustainable farming practices from experienced farmers",
      "Participate in seasonal harvesting activities",
      "Enjoy fresh, organic produce straight from the field",
      "Connect with local farming communities",
      "Perfect for families, schools, and corporate retreats"
    ]
  },
  {
    slug: "agriculture-livestock",
    title: "Agriculture & Livestock",
    shortDescription: "Sustainable farming practices with diverse crop cultivation and responsible livestock management. Quality produce for local and regional markets.",
    fullDescription: "Our Agriculture and Livestock division represents the heart of Hard Rock Farm. We practice sustainable, integrated farming that combines traditional wisdom with modern agricultural science. Our diverse crop cultivation includes vegetables, fruits, grains, and cash crops, all grown using environmentally responsible methods. Our livestock program includes cattle, poultry, and small ruminants, managed with the highest standards of animal welfare. We supply quality produce to local and regional markets while training the next generation of farmers.",
    image: "cattle_livestock_gra_70d95a83.jpg",
    iconName: "Tractor",
    features: [
      "Organic Crop Cultivation",
      "Livestock Management",
      "Agricultural Training",
      "Market-Ready Produce",
      "Veterinary Services"
    ],
    highlights: [
      "Integrated farming systems for maximum sustainability",
      "Training programs for aspiring farmers",
      "Quality livestock breeding programs",
      "Organic certification standards",
      "Supply partnerships with local markets and restaurants"
    ]
  },
  {
    slug: "gardens-recreation",
    title: "Gardens for Recreation",
    shortDescription: "Beautiful botanical gardens and recreational spaces for relaxation, events, and family activities. A peaceful escape into nature's beauty.",
    fullDescription: "Our Gardens for Recreation offer a serene escape from the hustle of everyday life. Wander through carefully curated botanical displays featuring native East African plants, flowering gardens, and tranquil water features. Our recreational spaces are perfect for family picnics, corporate events, weddings, and private celebrations. The gardens provide a beautiful backdrop for photography and peaceful contemplation, while designated play areas ensure children have safe spaces to explore and enjoy nature.",
    image: "beautiful_botanical__daa35215.jpg",
    iconName: "Trees",
    features: [
      "Botanical Gardens",
      "Event Venues",
      "Picnic Areas",
      "Children's Play Spaces",
      "Walking Trails"
    ],
    highlights: [
      "Over 200 species of native and exotic plants",
      "Professionally landscaped event spaces",
      "Guided botanical tours available",
      "Bird watching opportunities",
      "Perfect for weddings and celebrations"
    ]
  },
  {
    slug: "rehabilitation-services",
    title: "Rehabilitation Services",
    shortDescription: "Nature-based therapy programs promoting mental wellness and recovery. Healing through connection with the natural environment.",
    fullDescription: "Our Rehabilitation Services program harnesses the healing power of nature to support mental wellness and recovery. Developed in collaboration with mental health professionals, our programs offer a unique therapeutic approach that combines traditional healing practices with evidence-based therapies. Participants engage in gardening therapy, animal-assisted activities, and mindfulness practices in our peaceful natural setting. Our programs support individuals recovering from stress, trauma, and various mental health challenges, providing a nurturing environment for healing and growth.",
    image: "nature_therapy_outdo_43f57d7a.jpg",
    iconName: "Heart",
    features: [
      "Nature-Based Therapy",
      "Gardening Therapy",
      "Animal-Assisted Activities",
      "Mindfulness Programs",
      "Support Groups"
    ],
    highlights: [
      "Programs developed with mental health professionals",
      "Peaceful, private therapeutic environments",
      "Individual and group therapy options",
      "Integration of traditional healing practices",
      "Ongoing support and aftercare programs"
    ]
  },
  {
    slug: "horticulture-programs",
    title: "Horticulture Programs",
    shortDescription: "Expert cultivation of plants, flowers, and ornamental gardens. Training programs and nursery services for aspiring horticulturists.",
    fullDescription: "Our Horticulture Programs combine scientific expertise with practical training to develop skilled horticulturists. From propagation techniques to landscape design, our comprehensive curriculum covers all aspects of plant cultivation and garden management. Our on-site nursery produces quality seedlings, ornamental plants, and fruit tree varieties available for purchase. Whether you're a home gardener looking to improve your skills or a professional seeking advanced training, our programs offer the knowledge and hands-on experience you need.",
    image: "greenhouse_horticult_3e8f1132.jpg",
    iconName: "Flower2",
    features: [
      "Professional Training Courses",
      "Nursery Services",
      "Landscape Design",
      "Plant Propagation",
      "Greenhouse Management"
    ],
    highlights: [
      "Certified horticulture training programs",
      "Quality seedlings and plants for sale",
      "Expert instructors with years of experience",
      "Modern greenhouse facilities",
      "Career placement assistance for graduates"
    ]
  }
];

export const programs: Program[] = [
  {
    slug: "orchard-wing",
    title: "Orchard Wing",
    subtitle: "Where Nature Speaks Volume",
    shortDescription: "Our Orchard Wing features diverse fruit tree plantations including citrus, mango, and tropical varieties.",
    fullDescription: "The Orchard Wing at Hard Rock Farm is a living testament to the abundance of East African agriculture. Spanning several hectares, our orchards showcase diverse fruit tree plantations including citrus groves, mango orchards, avocado trees, and various tropical fruit varieties. Visitors can experience the beauty of our orchards while learning about sustainable fruit cultivation, agroforestry practices, and the importance of tree planting for environmental conservation. Our guided tours offer fruit-picking experiences during harvest seasons, and our training programs teach modern orchard management techniques.",
    image: "tropical_orchard_fru_358b35b8.jpg",
    iconName: "TreePine",
    features: [
      "Guided Orchard Tours",
      "Fruit Picking Experiences",
      "Agroforestry Training"
    ],
    benefits: [
      "Learn sustainable fruit cultivation techniques",
      "Experience seasonal harvesting activities",
      "Understand agroforestry and environmental conservation",
      "Take home fresh, organic fruits",
      "Receive certificates for completed training programs"
    ],
    schedule: "Tours available daily from 9:00 AM - 4:00 PM. Fruit picking experiences during harvest seasons (March-May, August-October)."
  },
  {
    slug: "culture-nature-therapy",
    title: "Culture & Nature Therapy Ambassador",
    subtitle: "Life is understood backwards but lived forward",
    shortDescription: "Our therapeutic programs combine cultural heritage with nature-based healing.",
    fullDescription: "The Culture & Nature Therapy Ambassador program represents our commitment to holistic healing and cultural preservation. This unique initiative combines traditional East African healing practices with modern therapeutic approaches, creating a powerful framework for mental wellness and personal growth. Participants engage in activities that connect them with nature and cultural heritage, including traditional storytelling, herbal medicine workshops, drumming circles, and mindfulness practices in natural settings. Our trained facilitators guide individuals and groups through transformative experiences that promote healing, self-discovery, and cultural appreciation.",
    image: "image_1764876733447.png",
    iconName: "Heart",
    features: [
      "Nature-Based Therapy",
      "Cultural Healing Programs",
      "Wellness Retreats"
    ],
    benefits: [
      "Connect with traditional healing wisdom",
      "Experience transformative nature therapy",
      "Learn mindfulness and meditation practices",
      "Participate in cultural immersion activities",
      "Join a supportive community of wellness seekers"
    ],
    schedule: "Wellness retreats offered monthly. Individual therapy sessions available by appointment. Group programs every Saturday."
  }
];

export const visitInfo: VisitInfo = {
  operatingHours: {
    weekdays: "8:00 AM - 5:00 PM",
    saturday: "8:00 AM - 5:00 PM",
    sunday: "By Appointment Only"
  },
  admissionFees: {
    adults: "UGX 20,000",
    children: "UGX 10,000 (ages 5-12, under 5 free)",
    groups: "UGX 15,000 per person (10+ people)",
    specialPrograms: "Pricing varies - contact us for details"
  },
  whatToBring: [
    "Comfortable walking shoes",
    "Sun protection (hat, sunscreen)",
    "Water bottle",
    "Camera for photos",
    "Light jacket (mornings can be cool)",
    "Notebook for educational programs"
  ],
  guidelines: [
    "Please stay on designated paths and trails",
    "No picking of plants or flowers without permission",
    "Respect wildlife and farm animals",
    "No smoking in garden and farm areas",
    "Children must be supervised at all times",
    "Follow guide instructions during tours",
    "Dispose of waste in designated bins"
  ],
  contactInfo: {
    phone: "+256 / 0776 630 948",
    email: "richardroyals98@gmail.com",
    location: "East Africa Region - Uganda, Kenya, Tanzania"
  }
};

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find(p => p.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map(s => s.slug);
}

export function getAllProgramSlugs(): string[] {
  return programs.map(p => p.slug);
}
