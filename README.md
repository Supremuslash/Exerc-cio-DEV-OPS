# Bat Pixel Animation

Animação de morcegos em pixel art com controles de pausa e velocidade, feita com
HTML, CSS e JavaScript usando Vite.

## Site publicado

Endereço do site após habilitar o GitHub Pages:
**https://supremuslash.github.io/Exerc-cio-DEV-OPS/**

O site ainda não está publicado. Ative **Settings → Pages → Build and deployment
→ Source → GitHub Actions** para permitir o primeiro deploy.

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

O workflow [`main.yml`](.github/workflows/main.yml) executa lint, testes e build
em cada push e pull request para `main`. Após um push bem-sucedido na `main`, o
mesmo workflow publica `dist/` no GitHub Pages.

Consulte o [histórico das execuções no GitHub Actions](https://github.com/Supremuslash/Exerc-cio-DEV-OPS/actions/workflows/main.yml).

Antes do primeiro deploy, abra [Settings → Pages](https://github.com/Supremuslash/Exerc-cio-DEV-OPS/settings/pages)
e escolha **GitHub Actions** como fonte de build e deploy. Sem essa configuração,
o passo `actions/configure-pages` falha com `Get Pages site failed` porque o
GitHub Pages ainda não está habilitado para o repositório.

Depois disso, o workflow publica automaticamente após um push bem-sucedido na
`main`. Ele usa o `GITHUB_TOKEN` fornecido pelo GitHub Actions e não precisa de
secrets adicionais. A opção `enablement` de `actions/configure-pages` não
substitui a configuração inicial quando usada com `GITHUB_TOKEN`, pois habilitar
o Pages por essa opção exige um token diferente.
