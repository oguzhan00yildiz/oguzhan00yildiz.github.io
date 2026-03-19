<template>
  <div class="max-w-[1900px] mx-auto px-4 md:px-8">
    <main class="max-w-screen-xl mx-auto flex flex-col gap-4 md:gap-6 pb-6 md:pb-8">
        <!--    AVATAR AND DESCRIPTION-->
        <HeroComponent/>
        <!--    MY PROJECTS-->
        <GamesComponent/>

        <!-- About & Connect (always at bottom) -->
        <section class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
          <div class="rounded-xl p-6">
            <h3 class="text-primary text-sm font-semibold tracking-wide uppercase mb-3">About Me</h3>
            <div class="w-8 h-px bg-primary/40 mb-4"></div>
            <p class="text-gray-300 text-sm leading-relaxed">
              My interest in games began at an early age with titles like Mario and later expanded through PC games such as GTA Vice City.
            </p>
            <p class="text-gray-300 text-sm leading-relaxed mt-3">
              I started developing games in 2019, creating early prototypes alongside programming courses. After graduating from an associate degree program in Turkey with a completed game project, I continued my studies in Finland to further develop my skills in game production. Over the years, I have worked on and published games across PC and mobile platforms, participated in small team projects during the pandemic, and later in 2025 co-founded a small company in Finland where we released a game on Steam. Toward the end of the same year, I also collaborated with another team to publish a Steam demo.
            </p>
            <p class="text-gray-300 text-sm leading-relaxed mt-3">
              Outside of development: I enjoy game jams, exploring new games with friends, and working on experimental projects.
            </p>
          </div>
          <div class="rounded-xl p-6">
            <h3 class="text-secondary text-sm font-semibold tracking-wide uppercase mb-3">Let's Connect</h3>
            <div class="w-8 h-px bg-secondary/40 mb-4"></div>
            <p class="text-gray-400 text-sm leading-relaxed mb-4">
              I'm always interested in discussing game development, programming challenges, and creative projects. Feel free to reach out!
            </p>
            <div class="flex flex-wrap gap-3">
              <a href="https://www.linkedin.com/in/oguzhan00yildiz/" target="_blank"
                 class="inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-primary bg-primary/10 hover:bg-primary/20 rounded-lg transition-all duration-300">
                <i class="fa-brands fa-linkedin"></i>
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/oguzhan00yildiz" target="_blank"
                 class="inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-secondary bg-secondary/10 hover:bg-secondary/20 rounded-lg transition-all duration-300">
                <i class="fa-brands fa-github"></i>
                <span>GitHub</span>
              </a>
              <a href="https://www.instagram.com/oguzhan0yildiz/" target="_blank"
                 class="inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-pink-400 bg-pink-500/10 hover:bg-pink-500/20 rounded-lg transition-all duration-300">
                <i class="fa-brands fa-instagram"></i>
                <span>Instagram</span>
              </a>
              <a href="mailto:oguzhan00yildiz@gmail.com"
                 class="inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-green-400 bg-green-500/10 hover:bg-green-500/20 rounded-lg transition-all duration-300">
                <i class="fa-solid fa-envelope"></i>
                <span>Email</span>
              </a>
              <a href="https://oguzhan00yildiz.itch.io/" target="_blank"
                 class="inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-red-400 bg-red-500/10 hover:bg-red-500/20 rounded-lg transition-all duration-300">
                <i class="fa-brands fa-itch-io"></i>
                <span>Itch.io</span>
              </a>
            </div>
          </div>
        </section>
      </main>
  </div>
</template>

<script lang="ts" setup>
import HeroComponent from "@/components/hero-component.vue";
import GamesComponent from "@/components/games-component.vue";
</script>
