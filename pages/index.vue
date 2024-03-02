<script lang="ts"></script>

<template>
  <section class="login-container">
    <section class="login-form">
      <section class="login-header">
        <img
          src="../assets/images/logo-data-stone.png"
          alt="Logo da Empresa Data Stone"
          width="284" />
      </section>
      <LoginForm />
    </section>
  </section>
</template>

<style lang="scss">
.login-form {
  background-color: $white;
  width: 30rem;
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 2rem;
}
.login-container {
  color: $primary;
  background-color: $secondary;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
