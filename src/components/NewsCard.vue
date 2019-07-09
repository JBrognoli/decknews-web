<template>
    <v-card dark width="450px" style="background-color: #3e3e3e">
      <v-card-title primary-title class="pa-1 pl-3 pt-2">
        <h3 class="caption font-weight-bold "> {{ title }}</h3>
      </v-card-title>
      <v-card-text class="caption font-weight-light pa-2 pl-3">
        <div>
          <div>
            <img :src=image width="35%" height="35%" align="left" class="mr-2">
            <p align="justify" class="pb-0 mb-0">{{ description }} .. <a :href="url" target="_blank" class="grabient" style="font-size: 12px"> Read More</a></p></div>
        </div>
      </v-card-text>
      <v-card-text class="caption font-weight-thin pa-1 pl-3">
        <div>
          <div> {{ author }}  *  {{ formattedDate }}</div>
        </div>
      </v-card-text>
    </v-card>
</template>

<script>
  export default {
    name: "BaseCard",
    props: {
      title: {
        type: String,
        default: ""
      },
      description: {
        type: String,
        default: ""
      },
      author: {
        type: String,
        default: ""
      },
      publishedAt: {
        type: String,
        default: ""
      },
      url: {
        type: String,
        default: "",
      },
      image: {
        type: String,
        default: "",
      }
    },
    computed: {
      formattedDate() {
        return this.formatDate(this.publishedAt)
      }
    },
    methods: {
      formatDate(date) {
        let year = date.substring(0,4);
        let month = date.substring(5,7);
        let day = date.substring(8,10);

        return `${day}/${month}/${year}`
      },
    },
  }
</script>

<style scoped>

</style>
