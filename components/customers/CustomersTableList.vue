<script setup lang="ts">
import { computed } from "vue";
import { useCustomerStore } from "../../stores/CustomerStore";
import type { ICustomers } from "~/types/Customers";

const props = defineProps({
  changeAction: {
    type: Function,
  },
});

const customerStore = useCustomerStore();

// Método computado para ordenar os clientes por ID de forma decrescente
const sortedCustomers = computed(() => {
  if (customerStore.customers !== null) {
    return customerStore.customers.sort((a, b) => b.id - a.id);
  }
});

function handleDeleteCustomer(customer: ICustomers) {
  customerStore.showDeleteModal = true;
  customerStore.customerToDeleteOrUpdate = customer;
}

function handleUpdateCustomer(customer: ICustomers) {
  if (props.changeAction) {
    props.changeAction("edit");
  }
  customerStore.customerToDeleteOrUpdate = customer;
}
</script>

<template>
  <section class="container-table">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Documento</th>
          <th>Email</th>
          <th>Telefone</th>
          <th>Produto em Uso</th>
          <th>Ativo</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(customer, index) in sortedCustomers" :key="index">
          <td>{{ customer.id }}</td>
          <td>{{ customer.name }}</td>
          <td>{{ customer.document }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.phone }}</td>
          <td>{{ customer.useProducts.length }} produtos</td>
          <td>
            <span class="badge-active" v-if="customer.active">Sim</span
            ><span class="badge-inactive" v-else>Não</span>
          </td>
          <td class="row-btn-edit-bin">
            <button
              class="btn-edit-bin"
              @click="handleUpdateCustomer(customer)">
              <img
                src="../../assets/images/edit.svg"
                alt="Icone de Edição de Clientes" />
            </button>
            <button @click="handleDeleteCustomer(customer)">
              <img
                src="../../assets/images/bin.svg"
                alt="Icone de Exclusão de Clientes" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <section class="container-pagination">
      <section class="registers-numbers">
        Mostrando de <strong>1</strong> a <strong>10</strong> de um total de
        <strong>20 registros</strong>
      </section>
      <section class="pagination-numbers">
        <TablePagination />
      </section>
    </section>
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

.row-btn-edit-bin {
  display: flex;
  align-items: center;
  column-gap: 1rem;
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
  background-color: #ef4444;
  color: rgb(255, 220, 220);
}

.badge-active {
  @extend .badge;
  color: rgb(214, 255, 214);
  background-color: #22c55e;
}
</style>
