// import Vue from 'vue'
// import App from './App.vue'
import VueResource from 'vue-resource'
// import VueRouter from 'vue-router'

Vue.use(VueResource);


import Vue from 'vue';
import App from './App.vue';
import router from './router';
import NowUiKit from './plugins/now-ui-kit';
import Auth from './config/Auth';
import $ from 'jquery';
import VueProgressBar from 'vue-progressbar'
import axios from 'axios'

// Vue.prototype.$http = axios;


//styles
// import './assets/vendor/fontawesome-free/css/all.min.css'
// import './assets/css/sb-admin-2.css';

const options = {
  color: '#green',
  failedColor: '#red',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}

Vue.use(NowUiKit);
Vue.use(axios);
Vue.use(Auth);
Vue.use(VueProgressBar, options);

window.$ = window.jQuery = $;
Vue.config.productionTip = false;
new Vue({
  router,
  mode: 'history',
  render: h => h(App),
  router:router
}).$mount('#app');