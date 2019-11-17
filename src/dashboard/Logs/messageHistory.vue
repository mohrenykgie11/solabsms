<template>
  <!-- Main Content -->
  <div id="content">
    <!-- Begin Page Content -->
    <div class="container-fluid">
      <!-- Page Heading -->
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard / Message History</h1>
      </div>

      <!-- Content Row -->
      <div class="row">
        <!-- Form Card Example -->
        <div class="col-xl-4 col-md-6 mb-4">
        </div>
        <div class="col-xl-3 col-md-6 mb-4">
            <table>
                <tr>
                    <th>Sender ID</th>
                    <th>Message</th>
                    <th>Sms Page</th>
                    <th>Action</th>
                    <th>Recipient Count</th>
                    <th>Cost</th>
                    <th>Status</th>
                    <th>Time</th>
                </tr>
                <tr>
                    <td></td>
                </tr>
            </table>
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
      phonebook: {
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