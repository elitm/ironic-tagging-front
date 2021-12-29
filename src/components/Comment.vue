<template>
    <div class="comment">
    <p class="regular" v-if="!parent_comment_id"> 
        commenter_name: <a :href="commenter_url" target="_blank">{{commenter_name}}</a>
        message: {{message}}, <br>
        comment_url: <a :href="comment_url" target="_blank">{{ comment_url }}</a>
        date: {{ date.replace('T', ' ').substring(0,16)}},
        likes: {{likes}},
        num_of_replies: {{num_of_replies}}
        <br>
        ----------
    </p>
        <p class="nested_comment" v-else style="margin-left:30px"> 

        commenter_name: <a :href="commenter_url" target="_blank">{{commenter_name}}</a>
        message: {{message}}, <br>
        comment_url: <a :href="comment_url" target="_blank">{{ comment_url }}</a>
        date: {{ date.replace('T', ' ').substring(0,16)}},
        likes: {{likes}},
        num_of_replies: {{num_of_replies}}
        <br>
        ----------
        </p>
    </div>
</template>

<script>
export default {
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
</style>