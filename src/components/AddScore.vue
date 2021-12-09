<template>
    <div style="text-align: center">
      <h3> Add Score to Game</h3>
        <form class="add-form">
        <div class="form-group">
            <label>Game ID</label>
            <input type="number" class="form-control" id="gameId" v-model="gameId" required>
        </div>
        <div class="form-group">
            <label>Host Team Score</label>
            <input type="number" class="form-control" id="hostScore" v-model="hostScore" required>
        </div>
                <div class="form-group">
            <label>Guest Team Score</label>
            <input type="number" class="form-control" id="guestScore" v-model="guestScore" required>
        </div>
        <button type="submit" class="btn btn-primary" @click="addScores()">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
  name: "AddScore",
  components: {

  }, 
  data() {
    return {
        gameId: "",
        hostScore: "",
        guestScore: "",
    };
  },
  methods: {
    async addScores(){
     try {
       console.log("add score");
        this.axios.defaults.withCredentials = true;
        await this.axios.post(
          "http://localhost:3003/manage/updateGameScores",
          {
            game_id: this.gameId,
            local_team_score: this.hostScore,
            visitor_team_score: this.guestScore
          }
        );
       this.$root.toast("Add score", "scores updated successfully", "success");

      } 
      catch (error) {
        console.log("error in add score")
        console.log(error.response);
        console.log(error);
        this.$root.toast("Error", error.response.data, "danger");

      }
  }
  },

  mounted(){
    console.log("add score mounted");
      }
};

</script>

<style scoped>
 .add-form{
    display: inline-block;
    width: 90%;
    height: 55%;
    position: relative;
    margin: 10px 10px;
    border-style: solid;
    border-radius: 10px;
    border-width: 2px;
    border-color:rgb(98, 100, 100);
    background-color: rgb(221, 221, 221);
    text-align: center;
  }

  .form-control{
    width: 100%;
    -moz-box-align: center;
    text-align: center;
  }

</style>