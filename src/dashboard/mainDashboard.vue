<template>
  <!-- Main Content -->
  <div id="content">
    <!-- Begin Page Content -->
    <div class="container-fluid">
      <!-- Page Heading -->
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
        <div class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
          <p>Main Balance: {{totBal}} units</p>
          <p>Total Balance: {{totBal}} units</p>
        </div>
      </div>

      <!-- Content Row -->
      <div class="row">
        <!-- Total balance Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-primary shadow h-100 py-2">
            <div class="card-body">
              <div class="h5 mb-0 font-weight-bold text-gray-800">{{totBal}} Units</div>
              <p>Total Balance</p>
              <router-link to="/">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div
                      class="text-xs font-weight-bold text-primary text-uppercase mb-1"
                    >Make Payment</div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>

        <!--Send message Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-success shadow h-100 py-2">
            <div class="card-body">
              <div class="h5 mb-0 font-weight-bold text-gray-800">{{totalMsg}}</div>
              <p>Sent Messages Today</p>
              <router-link to="/message/bulksms">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div
                      class="text-xs font-weight-bold text-success text-uppercase mb-1"
                    >Send Message</div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        
        <!--Send personalized message Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-success shadow h-100 py-2">
            <div class="card-body">
              <p>Personalized Message</p>
              <router-link to="/message/bulksms">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div
                      class="text-xs font-weight-bold text-success text-uppercase mb-1"
                    >Send Personalized Message</div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>

        <!--Contacts Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-success shadow h-100 py-2">
            <div class="card-body">
              <div class="h5 mb-0 font-weight-bold text-gray-800">{{contact}}</div>
              <p>Contact Groups</p>
              <router-link to="/phonebook/upload">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div
                      class="text-xs font-weight-bold text-success text-uppercase mb-1"
                    >Upload Contacts</div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>

        <!--Refer & Earn Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-success shadow h-100 py-2">
            <div class="card-body">
              <div class="h5 mb-0 font-weight-bold text-gray-800">Total Referred: {{referred}}</div>
              <div class="h5 mb-0 font-weight-bold text-gray-800">Total Earned: {{earned}} NGN</div>
              <router-link to="/">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div
                      class="text-xs font-weight-bold text-success text-uppercase mb-1"
                    >Refer &amp; Earn</div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>

      <BlockUI :message="'Loading page...'" v-if="dialog" ></BlockUI>

      </div>

    </div>
    <!-- /.container-fluid -->
  </div>
  <!-- End of Main Content -->
</template>

<script>
import axios from "axios";
//import imageIcon from '../../public/favicon';
export default {
  mounted(){
    this.totalBal();
    this.totalMessage();
  },
  data() {
    return {
      dialog: false,
      totBal: "",
      totalMsg: "",
      contact: "",
      referred: "",
      earned: "",
    
    };
  },
  methods: {
    totalBal() {
      this.dialog = true;
      let header = { Authorization: "Bearer " + this.$auth.getToken() };
      axios
          .get("https://solabsms.herokuapp.com/api/users/balance", { headers: header })
          .then(({ data }) => {
            console.log(data);  
            if (data.confirmation === 'success') {
              this.totBal = data.balance;
              this.dialog = false
            }
          })
          .catch(error => console.log(error)); 
          this.dialog = false
    },
    totalMessage(){
      this.dialog = true;
      let header = { Authorization: "Bearer " + this.$auth.getToken() };
      axios
          .get("https://solabsms.herokuapp.com/api/users/messages_today", { headers: header })
          .then(({ data }) => {
            console.log('thisMessage',data);  
            this.totalMsg = data.number_of_messages;
            this.dialog = false
          })
          .catch(error => console.log(error.message));
          this.dialog = false
    }
  },
};
</script>


<style scoped>
@import "../assets/vendor/fontawesome-free/css/all.min.css";
@import "../assets/css/sb-admin-2.min.css";
</style>