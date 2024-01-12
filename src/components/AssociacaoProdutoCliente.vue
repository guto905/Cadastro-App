<template>
  <div>
    <h2>Associação de Produto a Cliente</h2>
    <form @submit.prevent="associarProdutos">
      <label for="cliente">Cliente:</label>
      <select v-model="associacao.cliente" required>
        <!-- Opções de clientes seriam carregadas dinamicamente do backend -->
        <option value="1">Cliente 1</option>
        <option value="2">Cliente 2</option>
        <!-- Adicione mais opções conforme necessário -->
      </select>

      <label for="produto">Produto:</label>
      <select v-model="associacao.produto" required>
        <!-- Opções de produtos seriam carregadas dinamicamente do backend -->
        <option value="1">Produto 1</option>
        <option value="2">Produto 2</option>
        <!-- Adicione mais opções conforme necessário -->
      </select>

      <button type="submit">Associar Produto a Cliente</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      associacao: {
        cliente: '',
        produto: '',
      },
    };
  },
  methods: {
    associarProdutos() {
      // Aqui você deve enviar os dados para o backend (por exemplo, usando Axios)
      // Após a associação, você pode redirecionar para a lista de clientes ou executar outras ações necessárias.
      console.log('Produtos associados ao cliente:', this.associacao);
    },
  },
};
</script>

<style scoped>
/* Estilos específicos para este componente, se necessário */
form {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
}

label {
  display: block;
  margin-bottom: 5px;
}

select {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
}

button {
  padding: 10px 15px;
  background-color: #3498db;
  color: #fff;
  border: none;
  cursor: pointer;
}
</style>
