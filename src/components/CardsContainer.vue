<script>
import { store } from '../data/store'
import CardFilm from './partials/CardFilm.vue';
import CardSerie from './partials/CardSerie.vue';
    export default {
        components:{
            CardFilm,
            CardSerie,
        },
        data(){
            return{
                store
            }
        }
    }
</script>

<template>
    <div class="back">
        <div class="container text-center" >
            <h3>Film</h3>
                <div class="row row-cols-4">
                    
                    <CardFilm v-for="card in store.filmList" 
                    :key="card.id" 
                    :title="card.title"
                    :original_title="card.original_title"
                    :original_language="card.original_language"
                    :vote_average="card.vote_average"
                    :poster_path="card.poster_path"

                    />
                    
                </div>
            <h3>Serie</h3>
                <div class="row row-cols-4">
                    <CardSerie />

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