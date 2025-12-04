import { Link } from "wouter";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import logoImage from "@assets/image_1764876717686.png";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { label: "Agro-Tourism", href: "/services#agro-tourism" },
  { label: "Agriculture & Livestock", href: "/services#agriculture" },
  { label: "Gardens for Recreation", href: "/services#gardens" },
  { label: "Rehabilitation Services", href: "/services#rehabilitation" },
  { label: "Horticulture Programs", href: "/services#horticulture" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logoImage} 
                alt="Hard Rock Logo" 
                className="h-14 w-auto object-contain brightness-0 invert"
              />
              <div>
                <p className="font-heading font-bold text-lg leading-tight">
                  Hard Rock
                </p>
                <p className="text-sm text-background/70">Model Farm</p>
              </div>
            </div>
            <p className="text-background/70 text-sm mb-4 leading-relaxed">
              Unity And Cooperation Towards Development. Experience the beauty of sustainable 
              agriculture and nature-based programs at Hard Rock Farming and Development Association.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                  aria-label={social.label}
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-background/70 hover:text-background text-sm transition-colors"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-base mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.label}>
                  <Link 
                    href={service.href}
                    className="text-background/70 hover:text-background text-sm transition-colors"
                    data-testid={`link-footer-service-${service.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-base mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-background/50" />
                <span className="text-background/70 text-sm">+048 / 0705 372 001</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-background/50" />
                <span className="text-background/70 text-sm">richardroyals98@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-background/50" />
                <span className="text-background/70 text-sm">East Africa Region<br />Uganda - Kenya - Tanzania</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/50 text-sm text-center md:text-left">
              {new Date().getFullYear()} Hard Rock Farming and Development Association. All rights reserved.
            </p>
            <p className="text-background/50 text-sm italic">
              "Zero Harm Tolerance to Natural Vegetation Cover"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
