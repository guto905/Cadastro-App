import { mount, createLocalVue } from '@vue/test-utils';
import ClienteCadastro from '@/components/ClienteCadastro.vue';

// Utilizamos um Vue local para evitar poluir o estado global com plugins durante os testes
const localVue = createLocalVue();

describe('ClienteCadastro.vue', () => {
  it('renderiza corretamente', () => {
    const wrapper = mount(ClienteCadastro, { localVue });
    expect(wrapper.exists()).toBe(true);
  });

  it('cadastra um cliente corretamente', async () => {
    const wrapper = mount(ClienteCadastro, { localVue });

    // Simulando a entrada de dados do usuário
    await wrapper.setData({
      cliente: {
        nome: 'Cliente de Teste',
        documento: '123456789',
        telefone: '987654321',
        email: 'cliente@teste.com',
        ativo: 'sim',
      },
    });

    // Simulando o envio do formulário
    await wrapper.find('form').trigger('submit.prevent');

    // Aguarda o próximo ciclo de vida do Vue para que as alterações no estado ocorram
    await wrapper.vm.$nextTick();

    // Verifica se o cliente foi cadastrado corretamente
    expect(wrapper.vm.clienteCadastrado).toBe(true);
  });
});

