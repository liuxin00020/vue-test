<template>
  <div>
    <a-input placeholder="输入菜谱" v-model="menu"></a-input>
    <a-button type="primary" @click="showCooking">查看菜谱</a-button>
    <div v-for="(item, index) in cookList" :key="'cook_' + index">
      <h2>{{ item.title }}</h2>
      <p>{{ item.burden }}</p>
      <p>{{ item.imtro }}</p>
    </div>
  </div>
</template>

<script>
import { getCooking } from "../api/test";
export default {
  data() {
    return {
      menu: "", // 菜单
      cookList: []
    };
  },
  methods: {
    // 获取菜谱
    showCooking() {
      getCooking(this.menu).then(data => {
        this.cookList = data.result.data;
      });
    }
  }
};
</script>

<style></style>
