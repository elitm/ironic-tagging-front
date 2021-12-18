<template>
    <div class="player-full Details">
    <b-card
        img-alt="Image"
        tag="article"
        style="max-width: 30rem;"
        class="mb-2"
        >
        <b-card-title>{{name}}<img :src=image>
            <br/></b-card-title>
        <b-card-text>
            Team: {{team_name}}
            <br/>
            Position Number: {{position}}
            <br/>
            Common Name: {{common_name}}
            <br/>
            Nationality: {{nationality}}
            <br/>
            Birthday: {{birthday}}
            <br/>
            Birth Country: {{birthcountry}}
            <br/>
            Height: {{height}}
            <br/>
            Weight: {{weight}}
            <br>
            <br>
            <b-button v-if="this.$root._data.store.username !== undefined" @click="addFavPlayer(id)" class="btn btn-info btn-sm">Add to Favorites👍</b-button>
        </b-card-text>
    </b-card>
    </div>
</template>

<script>
    export default {
        name:"PlayerFullDetails" ,
        data(){
            return{
                id: "",
                name: "",
                team_name:"",
                image:"",
                position: "",
                common_name:"",
                nationality:"",
                birthday:"",
                birthcountry:"",
                height:"",
                weight:""
            };
        },
      methods:{
          async getPlayer(playerID){
              console.log(playerID);
              try{
                const response = await this.axios.get(
                    `http://localhost:3003/players/PlayerFullDetails/${playerID}`,);
                this.id = response.data[0].id;
                this.name = response.data[0].name;
                this.team_name = response.data[0].team_name;
                this.image = response.data[0].image;
                this.position = response.data[0].position;
                this.common_name = response.data[0].common_name,
                this.nationality = response.data[0].nationality,
                this.birthday = response.data[0].birthday,
                this.birthcountry = response.data[0].birthcountry,
                this.height = response.data[0].height,
                this.weight = response.data[0].weight
              }catch(error){
                  console.log(error);
              }
          },
          
    async addFavPlayer(playerID){

     try {
       console.log("add favorite player")
        this.axios.defaults.withCredentials = true;
        await this.axios.post(
          "http://localhost:3003/users/favoritePlayers",
          {
            playerId: playerID
          }
        );
       this.$root.toast("Add to Favorites", "player added to favorites successfully", "success");

      } catch (error) {
        console.log("error in add favorite player")
        this.$root.toast("", error.response.data, "warning");

      }
    },
    },
     mounted(){
         console.log("player full details get param");
         this.getPlayer(this.$route.params.id);
     }
};
</script>

<style lang="scss" scoped>
.mb-2 {
  display: inline-block;
  width: 400px;
  height: 440px;
  position: relative;
  margin: 10px 500px;
  border-style: solid;
  border-radius: 10px;
  border-width: 5px;
  border-color:rgb(0, 0, 0);
  background-color: rgb(243, 248, 252);
  
}

.mb-2{
  text-align: center;
  color:  rgb(69, 70, 69);
}

.mb-2 {
  width: 100%;
  overflow: hidden;
}

</style>