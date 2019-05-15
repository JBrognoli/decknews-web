<template>
  <v-dialog
    dark
    v-model="dialogConfig"
    width="500"
  >
    <v-card>
      <v-card-title class="headline"><span>User Configuration</span></v-card-title>

      <v-card-text>
        <BaseButton @click="">Change Password</BaseButton>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          outline
          @click="dialogConfig = false"
        >
          <span>Close</span>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import BaseButton from "./BaseButton";
  export default {
    name: "UserConfig",
    components: {BaseButton},
    data() {
      return {
        dialogConfig: false,
      }
    },
    methods: {
      openUserConfig() {
        this.dialogConfig = true;
      },
    }
  }
</script>

<style scoped>

</style>