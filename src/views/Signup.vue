<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-card class="elevation-12" width="45em">
        <v-toolbar>
          <v-toolbar-title class="display-1"><span>Create your account:</span></v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field prepend-icon="person" name="email" label="Email" type="text"></v-text-field>
            <v-text-field prepend-icon="lock" name="password" label="Password" id="password"
                          type="password"
                          v-on:keyup.enter="goHome"
            ></v-text-field>
            <p class="text-xs-center mt-1"> If you already have an account, click
              <a @click="goLogin"
              style="color: orangered"> here
            </a></p>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="subheading pt-1" @click="goHome"><span>Create</span></v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>
    <BaseSnackbar ref="BaseSnackbarAccount" text="Your account was created"></BaseSnackbar>
  </v-container>
</template>

<script>
  import BaseSnackbar from "../components/BaseSnackbar";

  export default {
    name: "Signup",
    components: {BaseSnackbar},
    methods: {
      goLogin() {
        this.$router.push('/')
      },
      goHome() {
        this.$refs.BaseSnackbarAccount.openSnackbar();
      }
    }
  }
</script>

<style scoped>

</style>
