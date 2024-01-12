import { mount, createLocalVue } from '@vue/test-utils';
import ProdutoCadastro from '@/components/ProdutoCadastro.vue';

// Utilizamos um Vue local para evitar poluir o estado global com plugins durante os testes
const localVue = createLocalVue();

describe('ProdutoCadastro.vue', () => {
  it('renderiza corretamente', () => {
    const wrapper = mount(ProdutoCadastro, { localVue });
    expect(wrapper.exists()).toBe(true);
  });

  it('cadastra um produto corretamente', async () => {
    const wrapper = mount(ProdutoCadastro, { localVue });

    // Simulando a entrada de dados do usuário
    await wrapper.setData({
      produto: {
        nome: 'Produto de Teste',
        ativo: 'sim',
      },
    });

    // Simulando o envio do formulário
    await wrapper.find('form').trigger('submit.prevent');

    // Aguarda o próximo ciclo de vida do Vue para que as alterações no estado ocorram
    await wrapper.vm.$nextTick();

    // Verifica se o produto foi cadastrado corretamente
    expect(wrapper.vm.produtoCadastrado).toBe(true);
  });
});

