<template>
  <div>
    <!--    SHIPPED PRODUCTS SECTION-->
    <div v-if="shippedGames.length > 0" class="mb-12">
      <h2 class="text-transparent bg-gradient-to-r from-primary inline-block to-secondary bg-clip-text text-2xl md:text-3xl font-bold py-4">
        Shipped Products</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row auto-rows-fr gap-4">
        <card-element v-for="(game, index) in shippedGames" :key="index" :game="game"/>
      </div>
    </div>

    <!--    OTHER PRODUCTS SECTION-->
    <div v-if="otherGames.length > 0" class="mb-12">
      <h2 class="text-transparent bg-gradient-to-r from-primary inline-block to-secondary bg-clip-text text-2xl md:text-3xl font-bold py-4">
        Other Products</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row auto-rows-fr gap-4">
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