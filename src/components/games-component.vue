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

    <!--    OTHER PRODUCTS SECTION-->
    <div v-if="otherGames.length > 0" class="animate-fadeIn">
      <div class="mb-8 pb-4 border-b-2 border-accent/50">
        <h2 class="text-transparent bg-gradient-to-r from-accent inline-flex items-center gap-3 to-secondary bg-clip-text text-2xl md:text-3xl font-bold">
          <span class="text-2xl">📦</span>
          Other Projects
        </h2>
        <p class="text-gray-400 text-sm md:text-base mt-2">Game jam entries, clones, and learning projects</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row auto-rows-fr gap-6">
        <card-element v-for="(game, index) in otherGames" :key="index" :game="game"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CardElement from "@/components/card-element.vue";
import {games} from "@/data/games";
import {computed} from "vue";

const shippedGames = computed(() => games.filter(game => game.status === "Shipped"));
const otherGames = computed(() => games.filter(game => game.status === "Other"));

</script>

<style scoped>

</style>