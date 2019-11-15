<template>
  <div class="page-header clear-filter" filter-color="orange">
    <div
      class="page-header-image"
      style="background-image: url('img/login.jpg')"
    ></div>
    <div class="content">
      <p class="alert alert-danger" role="alert" v-if="submitted">{{error}}</p>
      <div class="container" v-if="!submitted">
        <div class="col-md-5 ml-auto mr-auto" >
          <card type="login" plain>

            <fg-input
              class="no-border input-lg"
              addon-left-icon="now-ui-icons users_circle-08"
              placeholder="Email or Username"
              required
              v-model="login.email"
            >
            </fg-input>

            <fg-input
              class="no-border input-lg"
              addon-left-icon="now-ui-icons ui-1_lock-circle-open"
              placeholder="password"
              type="password"
              required
              v-model="login.password"
            >
            </fg-input>
            <h4><a href="/" class="style">Forgot password?</a></h4>
            <template slot="raw-content">
              <div class="card-footer text-center">
                <a 
                  class="btn btn-primary btn-round btn-lg btn-block"
                  v-on:click="post"
                  >Log in</a
                >
              </div>
              <div class="pull-left">
                <h6>
                  <a href="/signup" class="link footer-link">Create Account</a>
                </h6>
              </div>
              <div class="pull-right">
                <h6>
                  <a href="/" class="link footer-link">Need Help?</a>
                </h6>
              </div>
            </template>
          </card>
        </div>
      </div>
      <!-- <div class="success" v-if="submitted">
          <h3>You have successfully login.<br></h3>
          <h3>You may log in using details provided</h3>
      </div> -->
    </div>
    <main-footer></main-footer>
  </div>
</template>
<script>
import axios from "axios";
import { Card, Button, FormGroupInput } from '@/components';
import MainFooter from '@/layout/MainFooter';
export default {
  name: 'login-page',
  bodyClass: 'login-page',
  components: {
    Card,
    MainFooter,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
   data(){
    return{
      login:{
        email:"",
        password:""
      },
      submitted: false,
      error:""
    };
  },
  methods:{
    post:function(){
      let loginData ={
        name:this.login.email,
        password:this.login.password
      };
      
      // axios
      //   .post("https://solabsms.herokuapp.com/api/users/login", data)
      //   .then(({ data }) => {
      //     console.log(data)
      //     this.submitted=true
      //   })
      //   .catch(error=>{
      //     console.log(error)
      //   });
        this.$Progress.start();
        axios
          .post("https://solabsms.herokuapp.com/api/users/login", loginData)
          .then(({ data }) => {
            if (data.confirmation !== 'success') {
              this.$Progress.fail();
              this.submitted = true;
              this.error = data.errors.message;
            }
            if (data.confirmation === 'success') {
              this.$Progress.finish();
              this.$auth.setToken(data.jwtToken);
              this.$auth.setAuthUser(data.user.name);
              this.$router.push({ name: "dashboard" });
            }
          })
          .catch(error => console.log(error));
      }
    }
  }
</script>
<style scoped>
  /* .style{
    color:white;
  }
  .alert {
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.35rem;
}
.alert-danger {
  color: #78261f;
  background-color: #fadbd8;
  border-color: #f8ccc8;
} */
</style>
