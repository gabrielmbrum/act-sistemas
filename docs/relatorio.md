# relatorio de tudo feito

## inicialização

comando inicial

```
npx create-next-app@latest actsis-web --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

decomposição
- `npx create-next-app@latest actsis-web` baixa e executa o gerador oficial mais recente do Next.js, criando a pasta actsis-web, instalando o React/Next.js (node_modules) e inicializando o repositório Git;
- `--typescript` configura o TypeScript (tsconfig.json) para checagem estrita de tipos;
- `--tailwind` instala e configura o Tailwind CSS para estilização;
- `--eslint` adiciona o ESLint para apontar erros de código e manter o padrão de qualidade;
- `--app` ativa o App Router (sistema moderno de rotas com suporte a Server Components e Server Actions);
- `--src-dir` coloca todo o código-fonte dentro de uma pasta src/ (mantendo a raiz do projeto limpa apenas com arquivos de configuração);
- `--import-alias "@/*"` cria o atalho @/ apontando para src/. Assim você importa arquivos como @/components/layout/Header em vez de caminhos relativos bagunçados.


