<template>
  <div>
    <h2>Lista de Produtos</h2>

    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Ativo</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="produto in produtos" :key="produto.id">
          <td>{{ produto.nome }}</td>
          <td>{{ produto.ativo ? 'Sim' : 'Não' }}</td>
          <td>
            <button @click="editarProduto(produto)">Editar</button>
            <button @click="inativarAtivarProduto(produto)">{{ produto.ativo ? 'Inativar' : 'Ativar' }}</button>
            <button @click="associarClientes(produto)">Associar Clientes</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      produtos: [
        // Os dados dos produtos seriam carregados do backend
        { id: 1, nome: 'Produto 1', ativo: true },
        { id: 2, nome: 'Produto 2', ativo: true },
        // Adicione mais produtos conforme necessário
      ],
    };
  },
  methods: {
    editarProduto(produto) {
      // Lógica para editar o produto (por exemplo, navegação para a página de edição)
      console.log('Editar produto:', produto);
    },
    inativarAtivarProduto(produto) {
      // Lógica para inativar/ativar o produto (por exemplo, enviar requisição ao backend)
      console.log(`${produto.ativo ? 'Inativar' : 'Ativar'} produto:`, produto);
    },
    associarClientes(produto) {
      // Lógica para associar clientes ao produto (por exemplo, navegação para a página de associação)
      console.log('Associar clientes ao produto:', produto);
    },
  },
};
</script>

<style scoped>
/* Estilos específicos para este componente, se necessário */
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #3498db;
  color: white;
}

button {
  padding: 5px 10px;
  margin-right: 5px;
  background-color: #3498db;
  color: #fff;
  border: none;
  cursor: pointer;
}
</style>
