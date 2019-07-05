<template>
  <v-container fluid fill-height grid-list-xs class="ma-0 pa-2">
    <v-layout>
      <v-flex xs12 style="background-color: red">
        <h1> fodase</h1>
      </v-flex>
      <v-flex xs12 style="background-color: blue">
        <h1> fodase azul</h1>
      </v-flex>
      <v-flex xs12 style="background-color: green">
        <h1> fodase verde</h1>
      </v-flex>
      <v-flex xs12 style="background-color: pink">
        <h1> fodase rosa</h1>
      </v-flex>
      <v-flex xs12 style="background-color: grey">
        <h1> fodase cinza</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import BaseColumn from "./BaseColumn";

  export default {
    name: "BaseDeck",
    components: {BaseColumn}
  }
</script>

<style scoped>

</style>
