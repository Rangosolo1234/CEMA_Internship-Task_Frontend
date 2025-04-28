<script setup>
import { ref, onMounted } from 'vue';
import { getHospitals } from '@/api.js';

const hospitals = ref([]);

onMounted(async () => {
  const response = await getHospitals();
  hospitals.value = response.data;
});
</script>

<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-4xl font-semibold text-blue-700 mb-8">Hospitals</h2>
      <p class="text-lg text-gray-600 mb-12">Find the best hospitals in your area with essential details.</p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="hospital in hospitals" :key="hospital.id" class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">{{ hospital.name }}</h3>
          <p class="text-gray-500 mb-4">{{ hospital.address }}</p>
          <p class="text-gray-600 text-sm mb-4">Phone: {{ hospital.phone_number }}</p>
          <p class="text-gray-600 text-sm mb-4">Email: {{ hospital.email }}</p>
          <router-link :to="`/hospitals/${hospital.id}`" class="text-blue-500 hover:underline font-semibold">More Details</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Custom hover effect for cards */
div:hover {
  transform: translateY(-10px);
}
</style>
