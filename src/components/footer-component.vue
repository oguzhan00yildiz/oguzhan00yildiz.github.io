<template>
  <div id="footer" class="border-t border-gray-700/50 px-4 py-6 mt-10">
    <div class="max-w-screen-xl mx-auto text-center">
      <p class="text-gray-500 text-sm">© 2026 All Rights Reserved Oguzhan Yildiz</p>
      <p v-if="visits !== null" class="text-gray-600 text-xs mt-2 flex items-center justify-center gap-1">
        <Eye class="w-3.5 h-3.5" />{{ visits.toLocaleString() }} visits
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { Eye } from 'lucide-vue-next'

const COUNTER_URL = 'https://abacus.jasoncameron.dev'
const COUNTER_KEY = 'oguzhan00yildiz-github-io/visits'
const SESSION_FLAG = 'visit-counted'

const visits = ref<number | null>(null)

onMounted(async () => {
  // Only increment once per browser session so reloads/navigation don't inflate the count
  let counted = false
  try {
    counted = sessionStorage.getItem(SESSION_FLAG) === '1'
  } catch {}

  try {
    const res = await fetch(`${COUNTER_URL}/${counted ? 'get' : 'hit'}/${COUNTER_KEY}`)
    if (!res.ok) return
    const data = await res.json()
    visits.value = data.value
    if (!counted) sessionStorage.setItem(SESSION_FLAG, '1')
  } catch {}
})
</script>

<style scoped>
</style>
