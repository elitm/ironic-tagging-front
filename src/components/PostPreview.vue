<template>
    <div class="post">
    <div >
      <router-link :to="{ name: 'posts' , params: {id: `${this.postId}`}}">
          <b>{{ postId }}</b> 
       </router-link>
    </div >
    <p> date: {{ date.replace('T', ' ').substring(0,16) }} </p>
    </div>
</template>

<script>
export default {
  name: "PostPreview",
  props: {
      postId: {
        type: String,
        required: true
      },
      date: {
        type: String,
        required: true

      },
  }, 
  mounted(){
  } 
};
</script>

<style>
</style>