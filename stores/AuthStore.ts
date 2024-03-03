import { defineStore } from "pinia";
import type { IUserAuth } from "~/types/Login";

export const useAuthStore = defineStore(
  "authStore",
  () => {
    const token = ref<string>("");
    const user = ref<IUserAuth | null>(null);

    function logout() {
      localStorage.removeItem("authStore");
      navigateTo("/");
    }

    return {
      token,
      user,
      logout,
    };
  },
  { persist: { storage: persistedState.localStorage } }
);
