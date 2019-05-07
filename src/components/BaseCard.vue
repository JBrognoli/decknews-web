<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card dark>
        <v-card-title primary-title>
            <h3 class="title mb-0"> {{ card_title }}</h3>
        </v-card-title>
        <v-card-text>
          <div>
            <div> {{ card_text }}</div>
          </div>
        </v-card-text>
        <v-card-text>
          <div>
            <div> {{ card_author}}</div>
          </div>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: "BaseCard",
    data () {
      return {
        card_title: 'Bitcoin`s explosive rally targets $6,500...',
        card_text: 'Brief: “By CCN: The bitcoin price could surge to $6,500 soon because it breached a key resistance level of $5,500 this week. That’s the assessment of Naeem Aslam, the Chief Market Analyst at ThinkMarkets, a forex and derivatives broker. Indeed, bitcoin has roared to Indeed, bitcoin ha Indeed, bitcoin.',
        card_author: 'Samantha Chang  *  13 days ago'
      }
    }
  }
</script>

<style scoped>

</style>
