<template>
  <a-menu theme="dark" mode="inline" :default-selected-keys="['ant']">
    <a-menu-item v-for="item in menu" :key="item.key">
      <icon-font :type="item.icon" class="menu-icon"></icon-font>
      <span class="common-pl-mn">{{ item.title }}</span>
    </a-menu-item>
  </a-menu>
</template>
<script>
export default {
  data() {
    return {
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
  }
};
</script>
<style lang="scss" scoped>
.menu-icon {
  font-size: $font-size;
  vertical-align: middle;
}
</style>
