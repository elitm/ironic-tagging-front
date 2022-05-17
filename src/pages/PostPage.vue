<template>
<div>
  <b-card class="post">
    <Post></Post>
    <br v-if="commentInCategoryExist">
    <div class="hasCategoryComment" v-if="commentInCategoryExist">{{this.$route.query.category}} קיימות תגובות שזוהו בקטגוריה</div>
    <br v-if="commentInCategoryExist">
    <LabelPost> </LabelPost>
  </b-card>
  <br>
  <br>
    <Comment @markerExists="showMarker"
        v-for="(c, comment_index_in_webpage) in comments"
        :comment_index_in_webpage= comment_index_in_webpage
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
        :acknowledgements="c.acknowledgements"
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
          commentInCategoryExist: false,
          comments: []
        };
  },
  methods: {
    async getCommentsOfPost(postId){
      try {
        this.axios.defaults.withCredentials = true;
        const response = await this.axios.get(
          // `https://localhost:443/comments/getCommentsOfPost/${postId}`,
          this.$root.store.beginning_url.concat(`comments/getCommentsOfPost/${postId}`),
        );
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

    showMarker(){
      this.commentInCategoryExist = true;
    },
  
  },
  mounted(){
    this.getCommentsOfPost(this.$route.params.id);
    }
  };

  
</script>

<style lang="scss" scoped>
.post {
    border-radius:65px;
    background-color: rgb(176, 202, 250);
    text-align: right;
  
}

.hasCategoryComment {
  background-color:rgb(245, 170, 157) !important;
  text-align: center;
  font-weight: bold;
  border-radius:25px;
}
</style>
