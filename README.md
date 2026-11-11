# Bat Pixel Animation

Animação de morcegos em pixel art com controles de pausa e velocidade, feita com
HTML, CSS e JavaScript usando Vite.

## Site

Aplicação publicada no GitHub Pages: **https://supremuslash.github.io/Exerc-cio-DEV-OPS/**

## Executar localmente

Requer Node.js 22 ou superior.

```bash
npm ci
npm run dev
```

## Verificações

```bash
npm run lint
npm run test
npm run build
```

## CI/CD

O workflow [`main.yml`](.github/workflows/main.yml) é executado em cada push ou
pull request para `main`. Ele instala as dependências com `npm ci` e roda lint,
testes e build. Em pushes bem-sucedidos para `main`, publica automaticamente o
conteúdo de `dist/` no GitHub Pages.

O deploy usa o `GITHUB_TOKEN` gerado pelo GitHub Actions com as permissões
definidas no workflow; não é necessário cadastrar secrets adicionais.

Consulte o [histórico das execuções no GitHub Actions](https://github.com/Supremuslash/Exerc-cio-DEV-OPS/actions/workflows/main.yml).
