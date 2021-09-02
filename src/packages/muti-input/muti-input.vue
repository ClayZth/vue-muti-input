<template>
  <div class="z-container">
    <div class="input-container">
      <input
        type="text"
        :placeholder="placeholder"
        readonly
        class="z-input"
        @focus="onInputFocus"
      />
      <img src="../../assets/close.svg" class="close-icon" />
    </div>
    <div class="textarea-container" v-if="isShow">
      <textarea name="zTextarea" autofocus class="z-textarea"></textarea>
      <div class="z-buttons">
        <button>确认</button>
        <button>重置</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "vueMutiInput",
  props: {
    placeholder: {
      type: String,
      default: "请输入",
    },
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    onInputFocus() {
      this.isShow = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.z-container {
  width: 300px;
  .input-container {
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
    .z-input {
      width: 100%;
      height: 30px;
      padding: 2px 6px;
      box-sizing: border-box;
      outline: 0;
      border: 1px solid #ced6e0;
      border-radius: 5px;
      transition: all 0.35s ease-in-out;
    }
    .close-icon {
      position: absolute;
      right: 8px;
      &:hover {
        transform: scale(1.2);
        cursor: pointer;
      }
    }
  }
  .textarea-container {
    position: relative;
    width: 100%;
    height: 150px;
    box-sizing: border-box;
    .z-textarea {
      width: 100%;
      height: 150px;
      box-sizing: border-box;
      resize: none;
      outline: 0;
      border: 1px solid #ced6e0;
      border-radius: 5px;
      &:hover,
      &:focus {
        border-color: #3d9cff;
      }
    }
    .z-buttons {
      position: absolute;
      bottom: 4px;
      right: 8px;
    }
  }
}
</style>
