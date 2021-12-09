<template>
  <div class="team-full-details">
    <div :title="teamName" class="team-title">
      <b>{{ teamName }}</b> 
    </div >
    <br>
    <b-container>
      <b-row> 
    <b-col>
        <br>
    <h4>Past Games:</h4>
         <br>
        <GamePreview
            v-for="g in pastGames"
            :id="g.game_id" 
            :hostTeam="g.local_team" 
            :guestTeam="g.visitor_team" 
            :hostId="g.local_team_id"
            :guestId="g.visitor_team_id"
            :date="g.game_date" 
            :hour="g.game_date"
            :hostTeamScore="g.local_team_score"
            :guestTeamScore="g.visitor_team_score"
            :field="g.field"
            :key="g.game_id">
        </GamePreview>
    </b-col>
    <b-col>
     <br>
     <h4>Future Games:</h4>
     <br>
        <GamePreview
            v-for="g in futureGames"
            :id="g.game_id" 
            :hostTeam="g.local_team" 
            :guestTeam="g.visitor_team" 
            :hostId="g.local_team_id"
            :guestId="g.visitor_team_id"
            :date="g.game_date" 
            :hour="g.game_date"
            :field="g.field"
            :key="g.game_id">
        </GamePreview>
        </b-col>
      </b-row>
        <br>
        <h4>Players:</h4>
       <br>
        <b-row>
        <PlayerPreview
            v-for="p in players"
            :playerId="p.id"
            :name="p.name"
            :imageUrl="p.image"
            :position="p.position"
            :src="p.image"
            :teamName="p.team_name"
            :key="p.name">
        </PlayerPreview>
      </b-row> 
    </b-container> 
  </div>
</template>

<script>
import GamePreview from "./GamePreview.vue";
import PlayerPreview from './PlayerPreview.vue';
export default {
    name: "TeamFullDetails",
    components: {
        GamePreview,
        PlayerPreview
  }, 
 data() {
    return {
      teamName: "", 
      players: [],
      pastGames: [], 
      futureGames: []
    };
  },
  methods:{
    async TeamDetails(teamID){
      try{
        console.log("team Info From Server");
        // this.axios.defaults.withCredentials = true;
            const response = await this.axios.get(
            `http://localhost:3003/teams/teamFullDetails/${teamID}`,);
 
        const players = response.data[0];
        this.players = [];
        this.players.push(...players);
        this.teamName = response.data[0][0].team_name;
        
        console.log(response.data[1])

        if (response.data[1]) // if this team has games
        {  
            if (response.data[1][0]) // past games
            { const pastGames = response.data[1][0]
                this.pastGames = [];
                this.pastGames.push(...pastGames);}
         
            if (response.data[1][1]) // future games
            { const futureGames = response.data[1][1]
                this.futureGames = [];
                this.futureGames.push(...futureGames);}
         }
    
      }
      catch (error) {
        console.log("error in team full details")
        console.log(error);
    }
  }},
  mounted(){
    console.log("team details with param")
    this.TeamDetails(this.$route.params.id); 
     }
};
</script>

<style>
.team-full-details .team-title {
  text-align: center;
  /* text-transform: uppercase; */
  font-size: 35px;
  color:  rgb(79, 146, 115);
  background-color: rgb(255, 255, 255);
}
</style>
