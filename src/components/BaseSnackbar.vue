<template>
  <div>
  <v-snackbar
    v-model="snackbar"
    :bottom="y === 'bottom'"
    :left="x === 'left'"
  >
    {{ text }}
    <v-btn
      @click="snackbar = false"
      outline
      class="pa-1 pl-3 pr-3"
    >
      <span>close</span>
    </v-btn>
  </v-snackbar>
  </div>
</template>

<script>
  export default {
    name: "BaseSnackbar",
    data () {
      return {
        snackbar: false,
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
        default: 'Session Started'
      },
      timeout: {
        type: Number,
        default: 6000,
      }
    },
    methods: {
      openSnackbar () {
        this.snackbar = true;
      },
    },
  }
</script>

<style scoped>

</style>