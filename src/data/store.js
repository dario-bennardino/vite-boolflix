import { reactive } from 'vue'

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/search/',

    apiParams: {
        api_key: 'b54950952f8257f5196ebdd842239a71',
        language: 'it-IT',
        query: 'matrix',
    },

    filmList: [],
    tvList: [],
})

