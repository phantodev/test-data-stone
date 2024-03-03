<template>
  <section>
    <form>
      <section class="grid-container">
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
          <label class="label-input" for="age">Documento (CPF):</label>
          <input
            class="input-text"
            type="number"
            id="document"
            name="document"
            v-maska
            data-maska="###.###.###-##"
            placeholder="000.000.000-00"
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
          <label class="label-input" for="city">Cliente Ativo?</label>
          <section class="container-radios margin-top">
            <label>
              <input type="radio" name="userStatus" value="ativo" />
              Sim
            </label>
            <br />

            <label>
              <input type="radio" name="userStatus" value="inativo" />
              Não
            </label>
          </section>
        </section>
      </section>
      <section class="sub-title">
        <img
          src="../../assets/images/products.svg"
          alt=""
          class="menu-icons" />Vincular produtos ao cliente
      </section>
      <section>
        <ProductsLinkCustomer />
      </section>
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
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 1rem;
}

.container-input {
  width: 100%;
}

button {
  margin: auto;
}

.menu-icons {
  height: 1.2rem;
  width: 1.2rem;
}
</style>
