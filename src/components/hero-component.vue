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
      <ChevronDown class="size-6 md:size-8 animate-bounce shrink-0 md:hidden" />
    </div>
    <ChevronDown class="size-6 md:size-8 animate-bounce shrink-0 hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2" />
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

</style>