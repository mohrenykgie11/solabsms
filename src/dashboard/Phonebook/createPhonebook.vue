<template>
  <!-- Main Content -->
  <div id="content">
    <!-- Begin Page Content -->
    <div class="container-fluid">
      <!-- Page Heading -->
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard / Create Contact Group</h1>
      </div>

      <!-- Content Row -->
      <div class="row">
        <!-- Form Card Example -->
        <div class="col-xl-4 col-md-6 mb-4">
        </div>
        <div class="col-xl-3 col-md-6 mb-4" v-if="!submitted">
            <form>
                <div>Create phonebook</div>
                <div class="nav-item">
                    <p> Simple Phonebook </p><router-link class="link" to="#">
                        Upload Contacts (Excel).
                    </router-link>
                    
                </div>
                <div>
                    <p>Phonebook Name</p>
                    <input type="text" required v-model="phonebook.groupName" >
                    <p>Contacts</p>
                    <textarea placeholder="Separate Numbers by Comma" id="text" cols="40" rows="5" required v-model="phonebook.contacts"></textarea>
                    <p>Custom</p>
                    <input v-model="phonebook.customMessage"><br>
                    <button type="submit" v-on:click="post">Submit</button>
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
      phonebook: {
          groupName:"",
          contacts:[],
          customMessage:""
      },
      submitted: false,
      error:""
    };
  },
  methods:{
    post:function(e){
      e.preventDefault();
  
      let phonebookData ={
        groupName:this.phonebook.groupName,
        contacts:this.phonebook.contacts.split(","),
        customMessage:this.phonebook.customMessage
      };
      let header = {
                    headers:{
                      'Content-Type': 'application/json',
                      Authorization: "Bearer " + this.$auth.getToken() 
                    },
                  };
      this.$Progress.start();
        axios.post("https://solabsms.herokuapp.com/api/users/new_group", phonebookData, header )
          .then(data => {
            console.log(data);
            if (data.data.status !== 1) {
              this.$Progress.fail();
              this.submitted = true;
              this.error = data.errors.message;
            }
           else if (data.data.status === 1) {
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