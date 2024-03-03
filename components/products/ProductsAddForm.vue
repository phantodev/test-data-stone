<template>
  <section>
    <form>
      <section class="container-input">
        <label class="label-input" for="name">Nome:</label>
        <input
          class="input-text"
          type="text"
          id="name"
          name="name"
          placeholder="Digite o nome do produto"
          required />
      </section>
      <section class="container-input">
        <label class="label-input" for="age">Descrição:</label>
        <textarea
          class="input-textarea"
          type="number"
          id="description"
          name="description"
          placeholder="Descreva informações sobre o produto..."
          required />
      </section>
      <section class="container-input">
        <label class="label-input" for="city">Produto Ativo?</label>
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
      <button type="submit" class="btn-primary">
        <Icon
          name="fluent:add-12-filled"
          size="1rem"
          color="fluent:add-12-filled" />Salvar Produto
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
