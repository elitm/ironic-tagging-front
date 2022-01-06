<template>
    <div class="label">
    <form class="label-form" dir="rtl">
        <div class="form-group">
             <br>
             <label class="t">עמדה אידיאולוגית:</label>
             <br>
             <label class="t">בעד\נגד המגיב הקודם</label>
            <select v-model="preComment">
                <option>בעד</option>
                <option>נגד</option>
                <option>אין התייחסות</option>
            </select>
             <label class="t"> בעד פוליטיקאי</label>
             <select multiple data-live-search="true" v-model="WithPolitition">
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
            <label>אם אחר</label>
            <input type="text" v-model="otherWithPolition" size="10px"/>
            <label class="t"> נגד פוליטיקאי</label>
             <select  multiple data-live-search="true" v-model="againstPolitition">
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
            <label>אם אחר</label>
            <input type="text" v-model="otherAgainstPolitition" size="10px"/> 
            <br>
            <label class="t"> בעד מפלגה</label>
             <select multiple data-live-search="true" class="withParty" v-model="withParty">
                <option>הימין החדש\ימינה</option>
                <option>הליכוד</option>
                <option>העבודה</option>
                <option>חוסן לישראל</option>
                <option>ישראל ביתנו</option>
                <option>יש עתיד</option>
                <option>כחול לבן</option>
                <option>מרץ</option>       
                <option class="other">אחר</option>
            </select>
            <label>אם אחר</label>
            <input type="text" v-model="otherWithParty" size="10px"/>
            <label class="t"> נגד מפלגה</label>
             <select multiple data-live-search="true" class="againstParty" v-model="againstParty">
                <option>הימין החדש\ימינה</option>
                <option>הליכוד</option>
                <option>העבודה</option>
                <option>חוסן לישראל</option>
                <option>ישראל ביתנו</option>
                <option>יש עתיד</option>
                <option>כחול לבן</option>
                <option>מרץ</option>       
                <option>אחר</option>
            </select>
            <label>אם אחר</label>
            <input type="text" v-model="otherAgainstParty" size="10px"/> 
            <label class="t">בעד מחנה\קבוצה</label> 
            <select v-model="withGroup">
                <option>הימין</option>
                <option>השמאל</option>
                <option>המרכז</option>
                <option>אחר</option>
            </select>
            <label>אם אחר</label>
            <input type="text" v-model="otherWithGroup" size="10px"/> 
            <label class="t">נגד מחנה\קבוצה</label>
            <select v-model="againstGroup">
                <option>הימין</option>
                <option>השמאל</option>
                <option>המרכז</option>
                <option>אחר</option>
            </select>
            <label>אם אחר</label>
            <input type="text" v-model="otherAgainstGroup" size="10px"/> 

            <br>
            <label class="t">חשוד כלא אותנטי (בוט, בשכר)</label>
            <div class="form-check form-check-inline">
            <input required v-model="not_authentic" type="radio" id="not_authentic" value="true">
            <label class="form-check-label" >כן</label>
            <input required v-model="not_authentic" type="radio" id="not_authentic" value="false">
            <label class="form-check-label" >לא</label>
            </div> 
            <br>
            <label class="t"> למה? </label>
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
            preComment:"",
            WithPolitition: [],
            againstPolitition:[],
            withParty:[],
            againstParty:[],
            withGroup: "",
            againstGroup: "",
            otherWithPolition:"",
            otherAgainstPolitition:"",
            otherWithParty:"",
            otherAgainstParty:"",
            otherWithGroup:"",
            otherAgainstGroup:"",
            free_text:"",
            not_authentic:"",
            why_not_authentic:""
        };
    },
    methods: {
        
    }
    
}
</script>
<style>
.t{
    font-weight: bold;
}
</style>