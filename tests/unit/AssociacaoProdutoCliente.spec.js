import { mount, createLocalVue } from '@vue/test-utils';
import AssociacaoProdutoCliente from '@/components/AssociacaoProdutoCliente.vue';

// Utilizamos um Vue local para evitar poluir o estado global com plugins durante os testes
const localVue = createLocalVue();

describe('AssociacaoProdutoCliente.vue', () => {
  it('renderiza corretamente', () => {
    const wrapper = mount(AssociacaoProdutoCliente, { localVue });
    expect(wrapper.exists()).toBe(true);
  });

  it('realiza a associação de produto a cliente corretamente', async () => {
    const wrapper = mount(AssociacaoProdutoCliente, { localVue });

    // Simulando a entrada de dados do usuário
    await wrapper.setData({
      associacao: {
        cliente: 1, // ID do cliente de teste
        produto: 1, // ID do produto de teste
      },
    });

    // Simulando o envio do formulário
    await wrapper.find('form').trigger('submit.prevent');

    // Aguarda o próximo ciclo de vida do Vue para que as alterações no estado ocorram
    await wrapper.vm.$nextTick();

    // Verifica se a associação foi realizada corretamente
    expect(wrapper.vm.associacaoRealizada).toBe(true);
  });
});

