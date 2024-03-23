<template>
    <h2>登入頁面</h2>
    <div class="container">
        <div class="row justify-content-center">
          <h1 class="h3 mb-3 font-weight-normal">
            請先登入
          </h1>
          <div class="col-8">
            <form id="form" class="form-signin" v-on:submit.prevent="login">
              <div class="form-floating mb-3">
                <input type="email" v-model="userInfo.username" class="form-control" id="username"
                  placeholder="name@example.com" required autofocus>
                <label for="username">Email address</label>
              </div>
              <div class="form-floating">
                <input type="password" v-model="userInfo.password"
                class="form-control" id="password"
                  placeholder="Password" required>
                <label for="password">Password</label>
              </div>
              <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
                登入
              </button>
            </form>
          </div>
        </div>
        <p class="mt-5 mb-3 text-muted">
          &copy; 2021~∞ - 六角學院
        </p>
      </div>
</template>

<script>
import axios from 'axios';

const { VITE_API_URL } = import.meta.env;
export default {
  data() {
    return {
      userInfo: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      const api = `${VITE_API_URL}/admin/signin`;
      axios.post(api, this.userInfo)
        .then((res) => {
          const { token, expired } = res.data;
          document.cookie = `myToken=${token};expires=${new Date(expired)};path=/`;
          this.$router.push('/admin/products');
        })
        .catch((err) => {
          alert(err.data.message);
        });
    },
  },
};
</script>
