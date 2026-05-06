# 🚀 Guia Rápido - Mercado Babilônia

## Início Rápido

### 1. Reorganizar Imagens
```powershell
# Execute o script para reorganizar as imagens
.\reorganize-images.ps1
```

### 2. Instalar e Executar
```bash
# Instalar dependências
pnpm install

# Executar em desenvolvimento
pnpm dev

# Abrir no navegador
# http://localhost:3000
```

## 📸 Adicionar Novas Imagens

### Passo 1: Adicionar arquivo físico
Coloque a imagem na pasta apropriada:
```
public/images/
├── hero/          (imagens principais)
├── about/         (biografia)
├── atelier/       (detalhes do espaço)
├── gallery/       (mídia e joias)
└── branding/      (logos)
```

### Passo 2: Registrar em `image-config.ts`
```typescript
// src/lib/image-config.ts

export const IMAGE_PATHS = {
  gallery: [
    // ... imagens existentes
    {
      src: "/images/gallery/nova-imagem.jpg",
      alt: "Descrição da imagem",
      category: "press", // ou "jewelry"
    },
  ],
};
```

### Passo 3: A imagem aparecerá automaticamente
- Na galeria horizontal
- Com lazy loading
- Com lightbox ao clicar

## 🎨 Personalizar Cores

Edite `src/app/globals.css`:

```css
:root {
  --background: #faf9f7;  /* Cor de fundo */
  --foreground: #1a1a1a;  /* Cor do texto */
  --muted: #6b6b6b;       /* Texto secundário */
  --border: #e0ddd8;      /* Bordas */
}
```

## 📝 Editar Conteúdo

### Hero Section
```typescript
// src/components/sections/hero.tsx
// Edite os textos diretamente no JSX
```

### Story Section
```typescript
// src/components/sections/story.tsx
// Três subsections:
// 1. Seção escura com narrativa
// 2. Biografia com imagens
// 3. "O mercado" com foto panorâmica
```

### Gallery Section
```typescript
// src/components/sections/gallery.tsx
// Galeria horizontal automática
// Usa IMAGE_PATHS.gallery
```

## 🔧 Componentes Úteis

### OptimizedImage
```tsx
import { OptimizedImage } from "@/components/ui/optimized-image";

<OptimizedImage
  src="/images/exemplo.jpg"
  alt="Descrição"
  fill
  quality="hero"  // hero | gallery | thumbnail | default
  sizes="100vw"
  className="object-cover"
/>
```

### ImageLightbox
```tsx
import { ImageLightbox } from "@/components/ui/image-lightbox";

// Já implementado na galeria
// Abre automaticamente ao clicar nas imagens
```

## 📱 Testar Responsividade

### Chrome DevTools
1. F12 para abrir DevTools
2. Ctrl+Shift+M para modo responsivo
3. Testar em:
   - Mobile: 375px
   - Tablet: 768px
   - Desktop: 1440px

## 🚀 Deploy

### Vercel (Recomendado)
```bash
# Instalar Vercel CLI
pnpm add -g vercel

# Deploy
vercel
```

### Build Local
```bash
# Criar build de produção
pnpm build

# Testar build
pnpm start
```

## 🐛 Problemas Comuns

### Imagem não aparece
1. ✅ Verificar se o arquivo existe em `public/images/`
2. ✅ Verificar se está registrado em `image-config.ts`
3. ✅ Verificar o caminho (deve começar com `/images/`)

### Scroll horizontal não funciona
1. ✅ Verificar se há imagens suficientes (mínimo 3-4)
2. ✅ Verificar se a classe `scrollbar-hide` está aplicada
3. ✅ Testar em diferentes navegadores

### Lightbox não abre
1. ✅ Verificar se o componente é "use client"
2. ✅ Verificar se o estado está sendo gerenciado
3. ✅ Verificar console do navegador para erros

## 📚 Estrutura de Pastas

```
mercado-babilonia/
├── public/
│   └── images/              (Todas as imagens)
├── src/
│   ├── app/
│   │   ├── globals.css      (Estilos globais)
│   │   ├── layout.tsx       (Layout principal)
│   │   └── page.tsx         (Página inicial)
│   ├── components/
│   │   ├── ui/              (Componentes reutilizáveis)
│   │   ├── sections/        (Seções da página)
│   │   └── layout/          (Header, Footer)
│   └── lib/
│       └── image-config.ts  (Configuração de imagens)
├── IMAGE_ORGANIZATION.md    (Guia de organização)
├── MELHORIAS_IMPLEMENTADAS.md
└── GUIA_RAPIDO.md          (Este arquivo)
```

## 🎯 Checklist de Lançamento

- [ ] Todas as imagens otimizadas (< 500KB cada)
- [ ] Textos revisados e sem erros
- [ ] Testado em mobile, tablet e desktop
- [ ] Testado em Chrome, Firefox e Safari
- [ ] Meta tags e SEO configurados
- [ ] Favicon personalizado
- [ ] Analytics configurado (opcional)
- [ ] Build de produção testado
- [ ] Deploy realizado

## 💡 Dicas

1. **Performance**: Mantenha imagens abaixo de 500KB
2. **Acessibilidade**: Sempre use `alt` descritivo
3. **SEO**: Use títulos hierárquicos (h1, h2, h3)
4. **Mobile First**: Teste sempre no mobile primeiro
5. **Conteúdo**: Priorize a narrativa sobre efeitos visuais

## 📞 Suporte

Para dúvidas sobre:
- **Next.js**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs

---

**Boa sorte com o projeto! 🌟**
