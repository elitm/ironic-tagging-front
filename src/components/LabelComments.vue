<template>
    <div class="label">
    <form class="label-form">
        <div class="form-group">
            <label>נושא התגובה</label>
            <select required v-model="subject" multiple data-live-search="true">
                <option>פוליטי-ציבורי</option>
                <option>פוליטיקה פנימית</option>
                <option>יחסי חוץ</option>
                <option>ביטחון</option>
                <option>כלכלה</option>
                <option>חינוך</option>
                <option>חברה</option>
                <option>תחבורה</option>
                <option>בריאות</option>
                <option>קורונה</option>
                <option>אישי</option>
                <option>משפחה</option>
                <option>חברים</option>
                <option>תחביבים ופנאי</option>
                <option>משפט (נתניהו)</option>
            </select>  
            <label>סגנון התגובה</label>
            <select required v-model="style" multiple data-live-search="true">
                <option>ריגושיות חיובית</option>
                <option>ריגושיות שלילית-לעומתית</option>
                <option>בוז ולעג</option>
                <option>אירוניה</option>
                <option>רצינות</option>
                <option>קלילות</option>
                <option>רשמיות</option>
                <option>פמיליאריות</option>
                <option>משלב גבוה</option>
                <option>משלב יומיומי/סלנג</option>
                <option>אחר</option>
            </select> 
            <label>מסרים ריגושיים</label>
            <select required v-model="emotion" multiple data-live-search="true">
                <option>האדרה עצמית</option>
                <option>מסר חיובי לכבי תומכי הפוליטיקאי</option>
                <option>מסר חיובי לגבי העם (או חלק ממנו) והמדינה</option>
                <option>מסר חיובי לגבי מדינות אחרות או מנהיגיהן</option>
                <option>מסר שלילי לגבי פוליטיקאי/ים יריב/ים</option>
                <option>מסר שלילי לגבי המחנה היריב</option>
                <option>מסר שלילי לגבי חלק מהעם</option>
                <option>מסר שלילי לגבי מדינות אויב וגופי טרור או מנהיגיהם   </option>
                <option>בריאות</option>
                <option>קורונה</option>
                <option>אישי</option>
                <option>משפחה</option>
                <option>חברים</option>
                <option>תחביבים ופנאי</option>
                <option>משפט (נתניהו)</option>
            </select>  
        </div>
        <div class="form-group">
            <label>טקסט חופשי</label>
            <input type="text" class="form-control" id="free_text" v-model="free_text">
        </div>
        <button type="submit" class="btn btn-primary" @click="labelPost()">Submit</button>
        </form>
    </div>
</template>
<script>
export default {
      name: "LabelComments",
    data(){
        return{
            subject: "",
            style:"",
            emotion:"",
            free_text: ""

        };
    }
}
</script>
<style>

</style>