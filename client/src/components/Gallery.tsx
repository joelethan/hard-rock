import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight, Images } from "lucide-react";

import image1 from "@assets/image_1764876749009.png";
import image2 from "@assets/image_1764876726015.png";
import image3 from "@assets/image_1764876733447.png";
import image4 from "@assets/image_1764876739807.png";
import stockImage1 from "@assets/stock_images/beautiful_green_agri_b334b90f.jpg";
import stockImage2 from "@assets/stock_images/agro_tourism_farm_to_baeaf1f4.jpg";
import stockImage3 from "@assets/stock_images/cattle_livestock_gra_70d95a83.jpg";
import stockImage4 from "@assets/stock_images/farm_workers_harvest_ed367884.jpg";

const galleryImages = [
  { src: image1, alt: "Hard Rock Farm Welcome Sign" },
  { src: stockImage1, alt: "Farm Aerial View" },
  { src: image2, alt: "Go Green East Africa Campaign" },
  { src: stockImage2, alt: "Agro Tourism Experience" },
  { src: image3, alt: "Culture and Nature Therapy" },
  { src: stockImage3, alt: "Livestock Grazing" },
  { src: image4, alt: "Domestic Pigeons Psychology Study" },
  { src: stockImage4, alt: "Farm Workers Harvesting" },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  
  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1);
    }
  };
  
  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === galleryImages.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-2">
            Photo Gallery
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Life at Hard Rock Farm
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our facilities, programs, and the natural beauty of our model farm.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="relative aspect-square overflow-hidden rounded-lg group hover-elevate"
              data-testid={`button-gallery-image-${index}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <Images className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </button>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" className="gap-2" data-testid="button-view-all-gallery">
            <Images className="w-4 h-4" />
            View Full Gallery
          </Button>
        </div>

        <Dialog open={selectedIndex !== null} onOpenChange={() => closeLightbox()}>
          <DialogContent className="max-w-4xl p-0 bg-black/95 border-none">
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                onClick={closeLightbox}
                data-testid="button-close-lightbox"
              >
                <X className="w-6 h-6" />
              </Button>
              
              {selectedIndex !== null && (
                <>
                  <img
                    src={galleryImages[selectedIndex].src}
                    alt={galleryImages[selectedIndex].alt}
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                    onClick={goToPrevious}
                    data-testid="button-lightbox-previous"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                    onClick={goToNext}
                    data-testid="button-lightbox-next"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </Button>
                  
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
                    {selectedIndex + 1} / {galleryImages.length}
                  </div>
                </>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
