<template>
  <div class="space-y-16">
    <!--    SHIPPED PRODUCTS SECTION-->
    <div v-if="shippedGames.length > 0" class="animate-fadeIn">
      <div class="mb-8 pb-4 border-b-2 border-primary/50">
        <h2 class="text-transparent bg-gradient-to-r from-primary inline-flex items-center gap-3 to-secondary bg-clip-text text-2xl md:text-3xl font-bold">
          <span class="text-2xl">🚀</span>
          Shipped Products
        </h2>
        <p class="text-gray-400 text-sm md:text-base mt-2">Games published and released to the world</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row auto-rows-fr gap-6">
        <card-element v-for="(game, index) in shippedGames" :key="index" :game="game"/>
      </div>
    </div>

    <!--    EDUCATION SECTION-->
    <EducationComponent/>

    <!--    OTHER PRODUCTS SECTION-->
    <div v-if="otherGames.length > 0" class="animate-fadeIn">
      <button
        @click="showOtherProjects = !showOtherProjects"
        class="w-full mb-8 pb-4 border-b-2 border-accent/50 hover:border-accent transition-all duration-300 text-left group">
        <div class="flex items-center gap-2">
          <h2 class="text-transparent bg-gradient-to-r from-accent inline-flex items-center gap-3 to-secondary bg-clip-text text-2xl md:text-3xl font-bold group-hover:from-secondary group-hover:to-accent transition-all duration-300">
            <span class="text-2xl">📦</span>
            Other Projects
          </h2>
          <p class="text-gray-400 text-sm md:text-base group-hover:text-accent transition-colors duration-300">
            {{ showOtherProjects ? '▼' : '▶' }}
          </p>
        </div>
        <p class="text-gray-400 text-xs md:text-sm mt-2 opacity-70">Game jam entries, clones, and learning projects</p>
      </button>
      <div v-if="showOtherProjects" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row auto-rows-fr gap-6">
        <card-element v-for="(game, index) in otherGames" :key="index" :game="game"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CardElement from "@/components/card-element.vue";
import EducationComponent from "@/components/education-component.vue";
import {games} from "@/data/games";
import {computed, ref} from "vue";

const shippedGames = computed(() => games.filter(game => game.status === "Shipped"));
const otherGames = computed(() => games.filter(game => game.status === "Other"));
const showOtherProjects = ref(true);

</script>

<style scoped>

</style>