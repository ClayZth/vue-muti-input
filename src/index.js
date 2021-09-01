import vueMutiInput from './packages/muti-input/index.js';

const install = function(Vue, opts = {}) {
    Vue.component(vueMutiInput.name, vueMutiInput);
}

//支持使用标签的方式引入
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    vueMutiInput
}