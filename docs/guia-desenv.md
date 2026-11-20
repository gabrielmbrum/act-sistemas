# Guia de Desenvolvimento Web Moderno & AI-Driven Development
**Projeto:** Redesign Institucional — Act Sistemas (`actsis.com.br`)  
**Objetivo:** Alinhar a arquitetura do novo site às práticas mais exigidas pelo mercado atual e otimizar a geração de código via ferramentas de Inteligência Artificial (Cursor, Windsurf, Copilot, Claude Code, v0).

---

## 1. Stack Tecnológica Principal (Padrão de Mercado & IAs)
As ferramentas de IA geram códigos mais seguros, limpos e livres de alucinações quando operam sobre tecnologias fortemente tipadas e amplamente documentadas:

- [ ] **TypeScript (Obrigatório):** Funciona como "rede de segurança" contra erros gerados pela IA. Se uma propriedade for inventada ou um tipo estiver incorreto, o compilador aponta antes da execução.
- [ ] **Next.js (App Router) + React:** Padrão atual da indústria. Para um site B2B (Consultoria ERP/TOTVS), garante **SSR (Server-Side Rendering)** e **SSG (Static Site Generation)** nativos, oferecendo carregamento instantâneo e alta indexação no Google.
- [ ] **Tailwind CSS + shadcn/ui:** Substitui arquivos CSS extensos e templates pesados. Permite que IAs (como o v0.dev) construam interfaces modernas, responsivas e acessíveis com rapidez e consistência visual.
- [ ] **Lucide Icons & Framer Motion:** Para ícones corporativos limpos e micro-interações fluidas que substituem blocos estáticos de texto.

---

## 2. Arquitetura e Boas Práticas de Engenharia
Para evitar que a IA perca o contexto em arquivos gigantes e para manter o projeto escalável:

### Componentização Atômica e Modular
- Divida a interface em pequenos componentes isolados (idealmente abaixo de 150 linhas cada).
- **Exemplos para a Actsis:**
  - `HeroSection.tsx` (Proposta de valor e CTA principal)
  - `ErpIntegrationFlow.tsx` (Diagrama visual de integração Protheus ↔ APIs)
  - `ServiceGrid.tsx` (Consultoria Protheus, Fábrica de Software, Power BI, Sustentação)
  - `MetricsBanner.tsx` (Resultados e autoridade de mercado)
  - `LeadDiagnosisForm.tsx` (Formulário inteligente de captação)

### Server Actions & Validação com Zod
- Evite criar rotas de API complexas apenas para enviar formulários de contato.
- Utilize **Next.js Server Actions** combinadas com **Zod** para validar CNPJ, e-mail corporativo e telefone no servidor antes de disparar para o CRM ou e-mail da equipe comercial.

### Gestão de Conteúdo (Headless CMS - Opcional)
- Caso a equipe precise publicar artigos, cases de sucesso ou atualizar números sem mexer no código, substitua o WordPress tradicional por um Headless CMS moderno (**Sanity**, **Payload CMS** ou **Strapi**), mantendo o front-end desacoplado e ultrarrápido.

### Performance First (Core Web Vitals)
- Uso obrigatório de `next/image` (conversão automática para WebP/AVIF e *lazy loading*).
- Carregamento otimizado de fontes via `next/font`.
- Meta: Nota acima de 95 em Performance, Acessibilidade e SEO no Google Lighthouse.

---

## 3. Técnicas de "AI-Driven Development" (Engenharia de Contexto)
No mercado atual, o diferencial está em **guiar a IA** com regras arquiteturais claras:

### Arquivo de Regras na Raiz (`.cursorrules` ou `CLAUDE.md`)
Crie um arquivo de instruções na raiz do repositório contendo:
1. **Identidade da Marca:** Tom de voz corporativo, técnico, confiável e focado em decisores (Diretores de TI, CFOs, Gerentes de Operações).
2. **Design System:** Paleta de cores oficial da Actsis, regras de espaçamento e tipografia.
3. **Regras de Código:** Uso estrito de TypeScript (proibido uso de `any`), preferência por *Server Components* (usar `'use client'` apenas onde houver interatividade), e nomenclatura padronizada de arquivos.

### Fluxo de Prompts Eficiente
- **Planeje antes de codar:** Peça para a IA propor a estrutura de pastas e interfaces TypeScript antes de escrever a UI.
- **Iteração incremental:** Gere uma seção por vez, revise a responsividade (Mobile First) e só avance para a próxima etapa após validar a anterior.

---

## 4. Segurança, SEO Técnico e Infraestrutura
Requisitos essenciais para elevar o nível profissional da entrega:

- [ ] **SEO Estruturado:** Configurar a `Metadata API` do Next.js em todas as páginas, tags *Open Graph* (para compartilhamento no LinkedIn/WhatsApp) e **JSON-LD (Schema.org)** identificando a Actsis como empresa de Consultoria em Tecnologia e ERP.
- [ ] **DevSecOps & LGPD:**
  - Proteção anti-spam nos formulários (Cloudflare Turnstile ou reCAPTCHA v3) sem comprometer a experiência do usuário.
  - Cabeçalhos de segurança HTTP configurados no `next.config.ts`.
  - Consentimento de cookies leve e nativo, sem scripts pesados de terceiros.
- [ ] **CI/CD & Hospedagem Moderna:** Repositório no **GitHub** conectado à **Vercel** ou **Cloudflare Pages**, garantindo *deploy* automático a cada *push*, previews por *Pull Request* e SSL nativo.

---

## 5. Melhorias Estratégicas Específicas para a Actsis (`actsis.com.br`)
Pontos de evolução em relação à versão atual em WordPress:

1. **Diagramas Interativos de Integração:** Transformar explicações longas sobre integração do Protheus® (com e-commerce, CRM, WMS, notas fiscais/XML) em um componente visual interativo onde o visitante clica nos módulos e vê os benefícios.
2. **Qualificador de Leads Interativo:** Substituir o formulário genérico por um fluxo rápido em etapas (*"Qual seu desafio hoje? Implantação Protheus / Integrações via API / Dashboards Power BI / Sustentação"*), aumentando a taxa de conversão e entregando leads mais qualificados ao time comercial.
3. **Páginas Dedicadas por Solução:** Criar rotas otimizadas para SEO (`/servicos/consultoria-protheus`, `/servicos/integracoes-api`, `/servicos/power-bi`, `/servicos/fabrica-de-software`) para ranquear buscas específicas no Google.