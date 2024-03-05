# Explicações sobre as decisões tomadas abaixo:

1 - Porque NUXT? A decisão é simples: Com este framework podemos desenvolver tanto aplicações SPA como aplicações SSR. Dependerá de cada projeto e cada empresa.
Além disso devo citar que sou um profissional certificado da empresa masterinnuxt.com e estou na metade da certificação do masteringpinia.com
2 - Esta aplicações existem WORKAROUNDS criados apenas para simulação para estes teste da empresa em específico. Eles não seriam utilizados em um cenário real.
Os workarounds usados foram comentados no código no momento necessário.
3 - CSS principal e css escopado: Pela minha experiência a utilizaram de CSS para o escopo de cada componente se torna mais rápido o acesso as classes CSS e mais
organizadas. Uso um arquivo main.scss para classes mais gerais que são acessadas por todos os componentes.
4 - PINIA para gerenciamento de estado GLOBAL. Gosto de armazenar as informações mais GLOBAIS em uma STORE do PINIA.
5 - CYPRESS foi usado para aplicação de testes de integração com API. Ele na minha opinião é o framework de testes mais completo do mercado.
Ele é capaz de gerar testes E2E, unitário e testes de integrações. Para este teste da empresa Data Stone fiz apenas testes de integrações
onde pela minha experiência é onde as aplicações quebram com mais frequência, quando a equipe de BACK-END altera algo na API e não avisa
o time de front-end. Os testes desenvolvidos foram bem simples, apenas para validação do meu conhecimento.
6 - Foi desenvolvido simples SERVER APIs para servir os dados iniciais para aplicação. Após dados recuperados pela primeira vez,
todo os dados são gerenciados pelo PINIA.

Obrigado pela atenção até o momento, são 15 anos de desenvolvimento espero que gostem do resultado.

# Teste para a empresa Data Stone

Este são os arquivos de um sistema desenvolvido para a empresa Data Stone.

## Setup

Instala as dependências antes de rodar o projeto:

````bash
# npm
npm install

## Development Server

Roda a aplicação em `http://localhost:5001`:

```bash
# npm
npm run dev

## Production

Gera a Build da aplicação para produção:

```bash
# npm
npm run build

Rode o preview da aplicação localmente usando:

```bash
# npm
npm run preview

Rodando testes do CYPRESS

```bash
# npm
npx cypress run ou npx cypress open (Testes de forma visual do CYPRESS)

````
