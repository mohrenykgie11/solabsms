<template>
  <div
    class="section section-signup"
    style="background-image: url('img/bg5.jpg'); background-size: cover; background-position: top center; min-height: 700px;"
    >
    <div class="container">
      <div class="row" v-if="!submitted">
        <card class="card-signup" header-classes="text-center" color="orange">
          <template slot="header">
            <h3 class="card-title title-up">Sign Up</h3>
            <div class="social-line">
              <a
                href="#"
                class="btn btn-neutral btn-facebook btn-icon btn-round"
              >
                <i class="fab fa-facebook-square"></i>
              </a>
              <a
                href="#"
                class="btn btn-neutral btn-twitter btn-icon btn-lg btn-round"
              >
                <i class="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                class="btn btn-neutral btn-google btn-icon btn-round"
              >
                <i class="fab fa-google-plus"></i>
              </a>
            </div>
          </template>
          <template >
            <fg-input
              class="no-border"
              placeholder="Name"
              v-model="signup.name"
              addon-left-icon="now-ui-icons users_circle-08"
              
            >
            </fg-input>

            <fg-input
              class="no-border"
              placeholder="Username"
              v-model="signup.username"
              addon-left-icon="now-ui-icons users_single-02"
              
            >
            </fg-input>

            <fg-input
              class="no-border"
              type="email"
              placeholder="Email"
              v-model="signup.email"
              addon-left-icon="now-ui-icons ui-1_email-85"
              
            >
            </fg-input>

            <fg-input
              class="no-border"
              type="password"
              placeholder="Password"
              v-model="signup.password"
              addon-left-icon="now-ui-icons ui-1_lock-circle-open"
              
            >
            </fg-input>

            <fg-input
              class="no-border"
              type="number"
              placeholder="Phone Number"
              v-model="signup.number"
              addon-left-icon="now-ui-icons tech_mobile"
              
            >
            </fg-input>

            <fg-input
              class="no-border"
              type="text"
              value="Nigeria" selected
              v-model="signup.country"
              addon-left-icon="now-ui-icons location_pin"
              
            >
            </fg-input>
          </template>
          <div class="card-footer text-center">
            <n-button type="neutral" round size="lg" v-on:click="post">Sign up</n-button>
            <br>By signing up, you agree to our terms of services and our Privacy Policy.
          </div>
        </card>
      </div>
      <div class="success" v-if="submitted">
        <h3>You have successfully registered.<br></h3>
        <h3>You may log in using details provided</h3>
      </div>
      <div class="col text-center">
        <router-link
          to="/login"
          class="btn btn-simple btn-round btn-white btn-lg"
        >
          Log in
        </router-link>
      </div>
      <p class="text">Already have an account?</p>
    </div>
    <!-- <div class="test" v-for="response in responses"  v-bind:key="response">
      <p>{{response.name}}</p>
    </div> -->
  </div>
</template>
<script>
import axios from "axios";
import { Card, FormGroupInput, Button } from '@/components';

export default {
  components: {
    Card,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data(){
    return{
      signup:{
        name:"",
        username:"",
        email:"",
        number:"",
        password:"",
        country:"Nigeria"
      },
      submitted: false
      // responses:[] 
    };
  },
  methods:{
    post:function(){
      let data ={
        name:this.signup.name,
        username:this.signup.username,
        email:this.signup.email,
        phone_number:this.signup.number,
        password:this.signup.password,
        country:this.signup.country
      };
        axios
          .post("https://solabsms.herokuapp.com/api/users/signup", data)
          .then(({ data }) => {
            // This portion wokrs fine
            if(data.confirmation === 'success, new user created'){
              this.submitted = true;
              setTimeout(() => {
                this.$router.push({ name: "login" });
              } ,1500)
            }

          })
          .catch(error => console.log('my error',error));      
    }
  },
  // created(){
    // this.$http.get('https://solabsms.herokuapp.com/users/signup').then(function(data)){
    //   console.log(data);
    //   this.responses = data.body.slice(0,10);
    // }
    // this.post();
  // }
};
</script>
<style scoped>
.text{
  color:orange;
  text-align: center;
}
.success{
  text-align: center;
  color: black;
}
</style>