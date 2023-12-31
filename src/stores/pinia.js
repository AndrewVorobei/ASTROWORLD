import { defineStore } from "pinia";

// import { fetchWrapper } from "../helpers/fetch-wrapper";
// import router from "../config/router";

const baseUrl = `${import.meta.env.VITE_API_URL}/users`;

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    users: [] || localStorage.getItem(users),

    user: JSON.parse(localStorage.getItem("user")),
    returnUrl: null,
  }),
  actions: {
    async saveToLs(user) {
      const serializedUserUpdated = JSON.stringify(user);
      localStorage.setItem("users", serializedUserUpdated);
    },

    // async login(username, password) {
    //   const user = await fetchWrapper.post(`${baseUrl}/authenticate`, {
    //     username,
    //     password,
    //   });

    //   // update pinia state
    //   this.user = user;

    //   // store user details and jwt in local storage to keep user logged in between page refreshes
    //   localStorage.setItem("user", JSON.stringify(user));

    //   // redirect to previous url or default to home page
    //   router.push(this.returnUrl || "/");
    // },
    // logout() {
    //   this.user = null;
    //   localStorage.removeItem("user");
    //   router.push("/login");
    // },
  },
});
