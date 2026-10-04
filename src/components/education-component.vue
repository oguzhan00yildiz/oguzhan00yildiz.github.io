<template>
  <section id="education-section" aria-labelledby="education-title">
    <!--    TITLE-->
    <div class="mb-8 pb-4 border-b-2 border-secondary/50">
      <h2 id="education-title" class="text-transparent inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-2xl md:text-3xl font-bold">
        <GraduationCap class="size-6 md:size-7 text-secondary shrink-0"/>
        Education
      </h2>
    </div>

    <!--    EDUCATION-->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="bg-card p-6 rounded-md">
        <h3 class="text-xl font-semibold md:text-2xl text-secondary">JAMK University of Applied Sciences</h3>
        <p class="text-sm text-gray-400 mt-1">2023 – 2027</p>
        <p class="mt-3">Bachelor of Business Administration, Business Information Technology (Game Production)</p>
      </div>

      <div class="bg-card p-6 rounded-md">
        <h3 class="text-xl font-semibold md:text-2xl text-secondary">Erciyes University, Kayseri</h3>
        <p class="text-sm text-gray-400 mt-1">2019 – 2021</p>
        <p class="mt-3">Associate Degree in Computer Programming</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {GraduationCap} from "lucide-vue-next";
</script>

<style scoped>

</style>