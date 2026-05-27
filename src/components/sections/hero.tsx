import { OptimizedImage } from "@/components/ui/optimized-image";
import { IMAGE_SIZES } from "@/lib/image-config";

export function HeroSection() {
  return (
    <>
      {/* Banner Section */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full">
          <OptimizedImage
            src="/images/banner.png"
            alt="Joias artesanais do Mercado Babilônia"
            width={1920}
            height={1080}
            priority
            quality="hero"
            sizes={IMAGE_SIZES.full}
            className="w-full h-auto"
            showLoader={false}
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <div className="ml-0 md:ml-[20%] max-w-md">
              <h1 className="font-forum text-5xl md:text-6xl lg:text-7xl font-light leading-[0.95] tracking-tight text-white mb-5">
                Mercado
                <br />
                <span className="italic">Babilônia</span>
              </h1>

              <div className="flex items-center gap-3 mt-3">
                <span className="h-px w-8 bg-white/60" />
                <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/80">
                  Vila Madalena · São Paulo · 1993
                </span>
                <span className="h-px w-8 bg-white/60" />
              </div>
            </div>
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
              <p className="text-lg md:text-xl font-forum">
                Em 1993, a psicóloga e joalheira Simone Levy fundou o Mercado
                Babilônia, um ateliê e loja localizado na Rua Harmonia 112, no
                coração da Vila Madalena. O espaço, mais do que uma loja, era
                uma verdadeira experiência sensorial, com arquitetura singular e
                atmosfera mística.
              </p>
              <p className="text-base md:text-lg">
                Refletia as influências das viagens de Simone à Índia, Nepal e
                Europa, com fontes, arcos indianos, árabes, italianos, paredes
                pintadas à mão e vitrais antigos, que compunham um cenário,
                despertando a curiosidade de quem passava por sua fachada
                excêntrica, sem placa, com acesso apenas por campainha. ​
              </p>
              <p>
                Filha de ourives, Simone cresceu entre pedras preciosas e
                semipreciosas, mas seguiu seu próprio caminho. Incorporou
                técnicas étnicas tradicionais de ouro e ourivesaria indiana e
                seus estudos sobre o poder das pedras em criações autorais,
                dando origem a joias únicas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
