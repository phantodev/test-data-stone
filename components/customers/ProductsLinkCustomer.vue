<script setup lang="ts">
import { computed } from "vue";
import { useProductStore } from "../../stores/ProductStore";

const productStore = useProductStore();

// Método computado para ordenar os clientes por ID de forma decrescente
const sortedProducts = computed(() => {
  if (productStore.products !== null) {
    return productStore.products.sort((a, b) => b.id - a.id);
  }
});
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
                <input type="radio" :name="product.name" value="ativo" />
                Sim
              </label>
              <br />

              <label>
                <input type="radio" :name="product.name" value="inativo" />
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
