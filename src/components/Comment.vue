<template>
    <div dir="rtl" :class="this.category? 'categorialComment':'nonCategorialComment'">

        <b-card :class="parent_comment_id? 'nested_comment':'regular_comment'">

        {{ date.replace('T', ' ').substring(0,16)}}
        <br>
        <a :href="commenter_url" target="_blank">{{commenter_name}}</a>:
        <h5> {{message}} </h5>
         <a :href="comment_url" target="_blank"> קישור לתגובה</a> <br>

        <b> לייקים</b>: {{likes}}
        <b> תגוביות</b>: {{num_of_replies}}

        <button type="button" @click="add">Add Expression</button>
           <Labelcomponent
                v-for="(component, index) in Labelcomponent"
                :key="index"
                :is="component"
            />
        </b-card>      

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
          commentClassName: this.category
 
        };
    },
    computed:{
       category: function(){ return  eval("this." + this.$route.query.category); }
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

    },


};

</script>

<style>
.regular_comment{
    border-radius:25px;
    background-color: rgb(171, 233, 241);
    text-align: right;
    margin-top: 2%;
}
.nested_comment{
    border-radius:25px;
    background-color: rgb(192, 245, 232);
    text-align: right;
    margin-right: 45px;
    margin-top: 2%;
}

.categorialComment{
    background-color: rgb(71, 20, 255);
}

.nonCategorialComment{
    background-color: rgb(255, 255, 255);
}

</style>