<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
            <v-card>
                <v-toolbar dark color="primary">
                    <v-btn icon dark @click="toggleDialog()">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Adding new meal</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn dark text @click="toggleDialog()">
                            Save
                        </v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                <v-list>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="primary--text">Meal name</v-list-item-title>
                            <v-text-field solo type="text" class="mt-4 shrink">
                            </v-text-field>
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="primary--text"> Calories</v-list-item-title>
                            <v-text-field solo type="number" class="mt-4 shrink">
                            </v-text-field>
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="primary--text">Fat</v-list-item-title>
                            <v-text-field solo type="number" class="mt-4 shrink">
                            </v-text-field>
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="primary--text">Carbohydrates</v-list-item-title>
                            <v-text-field solo type="number" class="mt-4 shrink">
                            </v-text-field>
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="primary--text">Protein</v-list-item-title>
                            <v-text-field solo type="number" class="mt-4 shrink">
                            </v-text-field>
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="primary--text">Sugar</v-list-item-title>
                            <v-text-field solo type="number" class="mt-4 shrink">
                            </v-text-field>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    data() {
        return {
            notifications: false,
            sound: true,
            widgets: false,
        }

    },
    computed: {
        dialog() {
            return this.$store.state.addMealDialog;
        }
    },
    methods: {
        ...mapMutations(["toggleDialog"])
    },
}
</script>

