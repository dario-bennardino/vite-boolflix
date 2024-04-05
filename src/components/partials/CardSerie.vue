<script>
import { store } from '../../data/store'
    export default {
        props:{
          cardObj: Object,
        },
        methods:{
          fullStars(vote) { return Math.floor(vote / 2);},
          emptyStars(vote) { return Math.ceil(5 - (vote /2))}
        }
    }
</script>

<template>
    <div class="col mb-4 ">
        
        <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                    <img :src="`http://image.tmdb.org/t/p/w300${cardObj.poster_path}`" :alt="`Locandina ${cardObj.original_title || cardObj.original_name}`" class="card-img">
                </div>
                <div class="flip-card-back">
                    <h4>{{ cardObj.title || cardObj.name }}</h4>
                    <p>{{ cardObj.original_title || cardObj.original_name }}</p>
                    <img class="flag" v-if="cardObj.original_language=='it'" src="/public/assets/img/it.png" alt="it">
                    <img class="flag" v-if="cardObj.original_language=='en'" src="/public/assets/img/en.png" alt="en">
                    <p v-if="cardObj.original_language!='it' && cardObj.original_language!='en' "> {{ cardObj.original_language }} </p> 
                    <!-- <p>Voto: {{ cardObj.vote_average }}</p> -->
                    <div>
                      <i v-for="star in fullStars(cardObj.vote_average)" :key="star" class="fa-solid fa-star "></i>
                      <i v-for="star in emptyStars(cardObj.vote_average)" :key="star" class="fa-regular fa-star"></i>
                    </div>  
                    <h7>{{ cardObj.overview }}</h7>   
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.flip-card {
    background-color: transparent;
    width: 300px;
    height: 400px;
    perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  background-color: black;
  color: white;
  transform: rotateY(180deg);
}

.flag{
  width: 30px;
  height: 20px;
}

.card-img{
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>