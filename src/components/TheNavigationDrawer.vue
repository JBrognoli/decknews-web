<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    mini-variant
    permanent
  >
    <v-toolbar class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img
              :src="avatarPhotoURL"
              title="Profile Image"
            >
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

    <v-layout
      column
      fill-height
    >
      <v-list>
        <v-list-tile
          @click="goHome"
          title="Home"
        >
          <v-list-tile-action>
            <v-icon medium>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="common">HOME</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          @click="openBackgroundSelector"
          title="Background Selector"
        >
          <v-list-tile-action>
            <v-icon>desktop_windows</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="common">HOME</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          @click="openColumnAdd"
          title="Add Column"
        >
          <v-list-tile-action>
            <v-icon medium>add</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="common">{{ $t('message.column') }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          @click="openColumnDelete"
          :title="$t('message.deleteColumn')"
        >
          <v-list-tile-action>
            <v-icon>delete</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="common">{{ $t('message.deleteColumn') }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-menu
          offset-x
          right
        >
          <template v-slot:activator="{ on, attrs }">
            <v-list-tile
              v-bind="attrs"
              v-on="on"
              dense
            >
              <v-list-tile-action>
                <v-icon>mdi-translate</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </template>
          <v-list>
            <v-list-item
              v-for="language in languages"
              dense
              @click="handleLanguage(language)"
              :key="language.text"
            >
              <v-list-item-title class="px-2">
                {{ language.text }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-list>
      <v-spacer></v-spacer>
      <v-list class="mb-5 pb-4">
        <v-list-tile
          @click="logout"
          title="Logout"
        >
          <v-list-tile-action>
            <v-icon class="ml-1">logout</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>LOGOUT</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-layout>
    <ColumnAdd></ColumnAdd>
    <ColumnDelete></ColumnDelete>
    <BackgroundSelector></BackgroundSelector>
  </v-navigation-drawer>
</template>

<script>
import BaseSnackbar from "./BaseSnackbar";
import firebase from "firebase";
import { mapActions, mapState } from "vuex";
import ColumnAdd from "./ColumnAdd";
import ColumnDelete from "./ColumnDelete";
import BackgroundSelector from "./BackgroundSelector";
import Storage from '../utils/Storage'

export default {
  name: "TheNavigationDrawer",
  components: { BackgroundSelector, ColumnAdd, BaseSnackbar, ColumnDelete },
  data: () => ({
    drawer: true,
    avatarPhotoURL: "",
    languageTitle: "Idioma",
    languages: [
      { text: "Inglês", value: "eng_US" },
      { text: "Português", value: "pt_BR" },
    ],
  }),
  methods: {
    ...mapActions("user", [
      "updateColumnAdd",
      "updateColumnDelete",
      "updateBackgroundSelector",
    ]),
    goHome() {
      this.$router.push("/home");
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("/");
        });
    },
    openColumnAdd() {
      this.updateColumnAdd({
        open: true,
      });
    },
    openColumnDelete() {
      this.updateColumnDelete({
        open: true,
      });
    },
    openBackgroundSelector() {
      this.updateBackgroundSelector({
        open: true,
      });
    },
    handleLanguage(lang) {
      Storage.setItem("locale", lang.value);
      location.reload();
    },
  },
  computed: {
    ...mapState("user", ["userInfo"]),
  },
  created() {
    this.avatarPhotoURL = localStorage.getItem("photoURL");
  },
};
</script>

<style scoped>
</style>
