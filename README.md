# Mercado Babilônia - Biografia Digital

Site biográfico do Mercado Babilônia, ateliê de joias autorais fundado por Simone Levy em 1993 na Vila Madalena, São Paulo.

## 🎨 Sobre o Projeto

Este site é uma homenagem digital à história do Mercado Babilônia, um espaço que marcou época na Vila Madalena entre 1993 e 1997. Mais do que uma loja, era uma experiência sensorial única, com arquitetura singular inspirada em viagens à Índia, Nepal e Europa.

### Características

- ✨ Design biográfico e narrativo
- 📸 Galeria horizontal com imagens históricas
- 🎭 Layout limpo e elegante
- 📱 Totalmente responsivo
- ⚡ Otimizado para performance
- 🖼️ Lightbox para visualização de imagens

## 🚀 Início Rápido

```bash
# Instalar dependências
pnpm install

# Executar em desenvolvimento
pnpm dev

# Abrir no navegador
# http://localhost:3000
```

## 📁 Estrutura do Projeto

```
mercado-babilonia/
├── public/
│   └── images/              # Todas as imagens do site
│       ├── hero/            # Imagem principal
│       ├── about/           # Biografia e ateliê
│       ├── atelier/         # Detalhes arquitetônicos
│       ├── gallery/         # Mídia e joias
│       └── branding/        # Logos
├── src/
│   ├── app/                 # App Router (Next.js 16)
│   ├── components/
│   │   ├── ui/              # Componentes reutilizáveis
│   │   ├── sections/        # Seções da página
│   │   └── layout/          # Header e Footer
│   └── lib/
│       └── image-config.ts  # Configuração centralizada
└── docs/                    # Documentação
```

## 🛠️ Tecnologias

- **Next.js 16** - Framework React com App Router
- **React 19** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Estilização
- **Biome** - Linting e formatação

## 📸 Gerenciamento de Imagens

### Adicionar Nova Imagem

1. Coloque o arquivo em `public/images/[categoria]/`
2. Registre em `src/lib/image-config.ts`
3. A imagem aparecerá automaticamente

### Reorganizar Imagens Existentes

```powershell
.\reorganize-images.ps1
```

Veja [IMAGE_ORGANIZATION.md](IMAGE_ORGANIZATION.md) para detalhes.

## 📝 Documentação

- [GUIA_RAPIDO.md](GUIA_RAPIDO.md) - Guia rápido de uso
- [MELHORIAS_IMPLEMENTADAS.md](MELHORIAS_IMPLEMENTADAS.md) - Changelog detalhado
- [IMAGE_ORGANIZATION.md](IMAGE_ORGANIZATION.md) - Organização de imagens

## 🎯 Seções do Site

### Hero
Layout split com imagem histórica e título principal.

### Highlights
Cards com informações-chave (fundação, especialidade, influências).

### Story
Narrativa completa dividida em:
- Seção escura com texto destacado
- Biografia com imagens
- "O mercado" com foto panorâmica

### Timeline
Linha do tempo dos principais eventos.

### Atelier Details
Galeria horizontal com detalhes arquitetônicos.

### Gallery
Galeria unificada com scroll horizontal de imagens de mídia e joias.

## 🎨 Personalização

### Cores

Edite `src/app/globals.css`:

```css
:root {
  --background: #faf9f7;
  --foreground: #1a1a1a;
  --muted: #6b6b6b;
  --border: #e0ddd8;
}
```

### Conteúdo

Edite os arquivos em `src/components/sections/`:
- `hero.tsx` - Seção principal
- `story.tsx` - História e biografia
- `gallery.tsx` - Galeria de imagens

## 🚀 Deploy

### Vercel (Recomendado)

```bash
vercel
```

### Build Manual

```bash
pnpm build
pnpm start
```

## 📱 Responsividade

Testado e otimizado para:
- 📱 Mobile (375px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1440px+)

## ⚡ Performance

- Lazy loading de imagens
- Otimização automática pelo Next.js
- Qualidade adaptativa por contexto
- Scroll suave e animações leves

## 🤝 Contribuindo

Este é um projeto de homenagem. Sugestões e melhorias são bem-vindas!

## 📄 Licença

Este projeto é uma biografia digital do Mercado Babilônia.

## 🌟 Créditos

- **Fundadora**: Simone Levy
- **Design**: Inspirado no site original
- **Desenvolvimento**: Next.js 16 + React 19

---

**Mercado Babilônia** - Um legado de arte, cultura e espiritualidade (1993-1997)

