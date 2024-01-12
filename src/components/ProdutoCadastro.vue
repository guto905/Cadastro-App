<template>
  <div>
    <h2>Cadastro de Produto</h2>
    <form @submit.prevent="cadastrarProduto">
      <label for="nome">Nome:</label>
      <input type="text" v-model="produto.nome" required>

      <label for="ativo">Ativo:</label>
      <select v-model="produto.ativo" required>
        <option value="sim">Sim</option>
        <option value="nao">Não</option>
      </select>

      <button type="submit">Cadastrar Produto</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      produto: {
        nome: '',
        ativo: 'sim',
      },
    };
  },
  methods: {
    cadastrarProduto() {
      // Aqui você deve enviar os dados para o backend (por exemplo, usando Axios)
      // Após o cadastro, você pode redirecionar para a lista de produtos ou executar outras ações necessárias.
      console.log('Produto cadastrado:', this.produto);
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

input,
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
