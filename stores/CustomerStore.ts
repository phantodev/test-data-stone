import { defineStore } from "pinia";
import type { ICustomers } from "~/types/Customers";

export const useCustomerStore = defineStore("customerStore", () => {
  const showDeleteModal = ref<boolean>(false);
  const customerToDeleteOrUpdate = ref<ICustomers | null>(null);
  const customers = ref<ICustomers[] | null>(null);

  /**
   * A função `addNewCustomer` adiciona de forma assíncrona um novo cliente a um array
   * após um atraso simulado.
   * @param {ICustomers} newCustomer - O parâmetro `newCustomer` no
   * A função `addNewCustomer` é do tipo `ICustomers`, e representa um novo
   * objeto cliente que está sendo adicionado a uma lista de clientes.
   */
  async function addNewCustomer(newCustomer: ICustomers): Promise<void> {
    // Simulando apenas uma lentidão na chamada com essa Promise.
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
    if (customers.value !== null) {
      customers.value.push(newCustomer); // Adiciona o novo cliente ao array
    }
  }
  /**
   * A função `removeCustomer` remove de forma assíncrona um cliente de uma lista
   * após um atraso simulado.
   * @param {number} idCustomer - O parâmetro `idCustomer` em `removeCustomer`
   *função é o identificador exclusivo do cliente que você deseja remover
   * a lista de clientes. Esta função simula um atraso de 2 segundos antes
   * remoção do cliente com o ID especificado da lista de clientes.
   */

  async function removeCustomer(): Promise<void> {
    // Simulando apenas uma lentidão na chamada com essa Promise.
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
    if (customers.value !== null) {
      // Filtra a lista de clientes para excluir o cliente com o ID correspondente
      try {
        customers.value = customers.value.filter(
          (customer) => customer.id !== customerToDeleteOrUpdate.value?.id
        );
        showDeleteModal.value = false;
        customerToDeleteOrUpdate.value = null;
      } catch (error) {
        throw createError({
          statusCode: 409,
          statusMessage: "Não foi possível deletar cliente!",
        });
      }
    }
  }

  return {
    showDeleteModal,
    customerToDeleteOrUpdate,
    customers,
    addNewCustomer,
    removeCustomer,
  };
});
