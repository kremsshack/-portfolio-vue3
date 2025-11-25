<template>
  <header>
    <div class="logo">
      <img src="@/assets/monlogo.png" alt="Mon logo" />
    </div>

    <input
      type="checkbox"
      id="menu-toggle"
      class="menu-toggle"
      v-model="isMenuOpen"
    />

    <label for="menu-toggle" class="burger">
      <div></div>
      <div></div>
      <div></div>
    </label>

    <nav :class="{ 'menu-open': isMenuOpen }">
      <a href="#accueil" @click="closeMenu">Accueil</a>
      <a href="#apropos" @click="closeMenu">À propos</a>
      <a href="#realisations" @click="closeMenu">Réalisations</a>
      <a href="#softskills" @click="closeMenu">Soft Skills</a>
      <a href="#technologie" @click="closeMenu">Technologies</a>
      <a href="#contact" @click="closeMenu">Contact</a>
    </nav>
  </header>
</template>

<script setup>
// src/components/Header.vue

import { ref } from "vue";

// Variable d'état pour le menu mobile
const isMenuOpen = ref(false);

// Fonction pour fermer le menu quand on clique sur un lien (mobile)
const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style scoped>
/* Laissez vide si le CSS header est dans style.css */
</style>
