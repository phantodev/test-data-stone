<template>
  <section class="card">
    <img src="../assets/images/alert.svg" alt="" />
    <section class="deleteHeading">Deletar Cliente</section>
    <section class="deleteDescription">
      Após a exclusão não poderemos recuper o registro. Deseja continuar?
    </section>

    <section class="buttonContainer">
      <button class="acceptButton">👍 Permitr</button>
      <button class="declineButton">👎 Cancelar</button>
    </section>
  </section>
</template>

<style lang="scss">
.card {
  width: 300px;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.062);
}

.deleteHeading {
  font-size: 1rem;
  font-weight: 800;
}

.deleteDescription {
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
  color: rgb(99, 99, 99);
}

.buttonContainer {
  display: flex;
  gap: 20px;
  margin-top: 1rem;
  flex-direction: row;
}

.acceptButton {
  width: 7rem;
  height: 2rem;
  background-color: #22c55e;
  transition-duration: 0.2s;
  border: none;
  color: white;
  cursor: pointer;
  font-weight: 600;
  border-radius: 0.5rem;
}

.declineButton {
  width: 7rem;
  height: 2rem;
  background-color: #ef4444;
  transition-duration: 0.2s;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 600;
  border-radius: 0.5rem;
}

.declineButton:hover {
  background-color: #ebebeb;
  transition-duration: 0.2s;
}

.acceptButton:hover {
  background-color: #9173ff;
  transition-duration: 0.2s;
}
</style>
