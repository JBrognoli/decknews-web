<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div>
    <v-dialog
      v-model="dialog"
      width="400"
      dark
    >
      <v-card max-width="500px" max-height="500px">
        <v-card-title class="title"><span>Selecione o horário de saída:</span></v-card-title>
        <v-layout row wrap class="ml-3">
          <v-flex xs12 sm12 md8>
            <v-menu
              v-model="menu2"
              :close-on-content-click="false"
              :nudge-right="40"
              :return-value.sync="timeclock"
              offset-y
              full-width
              max-width="250px"
              min-width="250px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="timeClock"
                  label="Select time"
                  prepend-icon="access_time"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                v-if="menu2"
                v-model="timeClock"
                full-width
                @click:minute="$refs.menu.save(timeClock)"
              ></v-time-picker>
            </v-menu>
          </v-flex>
        </v-layout>
        <v-flex class="pa-2 pl-3">
          <v-card-actions class="pl-3 pb-3">
            <v-flex class="ma-1 text-xs-right">
              <v-btn flat outline class="subheading" @click="timeClock= null"><span>Clear</span></v-btn>
            </v-flex>
            <div class="text-xs-right">
              <v-flex
                xs12
                sm4>
                <v-btn
                  outline
                  class="subheading"
                  @click="setExpectedTime"
                >
                  <span>Confirm</span>
                </v-btn>
              </v-flex>
            </div>
          </v-card-actions>
        </v-flex>
      </v-card>
    </v-dialog>
    <BaseSnackbar ref="BaseSnackBar"></BaseSnackbar>
    <BaseSnackbar ref="BaseSnackBarError" text="Error! Set your time"></BaseSnackbar>
  </div>
</template>

<script>
  import BaseSnackbar from "./BaseSnackbar";
  import BaseDialog from "./BaseDialog";

  export default {
    name: "SessionStart",
    components: {BaseSnackbar, BaseDialog},
    data() {
      return {
        timeClock: null,
        menu2: false,
        modal2: false,
        dialog: false,
        color: null,
        inSessionIndex: false,
      }
    },
    methods: {
      openSessionStart() {
        this.dialog = true;
      },
      setExpectedTime() {
        (this.timeClock) ? this.trueExpectedTime() : this.falseExpectedTime();
        this.inSessionIndex = true;
      },
      trueExpectedTime() {
        this.dialog = false;
        this.$refs.BaseSnackBar.openSnackbar();
      },
      falseExpectedTime() {
        this.$refs.BaseSnackBarError.openSnackbar();
      }
    },


  }
</script>

<style scoped>

  p {
    background: white;
  }
</style>