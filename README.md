# Bat Pixel Animation

Animação de morcegos em pixel art com controles de pausa e velocidade, feita com
HTML, CSS e JavaScript usando Vite.

## Site publicado

Após configurar o GitHub Pages e executar o workflow, o site estará disponível em:

**https://<usuario>.github.io/<repositorio>/**

Substitua `<usuario>` e `<repositorio>` pelos valores do seu repositório GitHub.

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

Para habilitar a publicação, abra **Settings → Pages** no repositório e escolha
**GitHub Actions** como fonte de build e deploy. O workflow usa o `GITHUB_TOKEN`
fornecido automaticamente pelo GitHub Actions com permissões mínimas; não é
necessário cadastrar um secret manualmente.
