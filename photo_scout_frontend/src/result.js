import Vue from 'vue'
import Result from './Result.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(Result)
})
