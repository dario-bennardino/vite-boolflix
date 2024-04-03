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

            }
        }
    }
</script>

<template>
    <div class="container text-center" >
        <h3>Film</h3>
            <div class="row row-cols-4">
                <CardFilm />
                
            </div>
        <h3>Serie</h3>
            <div class="row row-cols-4">
                <CardSerie />
                
            </div>
    </div>
</template>



<style lang="scss" scoped>

</style>