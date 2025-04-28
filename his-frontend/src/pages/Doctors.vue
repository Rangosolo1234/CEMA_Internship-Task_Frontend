<script setup>
import { ref, onMounted } from 'vue';
import { getDoctorProfiles } from '@/api.js';

const doctors = ref([]);

onMounted(async () => {
  const response = await getDoctorProfiles();
  doctors.value = response.data;
});
</script>

<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-4xl font-semibold text-blue-700 mb-8">Meet Our Doctors</h2>
      <p class="text-lg text-gray-600 mb-12">Our experienced doctors are here to provide you with the best care. Get to know them!</p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="doctor in doctors" :key="doctor.user" class="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
          <div class="mb-4">
            <img :src="doctor.profile_picture" alt="Doctor" class="w-32 h-32 rounded-full mx-auto object-cover shadow-md" />
          </div>
          <h3 class="text-2xl font-semibold text-gray-800">{{ doctor.name }}</h3>
          <p class="text-gray-500 text-sm mb-4">{{ doctor.specialization }}</p>
          <p class="text-gray-600">{{ doctor.short_description }}</p>
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
