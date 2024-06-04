<script setup>
import { router } from '@inertiajs/vue3';
import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout.vue';

defineOptions({
    layout: AuthenticatedLayout,
});

const goToDEQuote = () => {
    router.get('de-quote');
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
                <button @click="goToDEQuote()" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-yellow rounded-lg hover:text-yellow-300 sm:ms-4 hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                    GET QUOTE
                </button>  
            </div>
        </div>
    </section>

    <div class="pt-10 pb-10">
        <h1 class="flex max-w-screen-xl mx-auto italic font-bold">What we do</h1>
        <p class="flex max-w-screen-xl mx-auto text-justify">
            At the center of critical operations of a business is the sets of recorded data that can determine important business decisions, and these are details produced by successful and accurate data entry activities. 
            The diligence necessary to maintain and to update the information for business essentials like invoices or databases are quite consuming, 
            and because of this CCK City Network, Inc. offers six data entry services that can help.
        </p>

        <h1 class="flex max-w-screen-xl mx-auto mt-10 italic font-bold">What we offer</h1>
        <p class="flex max-w-screen-xl mx-auto text-justify">
            Founded on the Japanese standards of accuracy, consistency, quality, and security, the data entry services we offer 
            have guaranteed satisfaction and have built long-term business trust with our clients. 
            Our impressive bands of highly skilled data entry professionals exhibit the expertise needed for these services:
        </p>
        
        <!-- First Set of Offer Cards -->
        <div class="flex items-justify max-w-screen-xl mx-auto">
            <div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300">
                <figure class="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-database" viewBox="0 0 16 16">
                        <path d="M4.318 2.687C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4c0-.374.356-.875 1.318-1.313M13 5.698V7c0 .374-.356.875-1.318 1.313C10.766 8.729 9.464 9 8 9s-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777A5 5 0 0 0 13 5.698M14 4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13zm-1 4.698V10c0 .374-.356.875-1.318 1.313C10.766 11.729 9.464 12 8 12s-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777A5 5 0 0 0 13 8.698m0 3V13c0 .374-.356.875-1.318 1.313C10.766 14.729 9.464 15 8 15s-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13s3.022-.289 4.096-.777c.324-.147.633-.323.904-.525"/>
                    </svg>
                </figure>
                
                <div class="items-center text-justify card-body">
                    <h2 class="card-title">Data Entry/Encoding</h2>
                    <p>We provide data encoding of scanned images and convert them into any format desired by the client.</p>
                </div>
            </div>

            <div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300">
                <figure class="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" class="bi bi-printer" viewBox="0 0 16 16">
                        <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
                        <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1"/>
                    </svg>
                </figure>
                
                <div class="items-center text-justify card-body">
                    <h2 class="card-title">Image Scanning with Tagging</h2>
                    <p>We perform labeling or keyword tagging to images based on the figures within the images, allowing searchability and quick access.</p>
                </div>
            </div>

            <div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300">
                <figure class="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" class="bi bi-file-earmark-text" viewBox="0 0 16 16">
                        <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
                        <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
                    </svg>
                </figure>
                
                <div class="items-center text-justify card-body">
                    <h2 class="card-title">File Indexing</h2>
                    <p>We design file categorizations according to name, subject, or caption, also allowing searchability and quick access.</p>
                </div>
            </div>
        </div>

        <!-- Second Set of Offer Cards -->
        <div class="flex items-justify max-w-screen-xl mx-auto mt-5">
            <div class="mt-5 ml-10 shadow-xl card w-96 bg-base-300">
                <figure class="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-card-image" viewBox="0 0 16 16">
                        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                        <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54L1 12.5v-9a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                </figure>
                
                <div class="items-center text-justify card-body">
                    <h2 class="card-title">Image Comparison</h2>
                    <p>We render image comparisons to examine and mark observed and unobserved changes in an image based on an old image.</p>
                </div>
            </div>

            <div class="mt-5 ml-10 shadow-xl card w-96 bg-base-300">
                <figure class="px-10 pt-10">
                </figure>
                
                <div class="items-center text-justify card-body">
                    <h2 class="card-title">Floor Plan Creation</h2>
                    <p>We purvey floor plans containing the necessary information of a property listing that include, but not limited to, the shape and the dimension of the area, 
                        the forms and the types of fixtures and joineries, and the relationships of levels or spaces.</p>
                </div>
            </div>

            <div class="mt-5 ml-10 shadow-xl card w-96 bg-base-300">
                <figure class="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-terminal" viewBox="0 0 16 16">
                        <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9M3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708z"/>
                        <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/>
                    </svg>
                </figure>
                
                <div class="items-center text-justify card-body">
                    <h2 class="card-title">AI Annotation</h2>
                    <p>We offer tagging all forms of data that can be texts, audios, videos, and/or images using advanced AI annotation tools.</p>
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
  