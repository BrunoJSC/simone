"use client";

import { ImageLightbox } from "@/components/ui/image-lightbox";
import { useState } from "react";

// Imagens da galeria com dimensões reais (aproximadas)
const GALLERY_IMAGES = [
  { src: "/images/gallery-01.jpg", alt: "Interior do ateliê Mercado Babilônia", width: 800, height: 600 },
  { src: "/images/gallery-02.jpg", alt: "Porta decorada com arco ornamental", width: 600, height: 800 },
  { src: "/images/gallery-03.jpg", alt: "Parede de tijolos e detalhes arquitetônicos", width: 700, height: 900 },
  { src: "/images/gallery-04.jpg", alt: "Fonte decorativa 1", width: 600, height: 800 },
  { src: "/images/gallery-05.jpg", alt: "Fonte decorativa 2", width: 650, height: 850 },
  { src: "/images/gallery-06.jpg", alt: "Porta azul com detalhes", width: 600, height: 900 },
  { src: "/images/gallery-07.jpg", alt: "Arco de tijolos", width: 900, height: 600 },
  { src: "/images/atelier-interior.jpg", alt: "Interior do ateliê", width: 1200, height: 800 },
];

export function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % GALLERY_IMAGES.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
      );
    }
  };

  return (
    <section 
      className="py-20 md:py-32"
      style={{
        background: "linear-gradient(135deg, #FFF5E6 0%, #FFE4CC 25%, #FFD4B3 50%, #FFC299 75%, #FFB380 100%)"
      }}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Section Header - Elegant & Minimal */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-6 mb-8">
            <span className="h-px flex-1 bg-foreground/10" />
            <span className="text-[10px] md:text-xs font-medium uppercase tracking-[0.4em] text-foreground/50">
              Repercussão
            </span>
            <span className="h-px flex-1 bg-foreground/10" />
          </div>

          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-center text-foreground mb-6 leading-[0.95]">
            Na mídia
          </h2>
          
          <p className="text-center text-base md:text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed">
            Recortes e publicações que documentaram a trajetória do Mercado Babilônia
          </p>
        </div>

        {/* Justified Gallery Layout - Largura máxima respeitando proporções */}
        <div className="space-y-2">
          {/* Linha 1: Imagens horizontais/quadradas */}
          <div className="flex gap-2 w-full">
            <button
              type="button"
              onClick={() => openLightbox(0)}
              className="group relative overflow-hidden cursor-pointer flex-1"
              style={{ aspectRatio: `${GALLERY_IMAGES[0].width}/${GALLERY_IMAGES[0].height}` }}
            >
              <img
                src={GALLERY_IMAGES[0].src}
                alt={GALLERY_IMAGES[0].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </button>

            <button
              type="button"
              onClick={() => openLightbox(7)}
              className="group relative overflow-hidden cursor-pointer flex-1"
              style={{ aspectRatio: `${GALLERY_IMAGES[7].width}/${GALLERY_IMAGES[7].height}` }}
            >
              <img
                src={GALLERY_IMAGES[7].src}
                alt={GALLERY_IMAGES[7].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </button>
          </div>

          {/* Linha 2: Mix de verticais e horizontais */}
          <div className="flex gap-2 w-full">
            <button
              type="button"
              onClick={() => openLightbox(1)}
              className="group relative overflow-hidden cursor-pointer"
              style={{ 
                flex: `${GALLERY_IMAGES[1].width / GALLERY_IMAGES[1].height}`,
                aspectRatio: `${GALLERY_IMAGES[1].width}/${GALLERY_IMAGES[1].height}` 
              }}
            >
              <img
                src={GALLERY_IMAGES[1].src}
                alt={GALLERY_IMAGES[1].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </button>

            <button
              type="button"
              onClick={() => openLightbox(3)}
              className="group relative overflow-hidden cursor-pointer"
              style={{ 
                flex: `${GALLERY_IMAGES[3].width / GALLERY_IMAGES[3].height}`,
                aspectRatio: `${GALLERY_IMAGES[3].width}/${GALLERY_IMAGES[3].height}` 
              }}
            >
              <img
                src={GALLERY_IMAGES[3].src}
                alt={GALLERY_IMAGES[3].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </button>

            <button
              type="button"
              onClick={() => openLightbox(4)}
              className="group relative overflow-hidden cursor-pointer"
              style={{ 
                flex: `${GALLERY_IMAGES[4].width / GALLERY_IMAGES[4].height}`,
                aspectRatio: `${GALLERY_IMAGES[4].width}/${GALLERY_IMAGES[4].height}` 
              }}
            >
              <img
                src={GALLERY_IMAGES[4].src}
                alt={GALLERY_IMAGES[4].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </button>
          </div>

          {/* Linha 3: Imagens verticais */}
          <div className="flex gap-2 w-full">
            <button
              type="button"
              onClick={() => openLightbox(2)}
              className="group relative overflow-hidden cursor-pointer"
              style={{ 
                flex: `${GALLERY_IMAGES[2].width / GALLERY_IMAGES[2].height}`,
                aspectRatio: `${GALLERY_IMAGES[2].width}/${GALLERY_IMAGES[2].height}` 
              }}
            >
              <img
                src={GALLERY_IMAGES[2].src}
                alt={GALLERY_IMAGES[2].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </button>

            <button
              type="button"
              onClick={() => openLightbox(5)}
              className="group relative overflow-hidden cursor-pointer"
              style={{ 
                flex: `${GALLERY_IMAGES[5].width / GALLERY_IMAGES[5].height}`,
                aspectRatio: `${GALLERY_IMAGES[5].width}/${GALLERY_IMAGES[5].height}` 
              }}
            >
              <img
                src={GALLERY_IMAGES[5].src}
                alt={GALLERY_IMAGES[5].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </button>

            <button
              type="button"
              onClick={() => openLightbox(6)}
              className="group relative overflow-hidden cursor-pointer"
              style={{ 
                flex: `${GALLERY_IMAGES[6].width / GALLERY_IMAGES[6].height}`,
                aspectRatio: `${GALLERY_IMAGES[6].width}/${GALLERY_IMAGES[6].height}` 
              }}
            >
              <img
                src={GALLERY_IMAGES[6].src}
                alt={GALLERY_IMAGES[6].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </button>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="mt-16 md:mt-24 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-foreground/20" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/40">
            Mercado Babilônia
          </span>
          <span className="h-px w-12 bg-foreground/20" />
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <ImageLightbox
          images={GALLERY_IMAGES}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </section>
  );
}
