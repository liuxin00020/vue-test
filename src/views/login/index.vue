<template>
  <a-spin size="large" tip="Loading..." :spinning="loading">
    <div class="login-box">
      <img src="@/assets/login-bg.png" alt="logo图例" class="login-img" />
      <a-form-model
        class="login-form"
        layout="horizontal"
        :model="formInline"
        @submit="handleSubmit"
        @submit.native.prevent
      >
        <a-form-model-item>
          <a-input v-model="formInline.username" placeholder="Username">
            <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-model-item>
        <a-form-model-item>
          <a-input
            v-model="formInline.password"
            type="password"
            placeholder="Password"
          >
            <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-model-item>
        <a-form-model-item>
          <a-button
            type="primary"
            html-type="submit"
            :disabled="formInline.username === '' || formInline.password === ''"
          >
            登录
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </div>
  </a-spin>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      formInline: {
        username: "test",
        password: "123"
      },
      redirectUrl: null, // 登录成功之后跳转的路由
      loading: false
    };
  },
  created() {
    if (this.$route.params && this.$route.params.redirect) {
      this.redirectUrl = this.$route.params.redirect;
    }
  },
  methods: {
    ...mapActions("user", ["login"]),
    handleSubmit() {
      this.loading = true;
      this.login(this.formInline)
        .then(() => {
          this.$router.push(this.redirectUrl || "/");
          this.loading = false;
        })
        .catch(err => {
          console.error(err);
          this.loading = false;
          this.$message.error(err);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.login-box {
  width: 100%;
  height: 100vh;
  padding: 0 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, $primary, transparent);

  .login-item {
    width: 528px;
    height: 330px;
  }
  .login-img {
    @extend .login-item;
  }
  .login-form {
    padding: 10% 10% 0;
    background-color: $primaryReverse;
    box-sizing: border-box;
    @extend .login-item;
  }
}
</style>
