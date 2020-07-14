<template>
  <div>
    <a-date-picker placeholder="请输入日期" v-model="dateValue"></a-date-picker>
    <span>选择的日期：{{ dateValue }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dateValue: null
    };
  }
};
</script>

<style></style>
