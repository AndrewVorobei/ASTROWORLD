<template>
  <div class="root d-flex">
    <div class="layout d-flex flex-row">
      <div class="main-home-block d-flex">
        <sidebar class="sidebarHome" />
        <main class="d-flex flex-column">
          <div class="logo-block d-flex">
            <h1 class="site-logo">ASTROWORLD</h1>
          </div>
          <p class="intro">
            Добро пожаловать в ASTROWORLD - ваше новое пространство для
            увлекательных приключений в мире астрономии!
          </p>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "../views/Sidebar/Sidebar.vue";
</script>

<style scoped lang="scss">
.layout {
  height: 100%;
  width: 100%;
  .sidebarHome {
    display: flex;
    width: 15rem;
  }
  .main-home-block {
    width: 100%;
    main {
      justify-content: start;
      margin: 20px 0;
      background: url("../assets/HomeImages/HomeBg.png");

      // background-color: rgba(8, 8, 8, 0.897);
      width: 100%;
      height: 100%;
      margin: auto;

      .logo-block {
        margin-top: 20px;
        margin-left: 20px;
        height: 10%;
        width: 22%;
        .site-logo {
          color: gold;
          background: linear-gradient(#ab9e31 33%, #b87f17 66%, #bd5b23);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }

      .intro {
        color: gold;
        background: linear-gradient(#b87f17 33%, #ab9e31 66%, #c7c29c);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin: 0;
        margin-left: 20px;
        width: 20%;
        height: 28%;
        display: flex;
        font-size: 18px;
      }
    }
  }
}
</style>
