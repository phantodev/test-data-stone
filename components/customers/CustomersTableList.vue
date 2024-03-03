<template>
  <section class="container-table">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Documento</th>
          <th>Email</th>
          <th>Telefone</th>
          <th>Ativo</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>John Doe</td>
          <td>61259789</td>
          <td>john.doe@example.com</td>
          <td>(123) 456-7890</td>
          <td><span class="badge-active">Sim</span></td>
          <td class="row-btn-edit-bin">
            <button class="btn-edit-bin">
              <img
                src="../../assets/images/edit.svg"
                alt="Icone de Edição de Clientes" />
            </button>
            <button>
              <img
                src="../../assets/images/bin.svg"
                alt="Icone de Exclusão de Clientes" />
            </button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jane Smith</td>
          <td>28</td>
          <td>jane.smith@example.com</td>
          <td>(234) 567-8901</td>
          <td><span class="badge-active">Sim</span></td>
          <td class="row-btn-edit-bin">
            <button class="btn-edit-bin">
              <img
                src="../../assets/images/edit.svg"
                alt="Icone de Edição de Clientes" />
            </button>
            <button>
              <img
                src="../../assets/images/bin.svg"
                alt="Icone de Exclusão de Clientes" />
            </button>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Michael Johnson</td>
          <td>45</td>
          <td>michael.johnson@example.com</td>
          <td>(345) 678-9012</td>
          <td><span class="badge-active">Sim</span></td>
          <td class="row-btn-edit-bin">
            <button class="btn-edit-bin">
              <img
                src="../../assets/images/edit.svg"
                alt="Icone de Edição de Clientes" />
            </button>
            <button>
              <img
                src="../../assets/images/bin.svg"
                alt="Icone de Exclusão de Clientes" />
            </button>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>Emily Brown</td>
          <td>32</td>
          <td>emily.brown@example.com</td>
          <td>(456) 789-0123</td>
          <td><span class="badge-inactive">Não</span></td>
          <td class="row-btn-edit-bin">
            <button class="btn-edit-bin">
              <img
                src="../../assets/images/edit.svg"
                alt="Icone de Edição de Clientes" />
            </button>
            <button>
              <img
                src="../../assets/images/bin.svg"
                alt="Icone de Exclusão de Clientes" />
            </button>
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>Daniel Wilson</td>
          <td>40</td>
          <td>daniel.wilson@example.com</td>
          <td>(567) 890-1234</td>
          <td><span class="badge-active">Sim</span></td>
          <td class="row-btn-edit-bin">
            <button class="btn-edit-bin">
              <img
                src="../../assets/images/edit.svg"
                alt="Icone de Edição de Clientes" />
            </button>
            <button>
              <img
                src="../../assets/images/bin.svg"
                alt="Icone de Exclusão de Clientes" />
            </button>
          </td>
        </tr>
        <tr>
          <td>6</td>
          <td>Sarah Taylor</td>
          <td>29</td>
          <td>sarah.taylor@example.com</td>
          <td>(678) 901-2345</td>
          <td><span class="badge-inactive">Não</span></td>
          <td class="row-btn-edit-bin">
            <button class="btn-edit-bin">
              <img
                src="../../assets/images/edit.svg"
                alt="Icone de Edição de Clientes" />
            </button>
            <button>
              <img
                src="../../assets/images/bin.svg"
                alt="Icone de Exclusão de Clientes" />
            </button>
          </td>
        </tr>
        <tr>
          <td>7</td>
          <td>Christopher Martinez</td>
          <td>38</td>
          <td>christopher.martinez@example.com</td>
          <td>(789) 012-3456</td>
          <td><span class="badge-inactive">Não</span></td>
          <td class="row-btn-edit-bin">
            <button class="btn-edit-bin">
              <img
                src="../../assets/images/edit.svg"
                alt="Icone de Edição de Clientes" />
            </button>
            <button>
              <img
                src="../../assets/images/bin.svg"
                alt="Icone de Exclusão de Clientes" />
            </button>
          </td>
        </tr>
        <tr>
          <td>8</td>
          <td>Amanda Anderson</td>
          <td>31</td>
          <td>amanda.anderson@example.com</td>
          <td>(890) 123-4567</td>
          <td><span class="badge-inactive">Não</span></td>
          <td class="row-btn-edit-bin">
            <button class="btn-edit-bin">
              <img
                src="../../assets/images/edit.svg"
                alt="Icone de Edição de Clientes" />
            </button>
            <button>
              <img
                src="../../assets/images/bin.svg"
                alt="Icone de Exclusão de Clientes" />
            </button>
          </td>
        </tr>
        <tr>
          <td>9</td>
          <td>James Thomas</td>
          <td>36</td>
          <td>james.thomas@example.com</td>
          <td>(901) 234-5678</td>
          <td><span class="badge-inactive">Não</span></td>
          <td class="row-btn-edit-bin">
            <button class="btn-edit-bin">
              <img
                src="../../assets/images/edit.svg"
                alt="Icone de Edição de Clientes" />
            </button>
            <button>
              <img
                src="../../assets/images/bin.svg"
                alt="Icone de Exclusão de Clientes" />
            </button>
          </td>
        </tr>
        <tr>
          <td>10</td>
          <td>Jessica Garcia</td>
          <td>27</td>
          <td>jessica.garcia@example.com</td>
          <td>(012) 345-6789</td>
          <td><span class="badge-inactive">Não</span></td>
          <td class="row-btn-edit-bin">
            <button class="btn-edit-bin">
              <img
                src="../../assets/images/edit.svg"
                alt="Icone de Edição de Clientes" />
            </button>
            <button>
              <img
                src="../../assets/images/bin.svg"
                alt="Icone de Exclusão de Clientes" />
            </button>
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
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.container-table {
  overflow-x: auto; /* Adiciona barra de rolagem horizontal quando necessário */
}
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
