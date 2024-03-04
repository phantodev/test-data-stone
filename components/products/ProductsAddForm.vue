<script setup lang="ts">
import { onMounted } from "vue";
import type { IProducts } from "~/types/Products";
import { useProductStore } from "../../stores/ProductStore";
import { useToast } from "vue-toastification";

const toast = useToast();
const productStore = useProductStore();
const isLoading = ref<boolean>(false);
const newProduct = ref<IProducts>({
  id: Math.floor(Math.random() * 1000), // Apenas uma simulação. Sabemos que é o BACK-END gera este número.
  name: "",
  description: "",
  active: true,
});
// Essa é uma função que iremos fazer uma simulação para adicionar um cliente.
// Neste caso iremos adicionar um novo item no array nos dados armazenado ao PINIA.
// Se fosse um caso real, enviariamos os dados para uma API e após o retorno chamaríamos
// novamente a rota para pegar as informações do banco atualizada.
async function addNewProduct(): Promise<void> {
  try {
    isLoading.value = true;
    await productStore.addNewProduct({
      id: newProduct.value.id,
      name: newProduct.value.name,
      description: newProduct.value.description,
      active: newProduct.value.active,
    });
    toast.success("Produto adicionado com sucesso!");
    newProduct.value = {
      id: Math.floor(Math.random() * 1000), // Apenas uma simulação. Sabemos que é o BACK-END gera este número.
      name: "",
      description: "",
      active: true,
    };
  } catch (error) {
    toast.error("Não foi possível adicionar um cliente!");
  } finally {
    isLoading.value = false;
  }
}

async function updateProduct(): Promise<void> {
  try {
    isLoading.value = true;
    await productStore.updateProduct({
      id: newProduct.value.id,
      name: newProduct.value.name,
      description: newProduct.value.description,
      active: newProduct.value.active,
    });
    toast.success("Product atualizado com sucesso!");
  } catch (error) {
    toast.error("Não foi possível atualizar o produto!");
  } finally {
    isLoading.value = false;
  }
}

onMounted(() => {
  if (productStore.productToDeleteOrUpdate !== null) {
    newProduct.value.id = productStore.productToDeleteOrUpdate.id;
    newProduct.value.name = productStore.productToDeleteOrUpdate.name;
    newProduct.value.description =
      productStore.productToDeleteOrUpdate.description;
    newProduct.value.active = productStore.productToDeleteOrUpdate.active;
  }
});
</script>

<template>
  <section>
    <form
      @submit.prevent="
        productStore.productToDeleteOrUpdate === null
          ? addNewProduct()
          : updateProduct()
      ">
      <section class="container-input">
        <label class="label-input" for="name">Nome:</label>
        <input
          class="input-text"
          type="text"
          id="name"
          name="name"
          v-model="newProduct.name"
          placeholder="Digite o nome do produto" />
      </section>
      <section class="container-input">
        <label class="label-input" for="age">Descrição:</label>
        <textarea
          class="input-textarea"
          type="number"
          id="description"
          name="description"
          v-model="newProduct.description"
          rows="5"
          placeholder="Descreva informações sobre o produto..." />
      </section>
      <section class="container-input">
        <label class="label-input" for="city">Produto Ativo?</label>
        <section class="container-radios">
          <label>
            <input
              type="radio"
              name="userStatus"
              value="true"
              :checked="newProduct.active === true"
              @change="newProduct.active = true" />
            Sim
          </label>
          <br />

          <label>
            <input
              type="radio"
              name="userStatus"
              value="false"
              :checked="newProduct.active === false"
              @change="newProduct.active = false" />
            Não
          </label>
        </section>
      </section>
      <button :disabled="isLoading" type="submit" class="btn-primary">
        <span v-if="!isLoading">
          <Icon
            name="fluent:add-12-filled"
            size="1rem"
            color="fluent:add-12-filled"
            v-if="productStore.productToDeleteOrUpdate === null" />
          <Icon
            name="material-symbols-light:save"
            size="1.3rem"
            color="fluent:add-12-filled"
            v-else />
          {{
            productStore.productToDeleteOrUpdate !== null
              ? "Atualizar Produto"
              : "Salvar Produto"
          }}
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

.container-radios {
  display: flex;
  align-items: center;
  margin-top: 1rem;
  column-gap: 0.5rem;

  label {
    display: flex;
    align-items: center;
  }
}

button {
  margin: auto;
}
</style>
