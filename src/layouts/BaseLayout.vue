<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <MenuSide></MenuSide>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="header-box">
        <a-icon
          class="font-white hover"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
        <a-popconfirm
          title="确定退出登录吗?"
          ok-text="确定"
          cancel-text="取消"
          @confirm="logoutHandel"
          class="header-exit font-white hover"
        >
          <icon-font type="icontuichu2" class="font16" />退出
        </a-popconfirm>
      </a-layout-header>
      <a-layout-content>
        <router-view />
      </a-layout-content>
      <a-layout-footer>
        Vue frame test @2020 created by xin.liu
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import MenuSide from "../components/MenuSide";
import { mapActions } from "vuex";
export default {
  components: {
    MenuSide
  },
  data() {
    return {
      collapsed: false
    };
  },
  methods: {
    ...mapActions("user", ["logout"]),
    logoutHandel() {
      this.logout().then(() => {
        this.$router.push("/");
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.logo {
  background: url("../assets/logo.png") no-repeat center;
  background-size: 100% 100%;
  width: 100%;
  height: 60px;
}
.header-exit {
  cursor: pointer;
  @include flexBox(row, space-between, center);
  width: 50px;
}
.header-box {
  @include flexBox(row, space-between, center);
  padding: 0 $common-pb;
}
</style>
