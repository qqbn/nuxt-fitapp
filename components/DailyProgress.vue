<template>
    <div class="small-progress">
        <p class="macro-name">{{ progress.progressName }}</p>
        <p>{{ progress.progress }}/{{ progress.progressLimit }}g</p>
        <v-progress-linear :color="progress.progressColor" height="10" value="10" width="25" striped>
        </v-progress-linear>
    </div>
</template>
<script>
export default {
    props: {
        progress: {
            idProgress: Number,
            progressName: String,
            progressLimit: Number,
            progress: Number,
            progressColor: String,

        }
    }
}
</script>

<style scoped>
.small-progress {
    height: 100%;
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.macro-name {
    color: #26a69a;
}
</style>