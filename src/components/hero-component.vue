<template>
  <div class="flex flex-col md:flex-row items-center gap-8 pt-2 pb-6 relative md:gap-12">
    <div class="flex-shrink-0 size-[140px] md:size-[180px] overflow-hidden ring-3 ring-secondary rounded-full">
      <button @click="handleImageClick">
        <img alt="avatar"
             ref="imageAvatar"
             class="size-full object-cover transition-transform duration-200 scale-150 translate-y-6"
             src="/img/avatar.jpg">
      </button>
    </div>
    <div class="flex flex-col items-center md:items-start gap-4 flex-1">
      <p
        class="text-lg md:text-2xl text-center md:text-left text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text font-light">
        Also known as Ossi, a Game Production student at JAMK University with 6+ years of game programming experience. Passionate about crafting immersive gameplay experiences and solving complex technical challenges.
      </p>
      <!-- Skills Section -->
      <div class="grid grid-cols-2 md:grid-cols-3 gap-3 w-full mt-6">
        <!-- Languages Group -->
        <div class="bg-card border border-primary/30 rounded-lg px-3 py-2.5 hover:border-primary/60 transition-colors">
          <h3 class="text-primary font-medium text-xs mb-2 text-center">Languages</h3>
          <div class="flex flex-col gap-2">
            <div class="skill-item">
              <span class="text-white text-xs font-medium mb-1">C#</span>
              <div class="skill-bar"><div class="skill-fill bg-primary" style="width: 100%"></div></div>
            </div>
            <div class="skill-item">
              <span class="text-white text-xs font-medium mb-1">C++</span>
              <div class="skill-bar"><div class="skill-fill bg-primary" style="width: 30%"></div></div>
            </div>
            <div class="skill-item">
              <span class="text-white text-xs font-medium mb-1">Python</span>
              <div class="skill-bar"><div class="skill-fill bg-primary" style="width: 30%"></div></div>
            </div>
          </div>
        </div>
        
        <!-- Engines Group -->
        <div class="bg-card border border-secondary/30 rounded-lg px-3 py-2.5 hover:border-secondary/60 transition-colors">
          <h3 class="text-secondary font-medium text-xs mb-2 text-center">Engines</h3>
          <div class="flex flex-col gap-2">
            <div class="skill-item">
              <span class="text-white text-xs font-medium mb-1">Unity</span>
              <div class="skill-bar"><div class="skill-fill bg-secondary" style="width: 100%"></div></div>
            </div>
            <div class="skill-item">
              <span class="text-white text-xs font-medium mb-1">Unreal</span>
              <div class="skill-bar"><div class="skill-fill bg-secondary" style="width: 50%"></div></div>
            </div>
            <div class="skill-item">
              <span class="text-white text-xs font-medium mb-1">Godot</span>
              <div class="skill-bar"><div class="skill-fill bg-secondary" style="width: 30%"></div></div>
            </div>
          </div>
        </div>
        
        <!-- Platforms Group - Centered on mobile -->
        <div class="col-span-2 md:col-span-1 flex justify-center">
          <div class="bg-card border border-accent/30 rounded-lg px-3 py-2.5 hover:border-accent/60 transition-colors w-full">
            <h3 class="text-accent font-medium text-xs mb-2 text-center">Platforms</h3>
            <div class="grid grid-cols-2 gap-x-3 gap-y-2">
              <div class="skill-item">
                <span class="text-white text-xs font-medium mb-1">PC</span>
                <div class="skill-bar"><div class="skill-fill bg-accent" style="width: 95%"></div></div>
              </div>
              <div class="skill-item">
                <span class="text-white text-xs font-medium mb-1">Mobile</span>
                <div class="skill-bar"><div class="skill-fill bg-accent" style="width: 95%"></div></div>
              </div>
              <div class="skill-item">
                <span class="text-white text-xs font-medium mb-1">PS5</span>
                <div class="skill-bar"><div class="skill-fill bg-accent" style="width: 30%"></div></div>
              </div>
              <div class="skill-item">
                <span class="text-white text-xs font-medium mb-1">AR / VR</span>
                <div class="skill-bar"><div class="skill-fill bg-accent" style="width: 30%"></div></div>
              </div>
              <div class="skill-item">
                <span class="text-white text-xs font-medium mb-1">WebGL</span>
                <div class="skill-bar"><div class="skill-fill bg-accent" style="width: 30%"></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChevronDown class="size-6 md:size-8 animate-bounce shrink-0 md:hidden mt-4" />
    </div>
    <ChevronDown class="size-6 md:size-8 animate-bounce shrink-0 hidden md:block absolute left-1/2 -translate-x-1/2" style="bottom: -60px" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ChevronDown } from 'lucide-vue-next'

const imageAvatar = ref<HTMLImageElement | null>(null)

const handleImageClick = () => {
  if (imageAvatar.value) {
    imageAvatar.value.classList.add('scale-150')
    imageAvatar.value.classList.add('translate-y-6')
  } else {
    console.warn('Image element not found.')
  }
}
</script>

<style scoped>
.skill-bar {
  width: 100%;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.08);
  border-radius: 2px;
  overflow: hidden;
}

.skill-fill {
  height: 100%;
  border-radius: 2px;
  transition: width 1s ease-out;
  opacity: 0.85;
}

.skill-item:hover .skill-fill {
  opacity: 1;
}
</style>