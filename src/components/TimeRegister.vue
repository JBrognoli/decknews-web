<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container>
      <UserReport ref="UserReport"></UserReport>
      <v-toolbar flat>
        <v-toolbar-title class="display-1"><span>Registro de Horários</span></v-toolbar-title>
        <v-divider
          class="mx-2 pl-3"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-btn outline @click="openUserReport">
          <v-icon left small>search</v-icon>
          <span>Search Report</span></v-btn>
      </v-toolbar>
      <v-data-table
        :headers="headers"
        :items="days"
        class="elevation-10"
        no-data
        :pagination.sync="pagination"
      >
        <template v-slot:items="props">
          <td class="text-xs-center">{{ props.item.numDay }}</td>
          <td class="text-xs-center">{{ props.item.entry}}</td>
          <td class="text-xs-center">{{ props.item.exit}}</td>
          <td class="text-xs-center">{{ props.item.timeWorked}}</td>
        </template>
      </v-data-table>
    </v-container>
</template>

<script>
  import MonthPicker from './MonthPicker'
  import UserPicker from './UserPicker'
  import UserReport from "./UserReport";

  export default {
    name: "Time Register",
    components: {UserReport, UserPicker, MonthPicker},
    data: () => ({
      pagination: {
        rowsPerPage: 10,
      },
      dialogTR: false,
      stateChanger: 0,
      newUser: 'New User',
      valid: true,

      // nameRules: [
      //   v => !!v || 'Name is required',
      //   v => (v && v.length > 0) || 'Name must be a name XD'
      // ],
      // typeRules: [
      //   v => !!v || 'Type is required',
      // ],
      // weaknessRules: [
      //   v => !!v || 'Weakness is required',
      // ],

      headers: [
        {text: 'Day', value: 'numDay', sortable: false, align: 'center'},
        {text: 'Entry', value: 'entry', sortable: false, align: 'center'},
        {text: 'Exit', value: 'exit', sortable: false, align: 'center'},
        {text: 'Time Worked', value: 'timeWorked', sortable: false, align: 'center'},
      ],
      days: [
        {numDay: '01', entry: 15092000, exit: 15092002, timeWorked: 4},
        {numDay: '02', entry: 15092000, exit: 15092002, timeWorked: 4},
        {numDay: '03', entry: 15092000, exit: 15092002, timeWorked: 4},
        {numDay: '04', entry: 15092000, exit: 15092002, timeWorked: 4},
        {numDay: '05', entry: 15092000, exit: 15092002, timeWorked: 4},
        {numDay: '06', entry: 15092000, exit: 15092002, timeWorked: 4},
        {numDay: '07', entry: 15092000, exit: 15092002, timeWorked: 4},
        {numDay: '08', entry: 15092000, exit: 15092002, timeWorked: 4},
        {numDay: '09', entry: 15092000, exit: 15092002, timeWorked: 4},
        {numDay: '10', entry: 15092000, exit: 15092002, timeWorked: 4},

      ],
      editedIndex: -1,
      editedDay: {
        numDay: null,
        entry: null,
        exit: null,
        timeWorked: null,
      },
      editedDay: {
        numDay: null,
        entry: null,
        exit: null,
        timeWorked: null,
      },
    }),
    computed: {
      formTitle() {
        return this.editedIndex === -1 ? 'New User' : 'Edit User'
      }
    },
    watch: {
      dialog(val) {
        val || this.close()
      }
    },
    created() {
      axios.get(`http://localhost:3000/user`)
        .then(response => {
          this.user = response.data;
        })

        .catch(e => {
          this.errors.push(e)
        });
    },
    methods: {
      close() {
        this.dialog = false;
        setTimeout(() => {
          this.editedDay = Object.assign({}, this.defaultUser);
          this.editedIndex = -1
        }, 300);
        this.stateChanger = 0;
      },
      buttonMethod(user) {
        this.valid = this.$refs.form.validate();

        if (this.valid) {
          if (this.stateChanger === 0) return this.save(user);
          return this.update(user);
        }
      },
      openUserReport() {
        this.$refs.UserReport.openUserReport();
      },
    },
  }
</script>

<style scoped>

</style>
