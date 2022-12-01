<script>
import AppHeader from "@/components/AppHeader.vue";
import { RouterView } from "vue-router";
export default {
  components: {
    AppHeader,
    RouterView
  },
};
</script>
<template>
  <div id="app">
    <AppHeader />
    <div class="container">
      <RouterView />
    </div>
  </div>
</template>
<style>
.page {
  max-width: 400px;
  margin: auto;
}
</style>

