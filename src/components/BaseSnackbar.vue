<template>
  <div>
    <v-snackbar
      v-model="baseSnackbar.open" :timeout="3000" :left="'left'">
      <p class="pt-3 grabient subheading">{{ baseSnackbar.text }}</p>
      <v-btn
        @click="baseSnackbar.open = false"
        outline
        class="pa-1 pl-3 pr-3"
      >
        <span class="grabient" @click="baseSnackbar.open = false">{{ $t('message.close') }}</span>
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
  import { mapState }from 'vuex';

  export default {
    name: "BaseSnackbar",
    data() {
      return {};
    },
    computed: {
      ...mapState('user', ['baseSnackbar'])
    }
  }
</script>

<style scoped>

</style>
