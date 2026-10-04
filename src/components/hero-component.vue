<template>
  <div class="flex flex-col md:flex-row items-center gap-8 pt-2 pb-2 md:gap-12">
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
      <!-- Tech stack -->
      <div class="flex flex-col items-center md:items-start gap-2 mt-2">
        <p class="text-base md:text-lg text-gray-400 leading-[2.4] text-center md:text-left">
          <template v-for="(group, gi) in skillGroups" :key="group.title">
            <span>{{ group.lead }} </span>
            <template v-for="(skill, i) in group.skills" :key="skill.name">
              <button v-if="projectCount(skill.name)"
                      type="button"
                      @click="selectSkill(skill.name)"
                      :aria-pressed="filter.active === skill.name"
                      :title="`Show projects built with ${skill.name}`"
                      class="inline-flex items-center gap-1.5 align-middle mx-0.5 px-2 py-0.5 text-sm md:text-base font-medium rounded-md border transition-all duration-300"
                      :class="filter.active === skill.name ? group.active : skill.main ? group.main : group.box">
                {{ skill.name }}
                <span class="text-[0.7em] font-normal opacity-60">{{ projectCount(skill.name) }}</span>
              </button>
              <span v-else class="inline-flex items-center align-middle mx-0.5 px-2 py-0.5 text-sm md:text-base font-medium rounded-md border text-gray-400 bg-white/5 border-white/10">{{ skill.name }}</span>
              <span>{{ separator(i, group.skills.length, gi === skillGroups.length - 1) }}</span>
            </template>
          </template>
        </p>
        <p class="text-xs text-gray-500">Select an engine or platform to see the projects behind it.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { games } from '@/data/games'
import { usesSkill, useSkillFilterStore } from '@/stores/skillFilter'

const filter = useSkillFilterStore()

const projectCount = (skill: string) => games.filter(game => usesSkill(game, skill)).length

// ", " between items, " and " before the last one, then a comma or the closing period
const separator = (index: number, count: number, isLastGroup: boolean) => {
  if (index < count - 2) return ', '
  if (index === count - 2) return ' and '
  return isLastGroup ? '.' : ', '
}

const selectSkill = (skill: string) => {
  filter.toggle(skill)
  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

// main = strongest skills, tinted in the group color. Full class names so Tailwind can pick them up
const skillGroups = [
  {
    title: 'Engines',
    lead: 'I build games in',
    text: 'text-secondary',
    main: 'text-secondary bg-secondary/10 border-secondary/30 hover:bg-secondary/20 hover:border-secondary/60',
    box: 'text-gray-200 bg-white/5 border-white/10 hover:text-white hover:border-secondary/50',
    active: 'text-secondary bg-secondary/25 border-secondary',
    skills: [
      { name: 'Unity', main: true },
      { name: 'Godot', main: false },
      { name: 'Unreal Engine', main: false },
    ],
  },
  {
    title: 'Platforms',
    lead: 'for',
    text: 'text-accent',
    main: 'text-accent bg-accent/10 border-accent/30 hover:bg-accent/20 hover:border-accent/60',
    box: 'text-gray-200 bg-white/5 border-white/10 hover:text-white hover:border-accent/50',
    active: 'text-accent bg-accent/25 border-accent',
    skills: [
      { name: 'PC', main: true },
      { name: 'Mobile', main: true },
      { name: 'WebGL', main: false },
      { name: 'PS5', main: false },
      { name: 'AR / VR', main: false },
    ],
  },
]

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
