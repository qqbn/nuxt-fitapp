<template>
    <div class="mb-4 date-picker d-flex justify-space-between align-center pa-4">
        <v-btn fab small color="primary" class="mr-4" @click="addDay(-1)">
            <v-icon> mdi-arrow-left-drop-circle </v-icon>
        </v-btn>
        <v-dialog v-model="modal" :return-value.sync="date" width="290px" ref="dialog">
            <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" fab v-bind="attrs" v-on="on" class="text-h6">{{ date.slice(-2) }}</v-btn>
            </template>
            <v-date-picker v-model="date" @input="menu2 = false">
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal = false">
                    Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.dialog.save(date)">
                    OK
                </v-btn>
            </v-date-picker>
        </v-dialog>
        <v-btn fab small color="primary" class="ml-4" @click="addDay(1)">
            <v-icon> mdi-arrow-right-drop-circle </v-icon>
        </v-btn>
    </div>
</template>
<script>
import { mapMutations } from 'vuex';

export default {
    data() {
        return {
            menu: false,
            modal: false,
            menu2: false,
        }
    },
    methods: {
        ...mapMutations(['addDay']),
    },
    computed: {
        date: {
            get() {
                return this.$store.state.todaysDate.toISOString().substring(0, 10);
            },
            set(newVal) {
                this.$store.commit('pickDate', newVal);
            }
        }
    }
}
</script>