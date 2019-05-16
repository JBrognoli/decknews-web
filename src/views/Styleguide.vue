<script>
  import BaseTable from '../components/BaseTable.vue';
  import SessionStart from "../components/SessionStart.vue";
  import SessionFinish from "../components/SessionFinish.vue";
  import UserReport from "../components/UserReport.vue";
  import '../design.css'
  import Snackbar from "../components/BaseSnackbar.vue";
  import TimeRegister from "../components/TimeRegister.vue";
  import MonthPicker from "../components/MonthPicker.vue";
  import UserPicker from "../components/UserPicker.vue";
  import JustifyForm from "../components/JustifyForm.vue"
  import BaseButton from "../components/BaseButton";
  import UserConfig from "../components/UserConfig";
  import NewsCard from "../components/NewsCard";

  export default {
    name: "Styleguide",
    data() {
      return {
      }
    },
    components: {
        NewsCard,
      UserConfig,
      BaseButton,
      TimeRegister,
      Snackbar,
      UserReport,
      SessionFinish,
      SessionStart,
      BaseTable,
      MonthPicker,
      UserPicker,
      JustifyForm
    },
    methods: {
      openJustify() {
        this.$refs.JustifyForm.openForm();
      },
      openUserConfig() {
        this.$refs.UserConfig.openUserConfig();
      }
    },
  }
</script>

<template>
  <div>
    <h1>News Card Component</h1>
    <NewsCard></NewsCard>
    <br><br><br>
    <h1>User Config component</h1>
    <UserConfig ref="UserConfig"></UserConfig>
    <BaseButton @click="openUserConfig">userconfig</BaseButton>
    <h1>justify absence component</h1>
    <JustifyForm ref="JustifyForm"></JustifyForm>
    <BaseButton @click="openJustify">openjustify</BaseButton>
    <br><br><br>
    <h1>User Picker Component</h1>
    <UserPicker></UserPicker>
    <br><br><br>
    <h1>Month Picker Component</h1>
    <MonthPicker></MonthPicker>
    <br><br><br>
    <h1> Time Register Component</h1>
    <TimeRegister></TimeRegister>
    <h1>Snackbar Component</h1>
    <Snackbar></Snackbar>
    <br><br><br>
    <h1> Base Button Component</h1>
    <BaseButton>Testante</BaseButton>
    <br><br>
    <h1> Start Session Dialog</h1>
    <SessionStart></SessionStart>
    <br><br>
    <h1> Finish Session Dialog</h1>
    <SessionFinish></SessionFinish>
    <br><br>
    <h1> User Report</h1>
    <UserReport></UserReport>
    <br><br><br>
    <h1> Base Table Component</h1>
    <BaseTable></BaseTable>
    <br><br><br>
  </div>
</template>

<style>

</style>