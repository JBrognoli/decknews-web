<template>
  <v-layout column class="mt-1 ml-1">
    <v-flex pa-3 style="
                  border: 1px solid black;
                  border-left: 2px solid black;
                  border-right: 2px solid black;
                  max-width: 400px;">

      <div class="title ml-4"><span>Politics</span></div>
      <v-divider
        style="border-top: 0.5px solid white"
        class="mx-2"
      ></v-divider>
    </v-flex>
    <ul v-for="newsCard in newsCards" class="pa-0">
      <NewsCard style="
                  border: 1px solid black;
                  border-left: 2px solid black;
                  border-right: 2px solid black"
                :title="newsCard.title"
                :main-text="newsCard.mainText"
                :author-name="newsCard.authorName"
      >
      </NewsCard>
    </ul>
  </v-layout>
</template>

<script>
  import NewsCard from './NewsCard.vue'

  export default {
    name: "BaseColumn",
    components: {NewsCard},
    methods: {},
    data() {
      return {
        newsCards: [
          {
            title: "Bitcoin’s Explosive Rally Targets $6,500...",
            mainText: "“By CCN: The bitcoin price could surge to $6,500 soon because it breached a key resistance level of $5,500 this week. That’s the assessment of Naeem Aslam, the Chief Market Analyst at ThinkMarkets, a forex and derivatives broker. Indeed, bitcoin has roared to Indeed, bitcoin ha Indeed, bitcoin, read more...“",
            authorName: "Samanta Chang * 13 days ago",
          },
          {
            title: "Correa",
            mainText: "ASDASDASDASD",
            authorName: "GOGoboys * 11 years ago",
          },
          {
            title: "COCO",
            mainText: "Freeza",
            authorName: "Goku pau no teu cu * last month"
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
