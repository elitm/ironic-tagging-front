<template>
    <div class="comment">
    <p class="regular" v-if="!parent_comment_id"> 
        <b-card class="comm">
        commenter_name: <a :href="commenter_url" target="_blank">{{commenter_name}}</a>
        message: {{message}}, <br>
        comment_url: <a :href="comment_url" target="_blank">{{ comment_url }}</a>
        date: {{ date.replace('T', ' ').substring(0,16)}},
        likes: {{likes}},
        num_of_replies: {{num_of_replies}}
        <br>
        <input type="checkbox" id="ironic" v-model="checked">
        <label for="ironic">האם אירוני?</label>
        <br>
        <LabelComments></LabelComments>
        </b-card>
        ----------
    </p>
        
        <p class="nested_comment" v-else style="margin-left:30px"> 
        <b-card class="nest">
        commenter_name: <a :href="commenter_url" target="_blank">{{commenter_name}}</a>
        message: {{message}}, <br>
        comment_url: <a :href="comment_url" target="_blank">{{ comment_url }}</a>
        date: {{ date.replace('T', ' ').substring(0,16)}},
        likes: {{likes}},
        num_of_replies: {{num_of_replies}}
        <br>
        <input type="checkbox" id="ironic" v-model="checked">
        <label for="ironic">האם אירוני?</label>
        <br>
        </b-card>
        ----------
    </p>    
    </div>
</template>

<script>
import LabelComments from "./LabelComments.vue";
export default {
    components:{
        LabelComments
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
            type: String
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
        }
        
    }
};
</script>

<style>
.comm{
    border-radius:25px;
    background-color: rgb(171, 233, 241);
}
.nest{
    border-radius:25px;
    background-color: rgb(192, 245, 232);
}
</style>