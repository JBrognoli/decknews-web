<script>
  import BaseTable from "../components/BaseTable";

  export default {
    name: "darkHome",
    components: {BaseTable},
    data: () => ({
      drawer: true
    }),
  }
</script>

<template>
  <div id="app">
    <v-app dark>
      <v-navigation-drawer
        clipped
        fixed
        v-model="drawer"
        app
      >
        <v-list dense>
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon>play_circle_outline</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="common">START SESSION</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon>stop</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="common">FINISH SESSION</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon>pageview</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="common">VIEW REPORT</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon>create</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="common">JUSTIFY ABSENCE</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon>toc</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="common">MANAGE USERS</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar
        app
        fixed
        clipped-left
      >
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title class="display-2 "><span>Deck News</span></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon class="pr-3"> input</v-icon>
        </v-btn>
      </v-toolbar>
      <v-container>
        <v-layout>
          <v-flex>
            <BaseTable></BaseTable>
          </v-flex>
        </v-layout>
      </v-container>
      <v-footer app>
        <span class="px-3">&copy; {{ new Date().getFullYear() }}</span>
      </v-footer>
    </v-app>
  </div>

</template>

<style>

  .common {
    font-family: 'Roboto', sans-serif;
  }

</style>
