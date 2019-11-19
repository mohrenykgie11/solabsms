<template>
  <!-- Main Content -->
  <div id="content">
    <!-- Begin Page Content -->
    <div class="container-fluid">
      <!-- Page Heading -->
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard / Send Sms</h1>
        <div class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
          <p>Main Balance: {{totBal}} units</p>
          <p>Total Balance: {{totBal}} units</p>
        </div>
      </div>

      <!-- Content Row -->
      <div class="row">
        <!-- Form Card Example -->
        <div class="col-xl-4 col-md-6 mb-4">
        </div>
        <div class="col-xl-4 col-md-6 mb-4" v-if="!submitted">
            <form>
                <h2>Compose SMS Panel</h2>
                
                <div>
                    <p>Sender ID</p>
                    <input type="text" required value="SolabSMS" readonly v-model="message.senderID" >
                    <p>Sender Name</p>
                    <input type="text" required v-model="message.senderName" >
                    <p>Make a purchase to unlock feature</p>
                    <p>Recipients</p>
                    <p><span>Type Recipients</span></p>
                    <textarea placeholder="Separate Numbers by Comma, space o put each number on a line. Duplicate will be removed automatically" id="text" cols="40" rows="5" v-model="message.recipients"></textarea>
                    <p><span>Type Message</span></p>
                    <textarea id="text" cols="40" rows="5" v-model="message.messageBody"></textarea>
                    <button type="submit" v-on:click="post">Send Message</button>
                </div>
            </form>
        </div>

      </div>

    </div>
    <!-- /.container-fluid -->
  </div>
  <!-- End of Main Content -->
</template>

 <script>
  import axios from "axios";
  export default {
    mounted(){
    this.totalBal();
  },
  data() {
    return {
      dialog: false,
      totBal: "",
      message: {
          messageBody:"",
          recipients:[],
          senderName:"",
          senderID:"SolabSMS"
      },
      submitted: false,
      error:""
    };
  },
  methods:{
    totalBal() {
      this.dialog = true;
      let header = { 
         headers:{
                      'Content-Type': 'application/json',
                      Authorization: "Bearer " + this.$auth.getToken() 
                    },
        };
      axios
          .get("https://solabsms.herokuapp.com/api/users/balance", header )
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
    post:function(e){
      e.preventDefault();
      let msgData ={
        messageBody:this.message.messageBody,
        recipients:this.message.recipients.split(","),
        senderName:this.message.senderName,
        senderID:this.message.senderID
      };
      
        this.$Progress.start();
        let header = {
            headers:{
                      'Content-Type': 'application/json',
                      Authorization: "Bearer " + this.$auth.getToken() 
                    },
            };
        axios
          .post("https://solabsms.herokuapp.com/api/users/send_message", msgData, header)
          .then(({ data }) => {
            if (data.status !== 1) {
              this.$Progress.fail();
              this.submitted = true;
              this.error = data.errors.message;
            }
            else {
              this.$Progress.finish();
              this.$router.push({ name: "dashboard" });
            }
          })
          .catch(error => console.log(error));
        }
    }
  }
</script>


<style scoped>
</style>