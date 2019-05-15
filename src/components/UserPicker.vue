<template>
    <v-select
      class="mr-4 ml-4 pr-4"
      label="Username"
      :items="users"
      item-text="name"
    ></v-select>
</template>

<script>
  export default {
    name: "UserPicker",
    data: () => ({
      users: [
        {name: 'joao', email: 'brog@hotmail.com', birthDate: 15092000, entryDate: 17032019, exitDate: 123456789},
        {name: 'brezika', email: 'breza@hotmail.com', birthDate: 20322000, entryDate: 22032017, exitDate: 987654321},
        {name: 'osgado', email: 'osgado@hotmail.com', birthDate: 20123000, entryDate: 23988891, exitDate: 182863882},
        {
          name: 'brunoldo',
          email: 'brunoldo@hotmail.com',
          birthDate: 20322000,
          entryDate: 22032017,
          exitDate: 987654321
        },
        {
          name: 'vegalipe',
          email: 'vegalipe@hotmail.com',
          birthDate: 20322000,
          entryDate: 22032017,
          exitDate: 987654321
        },
        {
          name: 'biribomb',
          email: 'biribomb@hotmail.com',
          birthDate: 20322000,
          entryDate: 22032017,
          exitDate: 987654321
        },
      ]
    }),

  }
</script>

<style scoped>

</style>