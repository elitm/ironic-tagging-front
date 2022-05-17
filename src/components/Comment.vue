<template>
    <div dir="rtl" :class="parent_comment_id? 'nested_comment':'regular_comment'">

        <b-card :class="this.category? 'categorialComment':'nonCategorialComment'">
        <b> #{{comment_index_in_webpage + 1}} </b>
        <br>
        {{ date.replace('T', ' ').substring(0,16)}}
        <br>
        <a :href="commenter_url" target="_blank">{{commenter_name}}</a>:
        <h5> {{message}} </h5>
         <a :href="comment_url" target="_blank"> קישור לתגובה</a> <br>

        <b> לייקים</b>: {{likes}}
        <b> תגוביות</b>: {{num_of_replies}}
        <br>
        <center>
            <h3>תיוג תגובה</h3>
        </center>

        <LabelComments :comment_id = "comment_id" :comment_index_in_webpage = "comment_index_in_webpage"></LabelComments>
       
        <center>
            <h3>תיוג מבע אירוני</h3>
        </center>
        <br>
        <button type="button" @click="add">Add Ironic Expression</button>
        <br>
           <Labelcomponent :comment_id = "comment_id"
                v-for="(component, index) in Labelcomponent" 
                :key="index"
                :is="component"
            />
        <br>
        <center>
            <h3>תיוג מבע לא אירוני</h3>
        </center>
        <br>
        <button type="button" @click="add_no_ironic">Add Non Ironic Expression</button>
        <br>
           <LabedcomponentNoIronic :comment_id = "comment_id"
                v-for="(component, index) in LabedcomponentNoIronic" 
                :key="index"
                :is="component"
            />
        </b-card>
    </div>
</template>

<script>
import LabelComments from "./LabelComments.vue";
import LabelExpression from "./LabelExpression.vue";
import LabedExpressionNoIronic from "./LabelExpressionNoIronic.vue"
export default {
    components:{
        LabelComments,
        LabelExpression,
        LabedExpressionNoIronic,
    },
    data(){
        return{
            Labelcomponent: [LabelExpression] ,
            LabedcomponentNoIronic: [LabedExpressionNoIronic]
        };
    },
    computed:{
       category: function(){
            let result = this[this.$route.query.category];
            if (result){
               this.$emit('markerExists');
            }
            return result;
        }
    },
    methods:{
      	add () {
    	    this.Labelcomponent.push(LabelExpression) 
        },
        add_no_ironic(){
            this.LabedcomponentNoIronic.push(LabedExpressionNoIronic)
        }
    },
  name: "Comment",
  props:{
        comment_index_in_webpage:{
            type: Number,
            required: true
        },
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

    border-radius:25px;
    background-color:rgb(245, 170, 157);
    text-align: right;
    margin-top: 2%;
}

.nonCategorialComment{
    border-radius:25px;
    background-color: rgb(171, 233, 241);
    text-align: right;
    margin-top: 2%;
}

</style>