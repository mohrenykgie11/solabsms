// import VueResource from 'vue-resource'
// Vue.use(VueResource);


import Vue from 'vue';
import App from './App.vue';
import router from './router';
import NowUiKit from './plugins/now-ui-kit';
import './plugins/vuetify';
import Auth from './config/Auth';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css'
import $ from 'jquery';
import ToggleButton from 'vue-js-toggle-button'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import VueProgressBar from 'vue-progressbar'
import axios from 'axios'

// Vue.prototype.$http = axios;


//styles
// import './assets/vendor/fontawesome-free/css/all.min.css'
// import './assets/css/sb-admin-2.css';

//js
import '@/assets/vendor/jquery/jquery.js'   //bootstrap core js
import '@/assets/vendor/bootstrap/js/bootstrap.min.js'

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
Vue.use(BootstrapVue);
Vue.use(VueSidebarMenu);
Vue.use(ToggleButton);

router.beforeEach(
  (to, from, next) => {
    if (to.matched.some(record => record.meta.forVisitors)) {
      if (Vue.auth.isAuthenticated()) {
        next({
          path: '/dashboard'
        })
      } else next()
    } else if (to.matched.some(record => record.meta.forAuth)) {
      if (!Vue.auth.isAuthenticated()) {
        next({
          path: '/'
        })
      } else next()
    } else next()
  }
)

window.$ = window.jQuery = $;
Vue.config.productionTip = false;
new Vue({
  router,
  mode: 'history',
  render: h => h(App),
  // router: router
}).$mount('#app');