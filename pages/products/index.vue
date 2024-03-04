<script setup lang="ts">
import { useToast } from "vue-toastification";
import { useProductStore } from "../../stores/ProductStore";
import { useCustomerStore } from "../../stores/CustomerStore";
import type { IGetAllProductsResponse } from "../../types/Products";

const productStore = useProductStore();
const customerStore = useCustomerStore();
const toast = useToast();
const currentAction = ref<string>("list");
const isLoading = ref<boolean>(false);

function changeAction(action: string) {
  currentAction.value = action;
}

async function getAllProducts() {
  isLoading.value = true;
  const { data: responseData, error } = await useFetch<IGetAllProductsResponse>(
    "/api/products"
  );
  if (responseData.value !== null) {
    productStore.products = responseData.value.products;
  }
  if (error.value !== null) {
    isLoading.value = false;
    toast.error("Banco fora do AR. Chame o suporte!");
  }
}
getAllProducts();
// Resetando o estado do PINIA de customers
customerStore.$reset();
</script>

<template>
  <NuxtLayout name="dashboard">
    <section class="container-customers">
      <section class="header-customers">
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
      <section class="content-customers">
        <ProductsTableList
          :changeAction="changeAction"
          v-if="currentAction === 'list'" />
        <ProductsAddForm v-else />
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
  width: 100%;
  max-width: 1280px;
  background-color: $white;
  border-radius: 1rem;
  box-shadow: 15px 15px 100px 15px rgba(0, 0, 0, 0.2);
}
</style>
