import { defineStore } from "pinia";
import type { IUserAuth } from "~/types/Login";

export const useAuthStore = defineStore(
  "authStore",
  () => {
    const token = ref<string>("");
    const user = ref<IUserAuth | null>(null);

    return {
      token,
      user,
    };
  },
  { persist: { storage: persistedState.localStorage } }
);
