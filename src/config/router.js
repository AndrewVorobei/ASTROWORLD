import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/pinia";

import DefaultLayout from "../components/DefaultLayout.vue";
import HomePage from "../components/HomePage.vue";
import SolarSistem from "../views/NavThemes/SolarSistem.vue";
import OurGalaxy from "../views/NavThemes/OurGalaxy.vue";
import NewsPage from "../views/NavThemes/NewsPage.vue";
import SignUp from "../views/AccPage/SignUp.vue";
import LogIn from "../views/AccPage/LogIn.vue";

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
        path: "/login",
        name: "login",
        component: LogIn,
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

// router.beforeEach(async (to) => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   const publicPages = ["/"];
//   const authRequired = !publicPages.includes(to.path);
//   const auth = useAuthStore();

//   if (authRequired && !auth.user) {
//     auth.returnUrl = to.fullPath;
//     return "/";
//   }
// });

export default router;
