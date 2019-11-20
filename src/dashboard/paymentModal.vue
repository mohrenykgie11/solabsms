<template>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Confirm Redirect to Pay Online</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            Click Okay to redirect to Online Payment
        </div>
        <div class="modal-footer">
            <!-- <button type="button" class="btn btn-secondary" @click="payWithPaystack" >OK</button> -->
            <paystack
                :amount="amount"
                :email="email"
                :paystackkey="paystackkey"
                :reference="reference"
                :callback="callback"
                :close="close"
                :embed="false"
                >
                <i class="fas fa-money-bill-alt"></i>
                Make Payment
            </paystack>
            <button type="button" class="btn btn-primary" data-dismiss="modal">Cancel</button>

        </div>
        </div>
    </div>
    </div>
</template>
<script>
import paystack from 'vue-paystack';
export default {
    components: {
        paystack
    },
    data(){
        return{
          paystackkey: "pk_test_a7975faa62b70c508ce999d8edef3e3aadd69274", //paystack public key
          email: "morenikejiolatunbosun66@gmail.com", // Customer email
          amount: 100000 //1000naira(in kobo)
        }
    },
    computed: {
      reference(){
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for( let i=0; i < 10; i++ )
          text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
      }
    },
    methods: {
      callback: function(response){
        console.log(response)
      },
      close: function(){
          console.log("Payment closed")
      }
    }
}    
</script>

<style scoped>
    .modal-content{
        position: center;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
        display: table-cell;
        vertical-align: middle;
        width: 350px;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }
</style>