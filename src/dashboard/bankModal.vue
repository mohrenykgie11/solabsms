<template>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Submit order</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    Click OK to inform us of your Payment
                    <textarea type="text" placeholder="Enter your payment details here"></textarea>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary">OK</button> 
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Cancel</button>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
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