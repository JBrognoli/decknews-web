<template>
  <v-layout column class="mr-3">
    <v-flex ma-0 pa-3 style="
                  border: 1px solid #151616;
                  border-left: 1px solid #151616;
                  border-right: 1px solid #151616;
                  background-color: #424242;
                  width: 450px;">
      <div class="title ml-4 grabient font-sedan"><span>{{ query }}</span></div>
      <v-divider
        style="border-top: 0.5px solid white"
        class="mx-2"
      ></v-divider>
    </v-flex>
    <ul v-for="newsCard in newsCards" class="pa-0">
      <NewsCard style="
                  border: 1px solid #151616;
                  border-left: 1px solid #151616;
                  border-right: 1px solid #151616"
                :title="newsCard.title"
                :description="newsCard.description"
                :author="newsCard.author"
                :publishedAt="newsCard.publishedAt"
                :url="newsCard.url"
                :image="newsCard.urlToImage"
      >
      </NewsCard>
    </ul>
  </v-layout>
</template>

<script>
  import NewsCard from './NewsCard.vue'
  import axios from 'axios';

  export default {
    name: "BaseColumn",
    components: {NewsCard},
    methods: {},
    data() {
      return {
        newsCards: []
      }
    },
    props: {
      query: {
        type: String,
        default: ''
      },
    },
    mounted() {
      const url = `https://newsapi.org/v2/everything?q=${this.query}&pageSize=5&apiKey=a5d8ea3e68af4975900ed16255e5bd71`
      axios.get(url)
        .then(response => {
          console.log('response', response.data);
          if (response.data.status === 'ok') {
            this.newsCards = response.data.articles;
          }
        })
    }
  }
</script>

<style scoped>

</style>
