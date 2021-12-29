<template>
  <div>
      <h1> {{name}}</h1>
    <PostPreview
        v-for="p in posts"
        :postId="p.post_id"
        :date="p.created_time"
        :key="p.post_id">
    </PostPreview>

  </div>
</template>

<script>
import PostPreview from "./PostPreview.vue";
export default {
  name: "PoliticianPosts",
  components: {
    PostPreview
  }, 
  data() {
    return {
      posts: [],
      name: ""
    };
  },
  methods: {
    async getPoliticianPosts(politicianName){
      try {
        this.axios.defaults.withCredentials = true;
        const response = await this.axios.get(
          `http://localhost:3000/posts/getPostsOfPolitician/${politicianName}`,
            
        );
        const posts = response.data;
        if (typeof (response.data) !== 'string')          
        {
        this.posts = [];
        this.posts.push(...posts);
        this.name = politicianName;
        
        }
      } catch (error) {
        console.log(error);
        // this.$root.toast("Favorite Games", error.response.data, "alert");
      }
    }
  }, 
  watch: {
			    '$route' () {
			      	this.getPoliticianPosts(this.$route.params.name)
					
			    },
			  }, 
    mounted(){
    console.log("politician posts mounted");
    this.getPoliticianPosts(this.$route.params.name); 
  }
};

</script>

<style></style>