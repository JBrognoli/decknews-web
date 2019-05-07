<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card dark max-width="500px" max-height="500px">
        <v-card-title primary-title class="title"><span>Selecione o horário de saída:</span></v-card-title>
        <v-layout row wrap class="ml-3">
          <v-flex xs11 sm5>
            <v-menu
              ref="menu"
              v-model="menu2"
              :close-on-content-click="false"
              :nudge-right="40"
              :return-value.sync="time"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="time"
                  label="Picker in menu"
                  prepend-icon="access_time"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                dark
                v-if="menu2"
                v-model="time"
                full-width
                @click:minute="$refs.menu.save(time)"
              ></v-time-picker>
            </v-menu>
          </v-flex>
        </v-layout>
        <v-flex class="pa-2 pl-3">
          <v-card-actions class="pl-3 pb-3">
            <v-flex class="ma-1 text-xs-right">
              <v-btn flat outline class="subheading" @click="time = null"><span>Clear</span></v-btn>
            </v-flex>
            <div class="text-xs-right">
              <v-flex
                xs12
                sm4>
                <v-btn
                  outline
                  class="subheading"
                  @click="snackbar = true"
                >
                  <span>Bottom Left</span>
                </v-btn>
              </v-flex>
            </div>
          </v-card-actions>
        </v-flex>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import BaseSnackbar from "./BaseSnackbar";

  export default {
    name: "SessionStart",
    components: {BaseSnackbar},
    data() {
      return {
        time: null,
        menu2: false,
        modal2: false,
        dialog: false,
        color: null,
        snackbar: false,
      }
    },
    methods: {}
  }
</script>

<style scoped>

</style>
