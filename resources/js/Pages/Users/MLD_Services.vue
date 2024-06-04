<script setup>
import { router } from '@inertiajs/vue3';
import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout.vue';

defineOptions({
    layout: AuthenticatedLayout,
});

const goToMLDQuote = () => {
    router.get('mld-quote');
}
</script>

<template>
    <!-- JUMBOTRON -->
    <section class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
        <div class="max-w-screen-xl px-4 py-24 mx-auto text-center lg:py-56">
            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
                It takes more than interest, we have plans and strategies specifically for your business needs.
            </h1>
            
            <div class="grid place-content-end">
                <button @click="goToMLDQuote()" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-white rounded-lg hover:text-gray-900 sm:ms-4 hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                    GET QUOTE
                </button>  
            </div>
        </div>
    </section>

    <div class="pt-10 mb-10">
        <h1 class="flex max-w-screen-xl mx-auto italic font-bold">What we do</h1>
        <p class="flex max-w-screen-xl mx-auto text-justify">
            CCK City Network, Inc. seeks to promote second language proficiency and academic excellence to culturally and linguistically 
            diverse English language learners. 
            Language acquisition theories translated into practice, the company develops various programs and services that amplify the use of the 
            English language for casual conversations, school qualifications, and business requirements.
        </p>

        <h1 class="flex max-w-screen-xl mx-auto italic font-bold mt-10">What we offer</h1>
        <p class="flex max-w-screen-xl mx-auto text-justify">
            Housing experienced teams of English language professionals, both teachers and researchers, 
            to serve to the public’s growing demand to learn the English language and all its practical applications in school and in the business. 
            The services offered are developed from extensive research and experience record:
        </p>

        <!-- First Set of Offer Cards -->
        <div class="flex items-justify max-w-screen-md mx-auto">
            <div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300">
                <figure class="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="100" fill="currentColor" class="bi bi-journal-text" viewBox="0 0 16 16">
                        <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
                        <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
                        <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
                    </svg>
                </figure>
                
                <div class="items-center text-justify card-body">
                    <h2 class="card-title">Proofreading</h2>
                    <p class="text-justify">Text reformulation and reconstruction to attain the precise communication objective of any written material.</p>
                </div>
            </div>
                    
            <div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300">
                <figure class="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="50" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
                        <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
                    </svg>
                </figure>
                
                <div class="items-center text-justify card-body">
                    <h2 class="card-title">Online English Language Teaching</h2>
                    <p class="text-justify">Guided English language courses via video and/or phone classes for all ages, designed for business, casual, or academic type of communicative situation.</p>
                </div>
            </div>
        </div>

        <!-- Second Set of Offer Cards -->
        <div class="flex items-justify max-w-screen-md mx-auto mb-10">
            <div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300">
                <figure class="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="110" fill="currentColor" class="bi bi-translate" viewBox="0 0 16 16">
                        <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z"/>
                        <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492 2 2 0 0 1-.94.31"/>
                    </svg>
                </figure>
                
                <div class="items-center text-justify card-body">
                    <h2 class="card-title">Translation Services</h2>
                    <p>Non-machine translations of technical documents by certified translators, covering the fields of law, marketing, and finance.</p>
                </div>
            </div>

            <div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300">
                <figure class="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="90" fill="currentColor" class="bi bi-file-earmark-check" viewBox="0 0 16 16">
                        <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"/>
                        <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
                    </svg>
                </figure>
                
                <div class="items-center text-justify card-body">
                    <h2 class="card-title">Test Rating and Evaluation</h2>
                    <p>Extensive and regulated content analysis of different types of language test responses to determine language proficiency level.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="mb-10 pb-5 bg-blue-800 h-128 flex flex-col justify-center items-center shadow-2xl">
        <div class="flex items-justify max-w-screen-xl mx-auto">
            <div class="mt-5 ml-10 card w-96 bg-blue-800 text-white">
                <!-- <figure class="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-terminal" viewBox="0 0 16 16">
                        <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9M3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708z"/>
                        <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/>
                    </svg>
                </figure> -->
                    
                <div class="card-body">
                    <h2 class="card-title">High Quality, High Security</h2>
                    <p>● Certified by international standards:ISO9001 (Quality) & ISO27001 (Security).</p>
                    <p>● Presence of resident Japanese management.</p>
                    <p>● Various skill upgrade programs available including Japanese language.</p>
                </div>
            </div>

            <div class="mt-5 ml-10 card w-96 bg-blue-800 border-white text-white">
                <!-- <figure class="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-terminal" viewBox="0 0 16 16">
                        <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9M3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708z"/>
                        <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/>
                    </svg>
                </figure> -->
                    
                <div class="card-body">
                    <h2 class="card-title">High Reliability</h2>
                    <p>● Full back-up by in-the-building electric generator.</p>
                    <p>● All the terminals are UPS integrated.</p>
                    <p>● Multiple transmission lines (instant switch during system failure.)</p>
                    <p>● Integration of security cameras and room entry and exit management system.</p>
                    <p>● Private information protection management system.</p>
                    <p>● Internal rules conforming to JISQ15001:2006.</p>
                </div>
            </div>

            <div class="mt-5 ml-10 card w-96 bg-blue-800 border-white text-white">
                <!-- <figure class="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-terminal" viewBox="0 0 16 16">
                        <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9M3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708z"/>
                        <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/>
                    </svg>
                </figure> -->

                <div class="card-body">
                    <h2 class="card-title">High Peformance</h2>
                    <p>● Data processing 24hrs/365 days/480 people.</p>
                    <p>● Data processing US/Europe and Asia regions.</p>
                    <p>● Processing of ledgers (fixed form) with Chinese characters.</p>
                    <p>● Verifying or comparing system available.</p>
                </div>
            </div>
        </div>
    </div>
</template>
  