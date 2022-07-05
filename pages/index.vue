<template>
    <v-row justify="center" align="center" class="pa-2">
        <v-col cols="12" xl="10" lg="10" md="10" sm="10" xs="8" class="py-12">
            <!-- <v-card class="logo py-4 d-flex justify-center">
                <VuetifyLogo />
            </v-card> -->
            <v-card>
                <v-card-title class="headline">
                    Welcome to the FITapp
                </v-card-title>
                <v-card-text>
                    <p>
                        This app allows you to monitor your daily nutritional
                        values.
                    </p>
                    <p>Quick guide:</p>
                    <ul>
                        <li>
                            In daily standings tab, you can enter your meals and
                            chcek how you can still afford
                        </li>
                        <li>
                            In macro search tab, you can type name of dish and
                            check its macronutrients
                        </li>
                        <li>
                            In the settings tab, set your daily nutritional
                            limits
                        </li>
                    </ul>
                    <hr class="my-3" />
                    <a
                        href="https://github.com/nuxt/nuxt.js"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        App GitHub
                    </a>
                </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn color="primary" nuxt to="/daily-standings">
                        Continue
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: "IndexPage",
};
</script>

<style>
.headline {
    color: #26a69a;
}
</style>
