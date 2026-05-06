import { OptimizedImage } from "@/components/ui/optimized-image";

export function StorySection() {
  return (
    <>
      {/* Dark section with narrative text */}
      <section className="bg-[#2a2a2a] dark:bg-[#1a1a1a] px-6 py-24">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <p className="font-serif text-xl md:text-2xl leading-relaxed text-white/90">
            Além das joias, o espaço abrigava objetos raros, roupas diferenciadas,
            acessórios para decoração, vindos de lugares como Bali, Índia, Nepal,
            Birmânia, China, Guatemala e Brasil. Uma verdadeira coleção de mundos
            dentro de um só.
          </p>
          <p className="font-serif text-xl md:text-2xl leading-relaxed text-white/90">
            Um marco importante foi o Bazar de Natal, que contava com a
            participação de artistas, designers, chefs, como Renato Inbroise,
            Rebecca Gerberov, Neka Menna Barreto, Lina Kim, Patrícia Magano, Marta
            Meyer, etc. A partir desse evento, a porta da loja se abriu de vez e o
            Mercado Babilônia passou a operar de forma mais ampla, até encerrar
            suas atividades em 1997.
          </p>
          <div className="pt-8">
            <p className="text-lg md:text-xl italic text-white/80">
              Assim, o Mercado Babilônia marcou uma época com sua proposta única e
              poética. Lugar onde a cultura, o surpreendente, a arte e a
              espiritualidade se encontravam.
            </p>
          </div>
        </div>
      </section>

      {/* Biography section */}
      <section className="px-6 py-24 bg-background">
        <div className="mx-auto max-w-6xl">
          {/* Section header */}
          <div className="mb-16">
            <h2 className="font-serif text-5xl md:text-6xl font-light text-foreground mb-8">
              A história
            </h2>
          </div>

          {/* Content grid */}
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left - Image and logo */}
            <div className="space-y-12">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <OptimizedImage
                  src="/images/jewelry-banner.jpg"
                  alt="Simone Levy no ateliê"
                  fill
                  quality="hero"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover sepia-[0.2]"
                />
              </div>

              {/* Logo */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-foreground/5 flex items-center justify-center p-8">
                <OptimizedImage
                  src="/images/logo-snakes-roses.jpg"
                  alt="Logo Mercado Babilônia"
                  fill
                  quality="default"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right - Text content */}
            <div className="space-y-6 font-serif text-lg leading-relaxed text-foreground/80">
              <p>
                Refletia as influências das viagens de Simone à Índia, Nepal e
                Europa, com fontes, arcos indianos, árabes, italianos, paredes
                pintadas à mão e vitrais antigos, que compunham um cenário único —
                despertando a curiosidade de quem passava por sua fachada
                excêntrica, sem placa, com acesso apenas por campainha.
              </p>

              <p>
                Filha de ourives, Simone cresceu entre pedras preciosas e
                semipreciosas, mas seguiu seu próprio caminho. Incorporou técnicas
                étnicas tradicionais de ouro e ourivesaria indiana e seus estudos
                sobre o poder das pedras em criações autorais, dando origem a joias
                únicas.
              </p>

              <blockquote className="border-l-2 border-foreground/20 pl-6 my-8 italic text-xl">
                Talismãs para quem os usava — anéis de poder, de ouro e prata,
                todos esculpidos e gravados à mão.
              </blockquote>

              <p>
                O grande destaque do ateliê eram seus anéis de poder, de ouro e
                prata, todos esculpidos e gravados à mão, com pedras cuidadosamente
                escolhidas para cada pessoa. Nos primeiros anos, o atendimento era
                exclusivo, realizado sob demanda, com portas fechadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Atelier section - Full width */}
      <section className="px-6 py-24 bg-foreground/[0.02]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12" style={{ textAlign: "center" }}>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4">
              O mercado
            </h2>
            <p className="text-lg text-muted">
              Vila Madalena, São Paulo - 1980
            </p>
          </div>

          {/* Large atelier image */}
          <div className="relative aspect-[21/9] w-full overflow-hidden mb-12">
            <OptimizedImage
              src="/images/atelier-interior.jpg"
              alt="Interior do ateliê Mercado Babilônia"
              fill
              quality="hero"
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <div className="w-full flex justify-center">
            <p 
              className="font-serif text-lg text-center md:text-xl leading-relaxed text-foreground/80"
              style={{ 
                maxWidth: "800px", 
                textAlign: "center",
                margin: "0 auto"
              }}
            >
              O grande destaque do ateliê eram seus anéis de poder, de ouro e
              prata, todos esculpidos e gravados à mão, com pedras cuidadosamente
              escolhidas para cada pessoa — talismãs para quem os usava. Nos
              primeiros anos, o atendimento era exclusivo, realizado sob demanda,
              com portas fechadas. Ainda assim, o Mercado Babilônia foi se tornando
              um ponto de interesse na região, atraindo olhares de curiosos e uma
              clientela fiel.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
