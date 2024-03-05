<script setup lang="ts">
import { useToast } from "vue-toastification";
import { useWindowSize } from "@vueuse/core";
import { useCustomerStore } from "../../stores/CustomerStore";
import { useProductStore } from "../../stores/ProductStore";
import type {
  IGetAllCustomersResponse,
  IResponseError,
} from "../../types/Customers";

const { width } = useWindowSize(); // Pegar a largura da tela para manipular a posição dos botões de Adicionar Cliente e Titulo
const customerStore = useCustomerStore();
const productStore = useProductStore();
const toast = useToast();
const currentAction = ref<string>("list");
const isLoading = ref<boolean>(false);

function changeAction(action: string): void {
  currentAction.value = action;
  // Voltando para nulo cliente a ser atualizado toda vez que entra na tela de lista
  if (action === "list") {
    customerStore.customerToDeleteOrUpdate = null;
  }
}

async function handleGetAllCustomers() {
  try {
    isLoading.value = true;
    // Simulando um atraso na chamada da API
    await new Promise((resolve) => {
      setTimeout(resolve, 4000);
    });
    await customerStore.getAllCustomers();
  } catch (error) {
    toast.error((error as IResponseError).statusMessage);
  } finally {
    isLoading.value = false;
  }
}
// Chama a função toda vez que o componente é renderizado
// ATENÇÃO: Este IF é apenas para fazer uma SIMULAÇÃO PARA ESTE TESTE, pois
// no cadastro de customers fazemos a manipulação de um novo cliente no array
// e para evitar que esta chamada pegue as mesmas informações iniciais da API.
if (customerStore.customers === null) {
  handleGetAllCustomers();
}
// Resetando o estado do PINIA de products
productStore.$reset();
</script>

<template>
  <NuxtLayout name="dashboard">
    <section class="container-customers">
      <section
        class="header-customers"
        :class="width < 420 ? 'change-flex-direction' : ''">
        <TitlePage icons="../assets/images/customers.svg">
          {{
            currentAction === "list" ? "Lista de Clientes" : "Adicionar Cliente"
          }}</TitlePage
        >
        <button
          @click="changeAction('edit')"
          class="btn-actions"
          v-if="currentAction === 'list'">
          <Icon
            name="fluent:add-12-filled"
            size="1rem"
            color="fluent:add-12-filled" />Adicionar Cliente
        </button>
        <button @click="changeAction('list')" class="btn-actions" v-else>
          <Icon
            name="ic:sharp-list"
            size="1rem"
            color="fluent:add-12-filled" />Lista de Clientes
        </button>
      </section>
      <section class="content-customers" v-if="!isLoading">
        <CustomersTableList
          :changeAction="changeAction"
          v-if="currentAction === 'list'" />
        <CustomersAddForm v-else />
      </section>
      <section class="loader-container" v-else>
        <section class="loader"></section>
        <section class="loader-text">Acessando banco</section>
      </section>
    </section>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.header-customers {
  display: flex;
  justify-content: space-between;
}
.content-customers {
  margin-top: 2rem;
}
.container-customers {
  padding: 2rem;
  margin-top: 1rem;
  width: 1280px;
  background-color: $white;
  border-radius: 1rem;
  box-shadow: 15px 15px 100px 15px rgba(0, 0, 0, 0.2);
  overflow-x: auto; /* Adiciona barra de rolagem horizontal quando necessário */
}
</style>
