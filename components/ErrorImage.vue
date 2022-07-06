<template>
    <div class="error-img-container">
        <img src="@/static/404.svg" alt="error" class="error-img" v-if="this.error.statusCode === 404">
        <img src="@/static/500.svg" alt="error" class="error-img" v-if="this.error.statusCode === 500">
        <img src="@/static/error.svg" alt="error" class="error-img"
            v-if="this.error.statusCode != 500 && this.error.statusCode != 404">
    </div>
</template>
<script>
export default {
    props: {
        error: {
            type: Object,
            default: null
        }
    },
}
</script>
<style scoped>
.error-img-container {
    max-height: 500px;
    max-width: 500px;
}

.error-img {
    max-width: 100%;
    max-height: 100%;
}
</style>