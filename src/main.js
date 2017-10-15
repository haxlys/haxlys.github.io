import Vue from 'vue'
import App from './App.vue'

import '../node_modules/prismjs/themes/prism-coy.css';

Vue.prototype.$eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
