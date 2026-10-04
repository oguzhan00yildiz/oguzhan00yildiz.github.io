<template>
  <div class="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
    <h1 class="text-6xl text-primary font-bold mb-4">404</h1>
    <p class="text-xl text-gray-300 mb-6">The page you are looking for could not be found.</p>
    <router-link to="/"
                 class="px-6 py-3 text-primary bg-primary/10 hover:bg-primary/20 border border-primary/40 hover:border-primary rounded-lg transition-all duration-300">
      Go back home
    </router-link>
  </div>
</template>
