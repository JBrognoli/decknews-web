<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card dark max-width="500px" max-height="500px">
        <v-card-title primary-title class="title"><span>Selecione a data do relatório: </span></v-card-title>
        <v-layout row wrap class="ml-3">
          <v-flex xs11 sm5>
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :nudge-right="40"
              :return-value.sync="date"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="date"
                  label="Picker in menu"
                  prepend-icon="event"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                dark
                v-model="date"
                type="month"
                no-title
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
              </v-date-picker>
            </v-menu>
          </v-flex>
        </v-layout>
        <v-flex class="pa-2 pl-3">
          <v-card-actions class="pl-3 pb-3">
            <v-flex class="ma-1 text-xs-right">
              <v-btn flat outline class="subheading" @click="date = null"><span>Clear</span></v-btn>
            </v-flex>
            <div class="text-xs-center">
              <v-dialog
                v-model="dialog"
                width="500"
                dark
              >
                <template v-slot:activator="{ on }">
                  <v-btn flat outline class="subheading" v-on="on"><span>Confirm</span></v-btn>
                </template>

                <v-card>
                  <v-card-title
                    class="title"
                  >
                    <<'Relatório'>>
                  </v-card-title>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      @click="dialog = false"
                      flat
                      outline
                    >
                      <span>Podepá</span>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </v-card-actions>
        </v-flex>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: "UserReport",
    data: () => ({
      dialog: false,
      date: new Date().toISOString().substr(0, 7),
      menu: false,
      modal: false,
    })
  }

</script>

<style scoped>

</style>