<template>
  <div>
    <SessionStart ref="SessionStart"></SessionStart>
    <TheNavigationDrawer ref="NavigationDrawer"></TheNavigationDrawer>

    <v-toolbar
      app
      fixed
      clipped-left
    >
      <v-toolbar-side-icon @click="openNavDrawer"></v-toolbar-side-icon>
      <v-toolbar-title class="display-2"><span>CDH V2</span></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="openDialogSS">
        <v-icon color="" >power_settings_new</v-icon>
      </v-btn>
      <v-btn icon @click="logout">
        <v-icon> logout</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
  import TheNavigationDrawer from "./TheNavigationDrawer";
  import SessionStart from "./SessionStart";

  export default {

    name: "TheToolbar",
    components: {TheNavigationDrawer, SessionStart},
    methods: {
      logout() {
        this.$router.push('/')
      },
      openNavDrawer() {
        this.$refs.NavigationDrawer.openDrawer();
      },
      openDialogSS() {
        this.$refs.SessionStart.openSessionStart();
      },
    }
  }
</script>

<style scoped>

</style>