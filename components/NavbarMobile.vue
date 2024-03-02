<script setup lang="ts">
const route = useRoute();

// A função `isCurrentRoute` é uma função auxiliar que usa um `routePath`
//parâmetro do tipo string e retorna um valor booleano. Ele compara o atual
// caminho da rota obtido do objeto `route` com o `routePath` fornecido. Se
// o caminho da rota atual corresponde ao `routePath` fornecido, a função retorna
// `true`, indicando que a rota atual é igual à rota fornecida
// caminho. Caso contrário, retorna `false`. Esta função é usada para determinar se um
// rota específica é a rota atualmente ativa no menu de navegação.
function isCurrentRoute(routePath: string): boolean {
  return route.path === routePath;
}

const isMenuOpen = ref<boolean>(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function handleLogout() {
  navigateTo("/");
}
</script>
<template>
  <nav>
    <img
      src="../assets/images/menu.svg"
      alt="Icone do Menu"
      @click="toggleMenu" />
    <Transition>
      <ul class="menu-mobile" v-show="isMenuOpen">
        <img
          src="../assets/images/close.svg"
          alt="Icone do Menu"
          class="close-icon"
          @click="toggleMenu" />
        <li
          :class="{ active: isCurrentRoute('/customers') }"
          @click="navigateTo('/customers')">
          <img src="../assets/images/customers.svg" alt="" class="menu-icons" />
          <span>Clientes</span>
        </li>
        <li
          :class="{ active: isCurrentRoute('/products') }"
          @click="navigateTo('/products')">
          <img src="../assets/images/products.svg" alt="" class="menu-icons" />
          <span>Produtos</span>
        </li>
        <li
          :class="{ active: isCurrentRoute('/profile') }"
          @click="navigateTo('/profile')">
          <img src="../assets/images/profile.svg" alt="" class="menu-icons" />
          <span>Meu Perfil</span>
        </li>
        <li @click="handleLogout()">
          <img src="../assets/images/logout.svg" alt="" class="menu-icons" />
          <span>Logout</span>
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
    cursor: pointer;

    span {
      position: relative;
    }

    span::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 100%;
      height: 2px;
      background-color: $background;
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }

    &:hover span::after {
      transform: scaleX(1);
    }
  }

  li.active span::after {
    transform: scaleX(1);
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
