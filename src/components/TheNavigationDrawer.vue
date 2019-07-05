<template>
  <v-navigation-drawer
          v-model="drawer"
          app
          mini-variant
          permanent
          class="mr-2"
  >
    <JustifyForm ref="JustifyForm"></JustifyForm>
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
    <v-list dense>
      <v-list-tile @click="goHome" title="Home">
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title class="common">HOME</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="goStyleguide" title="Styleguide">
        <v-list-tile-action>
          <v-icon>visibility</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title class="common">VIEW STYLEGUIDE</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="" title="Settings">
        <v-list-tile-action>
          <v-icon>settings</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title class="common">ACCOUNT SETTINGS</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="" title="Report">
        <v-list-tile-action>
          <v-icon>report</v-icon>
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
            logout() {
                this.$router.push('/')
            },
            goStyleguide() {
                this.$router.push('/styleguide')
            },
        }
    }
</script>

<style scoped>

</style>
