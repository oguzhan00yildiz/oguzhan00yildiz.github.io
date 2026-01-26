<template>
    <nav
      class="sticky top-0 w-full px-4 pt-4 md:pt-8 pb-4 bg-background z-50 relative">
    <div class="flex items-start max-w-screen-xl md:px-12 gap-3 md:justify-between mx-auto flex-col md:flex-row">
      <!--    LEFT SIDE -->
      <div class="">
        <router-link to="/">
          <h1 class="text-3xl h-10 md:h-14 md:text-5xl text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text font-bold">
            Oguzhan Yildiz</h1>
        </router-link>
        <p class="text-sm md:text-lg text-primary ">Unity Developer | Game Programmer</p>
      </div>
      <!--    RIGHT SIDE -->
      <div class="flex text-secondary items-center gap-2 md:gap-3 absolute right-4 top-4 md:static">
        <a href="https://www.linkedin.com/in/oguzhan00yildiz/" target="_blank" aria-label="LinkedIn">
          <i class="fa-brands fa-linkedin text-4xl md:text-5xl leading-none hover:text-white transition-colors duration-150"></i>
        </a>
        <a href="https://github.com/oguzhan00yildiz" target="_blank" aria-label="GitHub">
          <i class="fa-brands fa-github text-4xl md:text-5xl leading-none hover:text-white transition-colors duration-150"></i>
        </a>
        <a href="https://www.instagram.com/oguzhan0yildiz/" target="_blank" aria-label="Instagram">
          <i class="fa-brands fa-instagram text-4xl md:text-5xl leading-none hover:text-white transition-colors duration-150"></i>
        </a>
        <a href="https://oguzhan00yildiz.itch.io/" target="_blank" aria-label="Itch.io">
          <i class="fa-brands fa-itch-io text-4xl md:text-5xl leading-none hover:text-white transition-colors duration-150"></i>
        </a>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import "@fortawesome/fontawesome-free/css/all.min.css";
</script>

<style scoped>

</style>