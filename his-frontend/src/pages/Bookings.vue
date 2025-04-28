<script setup>
import { ref, onMounted } from 'vue';
import { getBookings, createBooking } from '@/api.js';

// Reactive properties for bookings and the new booking form
const bookings = ref([]);
const newBooking = ref({ client: '', doctor: '', appointment_time: '', is_home_visit: false, cost: 0 });

// Fetch existing bookings on component mount
const fetchBookings = async () => {
  const response = await getBookings();
  bookings.value = response.data;
};

// Add a new booking and reset the form
const addBooking = async () => {
  await createBooking(newBooking.value);
  newBooking.value = { client: '', doctor: '', appointment_time: '', is_home_visit: false, cost: 0 }; // Reset form
  fetchBookings(); // Refresh the list of bookings
};

// Automatically fetch bookings on component mount
onMounted(fetchBookings);
</script>

<template>
  <div class="max-w-xl mx-auto mt-8 p-6 border rounded-lg shadow-lg bg-white">
    <h2 class="text-2xl font-semibold text-center mb-4">Manage Bookings</h2>
    
    <!-- New Booking Form -->
    <div class="space-y-4">
      <input v-model="newBooking.client" placeholder="Client ID" class="border p-2 rounded w-full" />
      <input v-model="newBooking.doctor" placeholder="Doctor ID" class="border p-2 rounded w-full" />
      <input v-model="newBooking.appointment_time" type="datetime-local" class="border p-2 rounded w-full" />
      <label class="flex items-center space-x-2">
        <input type="checkbox" v-model="newBooking.is_home_visit" class="mr-2" /> 
        <span>Home Visit?</span>
      </label>
      <input v-model="newBooking.cost" type="number" placeholder="Cost" class="border p-2 rounded w-full" />

      <button @click="addBooking" class="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 w-full">
        Add Booking
      </button>
    </div>

    <!-- List of Bookings -->
    <ul class="mt-6">
      <li v-for="booking in bookings" :key="booking.id" class="border-b py-3">
        <strong class="text-blue-600">{{ booking.client }}</strong> with Dr. {{ booking.doctor }} 
        at {{ new Date(booking.appointment_time).toLocaleString() }} 
        <span v-if="booking.is_home_visit" class="text-green-500">(Home Visit)</span>
        <span>- KSh {{ booking.cost }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* Custom Styles */
input[type="datetime-local"], input[type="number"], input[type="text"], button {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

button {
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #004aad;
}

ul {
  padding-left: 0;
}

li {
  list-style-type: none;
}

li strong {
  color: #2b6cb0;
}
</style>
