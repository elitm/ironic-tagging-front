<template>
<div id="allNav">
    <div id="nav">
      <b-navbar class="navbar navbar-light" style="background-color: #e6e6e6;">
        <b-navbar-brand>
          <!-- <img
            src="../assets/soccer.png"
            width="90"
            height="80"
            alt
          /> -->
        </b-navbar-brand>

        <!-- <Navigator /> -->
        <button class="btn navB" type="button">
          <router-link :to="{ name: 'main' }">Home</router-link>
        </button>
        <b-dropdown id="dropdown-politicians"  text="Politicians" class="mr-1" variant="light" >
            <b-dropdown-item :to="{ name: 'politician' , params: {name: `Naftali Bennett`}}"> Naftali Bennett</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'politician' , params: {name: `Benjamin Netanyahu`}}"> Bibi Netanyahu</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'politician' , params: {name: `Benny Gantz`}}"> Benny Gantz</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'politician' , params: {name: `Nitzan Horowitz`}}"> Nitzan Horowitz</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'politician' , params: {name: `Yair Lapid`}}"> Yair Lapid</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'politician' , params: {name: `Avigdor Liberman`}}"> Avigdor Liberman</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'politician' , params: {name: `Merav Michaeli`}}"> Merav Michaeli</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'politician' , params: {name: `Amir Peretz`}}"> Amir Peretz</b-dropdown-item>
          </b-dropdown>
        <b-navbar-nav class="navbar-nav ml-auto">
 
        <span v-if="!$root.store.username">
            <B>Hello Guest</B>
          <button class="btn navB" type="button">
            <router-link :to="{ name: 'register' }">Register</router-link>
          </button>
          <button class="btn navB" type="button">
            <router-link :to="{ name: 'login' }">Login</router-link>

          </button>
          
        </span>
        <span v-else>
          <b-dropdown id="dropdown-1"  text="My Profile" class="mr-3" variant="light" >
            <!-- <b-dropdown-item :to="{ name: 'favoriteGames' }">My Favorite Games</b-dropdown-item> -->
            <b-dropdown-item class="btn navB" @click="Logout">Logout</b-dropdown-item>
          </b-dropdown>
         <B>Hello {{ $root.store.username }}</B>
          
        </span>
        </b-navbar-nav>
      </b-navbar>
    </div>
    <router-view />
  </div>

</template>

<script>
  export default {
    components:{
    },
    methods:{
        async Logout() {
        console.log("try to logging out");
        try{
          // const response = await this.axios.post(
          //   "http://localhost:3003/logout",{withCredentials:true});

          this.$root.store.logout();
          this.$root.toast("Logout", "User logged out successfully", "success");
          this.$router.push("/").catch(() => {
          this.$forceUpdate();
          });
        }
        catch(error){
          console.log("error in logout")
          console.log(error)
        }
    }, 
      async logoutFromServer(){
            await this.axios.post(
            "http://localhost:3003/logout",
        );
    }  

  }};
</script>

<style>
  
</style>