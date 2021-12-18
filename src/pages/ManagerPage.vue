<template>
  <div class="container">
    <b-container>
      <b-row><b-col></b-col>
      <b-col> <h1 class="title">Admin Page</h1> </b-col>
      <b-col> </b-col>
      <b-row></b-row>
      </b-row>
      <b-row> 
      <b-col> 
        <AddScore></AddScore>
      </b-col>
      <b-col> 
        <AddGame></AddGame>
      </b-col> 
      <b-col> 
        <AddEvent></AddEvent>
      </b-col> 
      </b-row>  
  </b-container> 
  </div>
</template>

<script>
import AddScore from "../components/AddScore";
import AddGame from "../components/AddGame";
import AddEvent from "../components/AddEvent";

export default {
  components: {
    AddScore,
    AddGame,
    AddEvent
  }
};
</script>

<style lang="scss" scoped>
.title{
  color: black;
  text-align: center;
}
</style>
