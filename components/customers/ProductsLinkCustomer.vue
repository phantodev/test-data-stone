<script setup lang="ts">
import { computed } from "vue";
import { useToast } from "vue-toastification";
import { useProductStore } from "../../stores/ProductStore";
import type { ICustomers, IResponseError } from "~/types/Customers";

const props = defineProps({
  handleAddUseProducts: {
    type: Function,
  },
  handleRemoveUseProducts: {
    type: Function,
  },
  newCustomer: {
    type: Object as PropType<ICustomers>,
  },
});

const productStore = useProductStore();
const isLoading = ref<boolean>(false);
const toast = useToast();

// Método computado para ordenar os clientes por ID de forma decrescente
const sortedProducts = computed(() => {
  if (productStore.products !== null) {
    return productStore.products.sort((a, b) => b.id - a.id);
  }
});

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

// Verifica se um produto está selecionado para o cliente
function checkIfProductIsSelected(productId: number): boolean {
  if (
    props.newCustomer &&
    props.newCustomer.useProducts &&
    props.newCustomer.useProducts.length > 0
  ) {
    return props.newCustomer.useProducts.some(
      (product) => product.id === productId
    );
  }
  return false;
}
</script>

<template>
  <section class="container-table">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Vincular Produto</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in sortedProducts" :key="index">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>
            <section class="container-radios">
              <label>
                <input
                  @click="
                    props.handleAddUseProducts &&
                      props.handleAddUseProducts(product)
                  "
                  type="radio"
                  :name="product.name"
                  :checked="checkIfProductIsSelected(product.id)" />
                Sim
              </label>
              <br />

              <label>
                <input
                  @click="
                    props.handleRemoveUseProducts &&
                      props.handleRemoveUseProducts(product)
                  "
                  type="radio"
                  :name="product.name"
                  :checked="!checkIfProductIsSelected(product.id)" />
                Não
              </label>
            </section>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style lang="scss" scoped>
.container-table {
  overflow-x: auto; /* Adiciona barra de rolagem horizontal quando necessário */
}
table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  text-align: left;
  font-size: 0.875rem;
  button {
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    background-color: transparent;
    cursor: pointer;
    border: none;
    img {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
}
th {
  background-color: #f2f2f2;
}
</style>
