<script setup lang="ts">
import type { ILoginResponse } from "../../types/Login";
import { useToast } from "vue-toastification";
import { useAuthStore } from "../../stores/AuthStore";
const authStore = useAuthStore();

const toast = useToast();
const email = ref<string>("");
const password = ref<string>("");
const isLoading = ref<boolean>(false);

// Esta `função assíncrona handleLogin()` é uma função responsável por lidar com o
//processo de login. Aqui está um resumo do que ele faz: Acessa minha rota de Login feita no próprio nuxt.
// O retorno da rota caso sucesso armazena as informações em um estato do PINIA que é persistido no Localstorage
// Caso o retorno disparar o erro de não autorizado, um toast é disparado com a mensagem de erro.
async function handleLogin() {
  isLoading.value = true;
  const { data: responseData, error } = await useFetch<ILoginResponse>(
    "/api/login",
    {
      method: "post",
      body: {
        email: email.value,
        password: password.value,
      },
    }
  );
  if (responseData.value !== null) {
    authStore.token = responseData.value.data.token;
    authStore.user = responseData.value.data.user;
    navigateTo("/customers");
  }
  if (error.value !== null) {
    isLoading.value = false;
    toast.error("Credenciais inválidas!");
  }
}
</script>

<template>
  <section class="container-input">
    <label class="label-input" for="email">E-mail</label>
    <input class="input-text" type="text" name="" id="email" v-model="email" />
  </section>
  <section class="container-input">
    <label class="label-input" for="password">Senha</label>
    <input
      class="input-text"
      type="text"
      name=""
      id="password"
      v-model="password" />
  </section>
  <section class="container-input-checkbox">
    <label class="container-check">
      <section class="label-check">Lembrar-me</section>
      <input type="checkbox" checked="checked" />
      <span class="checkmark"></span>
    </label>
    <button class="btn-secondary">Esqueci Minha Senha</button>
  </section>

  <button @click="handleLogin()" class="btn-primary" type="button">
    <span v-if="!isLoading"> Entrar </span>
    <span v-else>
      <img src="../../assets/images/spinner.svg" width="24" alt=""
    /></span>
  </button>
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
