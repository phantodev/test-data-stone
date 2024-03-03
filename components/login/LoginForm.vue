<template>
  <section class="container-input">
    <label class="label-input" for="email">E-mail</label>
    <input class="input-text" type="text" name="" id="email" />
  </section>
  <section class="container-input">
    <label class="label-input" for="password">Senha</label>
    <input class="input-text" type="text" name="" id="password" />
  </section>
  <section class="container-input-checkbox">
    <label class="container-check">
      <section class="label-check">Lembrar-me</section>
      <input type="checkbox" checked="checked" />
      <span class="checkmark"></span>
    </label>
    <button class="btn-secondary">Esqueci Minha Senha</button>
  </section>

  <button class="btn-primary" type="button">Entrar</button>
</template>

<script lang="ts"></script>

<style lang="scss">
.container-input-checkbox {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}
</style>
