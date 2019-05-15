<template>
    <v-dialog
            dark
            v-model="dialog"
            width="500"
    >
        <v-card>
            <v-card-title class="headline grey lighten-2">
                ERROR
            </v-card-title>

            <v-card-text>
                <slot/>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <BaseButton @click="dialog = false">Close</BaseButton>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "BaseDialog"
    }
</script>

<style scoped>

</style>