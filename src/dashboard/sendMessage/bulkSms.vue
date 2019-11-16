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
        <div class="col-xl-4 col-md-6 mb-4">
            <form>
                <h2>Compose SMS Panel</h2>
                
                <div>
                    <p>Sender ID</p>
                    <input type="text" required value="SolabSMS" >
                    <p>Make a purchase to unlock feature</p>
                    <p>Recipients</p>
                    <p><span>Type Recipients</span></p>
                    <textarea placeholder="Separate Numbers by Comma, space o put each number on a line. Duplicate will be removed automatically" id="text" cols="40" rows="5"></textarea>
                    <p><span>Type Message</span></p>
                    <textarea id="text" cols="40" rows="5"></textarea>
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
  data() {
    return {
      message: {
          groupName:"",
          contacts:"",
          customMessage:""
      },
      submitted: false,
      error:""
    };
  },
  methods:{
    post:function(){
      let phonebookData ={
        name:this.phonebook.name,
        password:this.phonebook.contact
      };
      
        this.$Progress.start();
        let header = { Authorization: "Bearer " + this.$auth.getToken() };
        axios
          .post("https://solabsms.herokuapp.com/api/users/new_group", phonebookData)
          .then(({ data }) => {
            if (data.confirmation !== 'success, a new contacts group was created') {
              this.$Progress.fail();
              this.submitted = true;
              this.error = data.errors.message;
            }
            if (data.confirmation === 'success, a new contacts group was created') {
              this.$Progress.finish();
              this.$router.push({ name: "index" });
            }
          })
          .catch(error => console.log(error));
        }
    }
  }
</script>


<style scoped>
</style>