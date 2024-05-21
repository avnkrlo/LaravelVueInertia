<script setup>
import { Link } from '@inertiajs/vue3';
import { ref } from 'vue';

const isDEDropdownOpen = ref(false);
const isMLDDropdownOpen = ref(false);
const isSDDropdownOpen = ref(false);
const isQuoteDropdownOpen = ref(false);
  
const showDEDropdown = () => {
    isDEDropdownOpen.value = true;
};

const hideDEDropdown = () => {
    isDEDropdownOpen.value = false;
}

const showMLDDropdown = () => {
    isMLDDropdownOpen.value = true;
}

const hideMLDDropdown = () => {
    isMLDDropdownOpen.value = false;
}

const showSDDropdown = () => {
    isSDDropdownOpen.value = true;
}

const hideSDDropdown = () => {
    isSDDropdownOpen.value = false;
}

const showQuoteDropdown = () => {
    isQuoteDropdownOpen.value = true;
}

const hideQuoteDropdown = () => {
    isQuoteDropdownOpen.value = false;
}
</script>

<template>
    <nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div class="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
            <Link :href="route('dashboard.index')" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="Images/cck.png" class="h-8"/>
            </Link>

            <div :class="['w-full md:block md:w-auto', { 'hidden': !isNavbarOpen }]" id="navbar-dropdown">
                <ul class="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <Link :href="route('dashboard.index')" class="block px-3 py-2 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">
                            Home
                        </Link>
                    </li>

                    <!-- DATA ENTRY DROPDOWN -->
                    <li>
                        <div class="relative">
                            <button 
                                @mouseover="showDEDropdown" 
                                @mouseup="hideDEDropdown"
                                class="flex items-center justify-between w-full px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                                Data Entry
                                <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                </svg>
                            </button>

                            <!-- Dropdown menu -->
                            <div v-show="isDEDropdownOpen" class="absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <Link :href="route('services.index')" class="block px-4 py-2 font-thin hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Data Entry Services
                                        </Link>
                                    </li>
                                    
                                    <li>
                                        <Link :href="route('processing.index')" class="block px-4 py-2 font-thin hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Data Processing Services
                                        </Link>
                                    </li>

                                    <li>
                                        <Link :href="route('conversion.index')" class="block px-4 py-2 font-thin hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Data Conversion Services
                                        </Link>
                                    </li>

                                    <li>
                                        <Link :href="route('cleansing.index')" class="block px-4 py-2 font-thin hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Data Cleansing Services
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <!-- MULTI-LINGUAL DROPDOWN -->
                    <li>
                        <div class="relative">
                            <button 
                                @mouseover="showMLDDropdown" 
                                @mouseup="hideMLDDropdown"
                                class="flex items-center justify-between w-full px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                                Multi-Lingual
                                <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                </svg>
                            </button>

                            <!-- Dropdown menu -->
                            <div v-show="isMLDDropdownOpen" class="absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <Link :href="route('mld-proofreading.index')" class="block px-4 py-2 font-thin hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Proofreading Services
                                        </Link>
                                    </li>

                                    <li>
                                        <Link :href="route('mld-teaching.index')" class="block px-4 py-2 font-thin hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Online English Language Teaching
                                        </Link>
                                    </li>

                                    <li>
                                        <Link :href="route('mld-translation.index')" class="block px-4 py-2 font-thin hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Translation Services
                                        </Link>
                                    </li>

                                    <li>
                                        <Link :href="route('mld-evaluation.index')" class="block px-4 py-2 font-thin hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Test Rating and Evaluation
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <!-- SOFTWARE DEVELOPMENT DROPDOWN -->
                    <li>
                        <div class="relative">
                            <button 
                                @mouseover="showSDDropdown" 
                                @mouseup="hideSDDropdown"
                                class="flex items-center justify-between w-full px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                                Software Development
                                <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                </svg>
                            </button>

                            <!-- Dropdown menu -->
                            <div v-show="isSDDropdownOpen" class="absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <Link :href="route('sd-smartphone-dev.index')" class="block px-4 py-2 font-thin hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Smartphone Development
                                        </Link>
                                    </li>

                                    <li>
                                        <Link :href="route('sd-windeskapp-dev.index')" class="block px-4 py-2 font-thin hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Windows Desktop Application Development
                                        </Link>
                                    </li>

                                    <li>
                                        <Link :href="route('sd-web-sys.index')" class="block px-4 py-2 font-thin hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Web System
                                        </Link>
                                    </li>

                                    <li>
                                        <Link :href="route('sd-embedded-sys.index')" class="block px-4 py-2 font-thin hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Embedded System
                                        </Link>
                                    </li>

                                    <li>
                                        <Link :href="route('sd-backend-dev.index')" class="block px-4 py-2 font-thin hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Backend Development
                                        </Link>
                                    </li>

                                    <li>
                                        <Link :href="route('sd-xcel-macro-dev.index')" class="block px-4 py-2 font-thin hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Excel Macro Development
                                        </Link>
                                    </li>

                                    <li>
                                        <Link :href="route('sd-rpa-scenario-prod.index')" class="block px-4 py-2 font-thin hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            RPA Scenario Production
                                        </Link>
                                    </li>

                                    <li>
                                        <Link :href="route('sd-multimedia-prod.index')" class="block px-4 py-2 font-thin hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Multimedia Production
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <!-- QUOTE DROPDOWN -->
                    <li>
                        <div class="relative">
                            <button 
                                @mouseover="showQuoteDropdown" 
                                @mouseup="hideQuoteDropdown"
                                class="flex items-center justify-between w-full px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                                Request a Quote
                                <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                </svg>
                            </button>

                            <!-- Dropdown menu -->
                            <div v-show="isQuoteDropdownOpen" class="absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <Link :href="route('dequote.index')" class="block px-4 py-2 font-thin hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Data Entry Quote
                                        </Link>
                                    </li>

                                    <li>
                                        <Link :href="route('mldquote.index')" class="block px-4 py-2 font-thin hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Multi-Lingual Processing Quote
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li>
                        <Link :href="route('blog.index')" class="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                            Blog
                        </Link>
                    </li>

                    <li>
                        <Link :href="route('contact.index')" class="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="w-full carousel">
        <div id="slide1" class="relative w-full carousel-item">
            <img src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" class="w-full" />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" class="btn btn-circle">❮</a> 
                <a href="#slide2" class="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide2" class="relative w-full carousel-item">
            <img src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" class="w-full" />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" class="btn btn-circle">❮</a> 
                <a href="#slide3" class="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide3" class="relative w-full carousel-item">
            <img src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" class="w-full" />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" class="btn btn-circle">❮</a> 
                <a href="#slide4" class="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide4" class="relative w-full carousel-item">
            <img src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" class="w-full" />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" class="btn btn-circle">❮</a> 
                <a href="#slide1" class="btn btn-circle">❯</a>
            </div>
        </div>
    </div>
</template>
  