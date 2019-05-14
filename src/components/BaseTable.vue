<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-app dark>
    <v-toolbar flat>
      <v-toolbar-title class="display-1"><span>Users</span></v-toolbar-title>
      <v-divider
        class="mx-2 pl-3"
        inset
        vertical
      ></v-divider>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="500px" dark>
        <template v-slot:activator="{ on }">
          <v-btn dark class="mb-2" v-on="on" outline><v-icon left>person_add</v-icon><span> New User</span></v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
              >
                <v-layout wrap>
                  <v-flex xs12 sm6 md4>
                    <v-text-field
                      v-model="editedUser.name"
                      required
                      label="Username"
                    >
                    </v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field
                      v-model="editedUser.email"
                      required
                      label="Email"
                    >

                    </v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field
                      v-model="editedUser.birthDate"
                      required
                      label="Birth Date"
                    >
                    </v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field
                      v-model="editedUser.entryDate"
                      required
                      label="Entry Date"
                    >
                    </v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field
                      v-model="editedUser.exitDate"
                      required
                      label="Exit Date">
                    </v-text-field>
                  </v-flex>
                </v-layout>
              </v-form>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn outline color="white" flat @click="close"><span>Cancel</span></v-btn>
            <v-btn outline color="white" flat @click="buttonMethod(editedUser)"><span> Save </span></v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>

    <v-data-table
      :headers="headers"
      :items="users"
      class="elevation-1"
      no-data
      :pagination.sync="pagination"
    >
      <template v-slot:items="props">
        <td class="text-xs-left">{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.email.toString()}}</td>
        <td class="text-xs-left">{{ props.item.birthDate }}</td>
        <td class="text-xs-left">{{ props.item.entryDate }}</td>
        <td class="text-xs-left">{{ props.item.exitDate }}</td>
        <td class="justify-center layout px-0" >
          <v-icon
            small
            class="mr-2"
            @click="editUser(props.user)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="deleteUser(props.user)"
          >
            delete
          </v-icon>
        </td>
      </template>
    </v-data-table>
  </v-app>
</template>

<script>

  export default {
    data: () => ({
      pagination: {
        rowsPerPage: 10,
      },
      dialog: false,
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
        {text: 'Names', value: 'name', sortable: false, align: 'left'},
        {text: 'Email', value: 'email', sortable: false, align: 'left'},
        {text: 'Birth Date', value: 'birthDate', sortable: false, align: 'left'},
        {text: 'Entry Date', value: 'entryDate', sortable: false, align: 'left'},
        {text: 'Exit Date', value: 'exitDate', sortable: false, align: 'left'},
        {text: 'Actions', value: 'name', sortable: false, align: 'center'},
      ],
      users: [
        {name: 'joao', email: 'brog@hotmail.com', birthDate: 15092000, entryDate: 17032019, exitDate: 123456789},
        {name: 'brezika', email: 'breza@hotmail.com', birthDate: 20322000, entryDate: 22032017, exitDate: 987654321},
        {name: 'osgado', email: 'osgado@hotmail.com', birthDate: 20123000, entryDate: 23988891, exitDate: 182863882},
        {name: 'brunoldo', email: 'brunoldo@hotmail.com', birthDate: 20322000, entryDate: 22032017, exitDate: 987654321},
        {name: 'vegalipe', email: 'vegalipe@hotmail.com', birthDate: 20322000, entryDate: 22032017, exitDate: 987654321},
        {name: 'biribomb', email: 'biribomb@hotmail.com', birthDate: 20322000, entryDate: 22032017, exitDate: 987654321},
      ],
      editedIndex: -1,
      editedUser: {
        name: '',
        email: '',
        birthDate: null,
        entryDate: null,
        exitDate: null
      },
      defaultUser: {
        name: '',
        email: '',
        birthDate: null,
        entryDate: null,
        exitDate: null
      }
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
      editUser(user) {
        this.editedIndex = this.users.indexOf(user);
        this.editedUser = Object.assign({}, user);
        this.dialog = true;
        this.stateChanger += 1;
      },
      async deleteUser(user) {
        this.valid = this.$refs.form.validate();

        const index = this.users.indexOf(user);
        confirm('Are you sure you want to delete this pokemon?') && this.users.splice(index, 1);
        axios.delete(`http://localhost:3000/users/${user._id}`, user._id);
        try {
          let Prom = await axios.delete(`http://localhost:3000/users/${user._id}`, user._id);
          return this.users.push(Prom);
        } catch (e) {
          return console.log(e);
        }
      },
      close() {

        this.dialog = false;
        setTimeout(() => {
          this.editedUser = Object.assign({}, this.defaultUser);
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

      update(user) {


      axios.put(`http://localhost:3000/pokemon/${item._id}`, item)
              .then(response => {
                let arr = [];
                for (let i = 0; i < this.pokemon.length; i++) {
                  if (response.data._id === this.pokemon[i]._id) arr.push(response.data);
                  else arr.push(this.pokemon[i]);
                }
                this.pokemon = arr;
                this.close();
              })
              .catch(e => {
                console.error('erro no update', e);
                this.close();
              });
      },

      save(user) {
      axios.post(`http://localhost:3000/pokemon`, item);
      this.close()
      d},
    },
  }
</script>


<style scoped>

</style>
