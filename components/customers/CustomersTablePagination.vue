<script setup lang="ts">
const currentPage = ref(1);

const onClickHandler = (page: number) => {
  console.log("Trocou de página!");
};
</script>

<template>
  <vue-awesome-paginate
    :total-items="10"
    :items-per-page="5"
    :max-pages-shown="5"
    v-model="currentPage"
    :on-click="onClickHandler">
    <template #prev-button>
      <span>
        <Icon name="ic:round-keyboard-arrow-left" size="1rem" color="#000000" />
      </span>
    </template>
    <template #next-button>
      <span>
        <Icon
          name="ic:round-keyboard-arrow-right"
          size="1rem"
          color="#000000" />
      </span>
    </template>
  </vue-awesome-paginate>
</template>

<style lang="scss">
.pagination-container {
  display: flex;
  column-gap: 10px;
}
.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}
.active-page {
  background-color: $primary;
  border: 1px solid $primary;
  color: white;
}
.active-page:hover {
  background-color: $primary;
}
</style>
