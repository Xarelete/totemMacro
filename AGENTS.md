# AGENTS: How to Work in This Repo

This file gives agents conventions and tips for working in this repository.

- Scope: applies to the entire repo tree from `.`.
- Precedence: If any subdirectory adds its own `AGENTS.md`, that one takes precedence for files in that subtree. Direct user instructions always override this file.

**Overview**
- SPA built with Vite + Vue 3 + Vue Router + Tailwind CSS v4.
- Tests use Vitest with `jsdom` (see `vite.config.js`).
- Primary goal: keep changes minimal, in the existing style, and focused on the task.

**Tech Stack**
- Vue 3 SFCs with Composition API and `<script setup>`.
- Vite 5 for dev/build; hash-based routing.
- Tailwind CSS v4 via `@tailwindcss/vite` plugin; utilities imported in `src/style.css`.
- Vitest for unit/smoke tests.

**Project Layout**
- `src/main.js` — app bootstrap; creates router (`createWebHashHistory`).
- `src/App.vue` — root layout; page transition; persistent `BottomNav`.
- `src/router/routes.js` — route definitions; simple array of `{ path, component }`.
- `src/pages/` — page-level SFCs (PascalCase `.vue`).
- `src/components/` — shared/presentational components (PascalCase `.vue`).
- `src/style.css` — Tailwind import + small custom transitions.
- `public/` — static assets served as-is (e.g., `public/hero.jpg`).
- `tests/` — Vitest tests (e.g., `tests/smoke.test.js`).

**Conventions**
- Use Composition API with `<script setup>` in new components.
- Filenames: PascalCase for Vue SFCs; `.js` for simple modules like routes.
- Keep imports relative and simple (no path aliases configured).
- Avoid introducing new dependencies without explicit approval.
- Keep diffs surgical: do not rename or move files unless requested.
- Keep styles utility-first with Tailwind; prefer existing `src/style.css` for small global tweaks.
- Text/content is Portuguese (pt-BR) in UI; match existing tone.

**Routing**
- Router uses hash history. Define routes in `src/router/routes.js` as an exported array.
- When adding a page:
  - Create `src/pages/NewPage.vue` (PascalCase).
  - Add `{ path: '/new-page', component: NewPage }` to `routes.js`.
  - If it must appear in the bottom nav, also update `src/components/BottomNav.vue` `links` list.
- Keep route order consistent with navigation.

**Styling**
- Tailwind v4 utilities are available via `@import "tailwindcss";` in `src/style.css`.
- Prefer utilities; keep custom CSS minimal. Reuse `--ease-soft` and transition patterns defined in `src/style.css`.
- Do not add a Tailwind config unless requested.

**Assets**
- Place static files under `public/` and reference with absolute paths (e.g., `<img src="/hero.jpg">`).
- Optimize image sizes before adding; avoid huge binaries.

**Testing**
- Run tests: `npm run test`.
- Add unit tests under `tests/` with `*.test.js` when changing logic.
- The test environment is `jsdom` (configured in `vite.config.js`).
- Keep tests fast and focused; do not add heavy integration tests.

**Local Development**
- Setup:
  - Node.js 18+ (Vite 5 requires modern Node).
  - Install deps: `npm install`.
- Commands:
  - Dev server: `npm run dev`
  - Build: `npm run build`
  - Preview build: `npm run preview`
  - Tests: `npm run test`

**Performance & Accessibility**
- Prefer lightweight components; avoid unnecessary reactivity.
- Use semantic HTML where possible; check color contrast when changing styles.
- Keep bundle small; avoid new runtime deps.

**Change Guidelines for Agents**
- Match existing code style and patterns.
- Update documentation when behavior or usage changes (this file or `README.md`).
- Do not add license/copyright headers.
- Keep PRs/patches scoped to the requested task; do not fix unrelated issues unless asked.

**Common Tasks**
- Add a new page:
  - Create `src/pages/MyPage.vue` with `<script setup>` and a minimal template.
  - Export route in `src/router/routes.js`.
  - Optionally add to `src/components/BottomNav.vue` `links`.
- Adjust the bottom nav:
  - Edit the `links` array in `src/components/BottomNav.vue`.
  - Keep labels concise; paths must match `routes.js`.
- Add simple transition to elements:
  - Use existing classes or extend in `src/style.css`. Prefer Tailwind utilities first.

If instructions here conflict with explicit user requests, follow the user.

---

## Project Content — Altus América

Use this section as the content guide when building or updating pages. The source of truth is the PDF: `Book Algus Corretor.pdf` (marketing/booklet). Prefer exact wording and numbers from the PDF; do not invent additional claims.

**Branding**
- Empreendimento: Altus América (lançamento Macro).
- Linguagem: pt-BR, respeitando acentuação e casas decimais com vírgula.
- Identidade: seguir o “DNA do Altus América” do material (nome/slogan, moodboard). Se copiar textos, preserve caixa e pontuação do material.

**Endereço e Dimensões**
- Endereço: Rua Iraci Gonçalves Ferreira, nº 100, Jardim América — São José dos Campos/SP.
- Área do Terreno: 14.602,35 m².
- Área Construída Total: 40.135,84 m².

**Torres e Pavimentos**
- Torres: 2 torres residenciais.
- Pavimentos: 30 (25 residenciais).

**Unidades**
- 200 unidades — 86,95 m²: 3 dormitórios (1 suíte), 1 banheiro, 1 lavabo, cozinha, área de serviço, sala de jantar/estar, varanda gourmet, 2 vagas de garagem, hobby box no andar.
- 100 unidades — 66,66 m²: 2 dormitórios (1 suíte), 1 banheiro, cozinha, área de serviço, sala de jantar/estar, varanda gourmet, 1 vaga de garagem.

**Circulação Vertical**
- Elevadores: 3 por torre com gerador, + 1 elevador de transbordo (térreo ao PUC).

**Diferenciais — Áreas Comuns**
- +30 itens de lazer (equipados, climatizados e mobiliados), gerador full de energia, Wi‑Fi, bicicletário, quadra de beach tennis oficial, captação e reaproveitamento de águas pluviais, elevador privativo para visitantes, lavanderia OMO, paisagismo assinado, piscina com borda infinita, ampla academia indoor na zona sul.

**Diferenciais — Áreas Privativas**
- Infra para aquecedor a gás; área técnica e pontos/drenos para ar‑condicionado; janela blackout com infra para automação; hobby box no andar (3 dormitórios); banheiros com ventilação natural; opção de churrasqueira a gás ou carvão; kit personalização; certificação ISO 9001 nas unidades.

**Itens de Lazer (+ de 2.000 m²)**
- Playground; Pet Care; Pet Place; Baby Space; Miniquadra Poliesportiva; Quadra Beach Tennis; Deck de Areia; Churrasqueiras; Salão de Festas; Salão Gourmet; Coworking; Mini Market; Espaço Influencer; Lavanderia; Salão de Jogos; Wine Bar; Casa da Mata; Piscina Adulto; Piscina Infantil; Praça Interna; Lounge da Piscina; Brinquedoteca; Baby Care; Espaço Yoga; Spa; Sauna; Área Fitness Interna; Espaço CrossFit; Área Fitness Externa; Redário; Fireplace; Bicicletário; Espaço Delivery.

**Localização — PONTOS PRÓXIMOS**
- Linha Verde (1 min), Shopping Jardim Oriente (5 min), Drogaria São Paulo (4 min), Rodovia Presidente Dutra (1 min), Centro da Juventude (3 min), Ponto Garden (2 min), Shopping Vale Sul (4 min), Anel Viário (5 min), Padaria Flor de Ypê (4 min).

**Sobre a Macro**
- 49 anos de história; +450 obras; +2 milhões de m² construídos; certificações PBQP‑H e ISO 9001.

**Como usar este conteúdo nas páginas**
- `Home` (hero/CTA): nome do empreendimento, localização curta, highlights (ex.: 2 torres, 2 tipologias, +30 itens de lazer), CTA para “Plantas” e “Localização”.
- `Localização`: mapa/descrição e lista de proximidades (com tempos acima). Texto conciso.
- `Ficha Técnica`: consolidar endereço, áreas, torres/pavimentos, elevadores, diferenciais e certificações.
- `Plantas`: listar tipologias (66,66 m² e 86,95 m²) com composição dos ambientes e vagas; inserir plantas/imagens quando disponíveis.
- `Lazer`: apresentar “Itens de Lazer” em lista ou grupos; opcionais ícones.
- `Fotos`: galeria com perspectivas do PDF (otimize imagens e salve em `public/`).
- `Vista dos Andares`: se aplicável, tabela/grade ou mídia estática; mantenha simples se não houver dados interativos.

**Modelagem de conteúdo (sugestão, opcional)**
- Centralize textos/dados em `src/content/altus.json` para facilitar manutenção. Ex.:
  - `name`, `address`, `areas` (terreno, construída), `towers`, `floors`.
  - `units` (tipos com metragem, dormitórios, banheiros, vagas, itens).
  - `amenities` (comuns, privativas, lazer).
  - `nearby` (lista com `label` e `time`).
  - Reutilize nas páginas via import. Não adicione dependências.

**Estilo de conteúdo**
- Use números com vírgula (pt-BR) e unidades com espaço (ex.: `86,95 m²`).
- Evite promessas absolutas; prefira linguagem informativa (ex.: “infraestrutura para…”).
- Não adicione informações além do PDF sem aprovação. Em caso de conflito, o PDF prevalece.

**Arquivos e ativos**
- PDF: mantenha `Book Algus Corretor.pdf` fora do bundle final; se necessário para consulta, coloque em `docs/` ou referencie externamente.
- Imagens extraídas do PDF devem ir para `public/` e ser otimizadas. Use `<img src="/...">`.
