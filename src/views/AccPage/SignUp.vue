<template>
  <div class="signUpLayout">
    <form class="p-4 d-flex flex-column gap-5">
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
          <span class="input-group-text" id="inputGroupPrepend2">@</span>
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
        />
      </div>
      <div class="col-md-6">
        <label for="validationDefault03" class="form-label">Город</label>
        <input
          type="text"
          class="form-control"
          id="validationDefault03"
          required
        />
      </div>

      <div class="col-12">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="invalidCheck2"
            required
          />
          <label class="form-check-label" for="invalidCheck2">
            Примите условия и соглашения
          </label>
        </div>
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
import { useStore } from "../../vuex/pinia";
import { ref } from "vue";

const store = useStore();

let name = ref("");
let lastname = ref("");
let username = ref("");

const user = {
  name,
  lastname,
  username,
};

const addUser = () => {
  if ((name.value && lastname.value && username.value).length !== 0) {
    store.$state.users.push(user);
    store.saveToLs(user);
  }
};
</script>

<style lang="scss">
.signUpLayout {
  width: 100vw;
  height: 100%;
  background-color: rgba(80, 78, 78, 0.514);
}
</style>
