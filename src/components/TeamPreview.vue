<template>
  <div class="team-preview">
    <div :title="name" class="team-title">
       <router-link :to="{ name: 'team' , params: {id: `${this.teamId}`}}">
          <b>{{ name }}</b> 
       </router-link>
    </div >
    <div class="team-content">
    <img :src= imageUrl >
    <!-- <p> {{ imageUrl}} </p> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "teamPreview",
  props: {
      name: {
        type: String,
        required: true
      },
      imageUrl: {
        type: String,
        required: true
      }
  }, 
  mounted(){
    console.log("team preview mounted")
  } 
};
</script>

<style>
.team-preview {
  display: inline-block;
  width: 240px;
  height: 210px;
  position: relative;
  margin: 10px 10px;
  border-style: solid;
  border-radius: 10px;
  border-width: 5px;
  border-color:cadetblue;
}

.team-preview .team-title {
  text-align: center;
  text-transform: uppercase;
  color:  rgb(111, 197, 157);
}

.team-preview .team-content {
  width: 100%;
  overflow: hidden;
}



</style>
