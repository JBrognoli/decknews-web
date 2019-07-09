<template>
  <div>
    <v-dialog v-model="columnAdd.open" width="500" dark class="elevation-10" persistent>
      <v-card>
        <v-card-title class="title">
          <p>What's the new column's theme?</p>
        </v-card-title>
        <v-divider class="mx-2"></v-divider>
        <v-card-text>
          <v-flex xs10 md11 lg10>
            <v-text-field
              v-model="selectedTheme"
              label="Theme"
              prepend-icon="collections_bookmark"
            ></v-text-field>
          </v-flex>
        </v-card-text>
        <v-card-actions class="pl-3 pb-3">
          <v-flex class="ma-1 text-xs-right">
            <v-btn flat @click="columnAdd.open = false" class="body-2"><span class="grabient">Cancel</span></v-btn>
          </v-flex>
          <div class="text-xs-right">
            <v-flex xs12 sm4>
              <v-btn class="body-2" @click="addToThemes">
                <span class="grabient">Confirm</span>
              </v-btn>
            </v-flex>
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex';

  export default {
    name: "ColumnAdd",
    data() {
      return {
        selectedTheme: '',
      };
    },
    computed: {
      ...mapState('user', ['columnAdd'])
    },
    methods: {
      ...mapActions('user', ['updateExistingThemes']),
      addToThemes() {
        let themes = new Array();
        if (localStorage.hasOwnProperty('themes')) {
          themes = JSON.parse(localStorage.getItem('themes'))
        }
        themes.push(this.selectedTheme);
        localStorage.setItem('themes', JSON.stringify(themes));
        this.updateExistingThemes(themes);
        this.selectedTheme = '';
        this.columnAdd.open = false;
      }
    }
  }
</script>

<style scoped>

</style>
