<template>
  <div>
  <b-container>
    <b-table
    class="events-table"
    :items="items"
    :fields="fields"
    stacked="md"
    show-wmpty>
    <template #cell(event_datetime)="row">
         {{row.item.event_datetime.split('T')[0] }}
       </template>
      <br>
      <template #cell(time)="row">
      {{row.item.event_datetime.split('T')[1].substring(0,5) }}
      </template>
   
    </b-table>
   </b-container>

  </div>
</template>

<script>
export default {
  data(){
    return{
        fields:[
            {key: 'game_id', label: 'Game Id'},
            {key: 'event_datetime', label: 'Date'},
            {key: 'time', label: 'Time'},
            {key: 'game_minute', label: 'Minute'},
            {key: 'event_description', label: 'Description',},
            {key: 'event_name', label: 'Type'},
        ],
    };
},
props:{
    items:{
        type: Array,
        required: true
    }
},

}
</script>

<style lang="scss" scoped>
  .events-table {
  align-items: right;
    border-style: solid;
  border-radius: 10px;
  border-width: 5px;
  border-color:rgb(6, 51, 29);
  background-color: #e6e6e6;
  }

</style>