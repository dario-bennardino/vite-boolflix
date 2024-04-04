<script>
import axios from 'axios';
import { store } from './data/store'
import SearchBar from './components/SearchBar.vue';
import CardsContainer from './components/CardsContainer.vue';
import Card from './components/partials/Card.vue';
import CardSerie from './components/partials/CardSerie.vue';
  export default {
    components:{
      SearchBar, 
      CardsContainer,
      Card,
      CardSerie,
    },
    data(){
      return{
        store
      }
    },
    methods:{
      getMovies(){
        console.log('get api');
        axios.get(store.apiUrl + 'movie', {
          params: store.apiParams
        })
        .then(result => {
          console.log(result.data.results);
          store.filmList = result.data.results;
          console.log(store.filmList);
        })
        .catch(error => {
          console.log(error);
        })
      },
      getSeries(){
        axios.get(store.apiUrl + 'tv', {
          params: store.apiParams
        })
        .then(result => {
          store.tvList = result.data.results;
        })
        .catch(error => {
          console.log(error);
        })
      },
      startSearch(){
        this.getMovies()
        this.getSeries()
      }

    },
    mounted(){
      this.startSearch()
    }
  }
</script>

<template>
  <SearchBar @startSearch="startSearch" />
  <CardsContainer v-if="store.filmList.length > 0" />
</template>



<style lang="scss" scoped>
  @use './assets/scss/main.scss';
</style>
