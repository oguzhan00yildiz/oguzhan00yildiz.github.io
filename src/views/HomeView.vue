<template>
  <div class="max-w-[1900px] mx-auto px-4 md:px-8">
    <div class="2xl:flex 2xl:gap-6 2xl:items-start">

      <!-- Left Sidebar: About Me (visible on 2xl+) -->
      <aside
        class="hidden 2xl:block w-[300px] shrink-0 sticky top-[7.5rem]"
      >
        <div class="rounded-xl p-6 max-h-[calc(100vh-4rem)] overflow-y-auto scrollbar-thin">
          <h3 class="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3">About Me</h3>
          <div class="w-10 h-px bg-gradient-to-r from-primary/60 to-transparent mb-5"></div>
          <p class="text-gray-300 text-sm leading-relaxed">
            My interest in games began at an early age with titles like Mario and later expanded through PC games such as GTA Vice City.
          </p>
          <p class="text-gray-300 text-sm leading-relaxed mt-4">
            I started developing games in 2019, creating early prototypes alongside programming courses. After graduating from an associate degree program in Turkey with a completed game project, I continued my studies in Finland to further develop my skills in game production.
          </p>
          <p class="text-gray-300 text-sm leading-relaxed mt-4">
            Over the years, I have worked on and published games across PC and mobile platforms, participated in small team projects during the pandemic, and later in 2025 co-founded a small company in Finland where we released a game on Steam.
          </p>
          <p class="text-gray-300 text-sm leading-relaxed mt-4">
            Toward the end of the same year, I also collaborated with another team to publish a Steam demo.
          </p>
          <p class="text-gray-300 text-sm leading-relaxed mt-4">
            Outside of development: I enjoy game jams, exploring new games with friends, and working on experimental projects.
          </p>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 min-w-0 flex flex-col gap-4 md:gap-6 pb-6 md:pb-8 max-w-screen-xl mx-auto 2xl:max-w-none">
        <!--    AVATAR AND DESCRIPTION-->
        <HeroComponent/>
        <!--    MY PROJECTS-->
        <GamesComponent/>

        <!-- Mobile/Tablet: About & Connect (below 2xl) -->
        <div class="2xl:hidden grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
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
        </div>
      </main>

      <!-- Right Sidebar: Let's Connect (visible on 2xl+) -->
      <aside
        class="hidden 2xl:block w-[280px] shrink-0 sticky top-[7.5rem]"
      >
        <div class="rounded-xl p-6">
          <h3 class="text-secondary text-xs font-semibold tracking-[0.2em] uppercase mb-3">Let's Connect</h3>
          <div class="w-10 h-px bg-gradient-to-r from-secondary/60 to-transparent mb-5"></div>
          <p class="text-gray-400 text-sm leading-relaxed mb-5">
            I'm always interested in discussing game development, programming challenges, and creative projects. Feel free to reach out!
          </p>
          <div class="flex flex-col gap-4">
            <a href="https://www.linkedin.com/in/oguzhan00yildiz/" target="_blank"
               class="flex items-center gap-3 text-gray-400 hover:text-primary transition-all duration-300 group">
              <div class="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <i class="fa-brands fa-linkedin text-base"></i>
              </div>
              <span class="text-sm">LinkedIn</span>
            </a>
            <a href="https://github.com/oguzhan00yildiz" target="_blank"
               class="flex items-center gap-3 text-gray-400 hover:text-secondary transition-all duration-300 group">
              <div class="p-2 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                <i class="fa-brands fa-github text-base"></i>
              </div>
              <span class="text-sm">GitHub</span>
            </a>
            <a href="https://www.instagram.com/oguzhan0yildiz/" target="_blank"
               class="flex items-center gap-3 text-gray-400 hover:text-pink-400 transition-all duration-300 group">
              <div class="p-2 rounded-lg bg-pink-500/10 group-hover:bg-pink-500/20 transition-colors">
                <i class="fa-brands fa-instagram text-base"></i>
              </div>
              <span class="text-sm">Instagram</span>
            </a>
            <a href="https://oguzhan00yildiz.itch.io/" target="_blank"
               class="flex items-center gap-3 text-gray-400 hover:text-red-400 transition-all duration-300 group">
              <div class="p-2 rounded-lg bg-red-500/10 group-hover:bg-red-500/20 transition-colors">
                <i class="fa-brands fa-itch-io text-base"></i>
              </div>
              <span class="text-sm">Itch.io</span>
            </a>
            <a href="mailto:oguzhan00yildiz@gmail.com"
               class="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-all duration-300 group">
              <div class="p-2 rounded-lg bg-green-500/10 group-hover:bg-green-500/20 transition-colors">
                <i class="fa-solid fa-envelope text-base"></i>
              </div>
              <span class="text-sm">Email</span>
            </a>
          </div>
        </div>
      </aside>

    </div>
  </div>
</template>

<script lang="ts" setup>
import HeroComponent from "@/components/hero-component.vue";
import GamesComponent from "@/components/games-component.vue";
</script>
