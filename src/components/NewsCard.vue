<template>
  <v-flex style="max-width: 400px">
    <v-card dark>
      <v-card-title primary-title class="pa-1 pl-3 pt-2">
        <h3 class="caption font-weight-bold"> {{ title }}</h3>
      </v-card-title>
      <v-card-text class="caption font-weight-light pa-2 pl-3">
        <div>
          <div> {{ mainText }}</div>
        </div>
      </v-card-text>
      <v-card-text class="caption font-weight-thin pa-1 pl-3">
        <div>
          <div> Author: {{ authorName }} {{ date }}</div>
        </div>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
  export default {
    name: "BaseCard",
    props: {
      title: {
        type: String,
        default: ""
      },
      mainText: {
        type: String,
        default: ""
      },
      authorName: {
        type: String,
        default: ""
      },
      date: {
        type: String,
        default: ""
      }
    }
  }
</script>

<style scoped>

</style>
