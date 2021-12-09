<template>
  <div>
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
  </div>
</template>

<script>
import PlayerPreview from "./PlayerPreview.vue";
export default {
  name: "FavoritePlayers",
  components: {
    PlayerPreview
  }, 
  data() {
    return {
      players: []
    };
  },
  methods: {
    async updateFavPlayers(){
      try {
        this.axios.defaults.withCredentials = true;
        const response = await this.axios.get(
          "http://localhost:3003/users/favoritePlayers",
        );
        const players = response.data;
        console.log("aaaaaaaaaaaa")
        console.log(typeof (response.data) !== 'string')
        if (typeof (response.data) !== 'string')          
        {
        this.players = [];
        this.players.push(...players);
        
        }
      } catch (error) {
        console.log(error);
        // this.$root.toast("Favorite Games", error.response.data, "alert");

      }
    }
  }, 
  mounted(){
    this.updateFavPlayers(); 
  }
};
</script>

<style></style>
