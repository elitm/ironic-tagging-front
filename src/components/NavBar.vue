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
          <router-link :to="{ name: 'main' }" @click="buttonTitle = 'Categories'">Home</router-link>
        </button>


         <b-dropdown id="dropdown-categories"  :text="buttonTitle" class="mr-1" variant="light" >
            <b-dropdown-item :to="{ name: 'categories' , params: {name: `acknowledgements`}}" @click="buttonTitle = 'acknowledgements'"> acknowledgements</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'categories' , params: {name: `compliments`}}" @click="buttonTitle = 'compliments'"> compliments </b-dropdown-item>
            <b-dropdown-item :to="{ name: 'categories' , params: {name: `apologies`}}" @click="buttonTitle = 'apologies'"> apologies</b-dropdown-item>

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
    data () {
      return {
        buttonTitle: "Categories"
      }
    },
    methods:{
        async Logout() {
        console.log("try to logging out");
        try{
          await this.axios.post(
            "http://localhost:3000/logout",{withCredentials:true});

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

  }};
</script>

<style>
  
</style>