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
    <main class="container-main">
      <slot />
    </main>
  </section>
</template>

<style lang="scss">
.header {
  background-color: $white;
  height: 6rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;
  box-shadow: 0px 10px 20px 15px rgba(0, 0, 0, 0.1);
}
.container-main {
  display: flex;
  justify-content: center;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 7rem;
  padding-bottom: 3rem;
}
</style>
