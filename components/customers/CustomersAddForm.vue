<script setup lang="ts">
import { onMounted } from "vue";
import { isCPFValid } from "~/utils/isCPFValid";
import type { ICustomers } from "~/types/Customers";
import { useCustomerStore } from "../../stores/CustomerStore";
import { useToast } from "vue-toastification";
import type { IProducts } from "~/types/Products";
import { object, string } from "yup";

const toast = useToast();
const customerStore = useCustomerStore();
const isLoading = ref<boolean>(false);
const isCPFError = ref<boolean>(false);
const newCustomer = ref<ICustomers>({
  id: Math.floor(Math.random() * 1000), // Apenas uma simulação. Sabemos que é o BACK-END gera este número.
  name: "",
  document: "",
  email: "",
  phone: "",
  useProducts: [],
  active: true,
});

const isButtonDisabled = computed(() => {
  const productValidationSchema = object().shape({
    name: string().required().min(3), // Requerido e deve ter no mínimo 3 caracteres
    document: string().required().min(14),
    email: string()
      .required()
      .matches(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ), // Requerido e deve ser do tipo e-mail
  });

  // Valida os campos com base no esquema do YUP
  try {
    productValidationSchema.validateSync({
      name: newCustomer.value.name,
      document: newCustomer.value.document,
      email: newCustomer.value.email,
    });
    return false; // Se não houver erros de validação, o botão não estará desabilitado
  } catch (error) {
    return true; // Se houver erros de validação, o botão estará desabilitado
  }
});

// A função `handleCheckCPF` é responsável por verificar se o CPF (CPF
// identificação cadastral de pessoa física) fornecida no `newCustomer`
// objeto é válido. Isso é feito chamando a função `isCPFValid` do
// módulo `isCPFValid` e passando o valor do CPF de `newCustomer`.
function handleCheckCPF() {
  if (!isCPFValid(newCustomer.value.document)) {
    isCPFError.value = true;
    toast.error("CPF inválido!");
    document.getElementById("document")?.focus();
    return;
  } else {
    isCPFError.value = false;
  }
}

// Essa é uma função que iremos fazer uma simulação para adicionar um cliente.
// Neste caso iremos adicionar um novo item no array nos dados armazenado ao PINIA.
// Se fosse um caso real, enviariamos os dados para uma API e após o retorno chamaríamos
// novamente a rota para pegar as informações do banco atualizada.
async function addNewCustomer(): Promise<void> {
  try {
    isLoading.value = true;
    await customerStore.addNewCustomer({
      id: newCustomer.value.id,
      name: newCustomer.value.name,
      document: newCustomer.value.document,
      email: newCustomer.value.email,
      phone: newCustomer.value.phone,
      useProducts: newCustomer.value.useProducts,
      active: newCustomer.value.active,
    });
    toast.success("Cliente adicionado com sucesso!");
    newCustomer.value = {
      id: Math.floor(Math.random() * 1000), // Apenas uma simulação. Sabemos que é o BACK-END gera este número.
      name: "",
      document: "",
      email: "",
      phone: "",
      useProducts: [],
      active: true,
    };
  } catch (error) {
    toast.error("Não foi possível adicionar um cliente!");
  } finally {
    isLoading.value = false;
  }
}

async function updateCustomer(): Promise<void> {
  try {
    isLoading.value = true;
    await customerStore.updateCustomer({
      id: newCustomer.value.id,
      name: newCustomer.value.name,
      document: newCustomer.value.document,
      email: newCustomer.value.email,
      phone: newCustomer.value.phone,
      useProducts: newCustomer.value.useProducts,
      active: newCustomer.value.active,
    });
    toast.success("Clente atualizado com sucesso!");
  } catch (error) {
    toast.error("Não foi possível atualizar o cliente!");
  } finally {
    isLoading.value = false;
  }
}

// A função `handleAddUseProducts` é responsável por adicionar um produto selecionado
// para o array `useProducts` do objeto `newCustomer`.
function handleAddUseProducts(product: IProducts): void {
  newCustomer.value.useProducts.push(product);
}

// A função `handleAddUseProducts` é responsável por adicionar um produto selecionado
// para o array `useProducts` do objeto `newCustomer`.
function handleRemoveUseProducts(product: IProducts): void {
  // Encontrar o índice do produto a ser removido dentro do array useProducts
  const index = newCustomer.value.useProducts.findIndex(
    (p) => p.id === product.id
  );

  // Se o produto existir no array, remova-o
  if (index !== -1) {
    newCustomer.value.useProducts.splice(index, 1);
  }
}

// Esta função é para caso o estado do pinia para atualizar um cliente seja diferente de null
// então atualiza a ref local para os inputs estarem preenchidos com os dados.
onMounted(() => {
  if (customerStore.customerToDeleteOrUpdate !== null) {
    newCustomer.value.id = customerStore.customerToDeleteOrUpdate.id;
    newCustomer.value.name = customerStore.customerToDeleteOrUpdate.name;
    newCustomer.value.document =
      customerStore.customerToDeleteOrUpdate.document;
    newCustomer.value.email = customerStore.customerToDeleteOrUpdate.email;
    newCustomer.value.phone = customerStore.customerToDeleteOrUpdate.phone;
    newCustomer.value.useProducts = [
      ...customerStore.customerToDeleteOrUpdate.useProducts,
    ];
    newCustomer.value.active = customerStore.customerToDeleteOrUpdate.active;
  }
});
</script>

<template>
  <section>
    <form
      @submit.prevent="
        customerStore.customerToDeleteOrUpdate === null
          ? addNewCustomer()
          : updateCustomer()
      ">
      <section class="grid-container">
        <section class="container-input">
          <label class="label-input" for="name"
            >Nome: (Mínimo 3 caracteres)</label
          >
          <input
            class="input-text"
            type="text"
            id="name"
            name="name"
            autocomplete="on"
            v-model="newCustomer.name"
            placeholder="Digite o nome do cliente" />
        </section>
        <section class="container-input">
          <label
            :class="!isCPFError ? 'label-input' : 'label-input-error'"
            for="age"
            >Documento (CPF): (Obrigatório)</label
          >
          <input
            :class="!isCPFError ? 'input-text' : 'input-text-error'"
            type="text"
            id="document"
            name="document"
            autocomplete="on"
            @blur="handleCheckCPF"
            v-model="newCustomer.document"
            v-maska
            data-maska="###.###.###-##"
            placeholder="000.000.000-00" />
        </section>
        <section class="container-input">
          <label class="label-input" for="email">E-mail: (Obrigatório)</label>
          <input
            class="input-text"
            type="email"
            id="email"
            autocomplete="on"
            v-model="newCustomer.email"
            placeholder="Digite o e-mail do cliente"
            name="email" />
        </section>
        <section class="container-input">
          <label class="label-input" for="phone">Telefone:</label>
          <input
            class="input-text"
            type="tel"
            id="phone"
            autocomplete="on"
            v-model="newCustomer.phone"
            v-maska
            data-maska="(##) #####-####"
            placeholder="(XX) XXXXX-XXXX"
            name="phone" />
        </section>
        <section class="container-input">
          <label class="label-input" for="city">Cliente Ativo?</label>
          <section class="container-radios margin-top">
            <label>
              <input
                type="radio"
                name="userStatus"
                value="ativo"
                :checked="newCustomer.active === true"
                @change="newCustomer.active = true" />
              Sim
            </label>
            <br />

            <label>
              <input
                type="radio"
                name="userStatus"
                value="inativo"
                :checked="newCustomer.active === false"
                @change="newCustomer.active = false" />
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
        <ProductsLinkCustomer
          :handleAddUseProducts="handleAddUseProducts"
          :handleRemoveUseProducts="handleRemoveUseProducts"
          :newCustomer="newCustomer" />
      </section>
      <button
        :disabled="isButtonDisabled"
        type="submit"
        :class="isButtonDisabled ? 'btn-primary btn-disabled' : 'btn-primary'">
        <span v-if="!isLoading">
          <Icon
            name="fluent:add-12-filled"
            size="1rem"
            color="fluent:add-12-filled"
            v-if="customerStore.customerToDeleteOrUpdate === null" />
          <Icon
            name="material-symbols-light:save"
            size="1.3rem"
            color="fluent:add-12-filled"
            v-else />
          {{
            customerStore.customerToDeleteOrUpdate !== null
              ? "Atualizar Cliente"
              : "Salvar Cliente"
          }}
        </span>
        <span v-else>
          <img src="../../assets/images/spinner.svg" width="24" alt=""
        /></span>
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
