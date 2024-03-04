<script setup lang="ts">
import type { ICustomers } from "~/types/Customers";
import { useCustomerStore } from "../../stores/CustomerStore";
import { useToast } from "vue-toastification";

const toast = useToast();
const customerStore = useCustomerStore();
const isLoading = ref<boolean>(false);
const newCustomer = ref<ICustomers>({
  id: Math.floor(Math.random() * 1000), // Apenas uma simulação. Sabemos que é o BACK-END gera este número.
  name: "",
  document: "",
  email: "",
  phone: "",
  active: false,
});
// Essa é uma função que iremos fazer uma simulação para adicionar um cliente.
// Neste caso iremos adicionar um novo item no array nos dados armazenado ao PINIA.
// Se fosse um caso real, enviariamos os dados para uma API e após o retorno chamaríamos
// novamente a rota para pegar as informações do banco atualizada.
async function addNewCustomer(): Promise<void> {
  try {
    isLoading.value = true;
    await customerStore.addNewCustomer({
      id: newCustomer.value.id,
      name: newCustomer.value.name,
      document: newCustomer.value.document,
      email: newCustomer.value.email,
      phone: newCustomer.value.phone,
      active: newCustomer.value.active,
    });
    toast.success("Usuário adicionado com sucesso!");
    newCustomer.value = {
      id: Math.floor(Math.random() * 1000), // Apenas uma simulação. Sabemos que é o BACK-END gera este número.
      name: "",
      document: "",
      email: "",
      phone: "",
      active: false,
    };
  } catch (error) {
    toast.error("Não foi possível adicionar um usuário!");
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <section>
    <form @submit.prevent="addNewCustomer">
      <section class="grid-container">
        <section class="container-input">
          <label class="label-input" for="name">Nome:</label>
          <input
            class="input-text"
            type="text"
            id="name"
            name="name"
            v-model="newCustomer.name"
            placeholder="Digite o nome do cliente" />
        </section>
        <section class="container-input">
          <label class="label-input" for="age">Documento (CPF):</label>
          <input
            class="input-text"
            type="text"
            id="document"
            name="document"
            v-model="newCustomer.document"
            v-maska
            data-maska="###.###.###-##"
            placeholder="000.000.000-00" />
        </section>
        <section class="container-input">
          <label class="label-input" for="email">E-mail:</label>
          <input
            class="input-text"
            type="email"
            id="email"
            v-model="newCustomer.email"
            placeholder="Digite o e-mail do cliente"
            name="email" />
        </section>
        <section class="container-input">
          <label class="label-input" for="phone">Telefone:</label>
          <input
            class="input-text"
            type="tel"
            id="phone"
            v-model="newCustomer.phone"
            v-maska
            data-maska="(##) #####-####"
            placeholder="(XX) XXXXX-XXXX"
            name="phone" />
        </section>
        <section class="container-input">
          <label class="label-input" for="city">Cliente Ativo?</label>
          <section class="container-radios margin-top">
            <label>
              <input
                type="radio"
                name="userStatus"
                value="ativo"
                v-model="newCustomer.active" />
              Sim
            </label>
            <br />

            <label>
              <input
                type="radio"
                name="userStatus"
                value="inativo"
                v-model="newCustomer.active" />
              Não
            </label>
          </section>
        </section>
      </section>
      <section class="sub-title">
        <img
          src="../../assets/images/products.svg"
          alt=""
          class="menu-icons" />Vincular produtos ao cliente
      </section>
      <section>
        <ProductsLinkCustomer />
      </section>
      <button :disabled="isLoading" type="submit" class="btn-primary">
        <span v-if="!isLoading">
          <Icon
            name="fluent:add-12-filled"
            size="1rem"
            color="fluent:add-12-filled" />Salvar Cliente
        </span>
        <span v-else>
          <img src="../../assets/images/spinner.svg" width="24" alt=""
        /></span>
      </button>
    </form>
  </section>
</template>

<style lang="scss" scoped>
form {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 1rem;
}

.container-input {
  width: 100%;
}

button {
  margin: auto;
}

.menu-icons {
  height: 1.2rem;
  width: 1.2rem;
}
</style>
