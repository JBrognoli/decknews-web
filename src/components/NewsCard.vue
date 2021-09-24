<template>
  <v-card
    dark
    width="450px"
    style="background-color: #3e3e3e"
  >
    <v-card-title
      primary-title
      class="pa-1 pl-3 pt-2"
    >
      <h3 class="caption font-weight-bold "> {{ title }}</h3>
    </v-card-title>
    <v-card-text class="caption pa-2 pl-3">
      <div>
        <img
          :src="image"
          width="150px"
          height="auto"
          align="left"
          class="mr-2"
        >
        <p
          align="justify"
          class="pb-0 mb-0"
        >{{ description }}.. <a
            :href="url"
            target="_blank"
            class="grabient"
            style="font-size: 12px"
          > {{ $t('message.readMore') }}</a></p>
      </div>
    </v-card-text>
    <v-card-text class="caption font-weight-thin pa-1 pl-3">
      <div>
        <div> {{ author ? author : $t('message.unknownAuthor') }} * {{ formattedDate }} | {{ formattedDescLength }} palavras</div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import Storage from "../utils/Storage";

export default {
  name: "BaseCard",
  props: {
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    author: {
      type: String,
      default: "",
    },
    publishedAt: {
      type: String,
      default: "",
    },
    url: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
  },
  computed: {
    formattedDate() {
      return this.formatDate(this.publishedAt);
    },
    formattedDescLength() {
      let locale = Storage.getItem("locale");
      if (locale === "eng_US") {
        return `${new Intl.NumberFormat("en-US").format(
          this.description.length * 100
        )}`;
      } else {
        return `${new Intl.NumberFormat("pt-BR").format(
          this.description.length * 100
        )}`;
      }
    },
  },
  methods: {
    formatDate(date) {
      let year = date.substring(0, 4);
      let month = date.substring(5, 7);
      let day = date.substring(8, 10);
      let locale = Storage.getItem("locale");
      if (locale === "eng_US") {
        return `${month}/${day}/${year}`;
      } else {
        return `${day}/${month}/${year}`;
      }
    },
  },
};
</script>

<style scoped>
</style>
