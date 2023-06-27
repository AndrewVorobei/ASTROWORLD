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
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Закрыть"
          ></button>
        </div>
        <div class="modal-body">
          <log-in />
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
import LogIn from "../views/AccPage/LogIn.vue";
</script>

<style lang="scss" scoped>
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
