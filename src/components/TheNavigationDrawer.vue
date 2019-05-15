<template>
  <v-navigation-drawer
    clipped
    fixed
    v-model="drawer"
    app
  >
    <JustifyForm ref="JustifyForm"></JustifyForm>
    <BaseSnackbar ref="BaseSnackbar2" text="STILL IN PROGRESS..."></BaseSnackbar>
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
    }),
    methods: {
      goHome() {
        this.$router.push('/home')
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
        this.drawer = !this.drawer;
      }
    }
  }
</script>

<style scoped>

</style>