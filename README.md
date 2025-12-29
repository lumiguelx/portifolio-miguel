# Luis Miguel - Portfólio

Portfólio pessoal minimalista construído com Next.js 15, React 19 e Motion-Primitives.

## 🚀 Características

- **Design Minimalista**: Interface limpa e focada no conteúdo
- **Animações Suaves**: Transições elegantes usando Motion-Primitives
- **Responsivo**: Otimizado para todos os dispositivos
- **Modo Escuro**: Suporte completo a tema escuro
- **Performance**: Otimizado para velocidade e SEO

## 🛠️ Stack Tecnológica

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Motion-Primitives
- Lucide Icons
- React Icons

## 📁 Estrutura do Projeto

```
├── app/
│   ├── data.ts          # Dados do portfólio (projetos, experiência, etc.)
│   ├── header.tsx       # Cabeçalho com nome e tagline
│   ├── page.tsx         # Página principal
│   └── layout.tsx       # Layout base
├── components/ui/       # Componentes reutilizáveis
└── public/             # Assets estáticos
```

## 🎥 Adicionando Vídeos aos Projetos

Para adicionar vídeos de demonstração aos seus projetos:

1. Coloque os arquivos de vídeo na pasta `public/videos/`
2. Atualize os caminhos no arquivo `app/data.ts`:

```typescript
export const PROJECTS: Project[] = [
  {
    name: 'Seu Projeto',
    description: 'Descrição do projeto',
    link: 'https://github.com/seu-usuario/projeto',
    video: '/videos/seu-video.mp4', // Caminho para o vídeo
    status: 'Concluído', // ou 'Em Desenvolvimento' ou 'Vencedor do Hackathon'
  },
]
```

## 🎨 Personalizando

### Dados Pessoais
Edite o arquivo `app/data.ts` para atualizar:
- Projetos
- Links sociais
- Email de contato
- Tecnologias

### Cabeçalho
Edite `app/header.tsx` para alterar nome e tagline.

### Ícones de Tecnologias
No arquivo `components/ui/tech-stack.tsx`, os ícones já estão configurados com React Icons profissionais.

## 🚀 Como Executar

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar produção
npm start
```

## 📝 Próximos Passos

1. **Adicione seus vídeos**: Coloque vídeos de demonstração na pasta `public/videos/`
2. **Atualize o email**: Coloque seu email real no arquivo `data.ts`
3. **Personalize as cores**: Ajuste o tema no `globals.css` se necessário
4. **Deploy**: Faça deploy na Vercel ou plataforma de sua escolha

## 🎯 Dicas de Uso

- **Vídeos**: Use formato MP4 com tamanho otimizado (máx 5MB por vídeo)
- **Performance**: Comprima imagens e vídeos antes de adicionar
- **SEO**: Atualize os metadados no `layout.tsx`
- **Analytics**: Adicione Google Analytics se necessário

---

**Luis Miguel** - Antisocial Extrovert | CompSci • 5th Sem | Games & Code