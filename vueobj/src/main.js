import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



Vue.config.productionTip = false;

import axios from './plugins/axios';
Vue.use(axios)

import loading from './components/loading';
Vue.use(loading)
// Vue.prototype.$http = axios;
import './assets/css/index.css';
import './assets/css/frameui.css'
import './assets/css/widget/slider.css'; 
import './assets/css/index.css'; 
import './assets/js/jquery.min'
window.$=$;
// import './assets/js/amazeui'
// import './assets/js/amazeui.min'
// import './assets/js/amazeui.widgets.helper'

new Vue({
  data:{
    bFoot:true,
    bLoading:false
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')


