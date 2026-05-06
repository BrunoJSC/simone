"use client";

import { ImageLightbox } from "@/components/ui/image-lightbox";
import { useState } from "react";

// Imagens da galeria - masonry layout
const GALLERY_IMAGES = [
  { src: "/images/gallery-01.jpg", alt: "Interior do ateliê Mercado Babilônia" },
  { src: "/images/gallery-02.jpg", alt: "Porta decorada com arco ornamental" },
  { src: "/images/gallery-03.jpg", alt: "Parede de tijolos e detalhes arquitetônicos" },
  { src: "/images/gallery-04.jpg", alt: "Fonte decorativa 1" },
  { src: "/images/gallery-05.jpg", alt: "Fonte decorativa 2" },
  { src: "/images/gallery-06.jpg", alt: "Porta azul com detalhes" },
  { src: "/images/gallery-07.jpg", alt: "Arco de tijolos" },
  { src: "/images/atelier-interior.jpg", alt: "Interior do ateliê" },
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
      className="py-8"
      style={{
        background: "linear-gradient(135deg, #FFF5E6 0%, #FFE4CC 25%, #FFD4B3 50%, #FFC299 75%, #FFB380 100%)"
      }}
    >
      <div className="w-full">
        {/* Section Title */}
        <div className="mb-8 text-center px-6">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
            Na mídia
          </h2>
        </div>

        {/* Grid Layout Assimétrico - Células fixas com object-cover */}
        <div className="w-full">
          {/* Linha 1: 4 colunas iguais */}
          <div className="grid grid-cols-4 gap-1 mb-1">
            {GALLERY_IMAGES.slice(0, 4).map((img, index) => (
              <button
                key={index}
                type="button"
                onClick={() => openLightbox(index)}
                className="overflow-hidden cursor-pointer block h-48"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>

          {/* Linha 2: coluna larga | coluna com 2 empilhadas | coluna com 2 empilhadas */}
          <div className="grid grid-cols-4 gap-1" style={{ height: "384px" }}>
            {/* Coluna grande (2 colunas de largura) */}
            <button
              type="button"
              onClick={() => openLightbox(4)}
              className="col-span-2 overflow-hidden cursor-pointer block h-full"
            >
              <img
                src={GALLERY_IMAGES[4].src}
                alt={GALLERY_IMAGES[4].alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>

            {/* Coluna do meio: 2 imagens empilhadas */}
            <div className="col-span-1 flex flex-col gap-1 h-full">
              {[5, 6].map((imgIndex) => (
                <button
                  key={imgIndex}
                  type="button"
                  onClick={() => openLightbox(imgIndex)}
                  className="overflow-hidden cursor-pointer block flex-1"
                >
                  <img
                    src={GALLERY_IMAGES[imgIndex].src}
                    alt={GALLERY_IMAGES[imgIndex].alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>

            {/* Última coluna: 2 imagens empilhadas */}
            <div className="col-span-1 flex flex-col gap-1 h-full">
              {[7, 0].map((imgIndex, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => openLightbox(imgIndex)}
                  className="overflow-hidden cursor-pointer block flex-1"
                >
                  <img
                    src={GALLERY_IMAGES[imgIndex].src}
                    alt={GALLERY_IMAGES[imgIndex].alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
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
