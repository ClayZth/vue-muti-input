<template>
  <div class="z-container" id="vueMutiInput">
    <div class="input-container">
      <div class="z-input" @click="onInputFocus" v-if="!useLabel">
        <div v-if="showPlaceholder" class="placeholder">{{ placeholder }}</div>
        <div class="input-display-value" :title="displayValue">
          {{ displayValue }}
        </div>
      </div>
      <div class="z-label-input" v-else @click="onInputFocus">
        <div class="z-label-content" v-if="displayValue.length">
          <div
            v-for="(item, index) in displayValue"
            :key="index"
            class="z-label"
          >
            {{ item }}
          </div>
        </div>
        <div v-if="showPlaceholder" class="placeholder">{{ placeholder }}</div>
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
    useLabel: {
      type: Boolean,
      default: false,
    },
    needBlank: {
      type: Boolean,
      default: false,
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
      if (this.useLabel) {
        return this.displayValue.length == 0;
      } else {
        return !this.displayValue;
      }
    },
  },
  created() {
    if (this.value && this.value.length) {
      if (!this.useLabel) {
        this.displayValue = this.value.join(",");
      } else {
        this.displayValue = this.value;
      }
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
      if (!this.needBlank) {
        this.inputValue = this.inputValue.trim();
      }
      if (this.inputValue && this.inputValue.indexOf("\n" > -1)) {
        if (this.useLabel) {
          if (this.needBlank) {
            this.displayValue = this.inputValue.split("\n");
          } else {
            let list = this.inputValue.split("\n");
            for (let i = 0; i < list.length; i++) {
              if (list[i] == "") {
                list.splice(i, 1);
                i -= 1;
              }
            }
            this.displayValue = list;
          }
        } else {
          this.displayValue = this.inputValue.replace(/\n/g, ",");
        }
      } else {
        this.displayValue = "";
      }
      this.isShow = false;
    },
    onReset() {
      if (this.useLabel) {
        this.displayValue = [];
      } else {
        this.displayValue = "";
      }
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
::-webkit-scrollbar {
  width: 8px;
  background-color: #ced6e0;
}
::-webkit-scrollbar-thumb {
  background-color: #999;
  border-radius: 8px;
}
::-webkit-scrollbar-track {
  border-radius: 10px;
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
%input {
  width: 100%;
  line-height: 26px;
  cursor: text;
  padding: 4px 11px;
  box-sizing: border-box;
  font-size: 14px;
  border: 1px solid $gray;
  border-radius: 5px;
  transition: all 0.35s ease-in-out;
}
.z-container {
  width: 320px;
  .input-container {
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
    .placeholder {
      color: #999;
    }
    .z-input {
      height: 35px;
      @extend %input;
      .input-display-value {
        color: #333;
        width: 90%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .z-label-input {
      display: flex;
      align-content: center;
      height: 100%;
      @extend %input;
      .z-label-content {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        width: 92%;
        .z-label {
          height: auto;
          line-height: 20px;
          padding: 0 7px;
          border: 1px solid #d9d9d9;
          box-sizing: border-box;
          margin: 0 8px 4px 0;
          background-color: #fafafa;
          border-radius: 4px;
        }
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
      font-family: Microsoft YaHei;
      &:focus {
        border-color: $blue;
      }
    }
    .z-buttons {
      position: absolute;
      bottom: 4px;
      right: 10px;
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
