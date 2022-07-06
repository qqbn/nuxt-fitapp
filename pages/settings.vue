<template>
    <v-container fluid fill-height class="settings-main ma-0 d-flex justify-center align-start">
        <v-col cols="12" xl="6" lg="6" md="6" sm="10" xs="12" class="py-12">
            <v-card class="card">
                <v-card-title class="headline">
                    Right here, you can set your daily goals!
                </v-card-title>
                <v-card-text class="
                        content
                        d-flex
                        justify-space-around
                        align-center
                        flex-column
                    ">
                    <v-col cols="12" xl="6" lg="6" md="6" sm="8" xs="8">
                        <h4 class="text-center">Calories</h4>
                        <v-text-field solo type="number"></v-text-field>
                    </v-col>
                    <v-col cols="12" xl="6" lg="6" md="6" sm="8" xs="8">
                        <h4 class="text-center">Fat (g)</h4>
                        <v-text-field solo type="number"></v-text-field>
                    </v-col>
                    <v-col cols="12" xl="6" lg="6" md="6" sm="8" xs="8">
                        <h4 class="text-center">Sugar (g)</h4>
                        <v-text-field solo type="number"></v-text-field>
                    </v-col>
                    <v-col cols="12" xl="6" lg="6" md="6" sm="8" xs="8">
                        <h4 class="text-center">Carbs (g)</h4>
                        <v-text-field solo type="number"></v-text-field>
                    </v-col>
                    <v-col cols="12" xl="6" lg="6" md="6" sm="8" xs="8">
                        <h4 class="text-center">Protein (g)</h4>
                        <v-text-field solo type="number"></v-text-field>
                    </v-col>
                </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn color="primary">SAVE</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.headline,
h4 {
    color: #26a69a;
}

.card {
    /* background-color: transparent !important;  do przemyslenia*/
}
</style>
