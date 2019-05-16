<template>
  <v-card>
    <v-card-title>
      <span>{{ this.cardTitle }}</span>
    </v-card-title>

    <v-card-text>
      <span>{{ this.cardText }}</span>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <BaseButton v-for="action in cardActions">{{ action }}</BaseButton>
    </v-card-actions>
  </v-card>
</template>

<script>
    import BaseButton from "./BaseButton";
    export default {
        name: "NewsCard",
        components: {BaseButton},
        props: {
            cardTitle: {
                type: String,
                default: 'título do card'
            },
            cardText: {
                type: String,
                default: 'texto do card'
            },
            cardActions: {
                type: Array,
                default: [
                    'Cancelar',
                    'Confirmar'
                ],
            }
        },
        data() {
            return {}
        },
    }
</script>

<style scoped>

</style>