<template>
    <div>
        <b-container>
            <b-row> <h2>Players:</h2></b-row>
            <b-row>
            <b-col lg="6" class="my-1">
            <b-form-group
            label="Filter"
            label-for="filter-input"
            label-cols-sm="3"
            label-align-sm="right"
            label-size="sm"
            class="mb-0"
            >
          <b-input-group size="sm">
            <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
              placeholder="Type to Search"
            ></b-form-input>

            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>

      <b-col lg="6" class="my-1">
        <b-form-group
          v-model="sortDirection"
          label="do you want to filter?"
          description="Leave all unchecked to filter on all data"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
          v-slot="{ ariaDescribedby }"
        >
          <b-form-checkbox-group
            v-model="filterOn"
            :aria-describedby="ariaDescribedby"
            class="mt-1"
          >
            <b-form-checkbox value="team_name">Team Name</b-form-checkbox>
            <b-form-checkbox value="position">Position</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
      </b-col>
    </b-row>



        <b-table
        class="player-search-table"
        :items="items"
        :fields="fields"
        :filter="filter"
        :filter-included-fields="filterOn"
        stacked="md"
        show-wmpty
        >

        <template #cell(image)="row">
            <img :src="row.item.image"
            class="card-img-bottom"
            style="height: 100px; width: auto"
            v-on:click.stop="PlayerPageById(row.item.playerId)"/>
        </template>

        <template #cell(name)="row">
        <router-link :to="{ name: 'player' , params: {id: `${row.item.id}`}}">
             {{ row.item.name}}
       </router-link>
        </template>

      <template #cell(team_name)="row">
        <router-link :to="{ name: 'team' , params: {id: `${row.item.team_id}`}}">
             {{ row.item.team_name}}
       </router-link>
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
                    {key: 'id', label: 'Player Id'},
                    {key: 'name', label: 'Player Full Name', sortable: true},
                    {key: 'team_name', label: 'Team', sortable: true},
                    {key: 'position', label: 'Position', sortable: true},
                    {key: 'image', label: 'Player Image'},
                ],
                filter: null,
                filterOn: []
            };
        },
        props:{
            items:{
                type: Array,
                required: true
            }
        },
        methods:{
            PlayerPageById(playerId){
                this.$router.push('/player' + '/'+String(playerId))
            }
        },
        mounted(){
            console.log("Search players");
            
        }
    }
</script>

<style lang="scss" scoped>
  .table .player-search-table {
    max-width: 12rem !important;
    text-overflow: ellipsis !important;
    table-layout: fixed;
    width: 30%;
  }
</style>