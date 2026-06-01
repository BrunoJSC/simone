import { OptimizedImage } from "@/components/ui/optimized-image";

// Detalhes arquitetônicos do ateliê - usando imagens existentes como placeholder
const ATELIER_DETAILS = [
  {
    src: "/images/atelier-interior.jpg",
    alt: "Interior do ateliê",
  },
  {
    src: "/images/gallery-03.jpg",
    alt: "Detalhes das joias",
  },
  {
    src: "/images/gallery-06.jpg",
    alt: "Anéis e objetos",
  },
  {
    src: "/images/atelier-interior.jpg",
    alt: "Arquitetura do espaço",
  },
];

export function AtelierDetailsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="w-full">
        {/* Horizontal scrolling gallery */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 px-6 min-w-max justify-center">
            {ATELIER_DETAILS.map((detail) => (
              <div
                key={detail.alt}
                className="relative flex-shrink-0 bg-gray-100"
                style={{
                  width: "320px",
                  height: "400px",
                }}
              >
                <OptimizedImage
                  src={detail.src}
                  alt={detail.alt}
                  fill
                  quality="gallery"
                  sizes="320px"
                  className="object-cover opacity-0"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm text-gray-400">
                    Imagem não disponível
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted uppercase tracking-[0.3em]">
            Detalhes arquitetônicos do ateliê
          </p>
        </div>
      </div>
    </section>
  );
}
