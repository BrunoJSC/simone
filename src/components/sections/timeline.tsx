const TIMELINE_ITEMS = [
  {
    year: "1993",
    title: "A Fundação",
    text: "Simone Levy abre o Mercado Babilônia na Rua Harmonia 112, Vila Madalena. Atendimento exclusivo, sob demanda, com portas fechadas.",
  },
  {
    year: "1994",
    title: "Bazar de Natal",
    text: "O primeiro grande evento reúne artistas, designers e chefs como Renato Inbroise, Rebecca Gerberov, Neka Menna Barreto, Lina Kim e Patrícia Magano.",
  },
  {
    year: "1995",
    title: "Portas Abertas",
    text: "O Mercado Babilônia se abre ao público. Além de joias, passa a oferecer objetos raros, roupas, acessórios e peças de decoração de sete países.",
  },
  {
    year: "1997",
    title: "Encerramento",
    text: "O ateliê encerra suas atividades, deixando um legado de arte, cultura e espiritualidade na Vila Madalena.",
  },
];

export function TimelineSection() {
  return (
    <section className="border-t border-border px-6 py-24 bg-white">
      <div className="mx-auto max-w-4xl">
        {/* Section header */}
        <div className="mb-20 flex flex-col items-center gap-4 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-muted">
            Cronologia
          </span>
          <h2 className="font-forum text-5xl md:text-6xl font-light text-foreground">
            Uma época marcante
          </h2>
          <span className="mt-2 h-px w-16 bg-foreground/20" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute top-0 bottom-0 left-[23px] w-px bg-border md:left-1/2 md:-translate-x-px" />

          <div className="flex flex-col gap-20">
            {TIMELINE_ITEMS.map((item, i) => (
              <div
                key={item.year}
                className={`relative flex flex-col gap-4 pl-14 md:w-1/2 md:pl-0 ${
                  i % 2 === 0
                    ? "md:pr-16 md:text-right"
                    : "md:ml-auto md:pl-16 md:text-left"
                }`}
              >
                {/* Dot */}
                <div
                  className={`absolute top-1 left-[19px] h-[9px] w-[9px] rounded-full border-2 border-foreground/30 bg-background md:left-auto ${
                    i % 2 === 0
                      ? "md:-right-[4px] md:left-auto"
                      : "md:-left-[5px]"
                  }`}
                />

                <span 
                  className="text-sm font-medium tracking-wider text-muted/60"
                  style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
                >
                  {item.year}
                </span>
                <h3 className="font-forum text-3xl font-light text-foreground">
                  {item.title}
                </h3>
                <p className="font-forum text-lg leading-8 text-foreground/70">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
