<template>
    <div> 
    <b-container> 
    <b-row>     
    <b-col><h1 class="title">Search Page</h1></b-col>
    <b-col><b-button v-on:click="lastSearch"> My Last Search</b-button></b-col>
    </b-row>
    <b-form @submit.prevent="onSearch" @reset.prevent="onReset">
    <b-input-group prepend="Search Query:" id="search-input">
      <b-form-input v-model="query" id="query" required></b-form-input>
      <b-input-group-append>
        <b-button 
        type="submit"
        variant="info"
        >Search</b-button>
      </b-input-group-append>
    </b-input-group>
    </b-form>
      <br/><h5>
       Your search Query: {{ query }}
      </h5><br/>
        <span v-if="{query}">
             <span v-if="!hasResults ">
                    There are no elements to return
                 </span>
            <!-- <span v-if="!players.length && !teams.length">
            </span> -->
            <span v-else>
                <b-container class="search-contaiter">
                <SearchPlayers :items="players"></SearchPlayers>
                <SearchTeams :items="teams"> </SearchTeams>
                </b-container>
            </span>
        </span>
    </b-container>
    </div>
</template>

<script>

import SearchPlayers from "./SearchPlayers";
import SearchTeams from "./SearchTeams";
export default {
    name: "Search",
    components:{
        SearchPlayers,
        SearchTeams
    },
    data(){
        return{
            players: [],
            teams: [],
            query: "",
            filter_team: "",
            hasResults: true,
            lastSearchPlayer:[],
            lastSearchTeams:[],
            lastQuery:""
        };
    },
    methods:{
        async newSearch(){
            console.log(this.query);
            console.log("start searching at the server");
            try{
                const response = await this.axios.get(
                    `http://localhost:3003/search/${this.query}`,);
                const players = response.data.players;
                const teams = response.data.teams;
                // console.log(players);
                // console.log(teams);
                if (players === undefined && teams === undefined) // search has no results
                    this.hasResults = false;
                else {
                this.hasResults = true;
                this.players = [];
                this.players.push(...players);
                console.log(this.players);
                this.teams = [];
                this.teams.push(...teams);
                }
                console.log(this.hasResults);

            }catch (error){
                console.log("error in search");
                console.log(error);
            }
        },
        onSearch(){
           console.log("new Search method was called");
           this.newSearch(); 
        },

        onReset(){
            console.log("reset before new search");
            this.$v.$reset();
        },

        TeamFilter(){
            this.$emit('this.players', 'filter_team', this.filter_team)
        },
    async lastSearch(){
        console.log("try to return user last search");
            try{
                const response = await this.axios.get(
                    `http://localhost:3003/users/lastSearch`,);
                console.log(response);
                this.query = response.data[0];
                const lastSearch = response.data[1];
                console.log(query);

                this.players = [];
                this.players.push(...lastSearch.players);
                this.teams = [];
                this.teams.push(...lastSearch.teams);
                console.log("last search returned")
            }catch (error){
                console.log("error in Last search");
                console.log(error);
            }
    }
    }
        
}
</script>

<style lang="scss" scoped>
.lastButton{
    color: rgb(253, 255, 255);
    background-color: rgb(138, 138, 138);
    
}

.search-contaiter {
  align-items: right;
    border-style: solid;
  border-radius: 10px;
  border-width: 5px;
  border-color:rgb(6, 51, 29);
  background-color: #e6e6e6;
}

</style>