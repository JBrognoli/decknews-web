<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="text-xs-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="red lighten-2"
          dark
          v-on="on"
        >
          Click Me
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          {{ dialogTitle }}
        </v-card-title>

        <v-card-text>
          {{ dialogText }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="dialog = false"
            :dialogButton="dialogButton"
          >
            {{ dialogButton }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    name: "BaseDialog",
    props: {
      dialogTitle: {
        type: String,
        default: "Aviso",
      },
      dialogText: {
        type: String,
        default: "Aviso padrão"
      },
      dialogButton: {
        type: String,
        default: "Fechar"
      }
    },
    data() {
      return {
        dialog: false
      }
    }
  }
</script>

<style scoped>

</style>