<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <nav class="fixed top-0 left-0 w-full flex justify-between items-center p-5 bg-blue-700 text-white z-50 shadow-lg">
    <div class="text-3xl font-bold text-white">
      HIS
    </div>

    <div class="hidden md:flex space-x-8 text-lg">
      <RouterLink to="/" class="hover:text-blue-300 transition-colors duration-300">Home</RouterLink>
      <RouterLink to="/clients" class="hover:text-blue-300 transition-colors duration-300">Clients</RouterLink>
      <RouterLink to="/programs" class="hover:text-blue-300 transition-colors duration-300">Programs</RouterLink>
      <RouterLink to="/bookings" class="hover:text-blue-300 transition-colors duration-300">Bookings</RouterLink>
      <RouterLink to="/blogs" class="hover:text-blue-300 transition-colors duration-300">Blogs</RouterLink>
      <RouterLink to="/doctors" class="hover:text-blue-300 transition-colors duration-300">Doctors</RouterLink>
    </div>

    <!-- Mobile Menu Button -->
    <button @click="toggleMenu" class="md:hidden focus:outline-none">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    </button>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="absolute top-20 left-0 w-full bg-blue-700 flex flex-col items-center p-4 space-y-4">
      <RouterLink to="/" class="hover:text-blue-300 text-white">Home</RouterLink>
      <RouterLink to="/clients" class="hover:text-blue-300 text-white">Clients</RouterLink>
      <RouterLink to="/programs" class="hover:text-blue-300 text-white">Programs</RouterLink>
      <RouterLink to="/bookings" class="hover:text-blue-300 text-white">Bookings</RouterLink>
      <RouterLink to="/blogs" class="hover:text-blue-300 text-white">Blogs</RouterLink>
      <RouterLink to="/doctors" class="hover:text-blue-300 text-white">Doctors</RouterLink>
    </div>
  </nav>
</template>

<style scoped>
nav {
  backdrop-filter: blur(10px);
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .md\:flex {
    display: none;
  }
  .md\:hidden {
    display: block;
  }
}
</style>
