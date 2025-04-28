<script setup>
import { ref, onMounted } from 'vue';
import { getHealthPrograms, createHealthProgram } from '@/api.js';

const programs = ref([]);
const newProgram = ref({ name: '' });

const fetchPrograms = async () => {
  const response = await getHealthPrograms();
  programs.value = response.data;
};

const addProgram = async () => {
  if (newProgram.value.name.trim() !== '') {
    await createHealthProgram(newProgram.value);
    newProgram.value.name = '';
    fetchPrograms();
  }
};

onMounted(fetchPrograms);
</script>

<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-4xl font-semibold text-blue-700 mb-8">Health Programs</h2>
      <p class="text-lg text-gray-600 mb-12">Manage and add new health programs to improve patient care and wellness.</p>

      <!-- Add New Program Section -->
      <div class="mb-8">
        <input
          v-model="newProgram.name"
          class="border-2 border-gray-300 rounded-lg p-4 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Enter Program Name"
        />
        <button
          @click="addProgram"
          class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg ml-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Program
        </button>
      </div>

      <!-- Program List -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="program in programs"
          :key="program.id"
          class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
        >
          <h3 class="text-xl font-semibold text-gray-800 mb-4">{{ program.name }}</h3>
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
