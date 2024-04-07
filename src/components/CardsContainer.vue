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
        min-height: calc(100vh - 100px);

        h3{
            color: white;
            font-size: 2rem;
            font-weight: bold;
        }
    

        // @media (max-width: 1200px) {

        //     .row.row-cols-4 {
        //         .col {
        //             flex: 0 0 33.333333%;
        //             max-width: 33.333333%;
        //         }
        //     }
        // }

        // @media (max-width: 992px) {

        //     .row.row-cols-4 {
        //         .col {
        //             flex: 0 0 50%;
        //             max-width: 50%;
        //         }
        //     }
        // }

        // @media (max-width: 768px) {

        //     .row.row-cols-4 {
        //         .col {
        //             flex: 0 0 100%;
        //             max-width: 100%;
        //             justify-content: center;
        //         }
        //     }
        // }

        @media (max-width: 1200px) {
            .col {
                flex: 0 0 33.333333%;
                max-width: 33.333333%;
            }
        }

        @media (max-width: 992px) {
            .col {
                flex: 0 0 50%;
                max-width: 50%;
            }
        }

        @media (max-width: 768px) {
            .col {
                flex: 0 0 100%;
                max-width: 100%;
            }
        }


    }    

</style>