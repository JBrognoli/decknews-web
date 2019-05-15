<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div>
    <v-dialog
      v-model="dialogReport"
      width="500"
      dark
    >
      <v-card dark max-width="500px" max-height="500px">
        <v-card-title primary-title class="title"><span>Selecione a data do relatório: </span></v-card-title>
        <v-layout row class="ml-3">
          <MonthPicker></MonthPicker>
          <UserPicker></UserPicker>
        </v-layout>
        <v-flex>
          <v-card-actions>
            <v-flex class="ma-1 text-xs-right">
              <BaseButton @click="closeDialog">Cancel</BaseButton>
              <BaseButton @click="openUserReport">Confirm</BaseButton>
            </v-flex>
          </v-card-actions>
        </v-flex>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import MonthPicker from "./MonthPicker";
  import UserPicker from "./UserPicker";
  import BaseButton from "./BaseButton";

  export default {
    name: "UserReport",
    components: {BaseButton, UserPicker, MonthPicker},
    data: () => ({
      dialogReport: false,
      date: new Date().toISOString().substr(0, 7),
      menu: false,
      modal: false,
    }),
    methods: {
      openUserReport() {
        this.dialogReport = true;
      },
      closeDialog() {
        this.dialogReport = false;
      }
    }
  }

</script>

<style scoped>

</style>