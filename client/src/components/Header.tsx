import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logoImage from "@assets/image_1764876717686.png";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const scrollToSection = (href: string) => {
  if (href === "#top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button 
            onClick={() => scrollToSection("#top")} 
            className="flex items-center gap-3" 
            data-testid="link-home-logo"
          >
            <img 
              src={logoImage} 
              alt="Hard Rock Logo" 
              className="h-12 md:h-14 w-auto object-contain"
            />
            <div className="hidden sm:block text-left">
              <p className="font-heading font-bold text-lg text-foreground leading-tight">
                Hard Rock
              </p>
              <p className="text-xs text-muted-foreground">Model Farm</p>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                className="font-heading font-medium"
                onClick={() => handleNavClick(item.href)}
                data-testid={`link-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </Button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button 
              className="hidden sm:flex gap-2" 
              onClick={() => scrollToSection("#contact")}
              data-testid="button-contact-cta"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">Contact Us</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  variant="ghost"
                  className="w-full justify-start font-heading"
                  onClick={() => handleNavClick(item.href)}
                  data-testid={`link-mobile-nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </Button>
              ))}
              <Button 
                className="mt-2 gap-2" 
                onClick={() => handleNavClick("#contact")}
                data-testid="button-mobile-contact"
              >
                <Phone className="w-4 h-4" />
                Contact Us
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
