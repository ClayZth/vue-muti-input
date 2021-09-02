<template>
  <div>
    <vue-muti-input
      placeholder="请输入员工工号"
      allowClear
      outsideClose
      v-model="modalData"
    >
    </vue-muti-input>
  </div>
</template>
<script>
export default {
  data() {
    return {
      modalData: [1, 2, 3, 4, 5],
    };
  },
};
</script>
<style lang="scss" scoped>
</style>
