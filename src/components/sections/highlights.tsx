const HIGHLIGHTS = [
  {
    label: "Fundação",
    value: "1993",
    detail: "Vila Madalena, SP",
  },
  {
    label: "Especialidade",
    value: "Anéis de Poder",
    detail: "Ouro, prata & pedras",
  },
  {
    label: "Influências",
    value: "7 países",
    detail: "Índia, Nepal, Bali...",
  },
  {
    label: "Técnica",
    value: "Manual",
    detail: "Esculpido à mão",
  },
];

export function HighlightsSection() {
  return (
    <section className="border-t border-border px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-px bg-border md:grid-cols-4">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-2 bg-background px-4 py-12 text-center"
            >
              <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted">
                {item.label}
              </span>
              <span className="font-serif text-3xl font-light text-foreground sm:text-4xl">
                {item.value}
              </span>
              <span className="text-xs text-muted">{item.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
