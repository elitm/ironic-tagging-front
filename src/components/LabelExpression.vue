<template>
    <div>
        <label> מרקרים של אירוניה </label>
        <input type="text" div class="col-xs-2" id="ironicmarkers" v-model="ironic_markers" size="20px">
        <br>
        <label> אותות לאירוניה</label>
        <select  multiple data-live-search="true" v-model="ironic_signals">
                <option>הפרת תנאי הכנות</option>
                <option>הפרת כלל האיכות</option>
                <option>הפרת כלל הכמות</option>
                <option>הפרת כלל האופן</option>
                <option>הפרת כלל הרלוונטיות</option>
                <option>הדהוד</option>
                <option>העמדת פנים</option>
        </select> 
        <label>אירוניה שלילית\חיובית</label> 
        <select v-model="positiv_negativ">
            <option>מבע חיובי לביקורת</option>
            <option>מבע שלילי לצורך עמדה חיובית</option>
        </select>        
        <label> קורבנות האירוניה</label>
        <select multiple data-live-search="true" v-model="ironic_victims">
                <option>נפתלי בנט</option>
                <option>בני גנץ</option>
                <option>ניצן הורוביץ</option>
                <option>אביגדור ליברמן</option>
                <option>יאיר לפיד</option>
                <option>מרב מיכאלי</option>
                <option>בנימין נתניהו</option>
                <option>עמיר פרץ</option>       

                <option>הימין החדש\ימינה</option>
                <option>הליכוד</option>
                <option>העבודה</option>
                <option>חוסן לישראל</option>
                <option>ישראל ביתנו</option>
                <option>יש עתיד</option>
                <option>כחול לבן</option>
                <option>מרץ</option>       

                <option>הימין</option>
                <option>השמאל</option>
                <option>המרכז</option>

            <option> אירוניה עצמית</option>
        </select>
        <br>
         <button type="button" class="btn btn-primary" @click="labelExpression()">Submit</button>
    </div>
</template>
<script>
export default {
   name:"LabelExpression",
   props: {
       comment_id:{
            type: String,
            required: true
      }},
   data(){

       return{
          ironic_markers: "", 
          ironic_signals:[],
          positiv_negativ:"",
          ironic_victims: []
       }
   },
   methods: {
       async labelExpression(){
        try {
       console.log("label exp");
       console.log(this.positiv_negativ);

        this.axios.defaults.withCredentials = true;

        await this.axios.post(
          "http://localhost:3000/expressions/labelExpressions",
          {
            category: this.$route.query.category,
            comment_id: this.comment_id,
            ironic_markers: this.ironic_markers,
            ironic_signals: this.ironic_signals,
            positiv_negativ: this.positiv_negativ,
            ironic_victims: this.ironic_victims
   
          }
        );
     this.$root.toast("Label Expression", "Expression labeled successfully", "success");
      } 
      catch (error) {
        console.log(error);
        // this.$root.toast("", error.response.data, "warning");
      }  
        }
   },
   
}
</script>
<style>

</style>