<template>
    <v-app dark class="main">
        <v-navigation-drawer v-model="drawer" :clipped="clipped" fixed app class="nav-draw">
            <v-list>
                <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
                    <v-list-item-action>
                        <v-icon color="primary">{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="font" v-text="item.title" />
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar :clipped-left="clipped" fixed app class="nav-draw">
            <v-app-bar-nav-icon color="primary" @click.stop="drawer = !drawer" />
            <v-toolbar-title v-text="title" class="nav-title" />
            <v-spacer>
            </v-spacer>
            <p class="nav-progress d-flex justify-center align-center ma-0 primary--text">{{ dailyProgress }}/{{
                    dailyLimit
            }}
            </p>
        </v-app-bar>
        <v-main>
            <Nuxt />
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: "DefaultLayout",
    data() {
        return {
            clipped: true,
            drawer: false,
            fixed: false,
            items: [
                {
                    icon: "mdi-human-greeting-variant",
                    title: "Welcome",
                    to: "/",
                },
                {
                    icon: "mdi-chart-bar",
                    title: "Daily standings",
                    to: "/daily-standings",
                },
                {
                    icon: "mdi-apple",
                    title: "Macro search",
                    to: "/macro-search",
                },
                {
                    icon: "mdi-cog",
                    title: "Settings",
                    to: "/settings",
                },
            ],
            title: "FITapp",
            dailyLimit: 2400,
            dailyProgress: 1200,
        };
    },
};
</script>

<style scoped>
#app {
    background-image: url("@/static/diet1.jpg") !important;
    background-size: cover;
    background-position: fixed;
    background-repeat: no-repeat;
}

.nav-progress {
    height: 100%;
    font-size: 20px;
}
</style>