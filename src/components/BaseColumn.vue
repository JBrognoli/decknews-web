<template>
  <v-layout column class="mr-3">
    <v-flex ma-0 pa-3 style="
                  border: 1px solid #151616;
                  border-left: 1px solid #151616;
                  border-right: 1px solid #151616;
                  background-color: #424242;
                  width: 400px;">
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
        newsCards: [{
          author: "Kris Holt",
          content: "Aside from locking down the files, the attack took down the city email network, forced Riviera Beach to pay employees and contractors by check instead of direct deposit and made it so 911 dispatchers couldn't enter calls into their systems. The city says ther… [+781 chars]",
          description: "Riviera Beach, a city in Florida, is set to pay hackers $600,000 in bitcoin with the hope of having its systems restored. Hackers took over the systems several weeks ago, when a police department employee opened a malicious email that allowed them to inject t…",
          publishedAt: "2019-06-20T14:42:00Z",
          source: Object,
          title: "Florida city gives in to $600,000 bitcoin ransomware demand",
          url: "https://www.engadget.com/2019/06/20/florida-hacker-ransom-riviera-beach/"
        },
          {
            author: "Saavon Smalls",
            content: null,
            description: "The drop follows the cryptocurrency's highest value of the year just a few days prior. Read more here. Read more... More about Tech, Mashable Video, Bitcoin, Economics, and Tech",
            publishedAt: "2019-07-02T19:22:55Z",
            source: Object,
            title: "Bitcoin instability continues, nosedives to below $10,000",
            url: "https://mashable.com/video/bitcoin-instability-nosedives/",
            urlToImage: "https://mondrian.mashable.com/2019%252F07%252F02%252F5c%252F6618394bd10847509b2c3113569cc477.99cbd.jpg%252F1200x630.jpg?signature=2ONWba6gxaPUWnrHmpk9cXWV5ro="
          }
        ]
      }
    },
    props: {
      query: {
        type: String,
        default: ''
      },
    },
    // mounted() {
    //   const url = `https://newsapi.org/v2/everything?q=${this.query}&pageSize=5&apiKey=a5d8ea3e68af4975900ed16255e5bd71`
    //   axios.get(url)
    //     .then(response => {
    //       console.log('response', response.data);
    //       if (response.data.status === 'ok') {
    //         this.newsCards = response.data.articles;
    //       }
    //     })
    // }
  }
</script>

<style scoped>

</style>
