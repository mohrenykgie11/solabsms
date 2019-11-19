import Vue from 'vue';
import Router from 'vue-router';
import Index from './pages/Index.vue';
import Landing from './pages/Landing.vue';
import Login from './pages/Login.vue';
import Signup from './pages/Signup.vue';
import Profile from './pages/Profile.vue';
import MainNavbar from './layout/MainNavbar.vue';
import StarterFooter from './layout/StarterFooter.vue';
import MainFooter from './layout/MainFooter.vue';
import createPhonebook from './dashboard/Phonebook/createPhonebook.vue';
import bulkSms from './dashboard/sendMessage/bulkSms.vue';
import mainDashboard from './dashboard/mainDashboard.vue';
import Sidebar from './dashboard/Sidebar.vue';
import makePayment from './dashboard/makePayment.vue';
Vue.use(Router);

export default new Router({
  mode: 'history',
  hashbang: false,
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'index',
      components: { default: Index, header: MainNavbar, sfooter: StarterFooter, footer: MainFooter },
      // meta: { forVisitors: true },
      props: {
        header: { colorOnScroll: 400 },
        // sfooter: { backgroundColor: 'black' },
        footer: { backgroundColor: 'black' }
      }
    },
    // {
    //   path: '/dashboard',
    //   name: 'dashboard',
    //   components: { default: Sidebar, footer: MainFooter },
    //   meta: { forAuth: true },
    //   props: {
    //     footer: { backgroundColor: 'orange' }
    //   }
    // },
    {
      path: '/dashboard',
      component: Sidebar, footer: MainFooter,
      props: {
        footer: { backgroundColor: 'orange' }
      },
      children: [
        {
          path: '/',
          name: 'dashboard',
          component: mainDashboard,
          meta: {
            forAuth: true
          },
        },
        {
          path: '/message',
          name: 'message',
          component: bulkSms,
          meta: {
            forAuth: true
          },
        },
        {
          path: '/contact',
          name: 'contact',
          component:createPhonebook,
          meta: {
            forAuth: true
          },
        },
        {
          path: '/payment',
          name: 'payment',
          component:makePayment,
          meta: {
            forAuth: true
          },
        },
      ]

    },
    {
      path: '/landing',
      name: 'landing',
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/login',
      name: 'login',
      components: { default: Login, header: MainNavbar },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: '/signup',
      name: 'signup',
      components: { default: Signup, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/profile',
      name: 'profile',
      components: { default: Profile, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
