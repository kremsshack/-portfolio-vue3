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
      <router-link to="/" @click="closeMenu">Accueil</router-link>
      <a href="/#apropos" @click="closeMenu">À propos</a>
      <a href="/#realisations" @click="closeMenu">Réalisations</a>
      <a href="/#softskills" @click="closeMenu">Soft Skills</a>
      <a href="/#technologie" @click="closeMenu">Technologies</a>
      <a href="/#contact" @click="closeMenu">Contact</a>
    </nav>
  </header>
</template>
<script setup>
import { ref } from "vue";
const isMenuOpen = ref(false);
const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style scoped></style>
