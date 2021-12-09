<template>
      <b-container class="container">
        <b-row>
          <div class="left-side">
          <b-col class="league-dital">
            <b-card-title>{{leagueName}}</b-card-title>
            <b-card-text> 
              Season: {{ season }}
              <br>
              Stage: {{ stage }}
              <br>
              </b-card-text>
        </b-col>
        <b-col>
          <br/>
          <h5> Next Game:</h5>
          <GamePreview 
            :id="nextGame.game_id"
            :hostTeam="nextGame.local_team" 
            :guestTeam="nextGame.visitor_team" 
            :hostId="nextGame.local_team_id"
            :guestId="nextGame.visitor_team_id"
            :date="nextGame.game_date" 
            :hour="nextGame.game_date"
            :field="nextGame.field"
          ></GamePreview>
        </b-col>
        </div>
    </b-row>
  </b-container>
</template>

<script>
import GamePreview from "./GamePreview.vue";
export default {
    name: "LeagueInfo",
    components: {
    GamePreview
  }, 
 data() {
    return {
      leagueName: "", 
      season: "", 
      stage: "",
      nextGame: {}
    };
  },
  methods:{
    async LeagueDetails(){
      try{
        console.log("league Info From Server");
        this.axios.defaults.withCredentials = true;
            const response = await this.axios.get(
            "http://localhost:3003/league/getDetails",);

        this.leagueName = response.data.league_name;
        this.season = response.data.current_season_name;
        this.stage = response.data.current_stage_name;
        this.nextGame = response.data.next_game[0];
      }
      catch (error) {
        console.log("error in league info")
        console.log(error);
    }
  }},
  mounted(){
    this.LeagueDetails();
     }
};
</script>

<style>

.left-side {
  text-align: center;
  color:  rgb(11, 40, 68);
  width: 100%;
  overflow: hidden;
}

.left-side{
  display: inline-block;
  width: 400px;
  height: 415px;
  position: relative;
  margin: 10px 10px;
  border-style: solid;
  border-radius: 10px;
  border-width: 5px;
  border-color:rgb(6, 51, 29);
  background-color: #e6e6e6;
}

</style>