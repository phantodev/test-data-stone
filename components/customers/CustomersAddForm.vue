<template>
  <section>
    <form>
      <div class="grid-container">
        <section class="container-input">
          <label class="label-input" for="name">Nome:</label>
          <input
            class="input-text"
            type="text"
            id="name"
            name="name"
            placeholder="Digite o nome do cliente"
            required />
        </section>
        <section class="container-input">
          <label class="label-input" for="age">Idade:</label>
          <input
            class="input-text"
            type="number"
            id="age"
            name="age"
            v-maska
            data-maska="##"
            placeholder="0"
            required />
        </section>
        <section class="container-input">
          <label class="label-input" for="email">E-mail:</label>
          <input
            class="input-text"
            type="email"
            id="email"
            placeholder="Digite o e-mail do cliente"
            name="email"
            required />
        </section>
        <section class="container-input">
          <label class="label-input" for="phone">Telefone:</label>
          <input
            class="input-text"
            type="tel"
            id="phone"
            v-maska
            data-maska="(##) #####-####"
            placeholder="(XX) XXXXX-XXXX"
            name="phone"
            required />
        </section>
        <section class="container-input">
          <label class="label-input" for="city">Cidade:</label>
          <input
            class="input-text"
            type="text"
            id="city"
            name="city"
            required />
        </section>
      </div>
      <button type="submit" class="btn-primary">
        <Icon
          name="fluent:add-12-filled"
          size="1rem"
          color="fluent:add-12-filled" />Salvar Cliente
      </button>
    </form>
  </section>
</template>

<style lang="scss" scoped>
form {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(15rem, 1fr)
  ); /* Define as colunas com largura mínima de 200px e máxima de 1fr */
  gap: 1rem; /* Espaçamento entre os elementos */
}

.container-input {
  width: 100%;
}

button {
  margin: auto;
}
</style>
