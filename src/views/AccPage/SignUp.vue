<template>
  <div class="signUpLayout">
    <form class="p-4 d-flex flex-column gap-5 text-light">
      <div class="col-md-4">
        <label for="name" class="form-label">Имя</label>
        <input
          type="text"
          class="form-control"
          id="name"
          required
          v-model="name"
          placeholder="Введите имя"
        />
      </div>
      <div class="col-md-4">
        <label for="lastname" class="form-label">Фамилия</label>
        <input
          type="text"
          class="form-control"
          id="lastname"
          required
          v-model="lastname"
          placeholder="Введите Фамилию"
        />
      </div>
      <div class="col-md-4">
        <label for="validationDefaultUsername" class="form-label"
          >Имя пользователя</label
        >
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            id="validationDefaultUsername"
            aria-describedby="inputGroupPrepend2"
            required
            v-model="username"
            placeholder="Введите имя пользователя"
          />
        </div>
      </div>
      <div class="col-md-4">
        <label for="validationDefault02" class="form-label">Пароль</label>
        <input
          type="password"
          class="form-control"
          id="validationDefault02"
          required
          placeholder="Введите пароль"
          v-model="password"
        />
      </div>
      <div class="col-12">
        <button class="btn btn-primary" type="submit" @click="addUser">
          Отправить форму
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useAuthStore } from "../../stores/pinia";
import { ref } from "vue";

const store = useAuthStore();

let name = ref("");
let lastname = ref("");
let username = ref("");
let password = ref("");

const user = {
  name,
  lastname,
  username,
  password,
};

const addUser = (ev) => {
  ev.preventDefault();
  if (
    (name.value && lastname.value && username.value && password.value)
      .length !== 0
  ) {
    store.$state.users.push(user);
    store.saveToLs(store.$state.users);
  }
};
</script>

<style lang="scss">
.signUpLayout {
  height: 100%;

  .col-md-4 {
    width: 50%;
  }
}
</style>
