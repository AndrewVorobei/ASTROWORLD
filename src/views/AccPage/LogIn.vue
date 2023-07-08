<template>
  <div class="">
    <div class="alert alert-info">
      Username: test<br />
      Password: test
    </div>
    <Form
      @submit="onSubmit"
      :validation-schema="schema"
      v-slot="{ errors, isSubmitting }"
    >
      <div class="form-group">
        <label class="text-light py-3">Username</label>
        <Field
          name="username"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors.username }"
        />
        <div class="invalid-feedback">{{ errors.username }}</div>
      </div>
      <div class="form-group">
        <label class="text-light py-3">Password</label>
        <Field
          name="password"
          type="password"
          class="form-control"
          :class="{ 'is-invalid': errors.password }"
        />
        <div class="invalid-feedback">{{ errors.password }}</div>
      </div>
      <div class="form-group pt-3 d-flex justify-content-center">
        <button class="btn btn-light" :disabled="isSubmitting">
          <span
            v-show="isSubmitting"
            class="spinner-border spinner-border-sm mr-1"
          ></span>
          ВОЙТИ
        </button>
      </div>
      <div v-if="errors.apiError" class="alert alert-danger mt-3 mb-0">
        {{ errors.apiError }}
      </div>

      <!-- <div class="createAcc d-flex justify-content-between">
        <span class="text-light">Зарегестрируйтесь</span>
        <router-link :to="{ name: 'signup' }">
          <button class="btn btn-light">Создать</button>
        </router-link>
      </div> -->
    </Form>
  </div>
</template>

<script setup>
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import { useAuthStore } from "../../stores/pinia";

const schema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

function onSubmit(values, { setErrors }) {
  const authStore = useAuthStore();
  const { username, password } = values;

  return authStore
    .login(username, password)
    .catch((error) => setErrors({ apiError: error }));
}
</script>

<style lang="scss">
.createAcc {
  align-items: center;
  padding: 1rem 0;
}
</style>
