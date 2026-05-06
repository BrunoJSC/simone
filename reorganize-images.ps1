# Script para reorganizar imagens do projeto
# Execute com: .\reorganize-images.ps1

Write-Host "🎨 Reorganizando estrutura de imagens..." -ForegroundColor Cyan
Write-Host ""

# Criar estrutura de pastas
Write-Host "📁 Criando estrutura de pastas..." -ForegroundColor Yellow
$folders = @(
    "public/images/hero",
    "public/images/about",
    "public/images/gallery",
    "public/images/branding"
)

foreach ($folder in $folders) {
    if (!(Test-Path $folder)) {
        New-Item -ItemType Directory -Force -Path $folder | Out-Null
        Write-Host "  ✓ Criado: $folder" -ForegroundColor Green
    } else {
        Write-Host "  ℹ Já existe: $folder" -ForegroundColor Gray
    }
}

Write-Host ""
Write-Host "🔄 Movendo e renomeando imagens..." -ForegroundColor Yellow

# Mapeamento de arquivos
$moves = @(
    @{From="public/images/jewelry-banner.jpg"; To="public/images/hero/jewelry-banner.jpg"},
    @{From="public/images/simone-levy-portrait.jpg"; To="public/images/about/simone-levy-portrait.jpg"},
    @{From="public/images/atelier-interior.jpg"; To="public/images/about/atelier-interior.jpg"},
    @{From="public/images/logo-snakes-roses.jpg"; To="public/images/branding/logo-snakes-roses.jpg"},
    @{From="public/images/gallery-01.jpg"; To="public/images/gallery/press-01.jpg"},
    @{From="public/images/gallery-02.jpg"; To="public/images/gallery/press-02.jpg"},
    @{From="public/images/gallery-03.jpg"; To="public/images/gallery/jewelry-01.jpg"},
    @{From="public/images/gallery-04.jpg"; To="public/images/gallery/press-03.jpg"},
    @{From="public/images/gallery-05.jpg"; To="public/images/gallery/press-04.jpg"},
    @{From="public/images/gallery-06.jpg"; To="public/images/gallery/jewelry-02.jpg"},
    @{From="public/images/gallery-07.jpg"; To="public/images/gallery/press-05.jpg"}
)

$movedCount = 0
$skippedCount = 0
$errorCount = 0

foreach ($move in $moves) {
    $from = $move.From
    $to = $move.To
    
    if (Test-Path $from) {
        try {
            Move-Item -Path $from -Destination $to -Force
            Write-Host "  ✓ $from → $to" -ForegroundColor Green
            $movedCount++
        } catch {
            Write-Host "  ✗ Erro ao mover $from" -ForegroundColor Red
            $errorCount++
        }
    } elseif (Test-Path $to) {
        Write-Host "  ℹ Já existe no destino: $to" -ForegroundColor Gray
        $skippedCount++
    } else {
        Write-Host "  ⚠ Arquivo não encontrado: $from" -ForegroundColor Yellow
        $skippedCount++
    }
}

Write-Host ""
Write-Host "📊 Resumo:" -ForegroundColor Cyan
Write-Host "  • Movidos: $movedCount" -ForegroundColor Green
Write-Host "  • Ignorados: $skippedCount" -ForegroundColor Gray
Write-Host "  • Erros: $errorCount" -ForegroundColor Red

Write-Host ""
Write-Host "✨ Reorganização concluída!" -ForegroundColor Green
Write-Host ""
Write-Host "📝 Próximos passos:" -ForegroundColor Cyan
Write-Host "  1. Verifique a nova estrutura em public/images/"
Write-Host "  2. Execute 'pnpm dev' para testar o projeto"
Write-Host "  3. Consulte IMAGE_ORGANIZATION.md para mais detalhes"
Write-Host ""
