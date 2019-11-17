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

</script>

<style scoped>
</style>
