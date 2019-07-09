<template>
  <div id="app">
    <v-app dark style="background-color: #2a2a2a">
      <div v-if="logInScreen && logInScreen2">
        <TheNavigationDrawer ref="NavigationDrawer"></TheNavigationDrawer>
      </div>
      <v-layout>
        <v-content class="all">
          <router-view/>
        </v-content>
      </v-layout>
    </v-app>
  </div>

</template>

<script>
  import BaseSnackbar from "./components/BaseSnackbar"
  import TheToolbar from "./components/TheToolbar";
  import TheNavigationDrawer from "./components/TheNavigationDrawer";

  export default {
    name: "App",
    components: {BaseSnackbar, TheToolbar, TheNavigationDrawer},
    data: () => ({
    }),
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

  .all {
    font-family: Roboto, Helvetica, sans-serif;
    font-size: 14px;
    overflow-y: hidden;
  }

  body {
    overflow-y: hidden;
  }

  .grabient {
    background: -webkit-linear-gradient(90deg, #ff8a00,#da1b60);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .font-sedan {
    font-family: 'Sedan SC', cursive;
  }

  html {
    height: 100%;
    width: 100%;
    overflow-y: hidden;
  }
</style>
