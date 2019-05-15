<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    :mini-variant.sync="mini"
    hide-overlay
    stateless
  >
    <JustifyForm ref="JustifyForm"></JustifyForm>
    <BaseSnackbar ref="BaseSnackbar2" text="STILL IN PROGRESS..."></BaseSnackbar>
    <v-toolbar class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://image.prntscr.com/image/MmJyVD9mQO66g3kIcnWLBw.png">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title> Thiago Girafinsky</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn
              icon
              @click.stop="mini = !mini"
            >
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-list dense>
      <v-list-tile @click="goHome" class="mt-1">
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title class="common">HOME</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="openJustify">
        <v-list-tile-action>
          <v-icon>create</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title class="common">JUSTIFY ABSENCE</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="openUserTable">
        <v-list-tile-action>
          <v-icon>toc</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title class="common">MANAGE USERS</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="goStyleguide">
        <v-list-tile-action>
          <v-icon>visibility</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title class="common">VIEW STYLEGUIDE</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="wip">
        <v-list-tile-action>
          <v-icon>settings</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title class="common">ACCOUNT SETTINGS</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-action>
        <v-btn icon @click="logout">
          <v-icon> logout</v-icon>
        </v-btn>
        </v-list-tile-action>
        <v-list-tile-content>LOGOUT</v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import JustifyForm from "./JustifyForm";
  import BaseSnackbar from "./BaseSnackbar"

  export default {
    name: "TheNavigationDrawer",
    components: {BaseSnackbar, JustifyForm},
    data: () => ({
      drawer: true,
      mini: true,
    }),
    methods: {
      goHome() {
        this.$router.push('/home')
      },
      logout() {
        this.$router.push('/')
      },
      openJustify() {
        this.$refs.JustifyForm.openForm();
      },
      openUserTable() {
        this.$router.push('/users')
      },
      goStyleguide() {
        this.$router.push('/styleguide')
      },
      wip() {
        this.$refs.BaseSnackbar2.openSnackbar();
      },
      openDrawer() {
        this.mini = !this.mini;
      }
    }
  }
</script>

<style scoped>

</style>