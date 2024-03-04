<script setup lang="ts">
import type { IResponseError } from "~/types/Customers";
import { useCustomerStore } from "../stores/CustomerStore";
import { useToast } from "vue-toastification";

const toast = useToast();
const customerStore = useCustomerStore();
const isDeleting = ref<boolean>(false);

// A função `handleCloseModal` é responsável por fechar um modal relacionado a
//excluindo um cliente. Ele atualiza a propriedade `showDeleteModal` no
// `customerStore` para `false`, controla a visibilidade da exclusão
//modais. Além disso, ele define a propriedade `customerToDeleteOrUpdate` como `null`,
// que pode ser usado para compensar qualquer cliente selecionado que estava sendo considerado para
// exclusão ou atualização. Esta função essencialmente redefine o estado relacionado ao
//exclui modal e cliente selecionado.
function handleCloseModal() {
  customerStore.showDeleteModal = false;
  customerStore.customerToDeleteOrUpdate = null;
}

// A `função assíncrona handleRemoveCustomer()` é uma função assíncrona que é
// responsável por lidar com a remoção de um cliente.
async function handleRemoveCustomer() {
  try {
    isDeleting.value = true;
    await customerStore.removeCustomer();
    toast.success("Cliente excluído com sucesso!");
  } catch (error) {
    toast.error((error as IResponseError).statusMessage);
  } finally {
    isDeleting.value = false;
  }
}
</script>

<template>
  <section class="card">
    <img src="../assets/images/alert.svg" alt="" />
    <section class="deleteHeading">Deletar Cliente</section>
    <section class="deleteDescription">
      Após a exclusão não poderemos recuper o registro. Deseja continuar?
    </section>

    <section class="buttonContainer">
      <button
        :disabled="isDeleting"
        class="acceptButton"
        @click="handleRemoveCustomer">
        <span v-if="!isDeleting"> Permitir</span>
        <span v-else>
          <img src="../assets/images/spinner.svg" width="24" alt=""
        /></span>
      </button>
      <button class="declineButton" @click="handleCloseModal">Cancelar</button>
    </section>
  </section>
</template>

<style lang="scss">
.card {
  width: 300px;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.062);
}

.deleteHeading {
  font-size: 1rem;
  font-weight: 800;
}

.deleteDescription {
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
  color: rgb(99, 99, 99);
}

.buttonContainer {
  display: flex;
  gap: 20px;
  margin-top: 1rem;
  flex-direction: row;
}

.acceptButton {
  width: 7rem;
  height: 2.5rem;
  background-color: #22c55e;
  transition-duration: 0.2s;
  border: none;
  color: white;
  cursor: pointer;
  font-weight: 600;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.declineButton {
  width: 7rem;
  height: 2.5rem;
  background-color: #ef4444;
  transition-duration: 0.2s;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 600;
  border-radius: 0.5rem;
}

.declineButton:hover {
  background-color: #b33434;
  transition-duration: 0.2s;
}

.acceptButton:hover {
  background-color: #1a9246;
  transition-duration: 0.2s;
}
</style>
