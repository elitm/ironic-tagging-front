
<template>
  <div id="app">
    <NavBar/>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";

export default {
  name: "App",
  components:{
    NavBar
  }
};
</script>

<style lang="scss">
@import "@/scss/form-style.scss";

#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
    background: 
  linear-gradient(rgba(141, 197, 158, 0.5), 
  rgba(139, 206, 150, 0.5)), 
  url("./assets/background.jpg");
  background-repeat: no-repeat;
  background-size: cover  
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
