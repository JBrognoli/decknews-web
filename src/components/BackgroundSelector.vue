<template>
  <div>
    <v-dialog v-model="backgroundSelector.open" width="750" dark  persistent>
      <v-card>
        <v-card-title class="title">
          <p class="grabient headline">Choose your background</p>
        </v-card-title>
        <v-divider class="mx-2"></v-divider>
        <v-card-text>
          <v-container fluid grid-list-sm>
            <v-layout row wrap>
              <v-flex xs4>
                <button style="width: 100%; height: 100%" @click="chosenBackground = 'https://images.unsplash.com/photo-1493441883526-0ed85220dc0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2091&q=80'"><img src="../assets/ocean.jpg" class="image" alt="background" width="100%" height="100%"></button>
              </v-flex>
              <v-flex xs4>
                <button style="width: 100%; height: 100%" @click="chosenBackground = 'https://images.unsplash.com/photo-1495580847032-db0bac41d44b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'"><img src="../assets/debochado.jpg" class="image" alt="background" width="100%" height="100%"></button>
              </v-flex>
              <v-flex xs4>
                <button style="width: 100%; height: 100%" @click="chosenBackground = 'https://images.unsplash.com/photo-1454779132693-e5cd0a216ed3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80'"><img src="../assets/brightness.jpg" class="image" alt="background" width="100%" height="100%"></button>
              </v-flex>
              <v-flex xs4>
                <button style="width: 100%; height: 100%" @click="chosenBackground = 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'"><img src="../assets/predio.jpg" class="image" alt="background" width="100%" height="100%"></button>
              </v-flex>
              <v-flex xs4>
                <button style="width: 100%; height: 100%" @click="chosenBackground = 'https://images.unsplash.com/photo-1471584363844-b3909b58d6f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80'"><img src="../assets/snow.jpg" class="image" alt="background" width="100%" height="100%"></button>
              </v-flex>
              <v-flex xs4>
                <button style="width: 100%; height: 100%" @click="chosenBackground = 'https://images.unsplash.com/photo-1458724338480-79bc7a8352e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'"><img src="../assets/tiger.jpg" class="image" alt="background" width="100%" height="100%"></button>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions class="pl-3 pb-3">
          <v-flex class="ma-1 text-xs-right">
            <v-btn flat @click="backgroundSelector.open = false" class="body-2"><span class="grabient">Cancel</span></v-btn>
          </v-flex>
          <div class="text-xs-right">
            <v-flex xs12 sm4>
              <v-btn class="body-2" @click="confirmBackground">
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
  import {mapState, mapMutations} from 'vuex';

  export default {
    name: "BackgroundSelector",
    data() {
      return {
        chosenBackground: '',
      }
    },
    computed: {
      ...mapState('user', ['backgroundSelector'])
    },
    methods: {
      ...mapMutations('user', ['UPDATE_SELECTED_BACKGROUND']),
      confirmBackground() {
        this.UPDATE_SELECTED_BACKGROUND(this.chosenBackground);
        localStorage.setItem('definedBackground', this.chosenBackground);
        this.backgroundSelector.open = false;
      }
    }
  }
</script>

<style scoped>

</style>