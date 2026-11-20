Diretrizes de Desenvolvimento & Engenharia de Contexto — Act Sistemas (actsis.com.br)

Este arquivo define as regras de arquitetura, padrões de código e diretrizes de design que devem ser seguidas por todos os agentes de IA (Antigravity, Cursor, Claude Code, Copilot) durante a construção do novo site institucional da Act Sistemas.

1. Contexto do Projeto & Tom de Voz

Empresa: Act Sistemas — Consultoria em ERP TOTVS® Protheus, Integrações via API, Fábrica de Software e Dashboards Power BI.

Objetivo: Novo site B2B institucional de alta conversão, performance e indexação no Google.

Público-Alvo: Diretores de TI (CTOs/CIOs), Diretores Financeiros (CFOs), Gerentes de Operações e Decision Makers corporativos.

Tom de Voz: Corporativo, técnico, confiável, focado em resultados de negócios e eliminação de dores operacionais.

2. Stack Tecnológica Principal

Framework: Next.js 15+ (App Router)

Linguagem: TypeScript (Modo Estrito / Strict Mode)

Estilização: Tailwind CSS v3/v4 + shadcn/ui

Animações & Ícones: framer-motion + lucide-react

Validação & Server Logic: Zod + Next.js Server Actions ('use server')

SEO & Metadados: Next.js Metadata API + JSON-LD (Schema.org)

3. Design System & Paleta de Cores (Opção Esmeralda + Grafite)

Cores Principais (Tokens Tailwind)

Brand Primary (Esmeralda):

Light Mode: #059669 (emerald-600)

Dark Mode / Destaques: #10B981 (emerald-500)

Hover / Active: #047857 (emerald-700)

Neutros Escuros (Grafite / Slate):

Surface Dark: #18181B (zinc-900) / #0F172A (slate-900)

Card Dark: #27272A (zinc-800)

Text Principal Dark Mode: #F4F4F5 (zinc-100)

Neutros Claros:

Surface Light: #FFFFFF (white) / #F8FAFC (slate-50)

Card Light: #FFFFFF com borda #E2E8F0 (slate-200)

Text Principal Light Mode: #18181B (zinc-900)

Text Muted: #52525B (zinc-600) em light / #A1A1AA (zinc-400) em dark

Tipografia & Assets

Fonte: Inter via next/font/google.

Logotipo:

Versão Light: public/images/logo-light.png (ou SVG)

Versão Dark: public/images/logo-dark.png (ou SVG)

4. Regras Estritas de Código e Arquitetura

4.1. TypeScript & Tipagem

PROIBIDO USO DE any: Todos os dados, props e retornos de funções devem ser explicitamente tipados.

Centralize tipos globais em src/types/ ou em src/lib/content.ts.

Valide dados externos e envios de formulário com esquemas Zod.

4.2. React & Next.js App Router

Server Components por Padrão: Mantenha todos os componentes como React Server Components (RSC).

'use client' Restrito: Adicione a diretiva 'use client' apenas nos arquivos que utilizarem hooks de estado (useState, useEffect), animações da framer-motion ou manipuladores de eventos (onClick, onSubmit).

Limites de Tamanho: Mantenha os componentes enxutos (idealmente abaixo de 150 linhas por arquivo). Se o arquivo crescer, divida em subcomponentes modulares.

4.3. Estrutura de Pastas Simplificada (Static-First)

src/
├── app/                  # Rotas Next.js App Router, layouts e Server Actions
│   ├── layout.tsx        # Layout raiz (Fontes, Header, Footer, SEO global)
│   ├── page.tsx          # Home page (apenas orquestra as seções)
│   ├── actions.ts        # Server Actions (envio de leads + validação Zod)
│   └── servicos/
│       └── [slug]/
│           └── page.tsx  # Template dinâmico para páginas de serviços (SEO)
├── components/           # Componentes modulares
│   ├── ui/               # Componentes primitivos do shadcn/ui
│   ├── Header.tsx        # Navbar responsiva
│   ├── Footer.tsx        # Rodapé e copyright/LGPD
│   ├── HeroSection.tsx   # Proposta de valor + estatísticas
│   ├── ServiceGrid.tsx   # Bento Grid de serviços
│   ├── ErpIntegrationFlow.tsx # Diagrama interativo Protheus ↔ APIs ('use client')
│   └── LeadForm.tsx      # Qualificador de leads em etapas ('use client')
└── lib/                  # Utilitários e conteúdo
    ├── utils.ts          # Função cn() do Tailwind/shadcn
    └── content.ts        # Dados estáticos (serviços, métricas, FAQ, tipos)


5. Boas Práticas por Funcionalidade

5.1. Formulários & Server Actions

Utilize o Zod para definir o esquema de validação do formulário (CNPJ, e-mail corporativo, telefone, desafio atual).

Valide o esquema tanto no front-end (react-hook-form com zodResolver se necessário) quanto na Server Action (app/actions.ts).

Nunca envie formulários via rotas REST legadas sem necessidade; prefira Next.js Server Actions.

5.2. Componentes Interativos Específicos

Diagrama de Integração Protheus (ErpIntegrationFlow.tsx): Deve ser visual e interativo. O usuário clica nos módulos (E-commerce, CRM, WMS, NFe/XML) e visualiza o fluxo de integração em tempo real com micro-interações fluidas (framer-motion).

Qualificador de Leads (LeadForm.tsx): Formulário interativo em etapas (wizard) substituindo campos genéricos para captar intenção de compra antes do envio comercial.

5.3. Performance & SEO Técnico

Todas as imagens devem utilizar o componente next/image com dimensões ou fill definidos.

Configure a Metadata API em todas as páginas com título, descrição, openGraph e canonical.

Insira marcação estruturada JSON-LD (Schema.org/Organization e Schema.org/Service) na página inicial e nas rotas de serviços.

Meta de desempenho: >95 no Google Lighthouse (Performance, Acessibilidade, Boas Práticas e SEO).

6. Fluxo de Trabalho Incremental para Agentes

Nunca gere o código do projeto inteiro de uma só vez.

Desenvolva e valide um componente por vez (ex: Header.tsx -> HeroSection.tsx -> ServiceGrid.tsx).

Após criar ou modificar um arquivo, verifique a responsividade (Mobile First) e a ausência de erros de compilação TypeScript.
