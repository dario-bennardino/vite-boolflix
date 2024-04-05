<script>
import { store } from '../data/store'
import Card from './partials/Card.vue';
import CardSerie from './partials/CardSerie.vue';
    export default {
        props:{
            // type: String
        },
        components:{
            Card,
            CardSerie,
        },
        data(){
            return{
                store
            }
        },
        // computed:{
        //     title(){
        //         return this.type === 'movie' ? 'Filmmmmm' : 'Serie TV'
        //     }
        // }
    }
</script>

<template>
    <div class="back">
        <div class="container text-center" >
            <h3 class="p-4">Film</h3>
                <div class="row row-cols-4">

                    <Card v-for="card in store.filmList" 
                    :key="card.id" 
                    :cardObj="card"

                    />
                    
                </div>
            <h3 v-if="store.tvList.length > 0" class="p-4">Serie</h3>
                <div class="row row-cols-4">
                    
                    <CardSerie v-for="card in store.tvList" 
                    :key="card.id"
                    :cardObj="card"
                    />

                </div>
        </div>
    </div>    
</template>



<style lang="scss" scoped>
    .back{
        background-color: black;

        h3{
            color: white;
        }
    }
</style>