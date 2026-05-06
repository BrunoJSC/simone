import { OptimizedImage } from "@/components/ui/optimized-image";
import { IMAGE_SIZES } from "@/lib/image-config";

export function HeroSection() {
  return (
    <>
      {/* Banner Section */}
      <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
        <OptimizedImage
          src="/images/jewelry-banner.jpg"
          alt="Joias artesanais do Mercado Babilônia"
          fill
          priority
          quality="hero"
          sizes={IMAGE_SIZES.full}
          className="object-cover"
          showLoader={false}
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        
        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h1 className="font-serif text-7xl md:text-8xl lg:text-9xl font-light leading-[0.95] tracking-tight text-white mb-6">
            Mercado
            <br />
            <span className="italic">Babilônia</span>
          </h1>
          
          <div className="flex items-center gap-4 mt-4">
            <span className="h-px w-12 bg-white/60" />
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/80">
              Vila Madalena · São Paulo · 1993
            </span>
            <span className="h-px w-12 bg-white/60" />
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="px-6 py-20 bg-background">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Portrait */}
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <OptimizedImage
                src="/images/simone-levy-portrait.jpg"
                alt="Simone Levy, fundadora do Mercado Babilônia"
                fill
                quality="hero"
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover sepia-[0.15]"
              />
            </div>

            {/* Right - Text */}
            <div className="space-y-6 text-foreground/80 leading-relaxed">
              <p className="text-lg md:text-xl font-serif">
                Em 1993, a psicóloga e joalheira Simone Levy fundou o Mercado
                Babilônia, um ateliê e loja localizado na Rua Harmonia 112, no
                coração da Vila Madalena.
              </p>
              <p className="text-base md:text-lg">
                O espaço, mais do que uma loja, era uma verdadeira experiência
                sensorial, com arquitetura singular e atmosfera mística.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
