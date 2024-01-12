<template>
  <div>
    <h2>Cadastro de Cliente</h2>
    <form @submit.prevent="cadastrarCliente">
      <label for="nome">Nome:</label>
      <input type="text" v-model="cliente.nome" required>

      <label for="documento">Documento:</label>
      <input type="text" v-model="cliente.documento" required>

      <label for="telefone">Telefone:</label>
      <input type="text" v-model="cliente.telefone" required>

      <label for="email">E-mail:</label>
      <input type="email" v-model="cliente.email" required>

      <label for="ativo">Ativo:</label>
      <select v-model="cliente.ativo" required>
        <option value="sim">Sim</option>
        <option value="nao">Não</option>
      </select>

      <button type="submit">Cadastrar Cliente</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cliente: {
        nome: '',
        documento: '',
        telefone: '',
        email: '',
        ativo: 'sim',
      },
    };
  },
  methods: {
    cadastrarCliente() {
      // Aqui você deve enviar os dados para o backend (por exemplo, usando Axios)
      // Após o cadastro, você pode redirecionar para a lista de clientes ou executar outras ações necessárias.
      console.log('Cliente cadastrado:', this.cliente);
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
