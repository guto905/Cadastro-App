<template>
  <div>
    <h1>Bem-vindo ao Sistema de cadastro</h1>
    
    <section>
      <h2>Clientes</h2>
      <router-link to="/cliente-cadastro">Cadastro de Cliente</router-link>
      <router-link to="/lista-clientes">Lista de Clientes</router-link>
    </section>

    <section>
      <h2>Produtos</h2>
      <router-link to="/produto-cadastro">Cadastro de Produto</router-link>
      <router-link to="/lista-produtos">Lista de Produtos</router-link>
    </section>

    <section>
      <h2>Associação</h2>
      <router-link to="/associacao-produto-cliente">Associação de Produto a Cliente</router-link>
    </section>
  </div>
</template>

<script>
export default {
  // Lógica do componente (se necessário)
};
</script>

<style scoped>
/* Estilos específicos para este componente, se necessário */
section {
  margin-top: 20px;
}

h2 {
  margin-bottom: 10px;
}

router-link {
  display: block;
  margin-bottom: 5px;
  color: #3498db;
  text-decoration: none;
}

router-link:hover {
  text-decoration: underline;
}
</style>
