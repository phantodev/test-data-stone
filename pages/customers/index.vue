<script setup lang="ts">
import { useToast } from "vue-toastification";
import { useWindowSize } from "@vueuse/core";
import { useCustomerStore } from "../../stores/CustomerStore";
import { useProductStore } from "../../stores/ProductStore";
import type { IGetAllCustomersResponse } from "../../types/Customers";

const { width } = useWindowSize(); // Pegar a largura da tela para manipular a posição dos botões de Adicionar Cliente e Titulo
const customerStore = useCustomerStore();
const productStore = useProductStore();
const toast = useToast();
const currentAction = ref<string>("list");
const isLoading = ref<boolean>(false);

function changeAction(action: string): void {
  currentAction.value = action;
}

async function getAllCustomers() {
  isLoading.value = true;
  const { data: responseData, error } =
    await useFetch<IGetAllCustomersResponse>("/api/customers");
  if (responseData.value !== null) {
    customerStore.customers = responseData.value.customers;
  }
  if (error.value !== null) {
    isLoading.value = false;
    toast.error("Banco fora do AR. Chame o suporte!");
  }
}
getAllCustomers();
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
      <section class="content-customers">
        <CustomersTableList
          :changeAction="changeAction"
          v-if="currentAction === 'list'" />
        <CustomersAddForm v-else />
      </section>
    </section>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.header-customers {
  display: flex;
  justify-content: space-between;
}
.change-flex-direction {
  flex-direction: column;
  row-gap: 1rem;
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
