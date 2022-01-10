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
        <select v-modle="positiv_negativ">
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
                <option>אחר</option> 

                <option>הימין החדש\ימינה</option>
                <option>הליכוד</option>
                <option>העבודה</option>
                <option>חוסן לישראל</option>
                <option>ישראל ביתנו</option>
                <option>יש עתיד</option>
                <option>כחול לבן</option>
                <option>מרץ</option>       
                <option>אחר</option>

                <option>הימין</option>
                <option>השמאל</option>
                <option>המרכז</option>

            <option> אירוניה עצמית</option>
        </select>
        <br>
         <button type="submit" class="btn btn-primary" @click="labelExpression()">Submit</button>
    </div>
</template>
<script>
export default {
   name:"LabelExpression",
   data(){
       return{
          ironic_markers: "", 
          ironic_signals:[],
          positiv_negativ:"",
          ironic_victims: []
       }
   } 
}
</script>
<style>

</style>