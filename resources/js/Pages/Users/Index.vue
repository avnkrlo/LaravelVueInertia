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

const goToFB = () => {
    window.open('https://www.facebook.com/CCKCityNetwork');
}

const goToLinkedIn = () => {
    window.open('https://www.linkedin.com/company/cckcitynetworkinc/');
}

const goToIG = () => {
    window.open('https://www.instagram.com/cckcitynetwork_ph/');
}

const goToYT = () => {
    window.open('https://www.youtube.com/@cckcitynetworkph5719');
}
</script>

<template>
    <nav class="fixed top-0 z-20 w-full bg-white border-b border-gray-200 dark:bg-gray-900 start-0 dark:border-gray-600">
        <div class="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
            <Link :href="route('index')" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="Images/cck.png" class="h-8"/>
            </Link>

            <div :class="['w-full md:block md:w-auto', { 'hidden': !isNavbarOpen }]" id="navbar-dropdown">
                <ul class="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <Link :href="route('index')" class="block px-3 py-2 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">
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
                                <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" aria-labelledby="dropdownLargeButton">
                                    <li class="border-b border-gray-200 dark:border-gray-600">
                                        <Link :href="route('services.index')" class="block px-4 py-2 font-thin hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Data Entry Services
                                        </Link>
                                    </li>
                                    
                                    <li class="border-b border-gray-200 dark:border-gray-600">
                                        <Link :href="route('processing.index')" class="block px-4 py-2 font-thin hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Data Processing Services
                                        </Link>
                                    </li>

                                    <li class="border-b border-gray-200 dark:border-gray-600">
                                        <Link :href="route('conversion.index')" class="block px-4 py-2 font-thin hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Data Conversion Services
                                        </Link>
                                    </li>

                                    <li class="border-b border-gray-200 dark:border-gray-600">
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
                                <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" aria-labelledby="dropdownLargeButton">
                                    <li class="border-b border-gray-200 dark:border-gray-600">
                                        <Link :href="route('mld-proofreading.index')" class="block px-4 py-2 font-thin hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Proofreading Services
                                        </Link>
                                    </li>

                                    <li class="border-b border-gray-200 dark:border-gray-600">
                                        <Link :href="route('mld-teaching.index')" class="block px-4 py-2 font-thin hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Online English Language Teaching
                                        </Link>
                                    </li>

                                    <li class="border-b border-gray-200 dark:border-gray-600">
                                        <Link :href="route('mld-translation.index')" class="block px-4 py-2 font-thin hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Translation Services
                                        </Link>
                                    </li>

                                    <li class="border-b border-gray-200 dark:border-gray-600">
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
                                <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" aria-labelledby="dropdownLargeButton">
                                    <li class="border-b border-gray-200 dark:border-gray-600">
                                        <Link :href="route('sd-smartphone-dev.index')" class="flex items-center px-4 py-2 font-thin hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-smartphone" viewBox="0 0 16 16">
                                                <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm8 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8z"/>
                                                <path d="M8 12.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                                            </svg>
                                            <span class="ml-3">Smartphone Development</span>
                                        </Link>
                                    </li>

                                    <li class="border-b border-gray-200 dark:border-gray-600">
                                        <Link :href="route('sd-windeskapp-dev.index')" class="flex items-center px-4 py-2 font-thin hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-display" viewBox="0 0 16 16">
                                                <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4q0 1 .25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75Q6 13 6 12H2s-2 0-2-2zm1.398-.855a.76.76 0 0 0-.254.302A1.5 1.5 0 0 0 1 4.01V10c0 .325.078.502.145.602q.105.156.302.254a1.5 1.5 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.76.76 0 0 0 .254-.302 1.5 1.5 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.76.76 0 0 0-.302-.254A1.5 1.5 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145"/>
                                            </svg>
                                            <span class="ml-3">Windows Desktop Application Development</span>
                                        </Link>
                                    </li>

                                    <li class="border-b border-gray-200 dark:border-gray-600">
                                        <Link :href="route('sd-web-sys.index')" class="flex items-center px-4 py-2 font-thin hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-code-square" viewBox="0 0 16 16">
                                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                                                <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0m2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0"/>
                                            </svg>
                                            <span class="ml-3.5">Web System</span>
                                        </Link>
                                    </li>

                                    <li class="border-b border-gray-200 dark:border-gray-600">
                                        <Link :href="route('sd-embedded-sys.index')" class="flex items-center px-4 py-2 font-thin hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cpu" viewBox="0 0 16 16">
                                                <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0m-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"/>
                                            </svg>
                                            <span class="ml-3">Embedded System</span>
                                        </Link>
                                    </li>

                                    <li class="border-b border-gray-200 dark:border-gray-600">
                                        <Link :href="route('sd-backend-dev.index')" class="flex items-center px-4 py-2 font-thin hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-braces" viewBox="0 0 16 16">
                                                <path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6M13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6"/>
                                            </svg>
                                            <span class="ml-2.5">Backend Development</span>
                                        </Link>
                                    </li>

                                    <li class="border-b border-gray-200 dark:border-gray-600">
                                        <Link :href="route('sd-xcel-macro-dev.index')" class="flex items-center px-4 py-2 font-thin hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M 15.851562 2.0332031 C 15.454446 2.0917651 15.074935 2.2655063 14.767578 2.5449219 L 14.765625 2.5449219 C 13.277863 3.9005836 10.616498 6.3243944 8.1972656 8.5273438 L 5.84375 6.734375 L 5.8359375 6.7285156 C 5.1392465 6.2166177 4.2073179 6.2866386 3.5683594 6.7441406 C 3.3534247 6.8975345 3.179469 7.0602489 2.9960938 7.2246094 C 2.8123509 7.3892993 2.65625 7.5332031 2.65625 7.5332031 L 2.7128906 7.4863281 C 1.8204736 8.2023368 1.7705385 9.5910312 2.6132812 10.367188 L 2.6152344 10.369141 L 4.3964844 11.988281 C 3.5664818 12.744059 2.6171875 13.609375 2.6171875 13.609375 L 2.6132812 13.611328 L 2.6113281 13.613281 C 1.7701612 14.390063 1.8188576 15.778914 2.7128906 16.494141 L 2.65625 16.445312 C 2.65625 16.445312 2.8103543 16.588916 2.9941406 16.753906 C 3.1779269 16.918896 3.3539505 17.08207 3.5703125 17.236328 C 4.2099405 17.692377 5.1382701 17.762436 5.8359375 17.251953 L 5.84375 17.246094 L 8.2011719 15.451172 L 14.769531 21.425781 C 15.386532 21.986866 16.295571 22.122799 17.050781 21.757812 C 18.278625 21.166887 20.046146 20.315485 20.783203 19.960938 C 21.5262 19.604374 22.001953 18.845527 22.001953 18.023438 L 22.001953 5.9335938 C 22.001953 5.110945 21.525211 4.3516313 20.779297 3.9960938 L 20.777344 3.9941406 C 20.089585 3.6662272 18.39449 2.8576642 17.039062 2.2109375 C 16.663742 2.031938 16.24868 1.9746412 15.851562 2.0332031 z M 17 4.4082031 C 18.123459 4.9444456 19.380428 5.544512 19.917969 5.8007812 C 19.970569 5.8257663 20.001953 5.8731922 20.001953 5.9335938 L 20.001953 18.023438 C 20.001953 18.085348 19.970969 18.132767 19.917969 18.158203 C 19.340838 18.43582 18.085137 19.039955 17 19.5625 L 17 4.4082031 z M 15 5.0371094 L 15 7.7636719 L 11.09375 10.736328 L 9.8144531 9.7617188 C 11.735091 8.0128243 13.554462 6.3537546 15 5.0371094 z M 4.7128906 8.3867188 L 15 16.228516 L 15 18.931641 L 4.0507812 8.9707031 C 4.0752634 8.9480007 4.178441 8.850757 4.3300781 8.7148438 C 4.4912252 8.5704065 4.6942539 8.4020803 4.7128906 8.3867188 z M 15 10.277344 L 15 13.712891 L 12.744141 11.994141 L 15 10.277344 z M 5.8808594 13.339844 L 6.6972656 14.082031 L 4.7128906 15.591797 C 4.6939997 15.57613 4.4907783 15.40989 4.3300781 15.265625 C 4.178427 15.129484 4.0751918 15.03049 4.0507812 15.007812 C 4.1027294 14.960483 4.9781341 14.16179 5.8808594 13.339844 z"></path>
                                            </svg>
                                            <span class="ml-3">Excel Macro Development</span>
                                        </Link>
                                    </li>

                                    <li class="border-b border-gray-200 dark:border-gray-600">
                                        <Link :href="route('sd-rpa-scenario-prod.index')" class="flex items-center px-4 py-2 font-thin hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            <span class="ml-3">RPA Scenario Production</span>
                                        </Link>
                                    </li>

                                    <li class="border-b border-gray-200 dark:border-gray-600">
                                        <Link :href="route('sd-multimedia-prod.index')" class="flex items-center px-4 py-2 font-thin hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" class="bi bi-camera-reels" viewBox="0 0 16 16">
                                                <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0M1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0"/>
                                                <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm6 8.73V7.27l-3.5 1.555v4.35zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1"/>
                                                <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6M7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                                            </svg>
                                            <span class="ml-3">Multimedia Production</span>
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
                                <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" aria-labelledby="dropdownLargeButton">
                                    <li class="border-b border-gray-200 dark:border-gray-600">
                                        <Link :href="route('dequote.index')" class="block px-4 py-2 font-thin hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Data Entry Quote
                                        </Link>
                                    </li>

                                    <li class="border-b border-gray-200 dark:border-gray-600">
                                        <Link :href="route('mldquote.index')" class="block px-4 py-2 font-thin hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            Multi-Lingual Processing Quote
                                        </Link>
                                    </li>
                                    
                                    <li class="border-b border-gray-200 dark:border-gray-600">
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

    <!-- JUMBOTRON -->
    <section class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
        <div class="max-w-screen-xl px-4 py-24 mx-auto text-center lg:py-56">
            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
                It takes more than interest, we have plans and strategies specifically for your business needs.
            </h1>
            
            <div class="grid place-content-end">
                <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-white rounded-lg hover:text-gray-900 sm:ms-4 hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                    GET QUOTE
                </a>  
            </div>
        </div>
    </section>

    <div >
        <h1 class="flex max-w-screen-xl mx-auto italic font-bold">Made of Honesty and Experience</h1>
        <p class="flex max-w-screen-xl mx-auto text-center">
            Integrity is present in every level of interaction, simultaneously guaranteeing the security and protection of our clients’ valued assets. 
            CCK also keeps its customers and businesses away from security risks, bringing confidence in service delivery.
        </p>

        <h1 class="flex max-w-screen-xl mx-auto italic font-bold">INDUSTRIES WE SERVE</h1>
        <p class="flex max-w-screen-xl mx-auto text-center">
            With over 30 years of experience in handling cost-effective and secure business process outsourcing services, sales and marketing, and programming and software development, 
            CCK City Network, Inc. has been successful in engaging and innovating for an extensive variety of industries such as education, technology, real-estate, advertising, manufacturing, energy, 
            government, healthcare, retail, telecommunication, and trading. So, whether your growth objectives demand business processes, marketing, or technology, 
            with our industry experience and aptitude for innovation, we can make the best solutions for your business, big or small.
        </p>
    </div>

    

    <div id="indicators-carousel" class="relative w-full" data-carousel="sliding">
        <!-- Carousel wrapper -->
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
            <!-- Item 1 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
                <img src="/docs/images/carousel/carousel-1.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
            </div>
            <!-- Item 2 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="/docs/images/carousel/carousel-2.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
            </div>
            <!-- Item 3 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="/docs/images/carousel/carousel-3.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
            </div>
            <!-- Item 4 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="/docs/images/carousel/carousel-4.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
            </div>
            <!-- Item 5 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="/docs/images/carousel/carousel-5.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
            </div>
        </div>
        <!-- Slider indicators -->
        <div class="absolute z-30 flex space-x-3 -translate-x-1/2 rtl:space-x-reverse bottom-5 left-1/2">
            <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
        </div>
    </div>



    <footer class="bg-white dark:bg-gray-900">
        <div class="w-full max-w-screen-xl p-4 py-6 mx-auto lg:py-8">
            <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
                <Link :href="route('index')" class="flex items-center">
                    <img src="Images/cck_logo.png" class="h-25 me-3" alt="FlowBite Logo" />
                    <span class="self-center font-semibold whitespace-nowrap dark:text-white">CCK City Network, Inc.</span>
                </Link>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                    <ul class="font-medium text-gray-500 dark:text-gray-400">
                        <li class="mb-4">
                            <a href="https://flowbite.com/" class="hover:underline">Flowbite</a>
                        </li>
                        <li>
                            <a href="https://tailwindcss.com/" class="hover:underline">Tailwind CSS</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                    <ul class="font-medium text-gray-500 dark:text-gray-400">
                        <li class="mb-4">
                            <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Github</a>
                        </li>
                        <li>
                            <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                    <ul class="font-medium text-gray-500 dark:text-gray-400">
                        <li class="mb-4">
                            <a href="#" class="hover:underline">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div class="sm:flex sm:items-center sm:justify-between">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
                </span>

                <div class="flex mt-4 sm:justify-center sm:mt-0">
                    <button @click="goToFB()" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                        </svg>
                        <span class="sr-only">Facebook page</span>
                    </button>
                    
                    <button @click="goToLinkedIn()" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                        </svg>
                        <span class="sr-only">Linkedin page</span>
                    </button>

                    <button @click="goToIG()" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                        </svg>
                        <span class="sr-only">Instagram page</span>
                    </button>

                    <button @click="goToYT()" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                        </svg>
                        <span class="sr-only">Youtube page</span>
                    </button>
                </div>
            </div>
        </div>
    </footer>
</template>
  