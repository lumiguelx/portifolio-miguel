# Vídeos de Demonstração

Coloque aqui os vídeos de demonstração dos seus projetos.

## Formato Recomendado

- **Formato**: MP4
- **Tamanho máximo**: 5MB por vídeo
- **Resolução**: 1280x720 ou 1920x1080
- **Duração**: 10-30 segundos
- **Configurações**: autoplay, loop, muted (para funcionar como GIF)

## Nomes dos Arquivos

- `landing-flutter-demo.mp4` - Landing Page Flutter
- `gerenciador-demo.mp4` - Gerenciador de Validade  
- `finance-ai-demo.mp4` - Finance-AI-FMU

## Dica

Para criar vídeos otimizados, você pode usar ferramentas como:
- **OBS Studio** (gratuito) - para gravar a tela
- **HandBrake** (gratuito) - para comprimir vídeos
- **FFmpeg** - para conversão via linha de comando

Exemplo de comando FFmpeg para otimizar:
```bash
ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -preset fast output.mp4
```