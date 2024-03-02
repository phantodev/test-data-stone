<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";
const { width } = useWindowSize(); // Pegar a largura da tela para mostrar o menu DESKTOP ou MOBILE, pois eles tem layouts diferentes.
</script>

<template>
  <section>
    <header class="header">
      <img src="../assets/images/logo-data-stone.png" alt="Logo Data Stone" />
      <NavbarDesktop v-if="width > 834" />
      <NavbarMobile v-else />
    </header>
    <main>
      <slot />
    </main>
  </section>
</template>

<style lang="scss">
.header {
  background-color: $white;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;
  box-shadow: 15px 15px 100px 15px rgba(0, 0, 0, 0.2);
}
</style>
