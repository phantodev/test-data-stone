<template>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Produto</th>
        <th>Vincular Produto</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Stone Lab</td>
        <td>
          <section class="container-radios">
            <label>
              <input type="radio" name="stoneLab" value="ativo" />
              Sim
            </label>
            <br />

            <label>
              <input type="radio" name="stoneLab" value="inativo" />
              Não
            </label>
          </section>
        </td>
      </tr>
    </tbody>
  </table>
  <section class="container-pagination">
    <section class="registers-numbers">
      Mostrando de <strong>1</strong> a <strong>10</strong> de um total de
      <strong>20 registros</strong>
    </section>
    <section class="pagination-numbers">
      <TablePagination />
    </section>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  text-align: left;
  font-size: 0.875rem;
  button {
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    img {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
}
th {
  background-color: #f2f2f2;
}

.row-btn-edit-bin {
  display: flex;
  align-items: center;
  column-gap: 1rem;
}

.container-pagination {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}

.badge {
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  border-radius: 2rem;
  font-weight: bold;
  font-size: 0.7rem;
}

.badge-inactive {
  @extend .badge;
  background-color: #aa0000;
  color: rgb(255, 220, 220);
}

.badge-active {
  @extend .badge;
  color: rgb(214, 255, 214);
  background-color: #00c500;
}
</style>
