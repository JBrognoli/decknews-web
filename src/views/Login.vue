<template>

  <v-container fluid fill-height>
    <v-layout align-center justify-center>
        <v-card class="elevation-12" width="45em">
          <v-toolbar>
            <v-toolbar-title class="display-1"><span>Login - Deck News</span></v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
              <v-text-field prepend-icon="lock" name="password" label="Password" id="password"
                            type="password"
                            v-on:keyup.enter="goHome"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="subheading" @click="goHome"><span>Login</span></v-btn>
          </v-card-actions>
        </v-card>
    </v-layout>
  </v-container>
</template>

<script>

  export default {
    name: "Login",
    methods: {
      goHome() {
        this.$router.push('home')
      }
    }
  }

</script>

<style>

</style>