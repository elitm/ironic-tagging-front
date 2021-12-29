<template>
    <div class="post">
    <p> date: {{ date.replace('T', ' ').substring(0,16) }}  <br>
        post id: {{post_id}}, <br>
        politician name: {{politician_name}}, <br>
        message: {{message}},<br>
        url: <a :href="url" target="_blank">{{ url }}</a>
        
        <span v-if="attachment_type"> 
        <!-- attachment url: {{attachment_url}}, <br> -->
         attachment type: {{attachment_type}}, <br>
        </span>
        number of comments: {{num_of_comments}},
        number of shares: {{num_of_shares}},
        number of reactions: {{num_of_reactions}},
        like: {{like}},
        haha: {{haha}},
        angry: {{angry}},
        wow: {{wow}},
        love: {{love}},
        sad: {{sad}}
    </p>
    </div>
</template>

<script>
export default {
  name: "Post",
    data(){
        return{
            post_id: "",
            politician_name: "",
            message:"",
            url:"",
            // attachment_url: "",
            attachment_type:"",
            date:"",
            num_of_comments:"",
            num_of_shares:"",
            num_of_reactions:"",
            like:"",
            haha:"",
            angry:"",
            wow:"",
            love:"",
            sad:""
        };
    }, 
    methods:{
        async getPost(postId){
            try{
            const response = await this.axios.get(
                `http://localhost:3000/posts/getPostFromId/${postId}`,);
            console.log(response);

            this.post_id = response.data[0].post_id;
            this.politician_name = response.data[0].politician_name;
            this.message = response.data[0].message;
            this.url = response.data[0].url;
            // this.attachmen_url = response.data[0].attachmen_url;
            this.attachment_type = response.data[0].attachment_type,
            this.date = response.data[0].created_time,
            this.num_of_comments = response.data[0].num_of_comments,
            this.num_of_shares = response.data[0].num_of_shares,
            this.num_of_reactions = response.data[0].num_of_reactions,
            this.like = response.data[0].like,
            this.haha = response.data[0].haha,
            this.angry = response.data[0].angry,
            this.wow = response.data[0].wow,
            this.love = response.data[0].love,
            this.sad = response.data[0].sad

            }catch(error){
                console.log(error);
            }
        }

    },
    
  mounted(){
      this.getPost(this.$route.params.id);
  } 
};
</script>

<style>
</style>