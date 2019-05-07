<template>
  <div>
  <v-btn
    block
    color="red"
    dark
    @click="snackbar = true"
  >
    Show Snackbar
  </v-btn>
  <v-snackbar
    v-model="snackbar"
    :bottom="y"
    :left="x"
  >
    {{ text }}
    <v-btn
      color="pink"
      flat
      @click="snackbar = false"
    >
      Close
    </v-btn>
  </v-snackbar>
  </div>
</template>

<script>
  export default {
    name: "Snackbar",
    data () {
      return {
        snackbar: true,
      }
    },
    props: {
      y: {
        type: String,
        default: 'bottom',
      },
      x: {
        type: String,
        default: 'left',
      },
      text: {
        type: String,
        default: 'Pattern'
      },
      timeout: {
        type: Number,
        default: 6000,
      }
    }
  }
</script>

<style scoped>

</style>
