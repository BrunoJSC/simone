import { OptimizedImage } from "@/components/ui/optimized-image";

export function StorySection() {
  return (
    <>
      {/* Atelier section - Split layout: text left, image right */}
      <section className="bg-foreground/[0.02]">
        <div className="grid md:grid-cols-2 md:min-h-[80vh]">
          {/* Left - Text */}
          <div className="flex flex-col justify-center px-6 md:px-16 lg:px-24 py-16 md:py-24">
            <h2 className="font-forum text-4xl md:text-5xl font-light text-foreground mb-4">
              O mercado
            </h2>
            <p className="text-lg font-bold mb-8">
              Vila Madalena, São Paulo - 1980
            </p>
            <p className="font-serif text-lg md:text-xl leading-relaxed text-foreground/80">
              O grande destaque do ateliê eram seus anéis de poder, de ouro e
              prata, todos esculpidos e gravados à mão, com pedras
              cuidadosamente escolhidas para cada pessoa — talismãs para quem
              os usava. Nos primeiros anos, o atendimento era exclusivo,
              realizado sob demanda, com portas fechadas. Ainda assim, o
              Mercado Babilônia foi se tornando um ponto de interesse na
              região, atraindo olhares de curiosos e uma clientela fiel.
            </p>
          </div>

          {/* Right - Image fills full height and width */}
          <div className="relative min-h-[60vh] md:min-h-full overflow-hidden">
            <OptimizedImage
              src="/images/atelier-interior.jpg"
              alt="Interior do ateliê Mercado Babilônia"
              fill
              quality="hero"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

    </>
  );
}
