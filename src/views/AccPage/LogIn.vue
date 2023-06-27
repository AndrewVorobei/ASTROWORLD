<template>
  <form class="text-light d-flex flex-column gap-2 px-4">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label"
        >Имя пользователя</label
      >
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Введите имя пользователя"
      />
      <div id="emailHelp" class="form-text">
        Мы никогда никому не передадим вашу электронную почту.
      </div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Пароль</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        placeholder="Введите пароль"
      />
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Проверить меня</label>
    </div>
    <button type="submit" class="btn btn-primary">Отправить</button>

    <div class="createAcc d-flex gap-4">
      <label for="exampleInputPassword1" class="form-label"
        >Создайте аккаунт</label
      >

      <router-link :to="{ name: 'signup' }">
        <button class="btn btn-secondary" data-bs-dismiss="modal">
          Создать
        </button>
      </router-link>
    </div>
  </form>
</template>

<script setup></script>

<style lang="scss">
.createAcc {
  align-items: center;
  padding: 1rem 0;
}
</style>
