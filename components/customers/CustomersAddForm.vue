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
          <section class="container-radios">
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
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 1rem;
}

.container-input {
  width: 100%;
}

.container-radios {
  display: flex;
  align-items: center;
  margin-top: 1rem;
  column-gap: 0.5rem;

  label {
    display: flex;
    align-items: center;
  }

  input[type="radio"] {
    background-color: $background;
    width: 20px;
    height: 20px;
    margin-right: 0.5rem;
  }
  input[type="radio"]:after {
    width: 20px;
    height: 20px;
    border-radius: 20px;
    top: -2px;
    left: -1px;
    position: relative;
    background-color: #d1d3d1;
    content: "";
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
  }

  input[type="radio"]:checked:after {
    width: 20px;
    height: 20px;
    border-radius: 20px;
    top: -2px;
    left: -1px;
    position: relative;
    background-color: $primary;
    content: "";
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
  }
}

button {
  margin: auto;
}
</style>
