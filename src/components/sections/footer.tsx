export function FooterSection() {
  return (
    <footer className="border-t border-border px-6 py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        {/* Logo mark */}
        <span className="font-serif text-2xl font-light italic text-foreground/40">
          MB
        </span>

        {/* Tagline */}
        <p className="max-w-sm text-sm leading-6 text-muted">
          Lugar onde a cultura, o surpreendente, a arte e a espiritualidade se
          encontravam.
        </p>

        {/* Divider */}
        <span className="h-px w-12 bg-border" />

        {/* Copyright */}
        <span className="text-[11px] uppercase tracking-[0.2em] text-muted/60">
          © {new Date().getFullYear()} Mercado Babilônia
        </span>
      </div>
    </footer>
  );
}
