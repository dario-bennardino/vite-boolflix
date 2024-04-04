<script>
import axios from 'axios';
import { store } from './data/store'
import SearchBar from './components/SearchBar.vue';
import CardsContainer from './components/CardsContainer.vue';
import CardFilm from './components/partials/CardFilm.vue';
import CardSerie from './components/partials/CardSerie.vue';
  export default {
    components:{
      SearchBar, 
      CardsContainer,
      CardFilm,
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
      }

    },
    mounted(){
      this.getMovies()
      this.getSeries()
    }
  }
</script>

<template>
  <SearchBar />
  <CardsContainer />
</template>



<style lang="scss" scoped>
  @use './assets/scss/main.scss';
</style>
