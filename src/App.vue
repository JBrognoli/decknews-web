<template>
  <div id="app">
    <v-app dark>
      <div v-if="logInScreen && logInScreen2">
        <TheNavigationDrawer ref="NavigationDrawer"></TheNavigationDrawer>
        <TheFooter></TheFooter>
      </div>
      <v-layout>
        <v-content>
          <router-view/>
        </v-content>
      </v-layout>
    </v-app>
  </div>

</template>

<script>
  import BaseTable from "./components/BaseTable";
  import BaseSnackbar from "./components/BaseSnackbar"
  import SessionStart from "./components/SessionStart"
  import TimeRegister from "./components/TimeRegister"
  import UserReport from "./components/UserReport";
  import JustifyForm from "./components/JustifyForm";
  import TheToolbar from "./components/TheToolbar";
  import TheNavigationDrawer from "./components/TheNavigationDrawer";
  import TheFooter from "./components/TheFooter";

  export default {
    name: "App",
    components: {JustifyForm, UserReport, BaseTable, BaseSnackbar, SessionStart, TimeRegister, TheFooter, TheToolbar, TheNavigationDrawer},
    data: () => ({
    }),
    methods: {
      openSnackbar() {
        this.$refs.BaseSnackBar.openSnackbar();
      },
    },
    computed: {
      logInScreen() {
        return this.$route.path !== '/'
      },
      logInScreen2() {
        return this.$route.path !== '/Signup'
      },
    }
  }
</script>

<style>

</style>
