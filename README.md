# O Correio de Nuremberg — Portal Jornalístico (Simulação Acadêmica)

Portal de notícias fictício sobre o Tribunal Militar Internacional de Nuremberg,
desenvolvido como jornal estudantil com padrão de produção profissional.

## Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Framer Motion
- React Router DOM
- Lucide React

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (geralmente `http://localhost:5173`).

## Build de produção

```bash
npm run build
npm run preview
```

## Estrutura do projeto

```
src/
  components/
    intro/      -> Introducao cinematografica (tela de abertura)
    layout/     -> Header, Footer, MobileMenu, Hero
    news/       -> NewsCard, ArticleBody, CategoryBadge, etc.
    search/     -> Barra de pesquisa com resultados ao vivo
    ui/         -> Button, Skeleton (componentes genericos)
  constants/    -> Dados mockados das materias, categorias e creditos
  hooks/        -> Hooks reutilizaveis (intro, scroll, debounce, etc.)
  lib/          -> Funcoes utilitarias (datas, classnames)
  pages/        -> Home, Article, AllNews, Credits, NotFound
  services/     -> Camada de acesso a dados (simula chamadas assincronas)
  types/        -> Tipagem TypeScript do dominio de noticias
```

## Substituindo o conteudo

- **Materias**: edite `src/constants/news.ts`. Cada materia segue a
  interface `NewsArticle` (`src/types/news.ts`), com corpo em blocos
  (`paragraph`, `heading`, `quote`, `highlight`).
- **Creditos**: edite `src/constants/credits.ts`.
- **Categorias**: edite `src/constants/categories.ts`.
- **Imagens**: atualmente usam URLs do Unsplash como placeholder editorial.
  Troque `coverImage` em cada materia por suas proprias imagens.
- **Audio da introducao**: o hook `useIntroSession` e o componente
  `CinematicIntro` foram estruturados para permitir a troca facil de um
  som de maquina de escrever no futuro (adicione um `<audio>` controlado
  dentro do componente).

## Comportamento da introducao

A introducao cinematografica aparece uma vez por sessao do navegador
(via `sessionStorage`) e reaparece normalmente apos atualizar a pagina
(F5). Ha um botao "Pular introducao" no canto inferior direito.

## Notas

Todo o conteudo jornalistico e ficticio e faz parte de uma simulacao
academica sobre o funcionamento do Tribunal de Nuremberg, sem atribuir
falas reais a pessoas historicas especificas.
