<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-dialog v-model="dialog" max-width="700px">
    <v-card>
      <v-card-title >
        <span class="headline">Justify Absence</span>
      </v-card-title>
      <v-card-text>
        <v-layout wrap class="ml-4">
          <v-flex xs12 sm8 md5>
            <v-select class="pr-3"
                      prepend-icon="tag_faces"
                      label="User"
                      :items="users"
                      item-text="name"
            ></v-select>
          </v-flex>
          <v-flex xs12 sm8 md5>
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
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="date"
                  label="Select date"
                  prepend-icon="event"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
              </v-date-picker>
            </v-menu>
          </v-flex>
          <v-flex xs12 sm10>
            <v-textarea name="input-7-1" prepend-icon="edit" label="Justify" required placeholder="Write your text here."></v-textarea>
          </v-flex>
          <v-flex xs12 sm10>
            <v-layout row>
              <v-flex>
                <v-slider
                  color="orange darken-4"
                  prepend-icon="alarm_add"
                  v-model="slider"
                  :max="max"
                  :min="min"
                ></v-slider>
              </v-flex>
              <v-flex shrink style="width: 60px" >
                <v-text-field
                  v-model="slider"
                  class="mt-0 ml-3"
                  hide-details
                  single-line
                  type="number"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs12 sm6>
          </v-flex>
        </v-layout>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <div class="ma-2">
          <v-btn flat @click="dialog = false" outline>Close</v-btn>
          <v-btn flat @click="dialog = false" outline>Save</v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: "JustifyForm",
    data: () => ({
      min: 0,
      max: 12,
      slider: 4,
      dialog: false,
      users: [
        {name: 'joao', email: 'brog@hotmail.com', birthDate: 15092000, entryDate: 17032019, exitDate: 123456789},
        {name: 'brezika', email: 'breza@hotmail.com', birthDate: 20322000, entryDate: 22032017, exitDate: 987654321},
        {name: 'osgado', email: 'osgado@hotmail.com', birthDate: 20123000, entryDate: 23988891, exitDate: 182863882},
        {
          name: 'brunoldo',
          email: 'brunoldo@hotmail.com',
          birthDate: 20322000,
          entryDate: 22032017,
          exitDate: 987654321
        },
        {
          name: 'vegalipe',
          email: 'vegalipe@hotmail.com',
          birthDate: 20322000,
          entryDate: 22032017,
          exitDate: 987654321
        },
        {
          name: 'biribomb',
          email: 'biribomb@hotmail.com',
          birthDate: 20322000,
          entryDate: 22032017,
          exitDate: 987654321
        },
      ]
    }),
    methods: {
      openForm() {
        this.dialog = true;
      }
    },
  }
</script>

<style scoped>

  .sliderColor {
    color: linear-gradient(to right,#ff8a00,#da1b60);
  }

</style>