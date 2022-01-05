<template>
    <div class="comment" dir="rtl" v-if="this.category">

    <p class="regular" v-if="!parent_comment_id" > 
        <b-card class="comm">

        {{ date.replace('T', ' ').substring(0,16)}}
        <br>
        <a :href="commenter_url" target="_blank">{{commenter_name}}</a>:
        <h5> {{message}} </h5>
         <a :href="comment_url" target="_blank"> קישור לתגובה</a> <br>

        <b> לייקים</b>: {{likes}}
        <b> תגוביות</b>: {{num_of_replies}}

        <!-- <LabelComments></LabelComments> -->
        <button type="button" @click="add">Add Expression</button>
           <Labelcomponent
                v-for="(component, index) in Labelcomponent"
                :key="index"
                :is="component"
            />
        </b-card>
    </p>
        
        <p class="nested_comment" v-else style="margin-right:45px" > 
        <b-card class="nest">

        {{ date.replace('T', ' ').substring(0,16)}}
        <br>
        <a :href="commenter_url" target="_blank">{{commenter_name}}</a>:
        <h5> {{message}} </h5>
         <a :href="comment_url" target="_blank"> קישור לתגובה</a> <br>

        <b> לייקים</b>: {{likes}}
        <b> תגוביות</b>: {{num_of_replies}}

        <!-- <LabelComments></LabelComments> -->
          <button type="button" @click="add">Add Expression</button>
           <Labelcomponent
                v-for="(component, index) in Labelcomponent"
                :key="index"
                :is="component"
            />
        </b-card>
        
    </p>    

    </div>
</template>

<script>
import LabelComments from "./LabelComments.vue";
export default {
    components:{
        LabelComments
    },
    data(){
        return{
          Labelcomponent: [LabelComments] ,
        //   category: eval("this." + this.$route.query.category)
 
        };
    },
    methods:{
      	add () {
    	this.Labelcomponent.push(LabelComments)
        }
    },
  name: "Comment",
  props:{
        commenter_name:{
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        },
        comment_url:{
            type: String,
            required: true
        },
        date:{
            type: String,
            required: true
        },
        likes:{
            type: Number,
            required: true
        },
        commenter_url:{
            type: String,
            required: true
        },
        num_of_replies:{
            type: Number
        },
        comment_id:{
            type: String,
            required: true
        },
        post_id:{
            type: String,
            required: true

        },
        parent_comment_id:{
            type: String,
        },

        acknowledgements :{
            type: Boolean
        },
        category:{
            type: Boolean
        }
        
    },

    mounted() {
        console.log("this." + this.$route.query.category)
        this.category = eval("this." + this.$route.query.category)
        console.log(this.category)
        console.log(typeof(this.category))
},
};

</script>

<style>
.comm{
    border-radius:25px;
    background-color: rgb(171, 233, 241);
    /* width:fit-content; */
    text-align: right;
}
.nest{
    border-radius:25px;
    background-color: rgb(192, 245, 232);
    /* width:fit-content; */
    text-align: right;
}

.comment{
    background-color: deeppink;
}
</style>