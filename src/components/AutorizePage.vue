<template>
  <!-- Кнопка-триггер модального окна -->
  <button
    type="button"
    class="btn btn-primary autorize-page"
    data-bs-toggle="modal"
    data-bs-target="#staticBackdrop"
  >
    <img src="../assets/NavImages/LoginImg.png" alt="" />
  </button>

  <!-- Модальное окно -->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog d-flex">
      <div class="modal-content">
        <div class="modal-header">
          <div class="login-signup d-flex">
            <button class="text-bg-dark btn btn-dark" @click="showLogIn">
              Войти
            </button>
            <div class="vr text-light mx-2"></div>

            <button class="text-bg-dark btn btn-dark" @click="showSignUp">
              Зарегестрироваться
            </button>
          </div>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Закрыть"
          ></button>
        </div>
        <div class="modal-body">
          <log-in v-if="logIn" class="logInModal" />
          <sign-up v-if="signUp" class="signupModal currentModal" />
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SignUp from "../views/AccPage/SignUp.vue";
import { ref, defineProps } from "vue";
import LogIn from "../views/AccPage/LogIn.vue";

let signUp = ref(false);
let logIn = ref(true);

let showSignUp = () => {
  signUp.value = true;
  logIn.value = false;
};

let showLogIn = () => {
  signUp.value = false;
  logIn.value = true;
};
</script>

<style lang="scss" scoped>
.autorize-page:hover {
  transform: scale(1.1);
}

.btn-primary {
  background-color: #6610f2;
  border: none;
}

.btn-primary:hover {
  background-color: #7532e0da;
}

.modal-content {
  height: auto;
}
</style>
