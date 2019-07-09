<template>
  <div>
    <v-dialog v-model="columnDelete.open" width="500" dark persistent>
      <v-card>
        <v-card-title class="title">
          <p>Select column's theme</p>
        </v-card-title>
        <v-divider class="mx-2"></v-divider>
        <v-card-text>
          <v-flex xs10 md11 lg10>
            <v-select
              v-model="removeTheme"
              :items="existingThemes"
              label="Theme"
              prepend-icon="collections_bookmark"
              menu-props="offsetY"
            ></v-select>
          </v-flex>
        </v-card-text>
        <v-card-actions class="pl-3 pb-3">
          <v-flex class="ma-1 text-xs-right">
            <v-btn flat @click="columnDelete.open = false" class="body-2"><span class="grabient">Cancel</span></v-btn>
          </v-flex>
          <div class="text-xs-right">
            <v-flex xs12 sm4>
              <v-btn class="body-2" @click="removeFromThemes">
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
        removeTheme: '',
      }
    },
    computed: {
      ...mapState('user', ['columnDelete', 'existingThemes']),
    },
    methods: {
      ...mapActions('user', ['updateExistingThemes']),
      removeFromThemes() {
        let array = this.existingThemes;
        let toBeRemoved = this.removeTheme;
        let filtered = array.filter(function(value, index, arr) {
          return value != toBeRemoved
        });
        localStorage.setItem('themes', JSON.stringify(filtered));
        this.updateExistingThemes(filtered);
        this.removeTheme = '';
        this.columnDelete.open = false;
      }
    },
    created() {
      const catchThemes = [];
      if (localStorage.hasOwnProperty('themes')) {
        const catchThemes = JSON.parse(localStorage.getItem('themes'));
      }
      let array = catchThemes;
      this.updateExistingThemes(array);
    }
  }
</script>

<style scoped>

</style>
