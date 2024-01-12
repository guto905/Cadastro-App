# Teste Prático - Solução

## Descrição Geral

Este projeto é uma aplicação Vue.js para gerenciar cadastros de clientes, produtos e associar produtos a clientes. A aplicação possui diferentes componentes para cada funcionalidade e utiliza o Vue Router para navegação.

## Decisões Tomadas

- **Vue.js e Vue Router:** Escolhi Vue.js para construir a aplicação devido à sua facilidade de uso e eficiência no desenvolvimento de interfaces interativas. Utilizei o Vue Router para gerenciar a navegação entre as diferentes seções da aplicação.

- **Organização de Componentes:** Separei cada funcionalidade em componentes distintos para facilitar a manutenção e compreensão do código. Cada componente é responsável por uma parte específica da aplicação.

- **Estilo:** Utilizei estilos CSS scoped em cada componente para garantir a encapsulação e evitar conflitos de estilos.

## Instruções para Executar o Projeto

1. **Instalação de Dependências:**
   Certifique-se de ter o Node.js instalado. Em seguida, execute o seguinte comando na raiz do projeto para instalar as dependências:

   ```bash
   npm install
   ```

2. **Execução do Projeto:**
   Após a instalação das dependências, execute o projeto com o seguinte comando:

   ```bash
   npm run serve
   ```

   Isso iniciará o servidor de desenvolvimento e a aplicação estará disponível em `http://localhost:8080`.

3. **Acesse a Aplicação:**
   Abra o navegador e acesse [http://localhost:8080](http://localhost:8080) para visualizar a aplicação.

## Funcionalidades

- **Cadastro de Clientes:** Utilize a seção "Cadastro de Cliente" para adicionar novos clientes.

- **Lista de Clientes:** Acesse a seção "Lista de Clientes" para visualizar e interagir com a lista de clientes. É possível editar, inativar/ativar e associar produtos a cada cliente.

- **Cadastro de Produtos:** Utilize a seção "Cadastro de Produto" para adicionar novos produtos.

- **Lista de Produtos:** Acesse a seção "Lista de Produtos" para visualizar e interagir com a lista de produtos. É possível editar, inativar/ativar e associar clientes a cada produto.

- **Associação de Produtos a Clientes:** Na seção "Associação de Produto a Cliente", é possível associar produtos a clientes específicos.

## Observações Adicionais

- Certifique-se de ter as dependências do Vue.js e Vue Router corretamente instaladas.
- Os dados são simulados e não são persistidos. Em um ambiente real, você conectaria a um backend para armazenar e recuperar dados.

Espero que esta explicação seja clara e que o projeto atenda às expectativas. Fico à disposição para esclarecer qualquer dúvida ou fazer ajustes conforme necessário.
