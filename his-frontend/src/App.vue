<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="min-h-screen bg-blue-50">
    <Navbar class="fixed top-0 left-0 w-full z-50" />
    <div class="pt-20 px-6">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
/* Additional styling if needed */
</style>
