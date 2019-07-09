<template>
  <div id="app">
    <v-app dark :style="styles">
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
  import TheNavigationDrawer from "./components/TheNavigationDrawer"
  import {mapMutations} from 'vuex';

  export default {
    name: "App",
    components: {BaseSnackbar, TheToolbar, TheNavigationDrawer},
    data: () => ({
      multipleBackgrounds: {},
    }),
    computed: {
      logInScreen() {
        return this.$route.path !== '/'
      },
      logInScreen2() {
        return this.$route.path !== '/Signup'
      },
      defBackground() {
        return this.$store.state.user.selectedBackground
      },
      styles() {
        return {
          'background-image': `url('${this.defBackground}')`,
          'background-repeat': 'no-repeat',
          'background-size': 'cover'
        }
      }
    },
    methods: {
      ...mapMutations('user', ['UPDATE_SELECTED_BACKGROUND'])
    },
    created() {
      const background = localStorage.getItem('definedBackground');
      this.UPDATE_SELECTED_BACKGROUND(background);
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
    background: -webkit-linear-gradient(90deg, #ff8a00, #da1b60);
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
