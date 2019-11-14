<template>
  <div id="app">
    <router-view name="header" />
    <div class="wrapper">
      <router-view />
      <!-- set progressbar -->
      <vue-progress-bar></vue-progress-bar>
    </div>
    <router-view name="sfooter"/>
    <router-view name="footer" />
  </div>
</template>

<script>
// import MainNavbar from './components/MainNavbar.vue';
// import StarterFooter from '../layout/StarterFooter.vue';
// import MainFooter from './layout/MainFooter.vue';
export default {
  // components:{
    // 'main-navbar':MainNavbar,
    // 'starter-footer':StarterFooter,
    // 'main-footer':MainFooter,
  // }
}
</script>

<style>

</style>
