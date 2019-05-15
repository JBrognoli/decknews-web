<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
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
          class="mr-2"
          v-model="date"
          label="Choose date"
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
        <v-btn flat @click="closeMenu" outline>Cancel</v-btn>
        <v-btn flat @click="$refs.menu.save(date)" outline>OK</v-btn>
      </v-date-picker>
    </v-menu>
  </v-flex>
</template>

<script>
  export default {
    name: "MonthPicker",
    data: () => ({
    menu: false,
  }),
    methods: {
      closeMenu() {
        this.menu = false;
      }
    }
  }
</script>

<style scoped>

</style>