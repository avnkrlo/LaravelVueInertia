<script setup>
import { ref } from 'vue';
  
const isNavbarOpen = ref(false);
const isDropdownOpen = ref(false);
  
const toggleNavbar = () => {
  isNavbarOpen.value = !isNavbarOpen.value;
};
  
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
</script>

<template>
    <nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div class="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
            <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="Images/logo.jpg" class="h-8" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Aivan</span>
            </a>

            <button 
                @click="toggleNavbar" 
                class="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
                aria-controls="navbar-dropdown" 
                :aria-expanded="isNavbarOpen.toString()">
                <span class="sr-only">
                    Open main menu
                </span>
                
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>

            <div :class="['w-full md:block md:w-auto', { 'hidden': !isNavbarOpen }]" id="navbar-dropdown">
                <ul class="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <a href="#" class="block px-3 py-2 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">
                            Home
                        </a>
                    </li>

                    <li>
                    <div class="relative">
                        <button 
                            @click="toggleDropdown" 
                            class="flex items-center justify-between w-full px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                            Dropdown
                            <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                            </svg>
                        </button>

                        <!-- Dropdown menu -->
                        <div v-if="isDropdownOpen" class="absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                <li>
                                    <a href="#" class="block px-4 py-2 font-thin hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        Data Entry Services
                                    </a>
                                </li>

                                <li>
                                    <a href="#" class="block px-4 py-2 font-thin hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        Data Processing Services
                                    </a>
                                </li>

                                <li>
                                    <a href="#" class="block px-4 py-2 font-thin hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        Data Conversion Services
                                    </a>
                                </li>

                                <li>
                                    <a href="#" class="block px-4 py-2 font-thin hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        Data Cleansing Services
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                    </li>

                    <li>
                        <a href="#" class="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                            Services
                        </a>
                    </li>

                    <li>
                        <a href="#" class="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                            Pricing
                        </a>
                    </li>

                    <li>
                        <a href="#" class="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
  