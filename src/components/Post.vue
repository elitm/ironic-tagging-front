<template>
    <div class="post" dir="rtl">
     {{ date.replace('T', ' ').substring(0,16) }}  <br>
        <!-- post id: {{post_id}}, <br> -->
        <h6>{{politician_name}}:</h6> 
        <br>
        <h5> {{message}}</h5>
        <a :href="url" target="_blank"> קישור לפוסט </a>
        <br>
        
        <span v-if="attachment_type"> 
        <!-- attachment url: {{attachment_url}}, <br> -->
         סוג הפוסט: {{attachment_type}} <br>
        </span>
        <b> תגובות</b>: {{num_of_comments}}
        <b> שיתופים</b>: {{num_of_shares}}
        <b> לייקים</b>: {{num_of_reactions}}
        <br>
        👍: {{likes}}
        😆: {{haha}}
        😡: {{angry}}
        😮: {{wow}}
        ❤️: {{love}}
        ☹️: {{sad}}
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
            likes:"",
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
                // `https://localhost:443/posts/getPostFromId/${postId}`,
                this.$root.store.beginning_url.concat(`posts/getPostFromId/${postId}`),
            );
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
            this.likes = response.data[0].likes,
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
      this.getPost(this.$route.params.id);  } 
};
</script>

<style>
</style>