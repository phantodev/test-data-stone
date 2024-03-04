import { defineStore } from "pinia";
import type { ICustomers } from "~/types/Customers";

export const useCustomerStore = defineStore("customerStore", () => {
  const customers = ref<ICustomers[] | null>(null);

  async function addNewCustomer(newCustomer: ICustomers): Promise<void> {
    // Simulando apenas uma lentidão na chamada com essa Promise.
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
    if (customers.value !== null) {
      customers.value.push(newCustomer); // Adiciona o novo cliente ao array
    }
  }

  return {
    customers,
    addNewCustomer,
  };
});
