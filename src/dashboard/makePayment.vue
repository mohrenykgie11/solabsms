<template>
  <!-- Main Content -->
  <div id="content">
    <!-- Begin Page Content -->
    <div class="container-fluid">
      <!-- Page Heading -->
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard / Make Purchase</h1>
      </div>

      <!-- Content Row -->
      <div class="row">
        <!-- Form Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
        </div>

        <div id="body" class="col-xl-6 col-md-6 mb-4" v-if="!submitted">
                <!-- <form class="form-inline"> v-show="selected"-->
                    <h4 class="order">Make an order</h4>
                    <div class="row">
                        <div class="form-group name1 col-md-6">
                            <label>Amount in Naira</label>
                            <input type="number" placeholder="0.00" step=".01" v-model="amount" required>
                        </div>
                        <div class="form-group name1 col-md-6" >
                            <label>Select Payment Method</label>
                            <select v-model="method">
                                <option disabled value=""> Select Payment Method</option>
                                <option value="bank">Bank Payment</option>
                                <option value="online">Online Payment</option>
                            </select>
                        </div>  
                    </div>
                    <div class="row">
                        <div class="col-xl-4 col-md-6 mb-4"  v-if="method === 'bank'">
                           <label class="bank">Select Bank</label> 
                           <select v-model="merchant" required>
                               <option disabled value="">Select Bank</option>
                                <option value="gtb" >Gurantee Trust Bank (GTB)</option>
                                <option value="uba">United Bank for Africa (UBA)</option>
                                <option value="first" >First Bank</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group name1 col-md-6" v-if="(amount && method)">
                            <label>Charges</label>
                            <input type="number" v-model="charges" readonly >
                        </div>
                        <div class="form-group name1 col-md-6" v-if="(amount && method)">
                            <label>Net Amount</label>
                            <input type="number" placeholder="0.00" v-bind:value="net" readonly >
                        </div> 
                    </div>
                    <div class="row">
                        <div class="form-group name1 col-md-6" v-if="(amount && method)">
                            <label>Unit Cost</label>
                            <input type="number" v-model="unit_cost" readonly >
                        </div>
                        <div class="form-group name1 col-md-6" v-if="(amount && method)">
                            <label>Unit to Purchase</label>
                            <input type="number" placeholder="300" v-bind:value="unit" readonly>
                        </div> 
                    </div>
                    <div class="row" v-if="(merchant)">
                        <p>Please Proceed to your Mobile Banking/USSD/Internet Banking App to complete your Bank Transfer Payment with {{net}} to Solab Technologies 9098717600 (Guarantee Trust Bank (GTB)) .Click Confirm Payment only When you have completed payment</p>
                    </div>
                    <button type="submit" class="button" v-if="!method">Proceed to Pay</button>
                    <button type="submit" class="button" v-if="method==='bank'">Confirm Payment</button>
                    <button type="submit" class="button" v-if="method==='online'">Proceed to Pay</button>
                <!-- </form> -->
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
        dialog: false,
        amount:"",
        netAmount:"",
        method:"",
        purchase:"",
        charges:0,
        unit_cost:"2.0000",
        submitted: false,
        error:""
        };
    },
    computed:{
        unit (){
            return(this.amount /2)   
        },
        net(){
            return this.amount
        }
    },
    methods:{
        display(val){
            let element = this.method;
            if(val== "bank")
                element= 'Confirm Payment';
            else
                element= 'Proceed to Pay';    
        }
    }
    
  }
</script>


<style scoped> 
    .order{
        border-style: ridge;
        background-color:orangered;
        color: azure;
    }
    #body {
        font-family: Arial, Helvetica, sans-serif;
        box-sizing: border-box;
        border-style: inset;
    } 
    /* #body {
        font-family: Arial, Helvetica, sans-serif;
        box-sizing: border-box;
        border-style: inset;
    }

    .form-inline {  
        display: flex;
        flex-flow: row wrap;
        align-items: center;
    }

    .form-inline label {
        margin: 5px 10px 5px 0;
    }

    .form-inline input {
        vertical-align: middle;
        margin: 5px 10px 5px 0;
        padding: 10px;
        background-color: #fff;
        border: 1px solid #ddd;
    }

    .form-inline select {
        vertical-align: middle;
        margin: 5px 10px 5px 0;
        padding: 10px;
        background-color: #fff;
        border: 1px solid #ddd;
    }

    .form-inline button {
        padding: 10px 20px;
        background-color: dodgerblue;
        border: 1px solid #ddd;
        color: white;
        cursor: pointer;
        align-self: auto;
    }

    .form-inline button:hover {
        background-color: royalblue;
    } */
    /* .row button{
        text-align: center;
        margin-top: 150px;
    }
    .bank{
        float: left;
    } */

    
    /* @media (max-width: 800px) {
        .form-inline input {
            margin: 10px 0;
        }
        
        .form-inline {
            flex-direction: column;
            align-items: stretch;
        }
    } */
</style>