<template>
  <v-app dark>
    <div class="error-container d-flex justify-center align-center flex-column py-8">
      <NuxtLink to="/">
        Home page
      </NuxtLink>
      <div class="error-test d-flex justify-flex-start align-center flex-column">
        <ErrorImage :error="error" />
        <h1 v-if="error.statusCode === 404" class="mt-8">
          {{ pageNotFound }}
        </h1>
        <h1 v-else-if="error.statusCode === 500" class="mt-8">
          {{ serverError }}
        </h1>
        <h1 v-else>
          {{ otherError }}
        </h1>
      </div>

    </div>
  </v-app>
</template>

<script>
import ErrorImage from "../components/ErrorImage.vue";
export default {
  name: "EmptyLayout",
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: "We are sorry but: 404 Not Found",
      serverError: "We are sorry but: 500 internal server error",
      otherError: "An error occurred"
    };
  },
  head() {
    const title = "Sorry but there's a problem";
    return {
      title
    };
  },
  components: { ErrorImage }
}
</script>

<style scoped>
/* #app {
  height: 100vh;
} */

.error-container {
  height: 100%;
  width: 100%;
  background-color: white;
  overflow: hidden;
}

.error-test {
  width: 100%;
  height: 100%;
}

h1 {
  font-size: 22px;
}
</style>
