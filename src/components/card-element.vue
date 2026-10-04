<template>
  <div class="group rounded-lg overflow-hidden border border-gray-700 hover:border-secondary/50 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
    <router-link :to="`/games/${game.id}`">
      <div class="relative flex flex-col">
        <img :src="game.src" alt="game_gif" class="w-full aspect-video transition-all duration-300"/>
        <span v-if="game.conceptCover"
              class="absolute top-3 right-3 px-2 py-0.5 text-[10px] md:text-xs tracking-wide uppercase rounded-md text-gray-200 bg-black/60">
          Concept art
        </span>
        <!--      DETAILS-->
        <div
            class="flex items-center gap-6 justify-start px-5 absolute bottom-0 w-full bg-black bg-opacity-70 h-[15%] md:h-[20%] text-white">
          <!--        DEVELOPER-->
          <div class="flex gap-2 items-center justify-center">
            <Users class="size-5"/>
            <p class="text-xs md:text-sm">{{ game.users }}</p>
          </div>
          <!--        CREATED AT -->
          <div class="flex gap-2 items-center justify-center">
            <Clock class="size-5"/>
            <p class="text-xs md:text-sm">{{ game.createdAt }}</p>
          </div>
          <!--        GAME ENGINE -->
          <div class="flex gap-2 items-center justify-center">
            <PencilRuler class="size-5"/>
            <p class="text-xs md:text-sm">{{ game.engine }}</p>
          </div>
        </div>
      </div>
      <div class="bg-card flex flex-col gap-4 p-8">
        <div>
          <!--        TITLE-->
          <div class="flex items-center">
            <h1 class="text-xl truncate font-semibold md:text-2xl text-secondary group-hover:text-white transition-colors duration-300">{{ game.title }}</h1>
            <ChevronRight class="ml-auto text-secondary group-hover:text-white size-6 md:size-8 transition-colors duration-300"/>
          </div>
          <!--        SUBTITLE-->
          <h2 class="truncate text-base md:text-lg">{{ game.subtitle }}</h2>
        </div>
        <!--        DESCRIPTION-->
        <p class="text-xs md:text-sm">{{ game.description }}</p>
        <!--        TECH TAGS-->
        <ul class="flex flex-wrap gap-2">
          <li v-for="tag in tags" :key="tag"
              class="px-2 py-0.5 text-xs rounded-md transition-colors duration-300"
              :class="tag === filter.active ? 'text-primary bg-primary/15' : 'text-gray-400 bg-white/5'">
            {{ tag }}
          </li>
        </ul>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts" setup>
import {Users, Clock, PencilRuler, ChevronRight} from "lucide-vue-next";
import type {IGame} from "@/models/IGame";
import {computed} from "vue";
import {useSkillFilterStore} from "@/stores/skillFilter";


const props = defineProps({
  game: {
    type: Object as () => IGame,
    required: true,
  },
});

const filter = useSkillFilterStore();

const tags = computed(() => [props.game.engine, ...props.game.languages, ...props.game.platforms]);
</script>

<style scoped>

</style>