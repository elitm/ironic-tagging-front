<template>
    <div class="label">
    <form class="label-form" dir="rtl">
        <div class="form-group">
            <label class="t">האם זוהי תגובה שמכילה מבע בקטגוריית {{this.$route.query.category}} ?</label>
            <div class="form-check form-check-inline">
                <input required v-model="positive_identification" type="radio" id="positive_identification" value="true">
                <label class="form-check-label" >כן</label>
                <input required v-model="positive_identification" type="radio" id="positive_identification" value="false">
                <label class="form-check-label" >לא</label>
            </div> 
            <br>
            <button type="button" class="btn btn-primary" @click="unidentifyComment()">Submit</button>
        </div>
    </form>
    <form class="label-form" dir="rtl">
        <div class="form-group">
             <br>
             <label class="t">עמדה אידיאולוגית:</label>
             <br>
             <label class="t">בעד\נגד המגיב הקודם</label>
            <select v-model="pre_comment">
                <option>בעד</option>
                <option>נגד</option>
                <option>אין התייחסות</option>
            </select>
             <label class="t"> בעד פוליטיקאי</label>
             <select multiple data-live-search="true" v-model="with_politition">
                <option>נפתלי בנט</option>
                <option>בני גנץ</option>
                <option>ניצן הורוביץ</option>
                <option>אביגדור ליברמן</option>
                <option>יאיר לפיד</option>
                <option>מרב מיכאלי</option>
                <option>בנימין נתניהו</option>
                <option>עמיר פרץ</option>       
                <option>אירוניה עצמית</option>
            </select>
            <label>אם אחר</label>
            <input type="text" v-model="other_with_polition" size="10px"/>
            <label class="t"> נגד פוליטיקאי</label>
             <select  multiple data-live-search="true" v-model="against_politition">
                <option>נפתלי בנט</option>
                <option>בני גנץ</option>
                <option>ניצן הורוביץ</option>
                <option>אביגדור ליברמן</option>
                <option>יאיר לפיד</option>
                <option>מרב מיכאלי</option>
                <option>בנימין נתניהו</option>
                <option>עמיר פרץ</option>       
                <option>אירוניה עצמית</option>
            </select>
            <label>אם אחר</label>
            <input type="text" v-model="other_against_politition" size="10px"/> 
            <br>
            <label class="t"> בעד מפלגה</label>
             <select multiple data-live-search="true" class="withParty" v-model="with_party">
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
            <input type="text" v-model="other_with_party" size="10px"/>
            <label class="t"> נגד מפלגה</label>
             <select multiple data-live-search="true" class="againstParty" v-model="against_party">
                <option>הימין החדש\ימינה</option>
                <option>הליכוד</option>
                <option>העבודה</option>
                <option>חוסן לישראל</option>
                <option>ישראל ביתנו</option>
                <option>יש עתיד</option>
                <option>כחול לבן</option>
                <option>מרץ</option>       
            </select>
            <label>אם אחר</label>
            <input type="text" v-model="other_against_party" size="10px"/> 
            <label class="t">בעד מחנה\קבוצה</label> 
            <select multiple data-live-search="true" class="p" v-model="with_group">
                <option>הימין</option>
                <option>השמאל</option>
                <option>המרכז</option>
            </select>
            <label>אם אחר</label>
            <input type="text" v-model="other_with_group" size="10px"/> 
            <label class="t">נגד מחנה\קבוצה</label>
            <select multiple data-live-search="true" class="p" v-model="against_group">
                <option>הימין</option>
                <option>השמאל</option>
                <option>המרכז</option>
            </select>
            <label>אם אחר</label>
            <input type="text" v-model="other_against_group" size="10px"/>
            <br>
            <label>טקסט חופשי</label>
            <textarea class="form-control" rows="1" id="free_text" v-model="free_text"/>
            <br>
            <label class="t">חשוד כלא אותנטי (בוט, בשכר)</label>
            <div class="form-check form-check-inline" >
                <input  class="form-check-input"  v-model="not_authentic" type="radio" id="not_authentic" value="true">
                <label class="form-check-label" >כן</label>
                <input  class="form-check-input"  v-model="not_authentic" type="radio" id="not_authentic" value="false" checked>
                <label class="form-check-label" >לא</label>
            </div> 

            <br>
            <label class="t"> למה? </label>
            <input type="text" div class="col-xs-2" id="why_not_authentic" v-model="why_not_authentic" size="10px">
            <br>
        <button type="button" class="btn btn-primary" @click="labelComment()">Submit</button>
                </div>
        </form>
    </div>
</template>
<script>
export default {
      name: "LabelComments",
      props: {
        comment_id:{
            type: String,
            required: true
        },
        comment_index_in_webpage: {
            type: Number,
            required: true
        }
      },
    data(){
        return{
            pre_comment:"",
            with_politition:[],
            against_politition:[],
            with_party:[],
            against_party:[],
            with_group:[],
            against_group:[],
            other_with_polition:"",
            other_against_politition:"",
            other_with_party:"",
            other_against_party:"",
            other_with_group:"",
            other_against_group:"",
            not_authentic:false, // default value
            why_not_authentic:"",
            free_text:"",
            positive_identification:""
        };
    },
    methods: {
        async labelComment(){
            try {
                console.log("label comment");
                console.log(this.comment_id);
                console.log(this.with_politition);
                console.log(this.other_with_polition);
                console.log(this.comment_index_in_webpage + 1);
                this.axios.defaults.withCredentials = true;
                this.with_politition.push(this.other_with_polition);
                this.against_politition.push(this.other_against_politition);
                this.with_party.push(this.other_with_party);
                this.against_party.push(this.other_against_party);
                this.with_politition.filter(n => n)
                this.with_group.push(this.other_with_group);
                this.against_group.push(this.other_against_group);
                await this.axios.post(
                    //   "https://localhost:443/comments/labelcomments",
                    this.$root.store.beginning_url.concat("comments/labelcomments"),
                    {
                        username: this.$root.store.username,
                        commentId: this.comment_id,
                        pre_comment: this.pre_comment,
                        with_politition: this.with_politition,
                        against_politition: this.against_politition,
                        with_party: this.with_party,
                        against_party: this.against_party,
                        with_group: this.with_group,
                        against_group: this.against_group,
                        not_authentic: this.not_authentic,
                        why_not_authentic: this.why_not_authentic,
                        free_text: this.free_text,
                        index_in_webpage: this.comment_index_in_webpage + 1
                    }
                );
                this.$root.toast("Label Comment", "Comment labeled successfully", "success");
            } 
            catch (error) {
                console.log(error);
                // this.$root.toast("", error.response.data, "warning");
            }  
        },
        async unidentifyComment(){
            try {
                console.log("unidentify comment");
                console.log(this.comment_index_in_webpage + 1);
                await this.axios.post(
                    this.$root.store.beginning_url.concat("comments/unidentifycomment"),
                    {
                        username: this.$root.store.username,
                        commentId: this.comment_id,
                        category: this.$route.query.category,
                        positive_identification: this.positive_identification,
                        index_in_webpage: this.comment_index_in_webpage + 1
                    }
                );
                this.$root.toast("Label Comment", "Comment was updated with category", "success");
            } 
            catch (error) {
                console.log(error);
            }  
        }
    }
    
}
</script>
<style>
.t{
    font-weight: bold;
}
</style>