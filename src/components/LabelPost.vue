<template>
    <div class="label" dir="rtl">
    <form class="label-form">
        <div class="form-group">
            <label>נושא הפוסט</label>
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
            <label>סגנון הפוסט</label>
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
                <option>מסר חיובי לגבי תומכי הפוליטיקאי</option>
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
            <textarea class="form-control" rows="3" id="free_text" v-model="free_text"/>
        </div>
        <button type="button" class="btn btn-primary"  @click="labelPost()">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
  name: "LabelPost",
    data(){
        return{
            subject: [],
            style:[],
            emotion:[],
            free_text: "",

        };
    }, 
    methods:{
    async labelPost(){
     try {
       console.log("label post");
        this.axios.defaults.withCredentials = true;
        await this.axios.post(
          // "https://localhost:443/posts/labelPost",
          this.$root.store.beginning_url.concat(`posts/labelPost`),
          {
            username: this.$root.store.username,
            postId: this.$route.params.id,
            subject: this.subject,
            style: this.style,
            emotion: this.emotion,
            freeText: this.free_text
          }
        );
     this.$root.toast("Label Post", "Post labeled successfully", "success");
      } 
      catch (error) {
        console.log(error);
        this.$root.toast("Label Post", "Post was not labeled", "warning");
      }
  }
  },

};
</script>

<style>
.form-control { width: 50%; }
</style>