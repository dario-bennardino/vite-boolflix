<script>
import { store } from '../data/store'
import Card from './partials/Card.vue';
    export default {
        components:{
            Card
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
                <Card />
                
            </div>
        <h3>Serie</h3>
            <div class="row row-cols-4">
                <Card />
            </div>
    </div>
</template>



<style lang="scss" scoped>

</style>