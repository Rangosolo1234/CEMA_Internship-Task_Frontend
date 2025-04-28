<template>
    <div class="min-h-screen bg-gradient-to-br from-blue-100 to-white py-16 px-6">
      <div class="container mx-auto max-w-6xl">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
  
          <!-- Form to add a new client on the left -->
          <div class="bg-white p-8 rounded-2xl shadow-lg">
            <h3 class="text-2xl font-semibold text-blue-600 mb-6">Add New Client</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="first_name" class="block text-gray-700 font-medium mb-2">First Name</label>
                <input v-model="newClient.first_name" id="first_name" type="text" placeholder="Enter First Name"
                  class="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div>
                <label for="last_name" class="block text-gray-700 font-medium mb-2">Last Name</label>
                <input v-model="newClient.last_name" id="last_name" type="text" placeholder="Enter Last Name"
                  class="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" required />
              </div>
            </div>
  
            <div class="mb-6">
              <label for="age" class="block text-gray-700 font-medium mb-2">Age</label>
              <input v-model="newClient.age" id="age" type="number" placeholder="Enter Age"
                class="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" required />
            </div>
  
            <button @click="addClient" class="w-full py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
              Add Client
            </button>
          </div>
  
          <!-- Client List with search bar on the right -->
          <div>
            <h3 class="text-2xl font-semibold text-blue-600 mb-6">Client List</h3>
  
            <!-- Search bar -->
            <div class="mb-6">
              <input v-model="searchQuery" type="text" placeholder="Search by name" 
                class="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                @input="filterClients" />
            </div>
  
            <!-- Display Clients in a grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div v-for="client in filteredClients" :key="client.id" class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                <h4 class="text-xl font-semibold text-blue-600">{{ client.first_name }} {{ client.last_name }}</h4>
                <p class="text-gray-600">Age: {{ client.age }}</p>
              </div>
            </div>
          </div>
  
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, computed } from 'vue';
  import { getClients, createClient } from '@/api.js';
  
  const clients = ref([]);
  const newClient = ref({ first_name: '', last_name: '', age: 0 });
  const searchQuery = ref('');
  const filteredClients = computed(() => {
    return clients.value.filter(client => 
      client.first_name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      client.last_name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });
  
  // Fetch existing clients
  const fetchClients = async () => {
    const response = await getClients();
    clients.value = response.data;
  };
  
  // Add new client to the database and refresh the client list
  const addClient = async () => {
    await createClient(newClient.value);
    newClient.value = { first_name: '', last_name: '', age: 0 }; // Reset form
    fetchClients(); // Reload client list
  };
  
  // Load client list on component mount
  onMounted(fetchClients);
  
  // Search clients by name when input changes
  const filterClients = () => {
    // Filter function is already handled by computed property filteredClients
  };
  </script>
  
  <style scoped>
  /* Custom styles to enhance the design */
  button:focus {
    outline: none;
  }
  
  input:focus, button:focus {
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.5);
  }
  </style>
  