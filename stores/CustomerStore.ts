import { defineStore } from "pinia";
import type { ICustomers } from "~/types/Customers";

export const useCustomerStore = defineStore("customerStore", () => {
  const customers = ref<ICustomers[] | null>(null);

  return {
    customers,
  };
});
