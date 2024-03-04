import { defineStore } from "pinia";
import type { IProducts } from "~/types/Products";

export const useProductStore = defineStore("productStore", () => {
  const showDeleteModal = ref<boolean>(false);
  const productToDeleteOrUpdate = ref<IProducts | null>(null);
  const products = ref<IProducts[] | null>(null);

  /**
   * A função `addNewCustomer` adiciona de forma assíncrona um novo cliente a um array
   * após um atraso simulado.
   * @param {IProducts} newProduct - O parâmetro `newCustomer` no
   * A função `addNewCustomer` é do tipo `ICustomers`, e representa um novo
   * objeto cliente que está sendo adicionado a uma lista de clientes.
   */
  async function addNewProduct(newProduct: IProducts): Promise<void> {
    // Simulando apenas uma lentidão na chamada com essa Promise.
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
    if (products.value !== null) {
      console.log("ENTROU 2");
      products.value.push(newProduct); // Adiciona o novo cliente ao array
    }
  }

  async function updateProduct(updatedProduct: IProducts): Promise<void> {
    // Simulando apenas uma lentidão na chamada com essa Promise.
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
    // Verifica se a lista de clientes não é nula
    if (products.value !== null) {
      // Encontra o índice do cliente na lista com base no ID
      const index = products.value.findIndex(
        (product) => product.id === updatedProduct.id
      );
      // Se o cliente com o ID fornecido existir na lista
      if (index !== -1) {
        // Atualiza o cliente na lista com os novos dados
        products.value[index] = updatedProduct;
      }
    }
  }

  /**
   * A função `removeCustomer` remove de forma assíncrona um cliente de uma lista
   * após um atraso simulado.
   * @param {number} idProduct - O parâmetro `idCustomer` em `removeCustomer`
   *função é o identificador exclusivo do cliente que você deseja remover
   * a lista de clientes. Esta função simula um atraso de 2 segundos antes
   * remoção do cliente com o ID especificado da lista de clientes.
   */

  async function removeProduct(): Promise<void> {
    // Simulando apenas uma lentidão na chamada com essa Promise.
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
    if (products.value !== null) {
      // Filtra a lista de clientes para excluir o cliente com o ID correspondente
      try {
        products.value = products.value.filter(
          (product) => product.id !== productToDeleteOrUpdate.value?.id
        );
        showDeleteModal.value = false;
        productToDeleteOrUpdate.value = null;
      } catch (error) {
        throw createError({
          statusCode: 409,
          statusMessage: "Não foi possível deletar produto!",
        });
      }
    }
  }

  function $reset() {
    productToDeleteOrUpdate.value = null;
  }

  return {
    $reset,
    showDeleteModal,
    productToDeleteOrUpdate,
    products,
    addNewProduct,
    updateProduct,
    removeProduct,
  };
});
