import { reactive } from 'vue'

export const store = reactive({
    apiUrlMovie: 'https://api.themoviedb.org/3/search/movie?api_key=b54950952f8257f5196ebdd842239a71&query=matrix',
    apiUrlTv: 'https://api.themoviedb.org/3/search/tv?api_key=b54950952f8257f5196ebdd842239a71&query=lost',
    filmList: [],
    tvList: [],
})