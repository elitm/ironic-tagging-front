<template>
    <div class="label">
    <form class="label-form" dir="rtl">
        <div class="form-group">
             <br>
        <label for="ironic">האם אירוני?</label>
                <input type="checkbox" id="ironic" v-model="is_ironic" required >

            <label> מיקום האירוניה </label>
            <select required v-model="place">
                <option>כל התגובית</option>
                <option>חלק מהתגובית</option>
                <option>לא ברור</option>
            </select> 
            <br>
            <label> אם חלק מהתגובית, איזה חלק מעיד על אירוניה?</label>
            <input type="text" id="expression" v-model="expression" size="50px">
             <label>סוג האירוניה</label>
            <select required v-model="ironyType" multiple data-live-search="true">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>


            </select>
             <label> קורבנות האירוניה</label>
             <select required v-model="ironyType" multiple data-live-search="true">
                <option>נפתלי בנט</option>
                <option>בני גנץ</option>
                <option>ניצן הורוביץ</option>
                <option>אביגדור ליברמן</option>
                <option>יאיר לפיד</option>
                <option>מרב מיכאלי</option>
                <option>בנימין נתניהו</option>
                <option>עמיר פרץ</option>       
                <option>אירוניה עצמית</option>
                <option>אחר</option>

            </select>  

            <br>
            <label>חשוד כלא אותנטי (בוט, בשכר)</label>
            <div class="form-check form-check-inline">
            <input required v-model="not_authentic" type="radio" id="not_authentic" value="true">
            <label class="form-check-label" >כן</label>
            <input required v-model="not_authentic" type="radio" id="not_authentic" value="false">
            <label class="form-check-label" >לא</label>
            </div> 

            <label> למה? </label>
            <input type="text" div class="col-xs-2" id="why_not_authentic" v-model="why_not_authentic" size="10px">
            <br>
            <label>טקסט חופשי</label>
            <textarea class="form-control" rows="1" id="free_text" v-model="free_text"/>
            <br>
        <button type="submit" class="btn btn-primary" @click="labelComment()">Submit</button>
                </div>
        </form>
    </div>
</template>
<script>
export default {
      name: "LabelComments",
    data(){
        return{
            is_ironic: "",
            place:"",
            expression:"",
            not_authentic:"",
            why_not_authentic: "",
            ironyType: [],
            free_text:""

        };
    }
}
</script>
<style>

</style>