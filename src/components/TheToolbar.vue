<template>
  <div>
    <TheNavigationDrawer ref="NavigationDrawer"></TheNavigationDrawer>

    <v-toolbar
      app
      fixed
      clipped-left
    >
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="display-2"><span>CDH V2</span></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
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

  export default {

    name: "TheToolbar",
    components: {TheNavigationDrawer},
    methods: {
      logout() {
        this.$router.push('/')
      },
    }
  }
</script>

<style scoped>

</style>
