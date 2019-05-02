<template>
    <div>
        <v-toolbar flat color="white">
            <v-toolbar-title>Usuários</v-toolbar-title>
            <v-divider
                    class="mx-2"
                    inset
                    vertical
            ></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{ on }">
                    <v-btn color="primary" dark class="mb-2" v-on="on">Add Usuário</v-btn>
                </template>
                <v-card>
                    <v-card-title>
                        <span class="headline">{{ formTitle }}</span>
                    </v-card-title>

                    <v-card-text>
                        <v-container grid-list-md>
                            <v-layout wrap>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field v-model="editedItem.name" label="Nome"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field v-model="editedItem.sobrenome" label="Sobrenome"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field v-model="editedItem.aniversario" label="Aniversário"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field v-model="editedItem.email" label="Email"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field v-model="editedItem.cpf" label="CPF"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field v-model="editedItem.dataEntrada" label="Data de Entrada"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field v-model="editedItem.senha" label="Password"></v-text-field>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
                        <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-toolbar>
        <v-data-table
                :headers="headers"
                :items="usuarios"
                class="elevation-1"
        >
            <template v-slot:items="props">
                <td class="text-xs-left">{{ props.item.name }}</td>
                <td class="text-xs-left">{{ props.item.sobrenome }}</td>
                <td class="text-xs-left">{{ props.item.aniversario }}</td>
                <td class="text-xs-left">{{ props.item.email }}</td>
                <td class="text-xs-left">{{ props.item.hentrd }}</td>
                <td class="text-xs-left">{{ props.item.hsaida }}</td>
                <td class="justify-space-around layout px-0">
                    <v-icon
                            small
                            class="mr-2"
                            @click="editItem(props.item)"
                    >
                        edit
                    </v-icon>
                    <v-icon
                            small
                            @click="deleteItem(props.item)"
                    >
                        delete
                    </v-icon>
                </td>
            </template>
            <template v-slot:no-data>
                <v-btn color="primary" @click="initialize">Reset</v-btn>
            </template>
        </v-data-table>
    </div>
</template>

<script>
    export default {
        data: () => ({
            dialog: false,
            headers: [
                {
                    text: 'Name',
                    align: 'center',
                    value: 'name'
                },
                { text: 'Sobrenome', value: 'sobrenome' },
                { text: 'Aniversario', value: 'aniversario' },
                { text: 'Email', value: 'email' },
                { text: 'HEntrd', value: 'hentrd' },
                { text: 'HSaida', value: 'hsaida' },
                { text: 'Actions', value: 'name', sortable: false }
            ],
            usuarios: [],
            editedIndex: -1,
            editedItem: {
                name: '',
                sobrenome: '',
                aniversario: new Date(),
                email: '',
                hentrd: new Date(),
                hsaida: new Date(),
            },
            defaultItem: {
                name: '',
                sobrenome: '',
                aniversario: new Date(),
                email: '',
                hentrd: new Date(),
                hsaida: new Date(),
            }
        }),

        computed: {
            formTitle () {
                return this.editedIndex === -1 ? 'New Usuario' : 'Edit Usuario'
            }
        },

        watch: {
            dialog (val) {
                val || this.close()
            }
        },

        created () {
            this.initialize()
        },

        methods: {
            initialize () {
                this.usuarios = [
                    {
                        name: 'João',
                        sobrenome: 'Carlos de Souza',
                        aniversario: new Date(1995,7,15),
                        email: 'blabla@gmail.com',
                        cpf: 0,
                        dataEntrada: new Date(2019,1,12)

                    }
                ]
            },

            editItem (item) {
                this.editedIndex = this.usuarios.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialog = true
            },

            deleteItem (item) {
                const index = this.usuarios.indexOf(item)
                confirm('Tem certeza que deseja deletar esse usuario?') && this.usuarios.splice(index, 1)
            },

            close () {
                this.dialog = false
                setTimeout(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                }, 300)
            },

            save () {
                if (this.editedIndex > -1) {
                    Object.assign(this.usuarios[this.editedIndex], this.editedItem)
                } else {
                    this.usuarios.push(this.editedItem)
                }
                this.close()
            }
        }
    }
</script>

<style scoped>

</style>