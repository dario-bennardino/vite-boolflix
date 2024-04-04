<script>
import { store } from '../../data/store'
    export default {
        props:{
          cardObj: Object,
        }
    }
</script>

<template>
    <div class="col mb-4 ">
        
        <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                    <img :src="poster_path" :alt="cardObj.title || cardObj.name" style="width:300px;height:300px;">
                </div>
                <div class="flip-card-back">
                    <h1>{{ cardObj.title || cardObj.name }}</h1>
                    <p>{{ cardObj.original_title || cardObj.original_name }}</p>
                    <img class="flag" v-if="cardObj.original_language=='it'" src="/public/assets/img/it.png" alt="it">
                    <img class="flag" v-if="cardObj.original_language=='en'" src="/public/assets/img/en.png" alt="en">
                    <p v-if="cardObj.original_language!='it' && cardObj.original_language!='en' "> {{ cardObj.original_language }} </p> 
                    <p>{{ cardObj.vote_average }}</p>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.flip-card {
    background-color: transparent;
    width: 300px;
    height: 300px;
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
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
}

.flag{
  width: 30px;
  height: 20px;
}
</style>