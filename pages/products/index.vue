<script setup lang="ts">
import { useToast } from "vue-toastification";
import { useWindowSize } from "@vueuse/core";
import { useProductStore } from "../../stores/ProductStore";
import { useCustomerStore } from "../../stores/CustomerStore";
import type { IGetAllProductsResponse } from "../../types/Products";
import type { IResponseError } from "~/types/Customers";

const { width } = useWindowSize(); // Pegar a largura da tela para manipular a posição dos botões de Adicionar Cliente e Titulo
const productStore = useProductStore();
const customerStore = useCustomerStore();
const toast = useToast();
const currentAction = ref<string>("list");
const isLoading = ref<boolean>(false);

function changeAction(action: string) {
  currentAction.value = action;
  // Voltando para nulo cliente a ser atualizado toda vez que entra na tela de lista
  if (action === "list") {
    productStore.productToDeleteOrUpdate = null;
  }
}

async function handleGetAllProducts() {
  try {
    isLoading.value = true;
    await productStore.getAllProducts();
  } catch (error) {
    toast.error((error as IResponseError).statusMessage);
  } finally {
    isLoading.value = false;
  }
}
// Chama a função toda vez que o componente é renderizado
// ATENÇÃO: Este IF é apenas para fazer uma SIMULAÇÃO PARA ESTE TESTE, pois
// no cadastro de produtos fazemos a manipulação de um novo produto no array
// e para evitar que esta chamada pegue as mesmas informações iniciais da API.
if (productStore.products === null) {
  handleGetAllProducts();
}
// Resetando o estado do PINIA de customers
customerStore.$reset();
</script>

<template>
  <NuxtLayout name="dashboard">
    <section class="container-products">
      <section
        class="header-products"
        :class="width < 420 ? 'change-flex-direction' : ''">
        <TitlePage icons="../assets/images/customers.svg">
          {{
            currentAction === "list" ? "Lista de Produtos" : "Adicionar Produto"
          }}</TitlePage
        >
        <button
          @click="changeAction('edit')"
          class="btn-actions"
          v-if="currentAction === 'list'">
          <Icon
            name="fluent:add-12-filled"
            size="1rem"
            color="fluent:add-12-filled" />Adicionar Produto
        </button>
        <button @click="changeAction('list')" class="btn-actions" v-else>
          <Icon
            name="ic:sharp-list"
            size="1rem"
            color="fluent:add-12-filled" />Lista de Produtos
        </button>
      </section>
      <section class="content-products">
        <ProductsTableList
          :changeAction="changeAction"
          v-if="currentAction === 'list'" />
        <ProductsAddForm v-else />
      </section>
    </section>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.header-products {
  display: flex;
  justify-content: space-between;
}
.content-products {
  margin-top: 2rem;
}
.container-products {
  padding: 2rem;
  margin-top: 1rem;
  width: 100%;
  max-width: 1280px;
  background-color: $white;
  border-radius: 1rem;
  box-shadow: 15px 15px 100px 15px rgba(0, 0, 0, 0.2);
  overflow-x: auto; /* Adiciona barra de rolagem horizontal quando necessário */
}
</style>
