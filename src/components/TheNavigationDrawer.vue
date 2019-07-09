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
            <img :src="avatarPhotoURL"
                 title="Profile Image">
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
        <v-list-tile @click="openBackgroundSelector" title="Background Selector">
          <v-list-tile-action>
            <v-icon>desktop_windows</v-icon>
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
<!--        <v-list-tile @click="" title="Settings">-->
<!--          <v-list-tile-action>-->
<!--            <v-icon>settings</v-icon>-->
<!--          </v-list-tile-action>-->
<!--          <v-list-tile-content>-->
<!--            <v-list-tile-title class="common">ACCOUNT SETTINGS</v-list-tile-title>-->
<!--          </v-list-tile-content>-->
<!--        </v-list-tile>-->
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
    <BackgroundSelector></BackgroundSelector>
  </v-navigation-drawer>
</template>

<script>
  import BaseSnackbar from "./BaseSnackbar"
  import firebase from 'firebase';
  import {mapActions, mapState} from 'vuex';
  import ColumnAdd from './ColumnAdd';
  import ColumnDelete from './ColumnDelete';
  import BackgroundSelector from "./BackgroundSelector";

  export default {
    name: "TheNavigationDrawer",
    components: {BackgroundSelector, ColumnAdd, BaseSnackbar, ColumnDelete},
    data: () => ({
      drawer: true,
      avatarPhotoURL: '',
    }),
    methods: {
      ...mapActions('user', ['updateColumnAdd', 'updateColumnDelete', 'updateBackgroundSelector']),
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
      },
      openBackgroundSelector() {
        this.updateBackgroundSelector({
          open: true,
        })
      }
    },
    computed: {
      ...mapState('user', ['userInfo'])
    },
    created() {
      this.avatarPhotoURL = localStorage.getItem('photoURL');
    }
  }
</script>

<style scoped>

</style>
