import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
});

//здесь будет более удобная логика для связи дочерних компонентов
//export const eventEmitter = new Vue()
