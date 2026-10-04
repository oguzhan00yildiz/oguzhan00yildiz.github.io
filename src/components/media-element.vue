<template>
  <video v-if="isVideo"
         ref="video"
         :poster="poster"
         :aria-label="alt"
         muted
         loop
         playsinline
         preload="none"
         class="bg-card">
    <source v-if="inView" :src="src" type="video/mp4">
  </video>
  <img v-else :src="src" :alt="alt" loading="lazy" decoding="async">
</template>

<script lang="ts" setup>
import {computed, nextTick, onBeforeUnmount, onMounted, ref} from "vue";

const props = defineProps<{ src: string; alt: string }>();

const isVideo = computed(() => props.src.endsWith(".mp4"));
const poster = computed(() => props.src.replace(/\.mp4$/, ".jpg"));

const video = ref<HTMLVideoElement | null>(null);
const inView = ref(false);
let observer: IntersectionObserver | null = null;

// Only download and play videos while they are on screen
onMounted(() => {
  if (!video.value) return;
  observer = new IntersectionObserver(async ([entry]) => {
    const el = video.value!;
    if (entry.isIntersecting) {
      if (!inView.value) {
        inView.value = true;
        await nextTick();
        el.load();
      }
      el.play().catch(() => {});
    } else {
      el.pause();
    }
  }, {rootMargin: "200px"});
  observer.observe(video.value);
});

onBeforeUnmount(() => observer?.disconnect());
</script>
