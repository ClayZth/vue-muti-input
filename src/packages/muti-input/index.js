import vueMutiInput from './muti-input.vue'

vueMutiInput.install = Vue => Vue.component(vueMutiInput.name, vueMutiInput)

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(vueMutiInput);
}

export default vueMutiInput;