<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
            <v-card>
                <v-form>
                <v-toolbar dark color="primary">
                    <v-btn icon dark @click="toggleDialog()">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Adding new meal</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn dark text @click="toggleDialog()" type="submit">
                            Save
                        </v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                <v-row class="pa-0 ma-0" justify="center" fullscreen>
                    <v-list max-width="600px" class="overflow-hidden">
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title class="primary--text">Meal name</v-list-item-title>
                                <v-text-field solo type="text" class="mt-4">
                                </v-text-field>
                            </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>
                        <div v-for="macro in macros" :key="macro.id">
                            <v-list-item>
                                <v-list-item-content>
                                <v-list-item-title class="primary--text"> Calories</v-list-item-title>
                                <v-text-field solo type="number" class="mt-4">
                                </v-text-field>
                            </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>
                        </div>
                    </v-list>
                </v-row>
                </v-form>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
import { mapMutations } from 'vuex';
import MacroInput from './MacroInput.vue'
import { ValidationProvider } from 'vee-validate'


export default {
    components: {
        MacroInput,
        ValidationProvider
    },
    data() {
        return {
            notifications: false,
            sound: true,
            widgets: false,
            macros: [
                {
                    name: 'Fat',
                    id: 1,
                    value: 0,
                },
                {
                    name: 'Carbohydrates',
                    id: 2,
                },
                {
                    name: 'Protein',
                    id: 3
                },
                {
                    name: 'Sugar',
                    id: 4,
                }

            ],
        }

    },
    computed: {
        dialog() {
            return this.$store.state.addMealDialog;
        }
    },
    methods: {
        ...mapMutations(["toggleDialog"]),
    },

}
</script>

