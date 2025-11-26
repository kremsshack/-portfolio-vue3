<template>
  <section id="accueil" class="hero">
    <h3>Bienvenue sur mon portfolio</h3>
    <p>
      Étudiant en <strong>1ère année de BTS SIO</strong>, passionné par le
      développement web, la cybersécurité et l’intelligence artificielle.
    </p>
  </section>

  <div class="container">
    <section id="apropos">
      <h2>À propos</h2>
      <p>
        Depuis toujours, la technologie m’intrigue. Pas seulement pour ce
        qu’elle permet de faire, mais pour la manière dont elle relie,
        transforme et inspire.<br /><br />

        Adolescent, je passais des heures à explorer, tester, apprendre seul.
        Cette curiosité, d’abord naïve, est devenue une véritable passion :
        comprendre le numérique pour mieux le maîtriser. C’est ce qui m’a
        naturellement conduit vers un
        <strong>BTS SIO</strong>, une formation qui m’apprend à donner forme à
        mes idées et à bâtir des solutions concrètes.<br /><br />

        Au fil de ce parcours, j’ai découvert que l’informatique n’est pas
        qu’une affaire de code ou de machines — c’est avant tout une affaire
        d’humains. Derrière chaque programme se cache une volonté d’aider,
        d’améliorer, de protéger.<br /><br />

        Mon ambition dépasse la technique :
        <strong>je veux apporter du sens à ce que je crée</strong>. Me
        spécialiser en cybersécurité, contribuer à rendre le monde numérique
        plus sûr, et continuer à apprendre, encore et toujours.<br /><br />

        Ce portfolio est le reflet de cette quête : une quête faite d’espoir, de
        travail et de conviction — celle qu’avec de la persévérance, chaque rêve
        peut devenir un projet, et chaque projet une réalité.
      </p>
    </section>

    <div class="image-zone">
      <img src="@/assets/moi.png" alt="Photo de mes réalisations" />
    </div>

    <section id="realisations">
      <h2>Réalisations</h2>
      <div class="projects">
        <router-link to="/memory" class="project"
          >memory codé en vue 3</router-link
        >
        <a href="#" class="project">Projet 2</a>
        <a href="#" class="project">Projet 3</a>
        <a href="#" class="project">Projet 4</a>
      </div>
    </section>
  </div>
  <section id="softskills">
    <h2>Soft Skills</h2>
    <ul>
      <li>Rigueur et sens du détail</li>
      <li>Autonomie et apprentissage rapide</li>
      <li>Esprit d’équipe et leadership</li>
      <li>Gestion du stress et organisation</li>
    </ul>
  </section>

  <section id="technologie">
    <h2>Technologies utilisées</h2>
    <div class="tech-logos">
      <img src="@/assets/html.png" alt="HTML" />
      <img src="@/assets/css.png" alt="CSS" />
      <img src="@/assets/github.png" alt="GitHub" />
    </div>
  </section>

  <section id="contact">
    <h2>Contact</h2>
    <div class="contact-buttons">
      <a href="mailto:kerem2007@hotmail.fr" class="btn">📧 Email</a>
      <a href="https://www.linkedin.com" target="_blank" class="btn"
        >💼 LinkedIn</a
      >
      <a href="https://github.com/kremsshack" target="_blank" class="btn"
        >💻 GitHub</a
      >
    </div>
  </section>
</template>

<script setup></script>

<style scoped></style>
