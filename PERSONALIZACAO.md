# Guia de Personalização - Miguel S. Souza

## 🎯 Resumo das Alterações Feitas

Seu portfólio foi personalizado com base nos seus dados:

### ✅ Dados Atualizados
- **Nome**: Miguel S. Souza
- **Tagline**: "Antisocial Extrovert | CompSci • 5th Sem | Games & Code"
- **Bio**: Descrição focada em Computer Science e paixão por games/código
- **Links Sociais**: GitHub e LinkedIn atualizados
- **Projetos**: 3 projetos com status (WIP, Done, Hackathon Winner)
- **Tecnologias**: Stack completa com 8 tecnologias

### 🎨 Componentes Criados
- **TechStack**: Componente para exibir tecnologias com ícones
- **Status Tags**: Tags coloridas para status dos projetos
- **Estrutura de vídeos**: Preparada para demonstrações

## 🚀 Próximos Passos

### 1. Adicionar Vídeos de Demonstração
```bash
# Coloque seus vídeos na pasta public/videos/
public/videos/
├── landing-flutter-demo.mp4
├── gerenciador-demo.mp4
└── finance-ai-demo.mp4
```

### 2. Substituir Ícones das Tecnologias
No arquivo `components/ui/tech-stack.tsx`, substitua os emojis por SVGs:

```typescript
// Exemplo com React Icons
import { SiJavascript, SiTypescript, SiPython } from 'react-icons/si'

const TECH_ICONS: Record<string, JSX.Element> = {
  javascript: <SiJavascript className="text-yellow-500" />,
  typescript: <SiTypescript className="text-blue-500" />,
  python: <SiPython className="text-green-500" />,
  // ...
}
```

### 3. Atualizar Email Real
No arquivo `app/data.ts`:
```typescript
export const EMAIL = 'seu-email-real@gmail.com'
```

### 4. Personalizar Cores (Opcional)
No arquivo `app/globals.css`, você pode ajustar as cores do tema:
```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
}
```

## 🎥 Configuração de Vídeos

### Formato Ideal
- **Codec**: H.264
- **Resolução**: 1280x720 (HD)
- **Taxa de bits**: 1-2 Mbps
- **Duração**: 10-30 segundos
- **Sem áudio**: Para autoplay funcionar

### Comando FFmpeg para Otimizar
```bash
ffmpeg -i input.mov -vcodec libx264 -crf 28 -preset fast -an output.mp4
```

## 🔧 Customizações Avançadas

### Adicionar Nova Seção
1. Crie os dados em `app/data.ts`
2. Adicione a seção em `app/page.tsx`
3. Use o padrão de animação existente

### Modificar Layout
- **Header**: `app/header.tsx`
- **Footer**: `app/footer.tsx`
- **Página Principal**: `app/page.tsx`

### Adicionar Blog Posts
1. Crie arquivos `.mdx` em `app/blog/`
2. Atualize `BLOG_POSTS` em `app/data.ts`

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Conecte seu repositório GitHub
2. Configure build: `npm run build`
3. Pasta de publicação: `out` (se usar `output: 'export'`)

## 📱 Responsividade

O template já é totalmente responsivo:
- **Mobile**: Layout em coluna única
- **Tablet**: Grid 2 colunas para projetos
- **Desktop**: Layout completo

## 🎨 Temas

### Dark Mode
Já configurado com `next-themes`. Os usuários podem alternar entre:
- Light
- Dark  
- System (automático)

### Personalizar Cores do Dark Mode
```css
.dark {
  --background: your-dark-bg;
  --foreground: your-dark-text;
}
```

## 📊 Analytics (Opcional)

### Google Analytics
1. Instale: `npm install @next/third-parties`
2. Configure no `layout.tsx`

### Vercel Analytics
```bash
npm install @vercel/analytics
```

## 🔍 SEO

### Metadados
Já configurados em `app/layout.tsx`:
- Title dinâmico
- Description personalizada
- Open Graph tags

### Sitemap
Crie `app/sitemap.ts` para SEO avançado.

---

**Dúvidas?** Consulte a documentação do Next.js ou entre em contato!