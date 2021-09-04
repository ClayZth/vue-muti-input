# vue-muti-input
A vue compontent to input multiple

## 简介

一款基于Vue的多项填写输入框

## 安装

```npm
npm install zthclay-muti-input --save
```

## 使用

1.在main.js中引入

```vue
import Vue from 'vue'
import VueMutiInput from './index.js'
Vue.use(VueMutiInput)
```

2.在组件中直接引用

```vue
<vue-muti-input
    placeholder="请输入员工工号"
    allowClear
    outsideClose
    useLabel
    allowClearLabel
    v-model="modalData"
    >
</vue-muti-input>
```

## 属性

|       Name       |  Type   | Default  |            Description             |
| :--------------: | :-----: | :------: | :--------------------------------: |
|   placeholder    | String  | "请输入" |         输入框默认展示内容         |
|    allowClear    | Boolean |  false   |     是否在展示框内显示清空图标     |
|   outsideClose   | Boolean |  false   |     是否允许点击外部关闭填写框     |
|  value/v-model   |  Array  |    []    |             输入框内容             |
|     useLabel     | Boolean |  false   |          是否使用标签展示          |
|    needBlank     | Boolean |  false   |   配合useLabel使用，是否需要空白   |
| allowDeleteLabel | Boolean |  false   | 配合useLabel使用，是否允许删除标签 |

