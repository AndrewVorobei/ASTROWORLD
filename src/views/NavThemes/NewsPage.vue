<template>
  <div class="news-layout">
    <main>
      <h1 class="header-news">Последние новости из мира космоса</h1>

      <div class="first-block" v-if="dailyImg">
        <p class="dailyImgExpl">
          {{ dailyImg.explanation }}
        </p>
        <img class="dailyImg" :src="dailyImg.url" />
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { apiForImgNasa } from "../../config/apikeys.js";

const dailyImg = ref(null);

onMounted(async () => {
  await axios
    .get(
      "https://api.nasa.gov/planetary/apod?api_key=VnoIWBQ077VYJrTbrGPGiINve7OMBQuWNYfEvYJf"
    )
    .then((response) => {
      dailyImg.value = response.data;
    });
});
</script>

<style lang="scss" scoped>
.news-layout {
  width: 100%;
  height: 100vh;
  display: flex;
  background: linear-gradient(
    to left,
    #8f8d8d,
    #333 47%,
    #eee 75%,
    #a82d2d 100%
  );

  main {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    gap: 30px;

    .header-news {
      width: 30%;
    }
    .first-block {
      display: flex;
      gap: 30px;

      .dailyImg {
        width: 40%;
        height: 70%;
        border-radius: 10px;
        transition: transform 0.5s ease;
      }
      .dailyImg:hover {
        perspective: 500px;
        transform: scale(1.05);
      }

      .dailyImgExpl {
        width: 50%;
        color: gold;
        background: linear-gradient(#0a0a0a 33%, #2e220d 66%, #bd5b23);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
}
</style>
