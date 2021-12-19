<template>
<div>
  <!-- <div :style="imageBack" class="image"> -->
  <b-container class="container">
    <h1 class="title">Let's tag irony</h1>
    <b-row class="mb-3"></b-row>
    <b-row>
      <b-col>
        <LoginPage v-if="!$root.store.username"></LoginPage> 
        <span v-else>
          <!--h3 class="tagger">Welcome tagger</h3 -->
          <!-- <img
            src="../assets/welcome.png"
            width="360"
            height="260"
            alt
          /> -->
        </span>
      </b-col>
      <b-col>
        <h5>Hi you,
        Welcome to the irony labeling platform in Hebrew.
        What information can be seen here?
        Posts by Israeli politicians published on Facebook between the years 2020-2021.
        For every politician his most popular post is chosen every two weeks.
        This platform allows you to tag the comments to the post as well as the comments of the comments
        whether they are ironic comments or not.

        This platform is intended for joint research by the
        Department of Hebrew Language at Ben Gurion University, 
        the Department of Hebrew Language at Bar Ilan University and 
        the Department of Software and Information Systems Engineering at Ben Gurion University. 
        </h5>
      </b-col>
    </b-row>
  </b-container>
  <!-- </div> -->
</div>  
</template>

<script>
import LoginPage from "../pages/LoginPage";
export default {
  // data(){
  //   return{
  //     imageBack: {backgroundImage: "url(" + require ("../assets/background.jpg")+")"}
  //   }
  // },
  components: {
    LoginPage
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

  .tagger{
    font-family:cursive;
    color: black;
  }
  .mb-3{
    block-size: 700;
  }
</style>
