<template>
    <div>
        <b-container>
            <b-row><h2>Teams:</h2></b-row>
        <b-row>
            <b-table
            class="team-search-table"
            :items="items"
            :fields="fields"
            stacked="md"
            show-wmpty
            width=300px>

            <template #cell(logo_path)="row">
                <img :src="row.item.logo_path"
                class="card-img-bottom"
                style="height: 100px; width: auto"
                v-on:click.stop="PlayerPageById(row.item.teamId)"/>
            </template>

            <template #cell(name)="row">
                <!-- <a href="#" v-on:click="PlayerPageById(row.item.teamId)"> {{ row.item.name }}</a> -->
            <router-link :to="{ name: 'team' , params: {id: `${row.item.id}`}}">{{ row.item.name }}
            </router-link>
            </template>

        </b-table>
        </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                fields:[
                   {key: 'name', label: 'Team Name', sorted:true},
                   {key: 'logo_path', label: 'Logo', sorted:true},
                ],
                filter: null,
            };
        },
        props:{
            items:{
                type: Array,
                required: true
            }
        },
        methods:{
            TeamPageById(teamId){
                this.$router.push('/team' + String(teamId))
            }
        },
        mounted(){
            console.log("Search team ");
        }
    }
</script>

<style lang="scss" scoped>

</style>