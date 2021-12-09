<template>
    <div style="text-align: center">
      <h3> Add Event to Game</h3>
        <form class="add-form">
        <div class="form-group">
            <label>Game ID</label>
            <input type="number" class="form-control" id="gameId" v-model="gameId" required>
        </div>
        <div class="form-group">
            <label>Date & Time</label>
            <input type="datetime-local" class="form-control" id="date" v-model="date" required>
        </div>
        <div class="form-group">
            <label>Minute</label>
            <input type="number" class="form-control" id="min" v-model="minute" required>
        </div>
        <div class="form-group">
            <label>Event Type</label>
            <select required v-model="type">
                <option>goal</option>
                <option>injury</option>
                <option>offense</option>
                <option>offside</option>
                <option>redcard</option>
                <option>yellowcard</option>
                <option>substitution</option>
            </select>  
        </div>
        <div class="form-group">
            <label>Description</label>
            <input type="text" class="form-control" id="description" v-model="description" required>
        </div>
        <button type="submit" class="btn btn-primary" @click="addEvent()">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
  name: "AddEvent",
  components: {

  }, 
  data() {
    return {
        gameId: "",
        date: "",
        minute: "",
        type: "",
        description: ""
    };
  },
  methods: {
    async addEvent(){
     try {
       console.log("add event");
        this.axios.defaults.withCredentials = true;
        await this.axios.post(
          "http://localhost:3003/manage/addEvent",
          {
            game_id: this.gameId,
            event_time: this.date.replace("T", " "),
            minute_in_game: this.minute,
            event_description: this.description,
            type: this.type
          }
        );
     this.$root.toast("Add Event", "event added successfully", "success");

      } 
      catch (error) {
        console.log("error in add event")
        console.log(error);
        // this.$root.toast("", error.response.data, "warning");

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
    text-align: center;
  }
</style>