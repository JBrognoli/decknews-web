<script>
    import {Component, Vue} from 'vue-property-decorator';
    import BaseTable from '../components/BaseTable.vue';
    import SessionStart from "../components/SessionStart.vue";
    import SessionFinish from "../components/SessionFinish.vue";
    import UserReport from "../components/UserReport.vue";
    import '../design.css'
    import Snackbar from "../components/BaseSnackbar.vue";
    import BaseDialog from "../components/BaseDialog.vue";
    import BaseButton from "../components/BaseButton";

    @Component({
        components: {
            BaseDialog,
            Snackbar,
            UserReport,
            SessionFinish,
            SessionStart,
            BaseTable,
            BaseButton,
        },
    })
    export default class Styleguide extends Vue {
        data () {
            return {
            }
        }
    }
</script>

<template>
    <div>
        <h1>Base Button Component</h1>
        <BaseButton>Teste</BaseButton>
        <br><br><br>
        <h1>Base Dialog Component</h1>
        <BaseDialog></BaseDialog>
        <br><br><br>
        <h1>Base Card Component</h1>
        <BaseCard></BaseCard>
        <br><br><br>
        <h1>Snackbar Component</h1>
        <Snackbar text="Your deck was created."></Snackbar>
        <br><br><br>
        <h1> Base Button Component</h1>
        <v-btn color="black" class=""> <span>Fodase xD</span> </v-btn>
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
        <br><br><br>
        <h1> Base Table Component</h1>
        <BaseTable></BaseTable>


    </div>
</template>

<style>

</style>
