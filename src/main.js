import { createApp } from "vue";
import router from "./config/router";
import { createPinia } from "pinia";
import axios from "axios";

import App from "./App.vue";
import * as bootstrap from "bootstrap";
import "./style.scss";

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount("#app");

const token = localStorage.getItem("token");

if (token) {
  axios.defaults.headers.common["Authorization"] = token;
}
