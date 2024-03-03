<script lang="ts"></script>

<template>
  <NuxtLayout>
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
  </NuxtLayout>
</template>

<style lang="scss">
.login-container {
  color: $primary;
  background-color: $background;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

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
    box-shadow: 15px 15px 100px 15px rgba(0, 0, 0, 0.2);
  }
}
@media (max-width: 420px) {
  .login-container {
    background-color: $white;
    .login-form {
      box-shadow: none;
    }
  }
}
</style>
