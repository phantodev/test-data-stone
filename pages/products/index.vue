<script setup lang="ts">
const currentAction = ref<string>("list");

function changeAction(action: string) {
  currentAction.value = action;
}
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
      <section class="content-customers" v-if="currentAction === 'list'">
        <ProductsTableList />
      </section>
      <section v-else>
        <ProductsAddForm />
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
