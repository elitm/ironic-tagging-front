<template>
<div>
    <b-container class="container">
      <b-button :to="{ name: 'politician' , params: {category:this.$route.params.name, name: `Naftali Bennett`}}"> Naftali Bennett</b-button>
      <b-button :to="{ name: 'politician' , params: {category:this.$route.params.name, name: `Benjamin Netanyahu`}}"> Bibi Netanyahu</b-button>
      <b-button :to="{ name: 'politician' , params: {category:this.$route.params.name, name: `Benny Gantz`}}"> Benny Gantz</b-button>
      <b-button :to="{ name: 'politician' , params: {category:this.$route.params.name, name: `Nitzan Horowitz`}}"> Nitzan Horowitz</b-button>
      <b-button :to="{ name: 'politician' , params: {category:this.$route.params.name, name: `Yair Lapid`}}"> Yair Lapid</b-button>
      <b-button :to="{ name: 'politician' , params: {category:this.$route.params.name, name: `Avigdor Liberman`}}"> Avigdor Liberman</b-button>
      <b-button :to="{ name: 'politician' , params: {category:this.$route.params.name, name: `Merav Michaeli`}}"> Merav Michaeli</b-button>
      <b-button :to="{ name: 'politician' , params: {category:this.$route.params.name, name: `Amir Peretz`}}"> Amir Peretz</b-button> 
    </b-container> 

</div>
</template>

<script>

</script>


<style lang="scss" scoped>

.container {
  display: flex; 
  justify-content: space-around;
}

</style>


