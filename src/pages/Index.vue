<template>
  <div class="root-div">
    <div class="page-header clear-filter" filter-color="orange">
      <parallax
        class="page-header-image"
        style="background-image:url('img/background2.jpg')"
      >
      </parallax>
      <div class="container">
        <div class="content-center brand">
          <br><br><br>
          <h1 class="h1-seo">Send your messages with a smart and robust sms application!</h1>
          <h3 class="text-font" >SOLABSMS is a platform designed to help you simplify and automate your SMS needs. The system is optimized to help achieve your SINGLE & BULK SMS targets.</h3>
          <br>
          <br>
            <div class="text-center ">
              <router-link 
              to="/signup"
              class="btn btn-primary btn-lg btn-round"
              role="button"
              >
                Try Free
              </router-link> 
            </div>  
        </div>  
      </div>
    </div>
    <div class="main">
      <div class="section section-images">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="hero-images-container">
                <img src="../assets/img/background8.jpg" alt="" />
              </div>
              <div class="hero-images-container-1">
                <img src="../assets/img/smsroute2.png" alt="" />
              </div>
              <div class="hero-images-container-2">
                <img src="../assets/img/smsroute4.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <basic-elements></basic-elements>
    <navigation></navigation> -->
    <tabs-section></tabs-section>
    <!-- <progress-pagination></progress-pagination>
    <notifications></notifications>
    <typography></typography>
    <javascript-components></javascript-components>
    <carousel-section></carousel-section>
    <nucleo-icons-section></nucleo-icons-section>
    <signup-form></signup-form>
    <examples-section></examples-section>
    <download-section></download-section> -->
  </div>
</template>
<script>
import { Parallax } from '@/components';
import BasicElements from './components/BasicElementsSection';
import Navigation from './components/Navigation';
import TabsSection from './components/Tabs';
import ProgressPagination from './components/ProgressPagination';
import Notifications from './components/Notifications';
import Typography from './components/Typography';
import JavascriptComponents from './components/JavascriptComponents';
import CarouselSection from './components/CarouselSection';
import NucleoIconsSection from './components/NucleoIconsSection';
import SignupForm from './components/SignupForm';
import ExamplesSection from './components/ExamplesSection';
import DownloadSection from './components/DownloadSection';

export default {
  name: 'App',
  bodyClass: 'index-page',
  components: {
    Parallax,
    BasicElements,
    Navigation,
    TabsSection,
    ProgressPagination,
    Notifications,
    Typography,
    JavascriptComponents,
    CarouselSection,
    NucleoIconsSection,
    SignupForm,
    ExamplesSection,
    DownloadSection
  }
};
</script>
<style scoped >
  .text-font{
    font-family: 'Times New Roman', Times, serif;
  }
</style>
