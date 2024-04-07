<script>
import { store } from '../data/store'
    export default {
        data(){
            return{
                store
            }
        }
    }
</script>

<template>
    <div class="">
        <nav class="navbar navbar-expand-lg navbar-light bg-light p-2 d-flex justify-content-between">
            <a class="navbar-brand" href="#">Boolflix</a>

            <form @submit.prevent class="form-inline my-2 my-lg-0 ml-auto d-flex">

                <input 
                v-model.trim="store.apiParams.query"
                class="form-control mr-sm-2" 
                type="search" 
                placeholder="Search" 
                aria-label="Search">
                <button @click="$emit('startSearch')" class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    </div>    
</template>



<style lang="scss" scoped>

    .navbar{
        height: 100px;
        // background-color: lighten($black, 40%);
        // background-color: $black;
        // background-color: black;
    }

    a{
        font-size: 2.5rem;
        font-weight: bold;
        color: #E70000;
    }

    .navbar-brand:hover {
        color: #E70000; 
    }

    .btn-outline-success{
        color: #E70000;
    }

    .btn-outline-success:hover{
        background-color: white;
    }
        
    @media (max-width: 492px) {
    .navbar-brand {
        width: 100%;
    }

    .navbar{
        height: 200px;

    }



}       
        
    
   

</style>