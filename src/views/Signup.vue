<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-card class="elevation-12" width="45em">
        <v-toolbar>
          <v-toolbar-title class="display-1 grabient"><span>Create your account</span></v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field prepend-icon="person" v-model="user.email" name="email" label="Email"
                          type="text"></v-text-field>
            <v-text-field prepend-icon="lock" v-model="user.password" name="password" label="Password" id="password"
                          type="password"
                          v-on:keyup.enter="goHome"
            ></v-text-field>
            <p class="text-xs-center mt-1"> If you already have an account, click
              <a @click="goLogin"> <span class="subheading grabient">here</span></a></p>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="signUp"><span class="grabient">Create</span></v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>
    <BaseSnackbar></BaseSnackbar>
  </v-container>
</template>

<script>
  import BaseSnackbar from "../components/BaseSnackbar";
  import firebase from 'firebase';
  import {mapActions, mapState, mapMutations} from 'vuex';

  export default {
    name: "Signup",
    components: {BaseSnackbar},
    data() {
      return {
        user: {
          email: '',
          password: '',
        },
      }
    },
    computed: {
      ...mapState('user', ['baseSnackbar'])
    },
    methods: {
      ...mapActions('user', ['updateBaseSnackbar']),
      ...mapMutations('user', ['UPDATE_BASE_SNACKBAR']),
      goLogin() {
        this.$router.push('/')
      },
      signUp() {
        firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password)
          .then((user) => {
            this.updateBaseSnackbar({
              open: true,
              text: 'Sua conta foi criada com sucesso'
            });
            this.$router.replace('home')
          }).catch(() => {
          this.UPDATE_BASE_SNACKBAR({
            open: true,
            text: 'Erro durante a criação, tente novamente'
          });
        })
      }
    }
  }
</script>

<style scoped>

</style>
