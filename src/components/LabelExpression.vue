<template>
    <div>
      <form>
        <label> המבע האירוני </label>
        <input required type="text" div class="col-xs-2" id="ironicmarkers" v-model="ironic_expression" size="20px">
        <br>
        <label> מרקרים של אירוניה </label>
        <input required type="text" div class="col-xs-2" id="ironicmarkers" v-model="ironic_markers" size="20px">
        <br>
        <label> אותות לאירוניה</label>
        <select required multiple data-live-search="true" v-model="ironic_signals">
                <option>הפרת תנאי הכנות</option>
                <option>הפרת כלל האיכות</option>
                <option>הפרת כלל הכמות</option>
                <option>הפרת כלל האופן</option>
                <option>הפרת כלל הרלוונטיות</option>
                <option>הדהוד</option>
                <option>העמדת פנים</option>
        </select>
          <label>אם אחר</label>
            <input type="text" v-model="other_signals" size="10px"/> 
        <label>אירוניה שלילית\חיובית</label> 
        <select required v-model="positiv_negativ">
            <option>מבע חיובי לביקורת</option>
            <option>מבע שלילי לצורך עמדה חיובית</option>
        </select>        
        <label> קורבנות האירוניה</label>
        <select required multiple data-live-search="true" v-model="ironic_victims">
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
          <label>אם אחר</label>
            <input type="text" v-model="other_victims" size="10px"/>
        <br>
         <button type="button" class="btn btn-primary" @click="labelExpression()">Submit</button>
         <br>
      </form>
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
          ironic_expression:"",
          ironic_markers: "", 
          ironic_signals:[],
          other_signals:"",
          positiv_negativ:"",
          ironic_victims: [],
          other_victims:""
       };
   },
   methods: {
       async labelExpression(){
      try {
       console.log("label exp");
       console.log(this.positiv_negativ);
       console.log(this.ironic_markers);
       console.log(this.ironic_signals.length)

        this.axios.defaults.withCredentials = true;
        this.ironic_signals.push(this.other_signals);
        this.ironic_victims.push(this.other_victims);
        // if (this.ironic_markers && this.ironic_signals.length &&  this.positiv_negativ){
        await this.axios.post(
            // "https://localhost:443/expressions/labelExpressions",
        this.$root.store.beginning_url.concat("expressions/labelExpressions"),
            {
              username: this.$root.store.username,
              category: this.$route.query.category,
              comment_id: this.comment_id,
              ironic_expression: this.ironic_expression,
              ironic_markers: this.ironic_markers,
              ironic_signals: this.ironic_signals,
              positiv_negativ: this.positiv_negativ,
              ironic_victims: this.ironic_victims
            }
          );
        this.$root.toast("Label Expression", "Expression labeled successfully", "success");
        return false
        }
      // else{
      //      this.$root.toast("Label failed","Please fill all the fields.","error");
      //   }
      // } 
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