# Exercícios

## 02_paginas-basicas-links-ajustes-de-layout-metadados

### 30/07

1. **Página inicial (`src/app/page.tsx`)**

- Crie uma `<section>`.
- Adicione um título `<h2>` com o texto `Pet Notícias`.
- Adicione um parágrafo com uma breve descrição.
- **Não é necessário definir metadata personalizada nessa página.**

2. **Demais páginas (`produtos`, `sobre`, `contato`)**

**ATENÇÃO!** _Lembre-se que cada página deve estar dentro de uma pasta com o nome desejado._

- Em cada uma, crie uma `<section>` contendo `<h2>` e `<p>`, com conteúdos apropriados ao tema.
- Em cada uma, **defina a constante `metadata`** (usando o tipo `Metadata` do Next.js).

  - Configure o `title` com o nome da página seguido de `| PetShop`. Ex: `"Contato | PetShop"`.
  - Configure o `description` com um resumo curto da página. Ex: `"Entre em contato conosco"`.

3. Para visualizar as páginas, simplesmente acesse `localhost:3000/nome_da_pagina`

### 31/07

No componente `Menu.tsx`, faça a programação necessária para detectar qual rota/página está aberta no momento e, com isso, deixar a classe `ativo` aplicada ao `Link` correspondente.
