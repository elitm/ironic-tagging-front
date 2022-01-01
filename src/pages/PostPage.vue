<template>
<div>
  <b-card class="post">
    <Post></Post>
    <LabelPost> </LabelPost>
  </b-card>
  <br>
  <br>
    <Comment
        v-for="c in comments"
        :commenter_name="c.commenter_name"
        :message="c.message"
        :comment_url="c.comment_url"
        :date="c.date"
        :likes="c.likes"
        :commenter_url="c.commenter_url"
        :num_of_replies="c.num_of_replies"
        :comment_id="c.comment_id"
        :post_id="c.post_id"
        :parent_comment_id="c.parent_comment_id"
        :key="c.comment_id">
    </Comment>
</div>
</template>

<script>
import Post from "../components/Post.vue"
import Comment from "../components/Comment.vue"
import LabelPost from "../components/LabelPost.vue"
export default {
  components:{
    Post,
    Comment,
    LabelPost
  },
    data() {
        return {
        comments: []
            };
  },
  methods: {
    async getCommentsOfPost(postId){
      try {
        this.axios.defaults.withCredentials = true;
        const response = await this.axios.get(
          `http://localhost:3000/comments/getCommentsOfPost/${postId}`,
            
        );
        console.log(response.data)
        const comments = response.data;
        if (typeof (response.data) !== 'string')          
        {
        this.comments = [];
        this.comments.push(...comments);
        
        }
      } catch (error) {
        console.log(error);
      }
    },
 
  },
     mounted(){
        console.log("mounted postPage")
        this.getCommentsOfPost(this.$route.params.id);
  }};

  
</script>

<style lang="scss" scoped>
.post{
    margin: 4%,10%,4%,4%;
    border-radius:65px;
    background-color: rgb(176, 202, 250);
}
</style>
