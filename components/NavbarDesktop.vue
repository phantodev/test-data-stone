<template>
  <nav>
    <ul class="menu-desktop">
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
  }
  .menu-icons {
    height: 1.5rem;
    width: 1.5rem;
  }
}
</style>
