<template>
    <div class="post">
      <b-card class="Bcard">
    <div >
      <router-link :to="{ name: 'posts' , params: {id: `${this.postId}`}, query: {category: this.category}}">
          <b>Post #{{ index + 1 }}</b> 
       </router-link>
    </div >
    <p> date: {{ date.replace('T', ' ').substring(0,16) }} </p>
     </b-card>
    </div>
</template>

<script>
export default {
  name: "PostPreview",
  props: {
      index: {
        type: Number,
        required: true
      },
      postId: {
        type: String,
        required: true
      },
      date: {
        type: String,
        required: true

      },
      category:{
        type: String,
      }
  }, 
  mounted(){
  } 
};
</script>

<style>
.Bcard{
  border-radius:25px;
  color:rgb(0, 0, 0);
  background-color: rgba(189, 234, 247, 0.932);
  border-block-color: black;
  border-block-width: 3px;
}

</style>