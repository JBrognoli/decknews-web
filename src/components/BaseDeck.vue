<template>
  <v-container class="pa-0 mx-2">
    <v-layout>
      <div v-for="(query, index) in existingThemes" :key="index">
        <BaseColumn :query="query"></BaseColumn>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
  import BaseColumn from "./BaseColumn";
  import {mapState, mapActions} from 'vuex';

  export default {
    name: "BaseDeck",
    components: {BaseColumn},
    data () {
      return {}
    },
    computed: {
      ...mapState('user', ['existingThemes'])
    },
    methods: {
      ...mapActions('user', ['updateExistingThemes'])
    },
    created() {
      let array = Array;
      if (localStorage.hasOwnProperty('themes')) {
        this.queries = JSON.parse(localStorage.getItem('themes'));
      }
      array = this.queries;
      this.updateExistingThemes(array);
    }
  }
</script>

<style scoped>

</style>
