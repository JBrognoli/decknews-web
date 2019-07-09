<script>
  import Snackbar from "../components/BaseSnackbar.vue";
  import BaseButton from "../components/BaseButton";
  import NewsCard from "../components/NewsCard";
  import BaseColumn from "../components/BaseColumn";

  export default {
    name: "Styleguide",
    data() {
      return {}
    },
    components: {
      BaseColumn,
      NewsCard,
      BaseButton,
      Snackbar,
    }
  }
</script>

<template>
  <div>
    <h1>News Card Component</h1>
    <NewsCard></NewsCard>
    <br><br><br>
    <h1> Base Column Component</h1>
    <BaseColumn></BaseColumn>
    <br><br><br>
    <NewsCard title="Bitcoin raising" main-text="batatatatata" author-name="Lucas Correa" date="15/09" :card-actions="['batata', 'feijao']"></NewsCard>
    <BaseButton>userconfig</BaseButton>
    <h1>Snackbar Component</h1>
    <Snackbar></Snackbar>
    <br><br><br>
    <h1> Base Button Component</h1>
    <BaseButton>Testante</BaseButton>
    <br><br><br>

  </div>
</template>

<style>

</style>
