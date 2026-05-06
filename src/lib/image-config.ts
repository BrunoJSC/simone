/**
 * Configuração centralizada de imagens
 * Facilita manutenção e otimização
 */

export const IMAGE_PATHS = {
  hero: {
    banner: "/images/hero/jewelry-banner.jpg",
  },
  about: {
    portrait: "/images/about/simone-levy-portrait.jpg",
    atelier: "/images/about/atelier-interior.jpg",
  },
  gallery: [
    {
      src: "/images/gallery/press-01.jpg",
      alt: "Recortes de jornal e peças de joias",
      category: "press",
    },
    {
      src: "/images/gallery/press-02.jpg",
      alt: "Matéria de revista com foto da Simone Levy",
      category: "press",
    },
    {
      src: "/images/gallery/jewelry-01.jpg",
      alt: "Anéis e joias do Mercado Babilônia",
      category: "jewelry",
    },
    {
      src: "/images/gallery/press-03.jpg",
      alt: "Clippings e recortes de mídia",
      category: "press",
    },
    {
      src: "/images/gallery/press-04.jpg",
      alt: "Matéria sobre o Mercado Babilônia",
      category: "press",
    },
    {
      src: "/images/gallery/jewelry-02.jpg",
      alt: "Anéis e detalhes do ateliê",
      category: "jewelry",
    },
    {
      src: "/images/gallery/press-05.jpg",
      alt: "Mais recortes e publicações na mídia",
      category: "press",
    },
  ],
  branding: {
    logo: "/images/branding/logo-snakes-roses.jpg",
  },
  atelier: [
    {
      src: "/images/atelier/detail-01.jpg",
      alt: "Arcos e detalhes arquitetônicos",
    },
    {
      src: "/images/atelier/detail-02.jpg",
      alt: "Fonte decorativa",
    },
    {
      src: "/images/atelier/detail-03.jpg",
      alt: "Porta de entrada com campainha",
    },
    {
      src: "/images/atelier/detail-04.jpg",
      alt: "Interior com objetos étnicos",
    },
    {
      src: "/images/atelier/detail-05.jpg",
      alt: "Vitrais e decoração",
    },
    {
      src: "/images/atelier/detail-06.jpg",
      alt: "Detalhes da fachada",
    },
  ],
} as const;

/**
 * Configurações de qualidade e otimização para Next.js Image
 */
export const IMAGE_QUALITY = {
  hero: 90,
  gallery: 85,
  thumbnail: 75,
  default: 80,
} as const;

/**
 * Tamanhos responsivos para otimização
 */
export const IMAGE_SIZES = {
  hero: "(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw",
  gallery: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  portrait: "(max-width: 768px) 100vw, 40vw",
  full: "100vw",
} as const;
