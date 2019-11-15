<template>
  <div>
    <!-- Page wrapper -->
    <div id="wrapper">
      <!-- Sidebar -->
      <ul
        class="navbar-nav sidebar sidebar-dark accordion"
        id="accordionSidebar"
       >
        <!-- Sidebar - Brand -->
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="/dashboard">
          <div class="sidebar-brand-icon ">
            <img src="../assets/img/solablogo.png" width="40" height="40" />
          </div>
          <div class="sidebar-brand-text mx-3">
            SolabSms
          </div>
        </a>

        <!-- Divider -->
        <hr class="sidebar-divider my-0">

        <!-- Nav Item - Dashboard -->
        <li class="nav-item active">
          <router-link tag="a" class="nav-link" to="/dashboard">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </router-link>
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider">

        
         <!-- Divider -->
        <hr class="sidebar-divider">

         <!-- Nav Item - Media Collapse Menu -->
        <li class="nav-item">
          <a
            class="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#campaignTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i class="fas fa-fw fa-cog"></i>
            <span>Send Message</span>
          </a>
          <div
            id="campaignTwo"
            class="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <h6 class="collapse-header">Message options:</h6>
              <router-link tag="a" class="collapse-item" to="/">
                <a>Send Bulk SMS</a>
              </router-link>
              <router-link tag="a" class="collapse-item" to="/">
                <a>Send SMS to Demography</a>
              </router-link>
              <router-link tag="a" class="collapse-item" to="/">
                <a>Send Personalized SMS</a>
              </router-link>
              <router-link tag="a" class="collapse-item" to="/">
                <a>Send AutoSMS</a>
              </router-link>
            </div>
          </div>
          
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider">

        <li class="nav-item">
          <a
            class="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#campaignTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i class="fas fa-fw fa-cog"></i>
            <span>Numbers</span>
          </a>
          <div
            id="campaignTwo"
            class="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <router-link tag="a" class="collapse-item" to="/">
                <a>HLR LOOKUP</a>
              </router-link>
              <router-link tag="a" class="collapse-item" to="/">
                <a>Buy Contacts</a>
              </router-link>
              <router-link tag="a" class="collapse-item" to="/">
                <a>My Numbers</a>
              </router-link>
            </div>
          </div>
          
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider">

        <!-- Nav Item - Single link without dropdown -->
        <li class="nav-item">
         
          <router-link tag="a" class="nav-link" to="/">
           <i class="fas fa-fw fa-user"></i>
                <span>Make Payment</span>
              </router-link>
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider d-none d-md-block">

        <li class="nav-item">
          <a
            class="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#campaignTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i class="fas fa-fw fa-cog"></i>
            <span>Phonebook</span>
          </a>
          <div
            id="campaignTwo"
            class="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <router-link tag="a" class="collapse-item" to="/">
                <a>create Phonebook</a>
              </router-link>
              <router-link tag="a" class="collapse-item" to="/">
                <a>Manage Phonebook</a>
              </router-link>
              <router-link tag="a" class="collapse-item" to="/">
                <a>Buy Contacts</a>
              </router-link>
            </div>
          </div>
          
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider d-none d-md-block">

        <li class="nav-item">
          <a
            class="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#campaignTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i class="fas fa-fw fa-cog"></i>
            <span>Logs</span>
          </a>
          <div
            id="campaignTwo"
            class="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <router-link tag="a" class="collapse-item" to="/">
                <a>Message Logs</a>
              </router-link>
              <router-link tag="a" class="collapse-item" to="/">
                <a>Transaction Logs</a>
              </router-link>
              <router-link tag="a" class="collapse-item" to="/">
                <a>HLR LOOKUP Logs</a>
              </router-link>
            </div>
          </div>
          
        </li>
      

        <!-- Divider -->
        <hr class="sidebar-divider d-none d-md-block">

        <!-- Nav Item - Single link without dropdown -->
        <li class="nav-item">
         
          <router-link tag="a" class="nav-link" to="/">
           <i class="fas fa-fw fa-user"></i>
                <span>Contact us</span>
              </router-link>
        </li>

            
        <!-- Sidebar Toggler (Sidebar) -->
        <div class="text-center d-none d-md-inline">
          <button class="rounded-circle border-0" id="sidebarToggle"></button>
        </div>
      </ul>
      <!-- End of Sidebar -->


      <!-- Content Wrapper -->
      <div id="content-wrapper" class="d-flex flex-column">
        <!-- Main Content -->
        <div id="content">
          <!-- Topbar -->
          <nav
            class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"
            >
            <!-- Sidebar Toggle (Topbar) -->
            <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
              <i class="fa fa-bars"></i>
            </button>
            
            <!-- Topbar Navbar -->
            <ul class="navbar-nav ml-auto">
              
              <!-- Nav Item - Alerts -->
              <li class="nav-item dropdown no-arrow mx-1">
                
                <!-- Dropdown - Alerts -->
                <div
                  class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="alertsDropdown"
                >
                  
                </div>
              </li>

              <!-- Nav Item - Messages -->
              <li class="nav-item dropdown no-arrow mx-1">
                
                <!-- Dropdown - Messages -->
                <div
                  class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="messagesDropdown"
                >
                  
                </div>
              </li>

              <div class="topbar-divider d-none d-sm-block"></div>

              <!-- Nav Item - User Information -->
              <li class="nav-item dropdown no-arrow">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="userDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span class="mr-2 d-none d-lg-inline text-gray-600 small">{{ user}}</span>
                  <!-- <img
                    class="img-profile rounded-circle"
                    v-bind:src="image"
                  > -->
                </a>
                <!-- Dropdown - User Information -->
                <div
                  class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="userDropdown"
                >
                  <a class="dropdown-item" href="#">
                    <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                    Profile
                  </a>
                 
                  <div class="dropdown-divider"></div>

                  <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                    <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </nav>
          <!-- End of Topbar -->

          <!-- <router-view>
            <mainDashboard/>
          </router-view> -->
          <main-dashboard></main-dashboard>

            <!-- set progressbar -->
        <vue-progress-bar></vue-progress-bar>

        </div>
        <!--End of Main Content -->

      </div>
      <!-- End of Content Wrapper -->
    </div>
    <!--End of Page wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#">
      <i class="fas fa-angle-up"></i>
    </a>

    <!-- Logout Modal
    <div
      class="modal fade"
      id="logoutModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div
            class="modal-body"
          >Select "Logout" below if you are ready to end your current session.</div>
          <div class="modal-footer">
            <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
            <a class="btn btn-primary" style="color:white;" @click="logout">Logout</a>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
import axios from "axios";
import mainDashboard from '@/dashboard/mainDashboard';
import { Card, FormGroupInput, Button } from '@/components';

export default {
  name: "dashboard",
  components: {
    mainDashboard
  },
  data() {
    return {
      
      user:"",
      image:"",
      dialog: false
    };
  }, 
  watch: {
      dialog (val) {
        if (!val) return

        setTimeout(() => (this.dialog = false), 4000)
      }
    },
  mounted() {
    this.$nextTick(() => {
      // Toggle the side navigation
      $("#sidebarToggle, #sidebarToggleTop").on("click", function(e) {
        $("body").toggleClass("sidebar-toggled");
        $(".sidebar").toggleClass("toggled");
        if ($(".sidebar").hasClass("toggled")) {
          $(".sidebar .collapse").collapse("hide");
        }
      });

      // Close any open menu accordions when window is resized below 768px
      $(window).resize(function() {
        if ($(window).width() < 768) {
          $(".sidebar .collapse").collapse("hide");
        }
      });

      // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
      $("body.fixed-nav .sidebar").on(
        "mousewheel DOMMouseScroll wheel",
        function(e) {
          if ($(window).width() > 768) {
            var e0 = e.originalEvent,
              delta = e0.wheelDelta || -e0.detail;
            this.scrollTop += (delta < 0 ? 1 : -1) * 30;
            e.preventDefault();
          }
        }
      );

      // Scroll to top button appear
      $(document).on("scroll", function() {
        var scrollDistance = $(this).scrollTop();
        if (scrollDistance > 100) {
          $(".scroll-to-top").fadeIn();
        } else {
          $(".scroll-to-top").fadeOut();
        }
      });

      // Smooth scrolling using jQuery easing
      $(document).on("click", "a.scroll-to-top", function(e) {
        var $anchor = $(this);
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: $($anchor.attr("href")).offset().top
            },
            1000,
            "easeInOutExpo"
          );
        e.preventDefault();
      });
    });
  },
  methods: {
    logout() {
      try {
        let header = { Authorization: "Bearer " + this.$auth.getToken() };
        axios
          .post("https://solabsms.herokuapp.com/api/users/logout", { headers: header })
          .then(res => {
            this.$auth.destroyToken();
            this.$auth.destroyUser();
            this.$router.go("/");
          });
      } catch (error) {
        console.log(error);
      }
    }
  },
  created() {
    this.isAuth = this.$auth.isAuthenticated();
    this.user = this.$auth.getAuthUser();
    this.image = this.$auth.getAuthUserPic()
    console.log(this.user)
  }
};
</script>
<style lang="scss"  scoped>
  .navbar-nav{
    background-color: rgb(238, 78, 20)
  };
  @import "../assets/vendor/fontawesome-free/css/all.min.css";
  @import "../assets/css/sb-admin-2.min.css";
</style>  
 