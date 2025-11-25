<template>
  <div id="top">
    <Header />
    <Portfolio />
    <SiteFooter />
  </div>
</template>

<script setup>
// Assure-toi que ces chemins sont corrects, depuis le dossier 'src/'
import Header from "./components/Header.vue";
import Portfolio from "./components/Portfolio.vue";
import Footer from "./components/Footer.vue";
</script>

<style scoped>
/* Rien ici */
</style>
