<template>
  <div>
    <vue-muti-input
      placeholder="请输入员工工号"
      allowClear
      outsideClose
      useLabel
      allowDeleteLabel
      v-model="modalData"
    >
    </vue-muti-input>
  </div>
</template>
<script>
export default {
  data() {
    return {
      modalData: ['20017892qqqqq', '20018888werw', '20019874qwet', '20015656', '20015555'],
    };
  },
};
</script>
<style lang="scss" scoped>
</style>
