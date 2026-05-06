# 📸 Guia de Organização de Imagens - Biografia Mercado Babilônia

## 🎯 Estrutura Recomendada

Para manter o projeto limpo, moderno e fácil de manter, reorganize as imagens da seguinte forma:

```
public/
└── images/
    ├── hero/
    │   └── jewelry-banner.jpg          (imagem principal do hero)
    │
    ├── about/
    │   ├── simone-levy-portrait.jpg    (retrato da fundadora)
    │   └── atelier-interior.jpg        (interior do ateliê)
    │
    ├── atelier/
    │   ├── detail-01.jpg               (arcos e detalhes)
    │   ├── detail-02.jpg               (fonte decorativa)
    │   ├── detail-03.jpg               (porta de entrada)
    │   ├── detail-04.jpg               (interior com objetos)
    │   ├── detail-05.jpg               (vitrais)
    │   └── detail-06.jpg               (fachada)
    │
    ├── gallery/
    │   ├── press-01.jpg                (recortes de jornal)
    │   ├── press-02.jpg                (matéria de revista)
    │   ├── jewelry-01.jpg              (anéis e joias)
    │   ├── press-03.jpg                (clippings)
    │   ├── press-04.jpg                (matéria sobre o ateliê)
    │   ├── jewelry-02.jpg              (detalhes do ateliê)
    │   └── press-05.jpg                (publicações)
    │
    └── branding/
        └── logo-snakes-roses.jpg       (logo/branding)
```

## 🔄 Migração das Imagens Atuais

### Mapeamento de arquivos:

| Arquivo Atual | Novo Local | Categoria |
|--------------|------------|-----------|
| `jewelry-banner.jpg` | `hero/jewelry-banner.jpg` | Hero |
| `simone-levy-portrait.jpg` | `about/simone-levy-portrait.jpg` | Sobre |
| `atelier-interior.jpg` | `about/atelier-interior.jpg` | Sobre |
| `gallery-01.jpg` | `gallery/press-01.jpg` | Galeria - Imprensa |
| `gallery-02.jpg` | `gallery/press-02.jpg` | Galeria - Imprensa |
| `gallery-03.jpg` | `gallery/jewelry-01.jpg` | Galeria - Joias |
| `gallery-04.jpg` | `gallery/press-03.jpg` | Galeria - Imprensa |
| `gallery-05.jpg` | `gallery/press-04.jpg` | Galeria - Imprensa |
| `gallery-06.jpg` | `gallery/jewelry-02.jpg` | Galeria - Joias |
| `gallery-07.jpg` | `gallery/press-05.jpg` | Galeria - Imprensa |
| `logo-snakes-roses.jpg` | `branding/logo-snakes-roses.jpg` | Branding |

## ✨ Melhorias Implementadas

### 1. **Componente de Imagem Otimizado**
- ✅ Loading states com animações suaves
- ✅ Tratamento de erros
- ✅ Efeitos hover modernos
- ✅ Lazy loading automático
- ✅ Qualidade adaptativa por contexto

### 2. **Configuração Centralizada**
- ✅ Todos os caminhos de imagem em um único arquivo
- ✅ Configurações de qualidade por tipo de uso
- ✅ Tamanhos responsivos otimizados
- ✅ Fácil manutenção e atualização

### 3. **Galeria Interativa**
- ✅ Filtros por categoria (Todas/Joias/Imprensa)
- ✅ Transições suaves entre filtros
- ✅ Layout responsivo moderno
- ✅ Efeitos hover elegantes

### 4. **Animações Modernas**
- ✅ Fade-in suave no carregamento
- ✅ Slide-up para títulos
- ✅ Bounce sutil no indicador de scroll
- ✅ Transições de 700ms para suavidade

### 5. **Otimizações de Performance**
- ✅ Qualidade adaptativa (hero: 90, gallery: 85, thumbnail: 75)
- ✅ Sizes responsivos para cada contexto
- ✅ Priority loading para imagens críticas
- ✅ Lazy loading para galeria

## 🎨 Efeitos Visuais Adicionados

### Hero Section
- Gradiente suave no overlay (em vez de cor sólida)
- Animações de entrada para todos os elementos
- Overflow hidden para evitar scroll horizontal

### Story Section
- Sombras modernas (shadow-2xl)
- Bordas arredondadas sutis (rounded-sm)
- Hover para remover grayscale
- Transições de 700ms

### Gallery Section
- Filtros interativos com estados visuais claros
- Sombras que aumentam no hover
- Layout masonry responsivo
- Categorização inteligente

## 📱 Responsividade

Todas as imagens agora usam tamanhos otimizados:

- **Hero**: 100vw em todos os tamanhos
- **Gallery**: 100vw (mobile), 50vw (tablet), 33vw (desktop)
- **Portrait**: 100vw (mobile), 40vw (desktop)
- **Full**: 100vw para imagens de largura total

## 🚀 Como Usar

### Para adicionar novas imagens:

1. Coloque a imagem na pasta apropriada em `public/images/`
2. Adicione a referência em `src/lib/image-config.ts`
3. Use o componente `<OptimizedImage>` nos seus componentes

### Exemplo:

```tsx
import { OptimizedImage } from "@/components/ui/optimized-image";
import { IMAGE_PATHS, IMAGE_SIZES } from "@/lib/image-config";

<OptimizedImage
  src={IMAGE_PATHS.hero.banner}
  alt="Descrição da imagem"
  fill
  quality="hero"
  sizes={IMAGE_SIZES.hero}
  overlayOnHover
/>
```

## 🔧 Comandos Úteis

### Reorganizar imagens (PowerShell):
```powershell
# Criar estrutura de pastas
New-Item -ItemType Directory -Force -Path "public/images/hero"
New-Item -ItemType Directory -Force -Path "public/images/about"
New-Item -ItemType Directory -Force -Path "public/images/gallery"
New-Item -ItemType Directory -Force -Path "public/images/branding"

# Mover arquivos (ajuste conforme necessário)
Move-Item "public/images/jewelry-banner.jpg" "public/images/hero/"
Move-Item "public/images/simone-levy-portrait.jpg" "public/images/about/"
Move-Item "public/images/atelier-interior.jpg" "public/images/about/"
Move-Item "public/images/logo-snakes-roses.jpg" "public/images/branding/"

# Renomear e mover galeria
Move-Item "public/images/gallery-01.jpg" "public/images/gallery/press-01.jpg"
Move-Item "public/images/gallery-02.jpg" "public/images/gallery/press-02.jpg"
Move-Item "public/images/gallery-03.jpg" "public/images/gallery/jewelry-01.jpg"
Move-Item "public/images/gallery-04.jpg" "public/images/gallery/press-03.jpg"
Move-Item "public/images/gallery-05.jpg" "public/images/gallery/press-04.jpg"
Move-Item "public/images/gallery-06.jpg" "public/images/gallery/jewelry-02.jpg"
Move-Item "public/images/gallery-07.jpg" "public/images/gallery/press-05.jpg"
```

## 📊 Benefícios da Nova Estrutura

1. **Organização Clara**: Imagens agrupadas por função
2. **Manutenção Fácil**: Localização rápida de arquivos
3. **Escalabilidade**: Fácil adicionar novas categorias
4. **Performance**: Otimizações automáticas por contexto
5. **Experiência**: Animações e transições suaves
6. **Acessibilidade**: Alt texts descritivos e semânticos

## 🎯 Próximos Passos Recomendados

1. ✅ Reorganizar fisicamente as imagens nas pastas
2. ✅ Otimizar imagens (comprimir sem perda de qualidade)
3. ✅ Adicionar WebP/AVIF para browsers modernos
4. ✅ Implementar blur placeholder para melhor UX
5. ✅ Adicionar lightbox para visualização em tela cheia

---

**Nota**: O Next.js 16 otimiza automaticamente as imagens, mas a organização e os componentes customizados garantem a melhor experiência possível.
