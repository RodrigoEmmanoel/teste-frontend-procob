# Teste Frontend PROCOB

Este é um projeto desenvolvido com React, Vite, TypeScript e Zustand, utilizando Sass para estilização e MUI para a base dos componentes. O objetivo do projeto é consumir os dados API e apresentar os dados em uma dashboard com gráficos.

## Requisitos

- Node.js 20.10.0
- npm (10) ou yarn

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm run dev`

Roda o app em modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para ver no navegador.

A página recarregará automaticamente se você fizer edições no código.\
Você verá também quaisquer erros de lint no console.

### `npm run build`

Compila o app para produção na pasta `dist`.

### `npm run lint`

Para garantir que o código siga as boas práticas e os padrões estabelecidos, utilizamos o ESLint. O comando verifica os arquivos dentro da pasta `src` e impede que o processo passe se houver qualquer aviso ou erro:

### `npm run lint:fix`

Para verificar o código e tentar corrigir automaticamente problemas de formatação.

### `npm run typecheck`

Para verificar a consistência dos types no projeto.

## Bibliotecas Utilizadas

### React

Biblioteca principal para construção da interface de usuário.

### Vite

Ferramenta de build rápida e otimizada para desenvolvimento front-end moderno.

### TypeScript

Superconjunto de JavaScript que adiciona tipos estáticos ao código.

### Zustand

Biblioteca de gerenciamento de estado leve e simples.

### Sass

Uma biblioteca de componentes React que fornece uma implementação pronta de elementos de UI seguindo as diretrizes do Material Design.

### ApexCharts

Uma biblioteca de gráficos para React que permite criar visualizações de dados interativas e personalizáveis, com suporte a diversos tipos de gráficos.

## Configuração do Projeto

### `vite.config.ts`

Configuração do Vite para build e desenvolvimento.

### `tsconfig.json`

Configuração do TypeScript para o projeto.

### `eslintrc.config.js` && `.prettierrc.json`

Configuração do ESLint para garantir a qualidade do código.
