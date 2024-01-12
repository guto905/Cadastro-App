import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import ClienteCadastro from './components/ClienteCadastro.vue';
import ListaClientes from './components/ListaClientes.vue';
import ProdutoCadastro from './components/ProdutoCadastro.vue';
import ListaProdutos from './components/ListaProdutos.vue';
import AssociacaoProdutoCliente from './components/AssociacaoProdutoCliente.vue';
import Home from './components/Home.vue';

Vue.config.productionTip = false;

// Use o VueRouter para configurar as rotas
Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/cliente-cadastro', component: ClienteCadastro },
  { path: '/lista-clientes', component: ListaClientes },
  { path: '/produto-cadastro', component: ProdutoCadastro },
  { path: '/lista-produtos', component: ListaProdutos },
  { path: '/associacao-produto-cliente', component: AssociacaoProdutoCliente },
];

const router = new VueRouter({
  routes,
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
