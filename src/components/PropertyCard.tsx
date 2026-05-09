import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, MapPin, Shield, Check, X } from "lucide-react";

interface PropertyCardProps {
  name: string;
  address: string;
  description: string;
  amenities: string[];
  images: string[];
  formUrl?: string;
}

const PropertyCard = ({ name, address, description, amenities, images, formUrl }: PropertyCardProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  // Fullscreen viewer state
  const [fullscreenOpen, setFullscreenOpen] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const openFullscreen = () => setFullscreenOpen(true);
  const closeFullscreen = () => setFullscreenOpen(false);

  const handleApply = () => {
    window.open(formUrl, "_blank");
  };

  const isVideo =
    images[currentImage]?.endsWith(".mp4") ||
    images[currentImage]?.endsWith(".mov") ||
    images[currentImage]?.includes("video");

  return (
    <>
      {/* ---------- CARD ---------- */}
      <Card className="overflow-hidden hover-lift border-border/50 bg-card shadow-[var(--shadow-elegant)]">
        <CardHeader className="pb-4">
          <CardTitle className="text-3xl font-bold text-primary flex items-start gap-2">
            <MapPin className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
            <span>{name}</span>
          </CardTitle>
          <CardDescription className="text-lg text-muted-foreground pl-8">
            {address}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* IMAGE / VIDEO CAROUSEL */}
          <div
            className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer"
            onClick={openFullscreen}
          >
            {isVideo ? (
              <video
                src={images[currentImage]}
                className="w-full h-full object-cover"
                muted
                autoPlay
                loop
              />
            ) : (
              <img
                src={images[currentImage]}
                alt={`${name} - Image ${currentImage + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            )}

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-background/80 px-3 py-1 rounded-full text-sm font-medium">
              {currentImage + 1} / {images.length}
            </div>

            {/* Dot Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImage(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImage ? "bg-accent w-8" : "bg-background/60 hover:bg-background/80"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Description */}
          <p className="text-foreground leading-relaxed">{description}</p>

          {/* Amenities */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-foreground flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              Amenities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {amenities.map((amenity, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-foreground/90 bg-muted/50 p-2 rounded-lg"
                >
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-sm">{amenity}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Apply Button */}
          <Button
            onClick={handleApply}
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            Apply for {name}
          </Button>

        </CardContent>
      </Card>

      {/* ---------- FULLSCREEN VIEWER ---------- */}
      {fullscreenOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={closeFullscreen}
        >
          {/* Close Button */}
          <button
            onClick={closeFullscreen}
            className="absolute top-6 right-6 text-white p-2 rounded-full bg-black/40 hover:bg-black/60 transition"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/60 p-3 rounded-full transition"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          {/* Main Media */}
          <div className="max-w-6xl w-full px-6">
            {isVideo ? (
              <video
                src={images[currentImage]}
                controls
                autoPlay
                className="w-full max-h-[90vh] mx-auto rounded-lg"
              />
            ) : (
              <img
                src={images[currentImage]}
                className="w-full max-h-[90vh] object-contain mx-auto rounded-lg"
                alt="Fullscreen preview"
              />
            )}
          </div>

          {/* Right Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/60 p-3 rounded-full transition"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      )}
    </>
  );
};

export default PropertyCard;
