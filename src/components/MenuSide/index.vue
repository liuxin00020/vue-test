<template>
  <a-menu
    theme="dark"
    mode="inline"
    :selectedKeys="[$route.name]"
    @select="changeMenu"
  >
    <a-menu-item v-for="item in menu" :key="item.key">
      <icon-font :type="item.icon" class="anticon"></icon-font>
      <span>{{ item.title }}</span>
    </a-menu-item>
  </a-menu>
</template>
<script>
export default {
  data() {
    return {
      // currentKey:
      menu: [
        {
          title: "ant",
          key: "ant",
          icon: "iconantdesign1"
        },
        {
          title: "echarts",
          key: "echarts",
          icon: "iconicon-"
        }
      ]
    };
  },
  methods: {
    changeMenu(e) {
      // 当前路由是选中的路由，则不跳转
      if (this.$route.name === e.key) {
        return;
      }
      this.$router.push({ name: e.key });
    }
  }
};
</script>
<style lang="scss" scoped></style>
