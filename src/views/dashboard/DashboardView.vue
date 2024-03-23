<template>
    <h2>這是後台</h2>
    <nav>
        <RouterLink to="/admin/products">管理員產品列表</RouterLink> ｜
        <RouterLink to="/admin/order">管理員訂單列表</RouterLink> ｜
        <RouterLink to="/">回前台首頁</RouterLink>
    </nav>
    <RouterView></RouterView>
</template>

<script>
import axios from 'axios';

const { VITE_API_URL } = import.meta.env;
export default {
  methods: {
    checkLogin() {
      const url = `${VITE_API_URL}/api/user/check`;
      axios.post(url)
        .then((res) => {
          console.log(res.data.success);
          console.log(res);
        })
        .catch(() => {
          this.$router.push('/login');
        });
    },
  },
  mounted() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    axios.defaults.headers.common.Authorization = token;
    this.checkLogin();
  },
};
</script>
