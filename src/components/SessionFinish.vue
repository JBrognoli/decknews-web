<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="text-xs-center">
    <v-dialog
      v-model="dialog"
      width="500"
      dark
    >
      <template v-slot:activator="{ on }">
        <v-btn flat outline class="subheading" v-on="on"><span>Finish Session</span></v-btn>
      </template>

      <v-card>
        <v-card-title
          class="display-1 title"
        >
         <span>Sessão Finalizada.</span>
        </v-card-title>
        <v-flex text-xs-center class="mb-3">
        <v-card-text>
          Seu tempo de sessão foi de: __:__
          <br>
          Horas mensais restantes: __:__
        </v-card-text>
        </v-flex>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            @click="dialog = false"
            flat
            outline
          >
            <span>Vem Tranquilo</span>

          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    name: "SessionFinish",
    data() {
      return {
        dialog: false,
      }
    }
  }
</script>

<style scoped>

</style>