<template>
    <ValidationProvider v-slot="{errors}" rules="positive">
        <v-text-field solo type="number" class="mt-4" v-model="value">
        </v-text-field>
        <span>{{errors[0]}}</span>
    </ValidationProvider>
</template>

<script>
import { extend } from 'vee-validate'
import { ValidationProvider } from 'vee-validate'


export default {
    components: {
        ValidationProvider,
    },
    data: () => ({
        value: '',
    })
}

extend('positive', value => {
    return value => 0;
});
</script>

<style>

</style>