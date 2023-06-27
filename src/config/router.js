import { createRouter, createWebHistory } from "vue-router";

import DefaultLayout from "../components/DefaultLayout.vue";
import HomePage from "../components/HomePage.vue";
import SolarSistem from "../views/NavThemes/SolarSistem.vue";
import OurGalaxy from "../views/NavThemes/OurGalaxy.vue";
import NewsPage from "../views/NavThemes/NewsPage.vue";
import SignUp from "../views/AccPage/SignUp.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: HomePage,
      },
      {
        path: "/solar",
        name: "solar",
        component: SolarSistem,
      },
      {
        path: "/ourGalaxy",
        name: "ourGalaxy",
        component: OurGalaxy,
      },
      {
        path: "/NewsPage",
        name: "news",
        component: NewsPage,
      },

      {
        path: "/signup",
        name: "signup",
        component: SignUp,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
