<template>
    <div style="text-align: center">
      <h3> Add Game</h3>
        <form class="add-form">
        <div class="form-group">
            <label >Host Team Id</label>
            <input type="number" class="form-control" id="hostId" v-model="hostId" required>
        </div>
        <div class="form-group">
            <label >Guest Team Id</label>
            <input type="number" class="form-control" id="guestId" v-model="guestId" required>
        </div>
        <div class="form-group">
            <label >Date & Time</label>
            <input type="datetime-local" class="form-control" id="date" v-model="date" required>
        </div>
        <div class="form-group">
            <label >Field</label>
            <input type="text" class="form-control" id="field" v-model="field" required>
        </div>
        <button type="submit" class="btn btn-primary" @click="addGame()">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
  name: "AddGame",
  components: {

  }, 
  data() {
    return {
        hostId: "",
        guestId: "",
        date:"",
        field: "",
        referee: "" 

    };
  },
  methods: {
    async addGame(){
     try {
       console.log("add game");

        this.axios.defaults.withCredentials = true;
        await this.axios.post(
          "http://localhost:3003/manage/addGame",
          {
            local_team_id: this.hostId,
            visitor_team_id: this.guestId,
            game_date: this.date.replace("T", " "),
            field_name: this.field,
            referee_id: "2" 

          }
        );
      this.$root.toast("Add Game", "game added successfully", "success");

      } 
      catch (error) {
        console.log("error in add game")
        console.log(error);
        this.$root.toast("Error", error.response.data, "danger");

      }
  }
  },
};

</script>

<style scoped>
  .add-form{
    display: inline-block;
    width: 90%;
    height: 55%;
    position: relative;
    margin: 10px 10px;
    border-style: solid;
    border-radius: 10px;
    border-width: 2px;
    border-color:rgb(98, 100, 100);
    background-color: rgb(221, 221, 221);
    text-align: center;
  }

  .form-control{
    width: 100%;
    -moz-box-align: center;
  }

</style>