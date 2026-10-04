<template>
  <div id="projects" class="space-y-16 scroll-mt-32">
    <!--    ACTIVE SKILL FILTER-->
    <div v-if="filter.active" class="flex flex-wrap items-center gap-3 -mb-8 text-sm">
      <span class="text-gray-400">
        Showing {{ filteredCount }} {{ filteredCount === 1 ? 'project' : 'projects' }} with
      </span>
      <span class="px-3 py-1 rounded-lg text-primary bg-primary/10">{{ filter.active }}</span>
      <button type="button" @click="filter.clear()"
              class="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-gray-400 bg-white/5 hover:text-white hover:bg-white/10 transition-all duration-300">
        <X class="size-4"/>
        Clear filter
      </button>
    </div>

    <!--    SHIPPED PRODUCTS SECTION-->
    <div v-if="shippedGames.length > 0" class="animate-fadeIn">
      <div class="mb-8 pb-4 border-b-2 border-primary/50">
        <h2 class="text-transparent bg-gradient-to-r from-primary inline-flex items-center gap-3 to-secondary bg-clip-text text-2xl md:text-3xl font-bold">
          <Rocket class="size-6 md:size-7 text-primary shrink-0"/>
          Shipped Products
        </h2>
        <p class="text-gray-400 text-sm md:text-base mt-2">Games released on Steam and Google Play</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row auto-rows-fr gap-6">
        <card-element v-for="game in shippedGames" :key="game.id" :game="game"/>
      </div>
    </div>

    <!--    OTHER PRODUCTS SECTION-->
    <div v-if="otherGames.length > 0" class="animate-fadeIn">
      <button
        @click="showOtherProjects = !showOtherProjects"
        class="w-full mb-8 pb-4 border-b-2 border-accent/50 hover:border-accent transition-all duration-300 text-left group">
        <div class="flex items-center gap-2">
          <h2 class="text-transparent bg-gradient-to-r from-accent inline-flex items-center gap-3 to-secondary bg-clip-text text-2xl md:text-3xl font-bold group-hover:from-secondary group-hover:to-accent transition-all duration-300">
            <Boxes class="size-6 md:size-7 text-accent shrink-0"/>
            Other Projects
          </h2>
          <ChevronDown class="size-5 text-gray-400 group-hover:text-accent transition-all duration-300"
                       :class="showOtherProjects ? '' : '-rotate-90'"/>
        </div>
        <p class="text-gray-400 text-xs md:text-sm mt-2 opacity-70">Prototypes, game jam entries, tools and course projects</p>
      </button>
      <div v-if="showOtherProjects" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row auto-rows-fr gap-6">
        <card-element v-for="game in otherGames" :key="game.id" :game="game"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CardElement from "@/components/card-element.vue";
import {games} from "@/data/games";
import {computed, ref, watch} from "vue";
import {Boxes, ChevronDown, Rocket, X} from "lucide-vue-next";
import {usesSkill, useSkillFilterStore} from "@/stores/skillFilter";

const filter = useSkillFilterStore();

const visibleGames = computed(() =>
  filter.active ? games.filter(game => usesSkill(game, filter.active!)) : games);
const shippedGames = computed(() => visibleGames.value.filter(game => game.status === "Shipped"));
const otherGames = computed(() => visibleGames.value.filter(game => game.status === "Other"));
const filteredCount = computed(() => visibleGames.value.length);
const showOtherProjects = ref(true);

// Make sure filtered results aren't hidden in the collapsed section
watch(() => filter.active, active => {
  if (active) showOtherProjects.value = true;
});

</script>

<style scoped>

</style>