<template>
  <div>
    <h2>Lista de Clientes</h2>

    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Documento</th>
          <th>Telefone</th>
          <th>E-mail</th>
          <th>Ativo</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cliente in clientes" :key="cliente.id">
          <td>{{ cliente.nome }}</td>
          <td>{{ cliente.documento }}</td>
          <td>{{ cliente.telefone }}</td>
          <td>{{ cliente.email }}</td>
          <td>{{ cliente.ativo ? 'Sim' : 'Não' }}</td>
          <td>
            <button @click="editarCliente(cliente)">Editar</button>
            <button @click="inativarAtivarCliente(cliente)">{{ cliente.ativo ? 'Inativar' : 'Ativar' }}</button>
            <button @click="associarProdutos(cliente)">Associar Produtos</button>
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
      clientes: [
        // Os dados dos clientes seriam carregados do backend
        { id: 1, nome: 'Cliente 1', documento: '123456789', telefone: '987654321', email: 'cliente1@teste.com', ativo: true },
        { id: 2, nome: 'Cliente 2', documento: '987654321', telefone: '123456789', email: 'cliente2@teste.com', ativo: true },
        // Adicione mais clientes conforme necessário
      ],
    };
  },
  methods: {
    editarCliente(cliente) {
      // Lógica para editar o cliente (por exemplo, navegação para a página de edição)
      console.log('Editar cliente:', cliente);
    },
    inativarAtivarCliente(cliente) {
      // Lógica para inativar/ativar o cliente (por exemplo, enviar requisição ao backend)
      console.log(`${cliente.ativo ? 'Inativar' : 'Ativar'} cliente:`, cliente);
    },
    associarProdutos(cliente) {
      // Lógica para associar produtos ao cliente (por exemplo, navegação para a página de associação)
      console.log('Associar produtos ao cliente:', cliente);
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
