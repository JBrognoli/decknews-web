<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    mini-variant
    permanent
  >
    <v-toolbar class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://yt3.ggpht.com/a/AGF-l7_mseyJ3WVEf5swff0n9BrF_E8RWlQdDqwpfQ=s900-mo-c-c0xffffffff-rj-k-no"
                 title="Sonic 3D">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title> Realistic Sonic</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon>
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-layout column fill-height>
      <v-list>
        <v-list-tile @click="goHome" title="Home">
          <v-list-tile-action>
            <v-icon medium>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="common">HOME</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="openColumnAdd" title="Add Column">
          <v-list-tile-action>
            <v-icon medium>add</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="common">Column</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="openColumnDelete" title="Delete Column">
          <v-list-tile-action>
            <v-icon>delete</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="common">Delete Column</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-spacer></v-spacer>
      <v-list class="mb-5 pb-4">
        <v-list-tile @click="" title="Settings">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="common">ACCOUNT SETTINGS</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="logout" title="Logout">
          <v-list-tile-action>
            <v-icon class="ml-1">logout</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>LOGOUT</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-layout>
    <ColumnAdd></ColumnAdd>
    <ColumnDelete></ColumnDelete>
  </v-navigation-drawer>
</template>

<script>
  import BaseSnackbar from "./BaseSnackbar"
  import firebase from 'firebase';
  import {mapActions} from 'vuex';
  import ColumnAdd from './ColumnAdd';
  import ColumnDelete from './ColumnDelete';

  export default {
    name: "TheNavigationDrawer",
    components: {ColumnAdd, BaseSnackbar, ColumnDelete},
    data: () => ({
      drawer: true,
    }),
    methods: {
      ...mapActions('user', ['updateColumnAdd', 'updateColumnDelete']),
      goHome() {
        this.$router.push('/home')
      },
      logout() {
        firebase.auth().signOut()
          .then(() => {
            this.$router.replace('/')
          })
      },
      openColumnAdd() {
        this.updateColumnAdd({
          open: true,
        })
      },
      openColumnDelete() {
        this.updateColumnDelete({
          open: true,
        })
      }
    }
  }
</script>

<style scoped>

</style>
