<template>
  <!-- Кнопка-триггер модального окна -->
  <button
    type="button"
    class="btn btn-primary"
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
            <button class="text-bg-dark btn btn-dark" @click="showModal">
              Login
            </button>
            <div class="vr text-light mx-2"></div>

            <button class="text-bg-dark btn btn-dark" @click="showModal">
              SignIn
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
          <log-in class="logInModal" />
          <sign-up class="signupModal currentModal" />
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
import { ref } from "vue";
import LogIn from "../views/AccPage/LogIn.vue";

const showModal = () => {
  const signup = document.querySelector(".signupModal");
  const login = document.querySelector(".logInModal");

  if (!signup.hasAttribute("currentModal")) {
    signup.classList.toggle("currentModal");
    login.classList.toggle("currentModal");
  }
};
</script>

<style lang="scss" scoped>
.currentModal {
  display: none;
}

.btn-primary {
  background-color: #6610f2;
  border: none;
}

.btn-primary:hover {
  background-color: #6710f29d;
}

.modal-content {
  height: auto;
}
</style>
