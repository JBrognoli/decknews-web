<template>
  <v-btn dark class="subheading" @click="doClick" v-on="$listeners"><span><slot/></span></v-btn>
</template>

<script>
  export default {
    name: "BaseButton",
    methods: {
      doClick() {
        if (this.href) {
          location.href = this.href
        }
      }
    },
    props: {
      href: {
        type: String,
        default: undefined,
      },
    }
  }
</script>

<style scoped>

</style>