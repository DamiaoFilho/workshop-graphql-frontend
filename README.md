# Rodando a aplicação

Após clonar o projeto, utilize

```bash
npm install
npm run dev
```

Então, tente acessar o projeto na URL padrão: http://localhost:5173

# Configuração GraphQL

O projeto já possui o ApolloClient instalado, sendo necessário apenas alterar a URL base da API GraphQL. Você pode fazer isso no arquivo `/src/lib/apollo.ts`:

```typescript
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://flyby-router-demo.herokuapp.com/", // Atualize com a URL da sua API GraphQL
  cache: new InMemoryCache(),
});
```
