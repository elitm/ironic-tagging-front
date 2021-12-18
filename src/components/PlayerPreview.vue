<template>
    <div class="player-preview">
    <div :title="name" class="player-title">
      <router-link :to="{ name: 'player' , params: {id: `${this.playerId}`}}">
          <b>{{ name }}</b> 
       </router-link>
    </div >
    <div class="player-content">
    <img :src= imageUrl > 
    <!-- <p> {{ imageUrl}} </p> -->
    <p> position: {{ position }} </p>
    <p> team: {{ teamName }} </p> 
    </div>
    </div>
</template>

<script>
export default {
  name: "PlayerPreview",
  props: {
      playerId: {
        type: Number,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      imageUrl: {
        type: String,
        required: true
      },
      position: {
        type: Number,
        required: true
      },
      teamName: {
        type: String,
      }
  }, 
  mounted(){
    console.log("player preview mounted")
  } 
};
</script>

<style>
.player-preview {
  display: inline-block;
  max-width: 19rem;
  min-width: 19rem;
  max-height: 19rem;
  min-height: 19rem;
  position: relative;
  margin: 10px 10px;
  border-style: solid;
  border-radius: 10px;
  border-width: 6px;
  border-color:rgb(7, 88, 48);
  background-color: rgb(255, 255, 255);
  margin: auto;

}

.player-preview .player-title {
  text-align: center;
  text-transform: uppercase;
  color:  rgb(111, 197, 157);
}

.player-preview .player-content {
  width: 100%;
  vertical-align: middle;
  padding: 15%;
  
}

</style>
