<template>
  <div>
    <GamePreview
      v-for="g in games"
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
      :events="g.events"
      :key="g.game_id"></GamePreview>
  </div>
</template>

<script>
import GamePreview from "./GamePreview.vue";
export default {
  name: "FavoriteGames",
  components: {
    GamePreview
  }, 
  data() {
    return {
      games: []
    };
  },
  methods: {
    async updateFavGames(){
      console.log("favorite games");
      try {
        this.axios.defaults.withCredentials = true;
        const response = await this.axios.get(
          "http://localhost:3003/users/favoriteGames",
        );
        const games = response.data;
        this.games = [];
        this.games.push(...games);
      } catch (error) {
        console.log("error in update games")
        console.log(error);
      }
    }
  }, 
  mounted(){
    console.log("favorite games mounted");
    this.updateFavGames(); 
  }
};
</script>

<style></style>
