<script setup lang="ts">
const isMenuOpen = ref<boolean>(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>
<template>
  <nav>
    <img
      src="../assets/images/menu.svg"
      alt="Icone do Menu"
      @click="toggleMenu" />
    <Transition>
      <ul class="menu-mobile" v-if="isMenuOpen">
        <img
          src="../assets/images/close.svg"
          alt="Icone do Menu"
          class="close-icon"
          @click="toggleMenu" />
        <li>
          <img src="../assets/images/customers.svg" alt="" class="menu-icons" />
          <span>Clientes</span>
        </li>
        <li>
          <img src="../assets/images/products.svg" alt="" class="menu-icons" />
          <span>Produtos</span>
        </li>
        <li>
          <img src="../assets/images/profile.svg" alt="" class="menu-icons" />
          <span>Meu Perfil</span>
        </li>
        <li>
          <img src="../assets/images/logout.svg" alt="" class="menu-icons" />
          <span>Sair</span>
        </li>
      </ul>
    </Transition>
  </nav>
</template>

<style lang="scss" scoped>
.menu-mobile {
  position: fixed;
  z-index: 99;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
  background-color: $lightGray;
  list-style: none;
  display: flex;
  flex-direction: column;
  row-gap: 4rem;
  justify-content: center;
  align-items: center;
  li {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    font-weight: bold;
    font-size: 2rem;
  }
  .close-icon {
    position: fixed;
    top: 1.2rem;
    right: 1.2rem;
    height: 3.5rem;
    width: 3.5rem;
  }
  .menu-icons {
    height: 2.5rem;
    width: 2.5rem;
  }
}

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
