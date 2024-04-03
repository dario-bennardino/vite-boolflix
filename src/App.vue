<script>
import axios from 'axios';
import { store } from './data/store'
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import CardFilm from './components/partials/CardFilm.vue';
import CardSerie from './components/partials/CardSerie.vue';
  export default {
    components:{
      Header, 
      Main,
      CardFilm,
      CardSerie,
    },
    data(){
      return{
        store
      }
    },
    methods:{
      getApi(){
        console.log('get api');
        axios.get(this.store.apiUrlMovie, {
          params:{
            title:'',
            original_title:'',
            original_language:'',
            vote_average:'',

          }
        })
        .then(result => {
          console.log(result.data.results);
          this.store.filmList = result.data.results;
          console.log(this.store.filmList);
        })
        .catch(error => {
          console.log(error);
        })
      }
    },
    mounted(){
      this.getApi()
    }
  }
</script>

<template>
  <Header />
  <Main />
</template>



<style lang="scss" scoped>
  @use './assets/scss/main.scss';
</style>
