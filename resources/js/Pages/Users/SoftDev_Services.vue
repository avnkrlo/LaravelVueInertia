<script setup>
import { router } from '@inertiajs/vue3'
import { ref, onMounted, onUnmounted } from 'vue';
import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout.vue';

defineOptions({
    layout: AuthenticatedLayout,
})

const goToSDQuote = () => {
    router.get('sd-quote');
}

const btnBackToTop = ref(null);

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const handleScroll = () => {
  if (window.scrollY > 100) {
    btnBackToTop.value.classList.remove('hidden');
  } else {
    btnBackToTop.value.classList.add('hidden');
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <!-- JUMBOTRON -->
    <section class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
        <div class="max-w-screen-xl px-4 py-24 mx-auto lg:py-56">
            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white uppercase md:text-5xl lg:text-6xl">
                It’s all about ACCURACY,QUALITY, and SECURITY
            </h1>
            <p class="text-4xl text-white">
                CCK's business is based on Transparency, Honesty, and Values Driven Partnership
            </p>
            
            <div class="grid place-content-end">
                <button @click="goToSDQuote()" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border rounded-lg border-yellow hover:text-yellow-300 sm:ms-4 hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                    GET QUOTE
                </button>  
            </div>
        </div>
    </section>

    <!-- Back to top button -->
    <button
        type="button"
        @click="scrollToTop"
        class="!fixed bottom-5 end-5 hidden rounded-full bg-orange-600 p-3 text-xs font-medium uppercase leading-tight text-white border border-orange-300 shadow-md transition duration-150 ease-in-out hover:bg-transparent hover:shadow-lg hover:text-orange-300 focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-600 active:shadow-lg"
        id="btn-back-to-top"
        ref="btnBackToTop">
        <span class="[&>svg]:w-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="3"
                stroke="currentColor">
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
            </svg>
        </span>
    </button>

    <div class="pt-10">
        <h1 class="flex max-w-screen-xl mx-auto italic font-bold">What we do</h1>
        <p class="flex max-w-screen-xl mx-auto text-justify">
            Choosing the best application software for a business can become a stressful activity, 
            especially when what is available in the market does not match with what is needed and envisioned for the business. 
            Compromises about the features will inevitably be made that can later on affect progress and productivity. 
            This must not be the case! CCK City Network, Inc. has a wide range of innovative and substantial software solutions that can be customized according to your conditions, requirements, and needs.
        </p>

        <h1 class="flex max-w-screen-xl mx-auto mt-10 italic font-bold">What we offer</h1>
        <p class="flex max-w-screen-xl mx-auto text-justify">
            Composed of enthusiastic, goal-oriented, brilliant minds, our groups of software developers and 
            engineers deliver precision and excellence in their work output. 
            Particularly, these are the services of their expertise:
        </p>

        <!-- First Set of Offer Cards -->
        <div class="flex max-w-screen-xl mx-auto items-justify">
            <div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300">
                <figure class="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
                        <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                    </svg>
                </figure>
                
                <div class="items-center text-justify card-body">
                    <h2 class="card-title">Smartphone Development</h2>
                    <p class="text-justify">The development of any application software for any type of mobile device, both on iOS and Android platforms.</p>
                </div>
            </div>

            <div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300">
                <figure class="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" class="bi bi-pc-display" viewBox="0 0 16 16">
                        <path d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5M1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2z"/>
                    </svg>
                </figure>
                
                <div class="items-center card-body">
                    <h2 class="card-title">WDA Development</h2>
                    <p class="text-justify">Our engineers are capable of developing desktop applications. Installing applications on desktop computers remains relevant because it can prevent acquisition of malware from the internet.</p>
                </div>
            </div>

            <div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300">
                <figure class="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="65" fill="currentColor" class="bi bi-terminal" viewBox="0 0 16 16">
                        <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9M3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708z"/>
                        <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/>
                    </svg>
                </figure>
                
                <div class="items-center card-body">
                    <h2 class="card-title">Web System</h2>
                    <p class="text-justify">The designing and construction of attractive, recognizable, and user-friendly websites for businesses.</p>
                </div>
            </div>

            <div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300">
                <figure class="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="65" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                        <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z"/>
                        <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                    </svg>
                </figure>
                
                <div class="items-center card-body">
                    <h2 class="card-title">Embedded System</h2>
                    <p class="text-justify">The programmed regulation of hardware-software combination to perform specific functions for large systems.</p>
                </div>
            </div>
        </div>

        <!-- Second Set of Offer Cards -->
        <div class="flex max-w-screen-xl mx-auto mb-10 items-justify">
            <div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300">
                <figure class="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="60" height="100" fill="currentColor" viewBox="0 0 128 128" version="1.1">
                        <g id="surface1">
                            <path d="M 26.027344 0.136719 C 25.824219 0.214844 20.085938 3.484375 13.28125 7.394531 C 5.035156 12.136719 0.800781 14.632812 0.574219 14.867188 C 0.394531 15.070312 0.191406 15.421875 0.128906 15.644531 C -0.0429688 16.21875 -0.0546875 100.347656 0.117188 100.953125 C 0.179688 101.1875 0.382812 101.53125 0.566406 101.722656 C 1.011719 102.191406 50.238281 130.496094 50.835938 130.632812 C 51.113281 130.699219 51.425781 130.6875 51.734375 130.601562 C 52.40625 130.433594 101.503906 102.191406 101.941406 101.730469 C 102.121094 101.53125 102.324219 101.1875 102.390625 100.953125 C 102.476562 100.675781 102.507812 96.277344 102.507812 87.015625 L 102.507812 73.480469 L 114.476562 66.605469 C 125.761719 60.117188 126.453125 59.710938 126.742188 59.265625 L 127.039062 58.785156 L 127.039062 44.207031 C 127.039062 28.335938 127.070312 29.230469 126.441406 28.65625 C 126.273438 28.507812 120.523438 25.152344 113.652344 21.195312 L 101.171875 14.015625 L 99.785156 14.015625 L 87.574219 21.027344 C 80.851562 24.894531 75.136719 28.199219 74.859375 28.378906 C 74.582031 28.5625 74.25 28.902344 74.113281 29.148438 L 73.867188 29.574219 L 73.8125 43.308594 L 73.761719 57.046875 L 63.679688 62.855469 C 58.132812 66.042969 53.515625 68.683594 53.417969 68.707031 C 53.238281 68.757812 53.226562 67.449219 53.226562 42.203125 L 53.226562 15.632812 L 52.960938 15.175781 C 52.628906 14.621094 54.121094 15.507812 39.136719 6.894531 C 26.570312 -0.332031 26.871094 -0.179688 26.027344 0.136719 Z M 37.578125 10.65625 C 42.835938 13.671875 47.136719 16.167969 47.136719 16.199219 C 47.136719 16.230469 42.527344 18.894531 36.894531 22.132812 L 26.644531 28.015625 L 16.414062 22.132812 C 10.792969 18.894531 6.1875 16.230469 6.1875 16.199219 C 6.1875 16.167969 10.785156 13.503906 16.40625 10.273438 L 26.613281 4.402344 L 27.316406 4.785156 C 27.710938 5 32.332031 7.640625 37.578125 10.65625 Z M 110.730469 24.191406 C 116.265625 27.378906 120.84375 30.011719 120.886719 30.054688 C 121.003906 30.160156 100.703125 41.828125 100.425781 41.816406 C 100.148438 41.808594 80.097656 30.246094 80.105469 30.105469 C 80.117188 29.945312 100.289062 18.339844 100.492188 18.371094 C 100.585938 18.394531 105.195312 21.015625 110.730469 24.191406 Z M 14.828125 25.875 L 24.585938 31.492188 L 24.640625 59.304688 L 24.691406 87.121094 L 24.929688 87.496094 C 25.054688 87.695312 25.289062 87.964844 25.460938 88.089844 C 25.621094 88.207031 31.050781 91.300781 37.523438 94.953125 L 49.28125 101.59375 L 49.28125 113.359375 C 49.28125 119.816406 49.238281 125.113281 49.183594 125.113281 C 49.140625 125.113281 38.976562 119.296875 26.601562 112.175781 L 4.105469 99.238281 L 4.074219 59.464844 L 4.054688 19.703125 L 4.554688 19.980469 C 4.84375 20.132812 9.460938 22.785156 14.828125 25.875 Z M 49.28125 45.453125 L 49.28125 71.082031 L 48.886719 71.339844 C 48.351562 71.679688 28.8125 82.910156 28.746094 82.910156 C 28.714844 82.910156 28.691406 71.339844 28.691406 57.195312 L 28.703125 31.492188 L 38.910156 25.621094 C 44.523438 22.390625 49.152344 19.769531 49.207031 19.789062 C 49.246094 19.8125 49.28125 31.363281 49.28125 45.453125 Z M 88.222656 39.558594 L 98.453125 45.441406 L 98.453125 57.101562 C 98.453125 68.164062 98.441406 68.757812 98.273438 68.695312 C 98.164062 68.652344 93.535156 66 87.980469 62.800781 L 77.867188 56.992188 L 77.867188 45.335938 C 77.867188 38.917969 77.898438 33.675781 77.929688 33.675781 C 77.972656 33.675781 82.601562 36.320312 88.222656 39.558594 Z M 123.09375 45.261719 C 123.09375 51.644531 123.050781 56.910156 123.007812 56.960938 C 122.933594 57.078125 102.699219 68.738281 102.570312 68.738281 C 102.539062 68.738281 102.507812 63.496094 102.507812 57.078125 L 102.507812 45.421875 L 112.714844 39.546875 C 118.335938 36.320312 122.964844 33.675781 123.007812 33.675781 C 123.0625 33.675781 123.09375 38.886719 123.09375 45.261719 Z M 86.230469 66.46875 C 94.835938 71.421875 96.320312 72.308594 96.171875 72.425781 C 96.074219 72.488281 92.8125 74.363281 88.929688 76.582031 C 85.046875 78.796875 74.988281 84.53125 66.570312 89.328125 L 51.273438 98.054688 L 50.785156 97.789062 C 47.863281 96.191406 30.910156 86.546875 30.910156 86.472656 C 30.902344 86.3125 75.765625 60.53125 75.945312 60.597656 C 76.03125 60.628906 80.660156 63.269531 86.230469 66.46875 Z M 98.433594 87.558594 L 98.398438 99.238281 L 75.914062 112.175781 C 63.542969 119.296875 53.375 125.113281 53.324219 125.113281 C 53.269531 125.113281 53.226562 120.359375 53.226562 113.359375 L 53.226562 101.59375 L 75.765625 88.742188 C 88.148438 81.675781 98.324219 75.890625 98.378906 75.878906 C 98.421875 75.878906 98.441406 81.132812 98.433594 87.558594 Z M 98.433594 87.558594 "/>
                        </g>
                    </svg>
                </figure>
                
                <div class="items-center text-justify card-body">
                    <h2 class="card-title">Backend Development</h2>
                    <p class="text-justify">The system formulation of efficient management of the server for a set of application software.</p>
                </div>
            </div>

            <div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300">
                <figure class="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="55" height="75" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M 15.851562 2.0332031 C 15.454446 2.0917651 15.074935 2.2655063 14.767578 2.5449219 L 14.765625 2.5449219 C 13.277863 3.9005836 10.616498 6.3243944 8.1972656 8.5273438 L 5.84375 6.734375 L 5.8359375 6.7285156 C 5.1392465 6.2166177 4.2073179 6.2866386 3.5683594 6.7441406 C 3.3534247 6.8975345 3.179469 7.0602489 2.9960938 7.2246094 C 2.8123509 7.3892993 2.65625 7.5332031 2.65625 7.5332031 L 2.7128906 7.4863281 C 1.8204736 8.2023368 1.7705385 9.5910312 2.6132812 10.367188 L 2.6152344 10.369141 L 4.3964844 11.988281 C 3.5664818 12.744059 2.6171875 13.609375 2.6171875 13.609375 L 2.6132812 13.611328 L 2.6113281 13.613281 C 1.7701612 14.390063 1.8188576 15.778914 2.7128906 16.494141 L 2.65625 16.445312 C 2.65625 16.445312 2.8103543 16.588916 2.9941406 16.753906 C 3.1779269 16.918896 3.3539505 17.08207 3.5703125 17.236328 C 4.2099405 17.692377 5.1382701 17.762436 5.8359375 17.251953 L 5.84375 17.246094 L 8.2011719 15.451172 L 14.769531 21.425781 C 15.386532 21.986866 16.295571 22.122799 17.050781 21.757812 C 18.278625 21.166887 20.046146 20.315485 20.783203 19.960938 C 21.5262 19.604374 22.001953 18.845527 22.001953 18.023438 L 22.001953 5.9335938 C 22.001953 5.110945 21.525211 4.3516313 20.779297 3.9960938 L 20.777344 3.9941406 C 20.089585 3.6662272 18.39449 2.8576642 17.039062 2.2109375 C 16.663742 2.031938 16.24868 1.9746412 15.851562 2.0332031 z M 17 4.4082031 C 18.123459 4.9444456 19.380428 5.544512 19.917969 5.8007812 C 19.970569 5.8257663 20.001953 5.8731922 20.001953 5.9335938 L 20.001953 18.023438 C 20.001953 18.085348 19.970969 18.132767 19.917969 18.158203 C 19.340838 18.43582 18.085137 19.039955 17 19.5625 L 17 4.4082031 z M 15 5.0371094 L 15 7.7636719 L 11.09375 10.736328 L 9.8144531 9.7617188 C 11.735091 8.0128243 13.554462 6.3537546 15 5.0371094 z M 4.7128906 8.3867188 L 15 16.228516 L 15 18.931641 L 4.0507812 8.9707031 C 4.0752634 8.9480007 4.178441 8.850757 4.3300781 8.7148438 C 4.4912252 8.5704065 4.6942539 8.4020803 4.7128906 8.3867188 z M 15 10.277344 L 15 13.712891 L 12.744141 11.994141 L 15 10.277344 z M 5.8808594 13.339844 L 6.6972656 14.082031 L 4.7128906 15.591797 C 4.6939997 15.57613 4.4907783 15.40989 4.3300781 15.265625 C 4.178427 15.129484 4.0751918 15.03049 4.0507812 15.007812 C 4.1027294 14.960483 4.9781341 14.16179 5.8808594 13.339844 z"></path>
                    </svg>
                </figure>
                
                <div class="items-center card-body">
                    <h2 class="card-title">Excel Macro Development</h2>
                    <p class="text-justify">The automation of tasks and expectations that can determine optimal productivity using Visual Basic for Applications.</p>
                </div>
            </div>

            <div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300">
                <figure class="px-10 pt-10">
                    <!-- <svg xmlns="http://www.w3.org/2000/svg" width="55" height="50" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
                        <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
                    </svg> -->
                </figure>
                
                <div class="items-center card-body">
                    <h2 class="card-title">RPA Scenario Production</h2>
                    <p class="text-justify">The appropriation of basic business process tasks using Robotic Process Automation that can be employed across arrays of applications.</p>
                </div>
            </div>

            <div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300">
                <figure class="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="70" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
                        <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
                    </svg>
                </figure>
                
                <div class="items-center card-body">
                    <h2 class="card-title">Multimedia Production</h2>
                    <p class="text-justify">Creation of graphics design integrated in images, videos, or 3D animation for appealing visual representation.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Service Quality -->
    <div class="flex flex-col items-center justify-center mb-10 bg-blue-800 shadow-2xl h-128">
        <div class="flex max-w-screen-xl mx-auto items-justify">
            <div class="mt-5 ml-10 text-white bg-blue-800 card w-96">
                <!-- <figure class="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-terminal" viewBox="0 0 16 16">
                        <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9M3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708z"/>
                        <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/>
                    </svg>
                </figure> -->
                    
                <div class="card-body">
                    <h2 class="text-2xl text-orange-300 card-title">High Quality, High Security</h2>
                    <p>● Certified by international standards:ISO9001 (Quality) & ISO27001 (Security).</p>
                    <p>● Presence of resident Japanese management.</p>
                    <p>● Various skill upgrade programs available including Japanese language.</p>
                </div>
            </div>

            <div class="mt-5 ml-10 text-white bg-blue-800 border-white card w-96">
                <!-- <figure class="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-terminal" viewBox="0 0 16 16">
                        <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9M3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708z"/>
                        <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/>
                    </svg>
                </figure> -->
                    
                <div class="card-body">
                    <h2 class="text-2xl text-orange-300 card-title">High Reliability</h2>
                    <p>● Full back-up by in-the-building electric generator.</p>
                    <p>● All the terminals are UPS integrated.</p>
                    <p>● Multiple transmission lines (instant switch during system failure.)</p>
                    <p>● Integration of security cameras and room entry and exit management system.</p>
                    <p>● Private information protection management system.</p>
                    <p>● Internal rules conforming to JISQ15001:2006.</p>
                </div>
            </div>

            <div class="mt-5 ml-10 text-white bg-blue-800 border-white card w-96">
                <!-- <figure class="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-terminal" viewBox="0 0 16 16">
                        <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9M3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708z"/>
                        <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/>
                    </svg>
                </figure> -->

                <div class="card-body">
                    <h2 class="text-2xl text-orange-300 card-title">High Peformance</h2>
                    <p>● Data processing 24hrs/365 days/480 people.</p>
                    <p>● Data processing US/Europe and Asia regions.</p>
                    <p>● Processing of ledgers (fixed form) with Chinese characters.</p>
                    <p>● Verifying or comparing system available.</p>
                </div>
            </div>
        </div>
    </div>
</template>
  