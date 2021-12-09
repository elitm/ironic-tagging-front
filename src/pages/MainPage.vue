<template>
<div>
  <!-- <div :style="imageBack" class="image"> -->
  <b-container class="container">
    <h1 class="title">Main Page</h1>
    <b-row>
      <b-col>
        <LeagueInfo></LeagueInfo>
      </b-col>
      <b-col>
        <LoginPage v-if="!$root.store.username"></LoginPage> 
        <span v-else>
          <h3>My Favorite Games:</h3>
          <FavoriteGamesMainPage ></FavoriteGamesMainPage>
        </span>
      </b-col>
    </b-row>
  </b-container>
  <!-- </div> -->
</div>  
</template>

<script>
import LeagueInfo from "../components/LeagueInfo";
import FavoriteGamesMainPage from "../components/FavoriteGamesMainPage";
import LoginPage from "../pages/LoginPage";
export default {
  // data(){
  //   return{
  //     imageBack: {backgroundImage: "url(" + require ("../assets/background.jpg")+")"}
  //   }
  // },
  components: {
    LeagueInfo, 
    LoginPage, 
    FavoriteGamesMainPage
  },
  
};
</script>

<style>
  .container{
    text-align: center;
  }

  .title{
    text-align: center;
    font-size: 400%;
    font-family:Georgia, 'Times New Roman', Times, serif;
    font-style: oblique;
  }
</style>
