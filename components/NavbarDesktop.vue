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

function handleLogout() {
  navigateTo("/");
}
</script>

<template>
  <nav>
    <ul class="menu-desktop">
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
  </nav>
</template>

<style lang="scss" scoped>
.menu-desktop {
  list-style: none;
  display: flex;
  column-gap: 2rem;

  li {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.3s ease;
    position: relative;

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

  .menu-icons {
    height: 1.5rem;
    width: 1.5rem;
  }
}
</style>
