import { OptimizedImage } from "@/components/ui/optimized-image";
import { IMAGE_SIZES } from "@/lib/image-config";

export function HeroSection() {
  return (
    <>
      {/* Banner Section */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full">
          <OptimizedImage
            src="/images/upscalemedia-transformed.png"
            alt="Joias artesanais do Mercado Babilônia"
            width={3074}
            height={2046}
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

      {/* Intro Section - Split layout: image left, text right */}
      <section className="bg-background pt-16 md:pt-24 lg:pt-32">
        <div className="grid md:grid-cols-2 md:min-h-[80vh]">
          {/* Left - Portrait fills full height, shows full body */}
          <div className="relative min-h-[80vh] md:min-h-full overflow-hidden bg-foreground/[0.03]">
            <OptimizedImage
              src="/images/simone-levy-portrait.jpeg"
              alt="Simone Levy, fundadora do Mercado Babilônia"
              fill
              quality="hero"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="sepia-[0.15]"
              objectFit="contain"
            />
          </div>

          {/* Right - Text */}
          <div className="flex flex-col justify-center px-6 md:px-16 lg:px-24 py-16 md:py-24 space-y-6 text-foreground/80 leading-relaxed">
            <h1 className="text-foreground font-bold text-2xl">A história</h1>
            <p className="text-lg md:text-xl">
              Em 1993, a psicóloga e joalheira Simone Levy fundou o Mercado
              Babilônia, um ateliê e loja localizado na Rua Harmonia 112, no
              coração da Vila Madalena. O espaço, mais do que uma loja, era
              uma verdadeira experiência sensorial, com arquitetura singular e
              atmosfera mística.
            </p>
            <p className="text-lg md:text-xl">
              Refletia as influências das viagens de Simone à Índia, Nepal e
              Europa, com fontes, arcos indianos, árabes, italianos, paredes
              pintadas à mão e vitrais antigos, que compunham um cenário,
              despertando a curiosidade de quem passava por sua fachada
              excêntrica, sem placa, com acesso apenas por campainha. ​
            </p>
            <p className="text-lg md:text-xl">
              Filha de ourives, Simone cresceu entre pedras preciosas e
              semipreciosas, mas seguiu seu próprio caminho. Incorporou
              técnicas étnicas tradicionais de ouro e ourivesaria indiana e
              seus estudos sobre o poder das pedras em criações autorais,
              dando origem a joias únicas.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
