"use client";

import { useState } from "react";
import { ImageLightbox } from "@/components/ui/image-lightbox";
import { OptimizedImage } from "@/components/ui/optimized-image";

const MIDIA_IMAGES = [
  {
    src: "/images/revista-acessorios.jpeg",
    alt: "Matéria de revista sobre os anéis de poder do Mercado Babilônia",
    width: 7722,
    height: 10000,
  },
  {
    src: "/images/revista-aneis-estilo.jpeg",
    alt: "Anúncio de revista: anéis que fazem o seu estilo",
    width: 7684,
    height: 10000,
  },
  {
    src: "/images/revista-boaforma-moda.jpeg",
    alt: "Matéria da revista Boa Forma sobre acessórios e moda",
    width: 8354,
    height: 10000,
  },
  {
    src: "/images/revista-veja-caminho-das-indias.jpeg",
    alt: "Matéria da Veja SP 'Caminho das Índias' com Simone Levy do Mercado Babilônia",
    width: 7058,
    height: 10000,
  },
  {
    src: "/images/revista-veja-design-nacional.jpeg",
    alt: "Matéria da Veja SP sobre o design nacional na Vila Madalena",
    width: 7734,
    height: 10000,
  },
  {
    src: "/images/revista-veja-gabriel-descolada.jpeg",
    alt: "Matéria da Veja SP 'A Gabriel descolada' sobre a Vila Madalena e o Mercado Babilônia",
    width: 7690,
    height: 10000,
  },
  {
    src: "/images/revista-modo-de-vida-chacras.jpeg",
    alt: "Matéria 'Modo de Vida' sobre as pedras e chacras, segundo Simone Levy",
    width: 7844,
    height: 10000,
  },
  {
    src: "/images/jornal-o-hebreu.jpeg",
    alt: "Nota do jornal O Hebreu sobre Simone Levy e o Mercado Babilônia",
    width: 3308,
    height: 9936,
  },
];

export function MidiaSection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % MIDIA_IMAGES.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + MIDIA_IMAGES.length) % MIDIA_IMAGES.length,
      );
    }
  };

  return (
    <section className="bg-background py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="mb-8 flex items-center gap-6">
            <span className="h-px flex-1 bg-foreground/10" />
            <span className="text-[10px] md:text-xs font-medium uppercase tracking-[0.4em] text-foreground/50">
              Repercussão
            </span>
            <span className="h-px flex-1 bg-foreground/10" />
          </div>

          <h2 className="font-forum text-5xl md:text-7xl lg:text-8xl font-light text-center text-foreground mb-6 leading-[0.95]">
            Na mídia
          </h2>

          <p className="text-center text-base md:text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed">
            Recortes e publicações que documentaram a trajetória do Mercado
            Babilônia
          </p>
        </div>

        {/* Clippings - grid uniforme, páginas completas sem corte */}
        <div className="grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-4">
          {MIDIA_IMAGES.map((img, i) => (
            <button
              key={img.alt}
              type="button"
              onClick={() => setLightboxIndex(i)}
              className="group relative aspect-3/4 cursor-zoom-in overflow-hidden bg-white shadow-sm ring-1 ring-foreground/5 transition-shadow duration-300 hover:shadow-xl"
            >
              <OptimizedImage
                src={img.src}
                alt={img.alt}
                fill
                quality="gallery"
                sizes="(max-width: 768px) 50vw, 25vw"
                className="transition-transform duration-700 group-hover:scale-[1.03]"
                objectFit="contain"
                showLoader={false}
              />
            </button>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-foreground/40">
          Clique para ampliar e ler a matéria
        </p>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <ImageLightbox
          images={MIDIA_IMAGES}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </section>
  );
}
