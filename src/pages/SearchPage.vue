<template>
  <div>
    <search></search>
  </div>
</template>

<script>
import search from "../components/search.vue"
export default {
  data() {
    return {
      searchQuery:"",
    };
  },
  components:{
    search
  }
}
</script>

<style scoped>

#search-input {
  margin-left: 20px; 
  width: 500px; 
}
</style>