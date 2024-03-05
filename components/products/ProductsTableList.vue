<script setup lang="ts">
import { computed } from "vue";
import { useWindowSize } from "@vueuse/core";
import { useProductStore } from "../../stores/ProductStore";
import type { IProducts } from "~/types/Products";

const props = defineProps({
  changeAction: {
    type: Function,
  },
});

const { width } = useWindowSize(); // Pegar a largura da tela para manipular a posição dos objetos de paginação
const productStore = useProductStore();

// Método computado para ordenar os clientes por ID de forma decrescente
const sortedProducts = computed(() => {
  if (productStore.products !== null) {
    return productStore.products.sort((a, b) => b.id - a.id);
  }
});

function handleDeleteProduct(product: IProducts) {
  productStore.showDeleteModal = true;
  productStore.productToDeleteOrUpdate = product;
}

function handleUpdateProduct(product: IProducts) {
  if (props.changeAction) {
    props.changeAction("edit");
  }
  productStore.productToDeleteOrUpdate = product;
}
</script>

<template>
  <section class="container-table">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Ativo</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in sortedProducts" :key="index">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td class="description">{{ product.description }}</td>
          <td>
            <span class="badge-active" v-if="product.active">Sim</span
            ><span class="badge-inactive" v-else>Não</span>
          </td>
          <td class="row-btn-edit-bin">
            <button class="btn-edit-bin" @click="handleUpdateProduct(product)">
              <img
                src="../../assets/images/edit.svg"
                alt="Icone de Edição de Clientes" />
            </button>
            <button @click="handleDeleteProduct(product)">
              <img
                src="../../assets/images/bin.svg"
                alt="Icone de Exclusão de Clientes" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
  <section
    class="container-pagination"
    :class="width < 420 ? 'change-flex-direction' : ''">
    <section class="registers-numbers">
      Mostrando de <strong>1</strong> a <strong>10</strong> de um total de
      <strong>20 registros</strong>
    </section>
    <section class="pagination-numbers">
      <TablePagination />
    </section>
  </section>
</template>

<style lang="scss" scoped>
.container-table {
  overflow-x: auto; /* Adiciona barra de rolagem horizontal quando necessário */
}
table {
  width: 1220px;
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

th:nth-child(2) {
  width: 12rem;
}

td.description {
  max-width: 24rem; /* Defina a largura máxima que deseja permitir para a descrição */
  overflow: hidden; /* Oculta qualquer conteúdo que ultrapasse a largura do contêiner */
  text-overflow: ellipsis; /* Adiciona reticências (...) ao final do texto cortado */
  white-space: nowrap; /* Impede que o texto seja quebrado em várias linhas */
}

.container-pagination {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}

.badge {
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  border-radius: 2rem;
  font-weight: bold;
  font-size: 0.7rem;
}

.badge-inactive {
  @extend .badge;
  background-color: rgb(170, 0, 0);
  color: rgb(255, 220, 220);
}

.badge-active {
  @extend .badge;
  color: rgb(214, 255, 214);
  background-color: rgb(0, 197, 0);
}

.row-btn-edit-bin {
  display: flex;
  align-items: center;
  column-gap: 1rem;
}
</style>
