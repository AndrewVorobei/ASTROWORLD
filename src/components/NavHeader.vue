<template>
  <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
    <div class="container-fluid">
      <router-link :to="{ name: 'home' }" class="navbar-router">
        <a class="navbar-brand fw-bold" href="#"> ASTROWORLD </a>
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Переключатель навигации"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link :to="{ name: 'home' }">
              <a
                class="nav-link"
                @click="setActiveLink('home')"
                :class="{ active: isLinkActive('home') }"
                aria-current="page"
                href="#"
              >
                Главная
              </a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'news' }">
              <a
                class="nav-link"
                @click="setActiveLink('news')"
                :class="{ active: isLinkActive('news') }"
                aria-current="page"
                href="#"
              >
                Новости
              </a>
            </router-link>
          </li>
          <li class="nav-item dropdown d-flex">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Темы
            </a>
            <ul class="themes dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <router-link :to="{ name: 'solar' }">
                  <a class="dropdown-item" href="#"> Солнечная система </a>
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'ourGalaxy' }">
                  <a class="dropdown-item" href="#"> Наша Галактика </a>
                </router-link>
              </li>
              <li><a class="dropdown-item" href="#">Учебный материал</a></li>
              <li class="themes-hr"><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Что-то еще здесь</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Поиск"
            aria-label="Поиск"
          />
          <button class="btn btn-outline-success" type="submit">Поиск</button>
        </form>
      </div>
    </div>

    <div class="loginModal justify-content-end d-flex align-items-center gap-3">
      <autorize-page />
      <a @click="authStore.logout()" class="d-none nav-item nav-link text-light"
        >logout</a
      >
    </div>
  </nav>
</template>

<script setup>
import AutorizePage from "./AutorizePage.vue";
import { useAuthStore } from "../stores/pinia";
import { ref } from "vue";

const activeNav = ref(null);

const setActiveLink = (link) => {
  activeNav.value = link;
};

const isLinkActive = (link) => {
  return activeNav.value === link;
};
</script>

<style scoped lang="scss">
.navbar {
  width: 100%;

  a {
    text-decoration: none;
  }
  .navbar-brand {
    color: rgb(173, 84, 43);
    box-shadow: 0 0 3px 0.3rem rgba(170, 165, 163, 0.1);
    background: rgba(173, 162, 157, 0.1);

    border-radius: 100%;
    padding: 0.25rem;
  }
  .navbar-brand:hover {
    box-shadow: 0 0 3px 0.3rem rgba(170, 165, 163, 0.5);
    background: rgba(173, 162, 157, 0.5);
    color: rgb(194, 121, 87);
  }
  .loginModal {
    margin: 0 1em;
  }

  .form-control:focus {
    box-shadow: 0 0 0 0.2rem rgba(254, 254, 255, 0.726);
  }
}

.themes li:not(.themes-hr) {
  display: flex;
  margin: 5px 0;
}

@media (max-width: 992px) {
  .navbar {
    flex-wrap: inherit;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
