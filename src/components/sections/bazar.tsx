import { OptimizedImage } from "@/components/ui/optimized-image";

export function BazarSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:gap-24 lg:gap-32 lg:px-10">
        {/* Left - Fountain image */}
        <div className="relative aspect-3/4 overflow-hidden md:aspect-auto md:min-h-160">
          <OptimizedImage
            src="/images/gallery-04.jpg"
            alt="Fonte decorativa do ateliê"
            fill
            quality="hero"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Right - Text + Logo + Text */}
        <div className="flex flex-col items-center justify-center gap-10 text-center md:gap-12">
          <p className="text-lg leading-relaxed text-foreground/80 md:text-xl">
            Além das joias, o espaço abrigava objetos raros, roupas
            diferenciadas, acessórios para decoração, vindos de lugares como
            Bali, Índia, Nepal, Birmânia, China, Guatemala e Brasil. Uma
            verdadeira coleção de mundos dentro de um só.
          </p>

          <div className="relative aspect-3/2 w-full max-w-sm">
            <OptimizedImage
              src="/images/logo-snakes-roses.jpg"
              alt="Logo Mercado Babilônia"
              fill
              quality="default"
              sizes="(max-width: 768px) 80vw, 400px"
              className="object-contain"
            />
          </div>

          <p className="text-lg leading-relaxed text-foreground/80 md:text-xl">
            Um marco importante foi o Bazar de Natal, que contava com a
            participação de artistas, designers, chefs, como Renato Imbroise,
            Rebecca Gerberov, Neka Menna Barreto, Lina Kim, Patrícia Magano,
            Marta Meyer, etc. A partir desse evento, a porta da loja se abriu
            de vez e o Mercado Babilônia passou a operar de forma mais ampla,
            até encerrar suas atividades em 1997.
          </p>
        </div>
      </div>
    </section>
  );
}
