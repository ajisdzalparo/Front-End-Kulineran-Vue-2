<template>
  <div id="app">

    <router-view />
    <footer-vue></footer-vue>
  </div>
</template>

<script>
import FooterVue from "./components/FooterVue.vue";
export default {
  components: {
    FooterVue,
  },
}
</script>