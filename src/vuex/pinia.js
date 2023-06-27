import { defineStore } from "pinia";

export const useStore = defineStore("User", {
  state: () => ({
    users: [],
  }),

  getters: () => {},
  actions: {
    saveToLs(user) {
      const serializedUser = localStorage.getItem("users");
      let users = [];
      if (serializedUser) {
        users = JSON.parse(serializedUser);
      }
      users.push(user);
      const serializedUserUpdated = JSON.stringify(users);
      localStorage.setItem("users", serializedUserUpdated);
      // const uniqueKey = `user_${Date.now()}`;
      // localStorage.setItem(uniqueKey, serializedUser);
    },
  },
});
