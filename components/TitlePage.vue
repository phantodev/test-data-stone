<script setup lang="ts">
const props = defineProps({
  icons: String,
});
</script>
<template>
  <section class="title">
    <img :src="props.icons" alt="" class="menu-icons" />
    <span><slot /></span>
  </section>
</template>

<style lang="scss" scoped>
.title {
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  span {
    font-size: 1.5rem;
    font-weight: bold;
  }
}
</style>
