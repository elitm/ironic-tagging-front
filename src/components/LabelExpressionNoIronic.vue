<template>
    <div>
      <form>
        <label> המבע  הלא האירוני </label>
        <input required type="text" div class="col-xs-2" id="ironicmarkers" v-model="non_ironic_expression" size="20px">
        <br>
         <button type="button" class="btn btn-primary" @click="NonIronicExpressions()">Submit</button>
         <br>
      </form>
    </div>
</template>
<script>
export default {
   name:"LabedExpressionNoIronic",
   props: {
       comment_id:{
            type: String,
            required: true
      }},
   data(){

       return{
          non_ironic_expression:""
       };
   },
   methods: {
       async NonIronicExpressions(){
           try {
               console.log("label nonironic expression");
               this.axios.defaults.withCredentials = true;
                await this.axios.post(
                    // "https://localhost:443/expressions/labelExpressions",
                    this.$root.store.beginning_url.concat("expressions/NonIronicExpressions"),
                    {
                    username: this.$root.store.username,
                    category: this.$route.query.category,
                    comment_id: this.comment_id,
                    non_ironic_expression: this.non_ironic_expression
                    }
                );
                // this.$bvToast.toast("Label Nonironic Expression", "Nonironic expression labeled successfully", "success");
                console.log("Label Nonironic Expression", "Nonironic expression labeled successfully", "success");
                this.$root.toast("Label Nonironic Expression", "Nonironic expression labeled successfully", "success");
                return false
            }
            catch (error) {
                console.log(error);
                this.$root.toast("Label Nonironic Expression", error.response.data, "warning");
      }  
    }
   },
   
}
</script>
<style>

</style>