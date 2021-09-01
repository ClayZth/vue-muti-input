import Vue from 'vue'
import App from './App.vue'
import VueMutiInput from './index.js'

Vue.use(VueMutiInput)

new Vue({
    el: '#app',
    render: h => h(App)
})