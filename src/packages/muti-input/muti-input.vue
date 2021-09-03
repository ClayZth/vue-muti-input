<template>
  <div class="z-container" id="vueMutiInput">
    <div class="input-container">
      <div class="z-input" @click="onInputFocus">
        <div v-if="showPlaceholder" class="placeholder">{{ placeholder }}</div>
        <div class="displayValue">{{ displayValue }}</div>
      </div>
      <div class="close-icon" v-if="allowClear" @click="onReset"></div>
    </div>
    <div class="textarea-container" v-if="isShow">
      <textarea
        name="zTextarea"
        autofocus
        class="z-textarea"
        placeholder="请用回车进行分隔"
        v-model="inputValue"
      ></textarea>
      <div class="z-buttons">
        <button class="z-sureBtn" @click="onSure">确认</button>
        <button class="z-resetBtn" @click="onReset">重置</button>
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
    allowClear: {
      type: Boolean,
      default: false,
    },
    outsideClose: {
      type: Boolean,
      default: false,
    },
    value: {
      type: Array,
      default: () => [],
    },
  },
  model: {
    prop: "value",
    event: "change",
  },
  data() {
    return {
      isShow: false,
      displayValue: "",
      inputValue: "",
    };
  },
  computed: {
    showPlaceholder() {
      return !this.displayValue;
    },
  },
  created() {
    if (this.value && this.value.length) {
      this.displayValue = this.value.join(",");
      this.inputValue = this.value.join("\n");
    }
  },
  mounted() {
    document.addEventListener("click", (e) => {
      let box = document.getElementById("vueMutiInput");
      if (!box.contains(e.target) && this.isShow && this.outsideClose) {
        this.isShow = false;
      }
    });
  },
  methods: {
    onInputFocus() {
      this.isShow = !this.isShow;
    },
    onSure() {
      if (this.inputValue && this.inputValue.indexOf("\n" > -1)) {
        this.displayValue = this.inputValue.replace(/\n/g, ",");
      } else {
        this.displayValue = "";
      }
      this.isShow = false;
    },
    onReset() {
      this.displayValue = "";
      this.inputValue = "";
      this.$emit("change", []);
    },
  },
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
$blue: #3d9cff;
$gray: #ced6e0;
$black: rgba(0, 0, 0, 0.65);
$white: #fff;
%btn {
  width: 40px;
  height: 25px;
  line-height: 25px;
  box-sizing: border-box;
  border: 1px solid #ced6e0;
  border-radius: 4px;
  user-select: none;
  font-size: 12px;
  &:hover {
    cursor: pointer;
    border-color: #3d9cff;
  }
}
.z-container {
  width: 300px;
  .input-container {
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
    .z-input {
      width: 100%;
      height: 35px;
      line-height: 26px;
      cursor: text;
      padding: 4px 11px;
      box-sizing: border-box;
      font-size: 14px;
      border: 1px solid $gray;
      border-radius: 5px;
      transition: all 0.35s ease-in-out;
      .placeholder {
        color: #999;
      }
      .displayValue {
        color: #333;
      }
    }
    .close-icon {
      width: 16px;
      height: 16px;
      position: absolute;
      right: 8px;
      border: 1px solid $gray;
      border-radius: 50%;
      &::before,
      &::after {
        position: absolute;
        left: 7px;
        top: 3px;
        content: "";
        background-color: $gray;
        height: 10px;
        width: 2px;
      }
      &::before {
        transform: rotate(45deg);
      }
      &::after {
        transform: rotate(-45deg);
      }
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
    transition: all 0.35s ease-in-out;
    .z-textarea {
      width: 100%;
      height: 150px;
      padding: 4px 11px;
      box-sizing: border-box;
      resize: none;
      outline: 0;
      border: 1px solid $gray;
      border-radius: 5px;
      &:focus {
        border-color: $blue;
      }
    }
    .z-buttons {
      position: absolute;
      bottom: 4px;
      right: 8px;
      .z-sureBtn {
        @extend %btn;
        background-color: $blue;
        color: $white;
      }
      .z-resetBtn {
        @extend %btn;
        background-color: $white;
        color: $black;
        &:hover {
          color: $blue;
        }
      }
    }
  }
}
</style>
