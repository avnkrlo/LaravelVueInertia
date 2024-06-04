<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout.vue';

const items = [
  { src: 'Images/img11.jpg', alt: 'Slide 1' },
  { src: 'Images/img12.jpg', alt: 'Slide 2' },
];

const currentIndex = ref(0);
let interval = null;

const goToSlide = (index) => {
  currentIndex.value = index;
};

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % items.length;
};

const start = () => {
  if (!interval) {
    interval = setInterval(nextSlide, 3000);
  }
};

const pause = () => {
  if (interval) {
    clearInterval(interval);
    interval = null;
  }
};

onMounted(start);
onUnmounted(pause);

defineOptions({
    layout: AuthenticatedLayout,
})
</script>

<template>
    <!-- JUMBOTRON -->
    <section class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
        <div class="max-w-screen-xl mx-auto lg:py-56">
            <h1 class="leading-none tracking-tight text-white text-6xl">
                The Japanese partner for your business needs - that's what we are!
            </h1>
        </div>
    </section>

    <div>
        <hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8" />
          <h1 class="grid place-content-center mx-auto font-bold text-yellow-300 text-3xl uppercase">Our Business</h1>
        <hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8" />

        <h1 class="grid place-content-center text-center font-semibold text-4xl mb-5">We Provide Superior Quality of Service</h1>
        <p class="flex max-w-screen-xl mx-auto text-justify">
          The company’s work values emphasize the importance of inspired problem-solving, strategic management of operations and production, and creative solutions. 
          Furthermore, all the services that CCK offers are founded firmly on Japanese-standard quality.
        </p>
    </div>
    
    <div class="mt-10 bg-blue-800 h-128 flex flex-col justify-center items-center shadow-2xl">
        <div class="flex items-justify max-w-screen-xl mx-auto">
            <div class="mt-5 ml-10 card w-96 bg-blue-800 text-white">
                <!-- <figure class="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-terminal" viewBox="0 0 16 16">
                        <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9M3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708z"/>
                        <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/>
                    </svg>
                </figure> -->
                    
                <div class="card-body">
                    <h1 class="card-title text-orange-300 text-3xl">800 Global Employees</h1>
                    <p>We are made up of talented data scientists, league of customer service advocates, multi-lingual specialist, 
                      data analyst committed to upholding our values as well as what our clients value.</p>
                </div>
            </div>

            <div class="mt-5 ml-10 card w-96 bg-blue-800 border-white text-white">
                <!-- <figure class="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-terminal" viewBox="0 0 16 16">
                        <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9M3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708z"/>
                        <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/>
                    </svg>
                </figure> -->
                    
                <div class="card-body ">
                    <h1 class="card-title text-orange-300 text-3xl">￥30 Million Capital</h1>
                    <p>We have stable financial capability guaranteed by our Japanese partner banks including Sumitomi Mitsui, Resona, Mizuho Bank, Kiyo Bank, Tottori Bank and Hokkaido Bank.</p>
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
                    <h1 class="card-title text-orange-300 text-3xl">Multiple Languages</h1>
                    <p>We offer multi-language services in Japanese, English, Chinese, Filipino, and Bangladeshi.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="pb-5 bg-blue-800 h-128 flex flex-col justify-center items-center shadow-2xl">
        <div class="flex items-justify max-w-screen-xl mx-auto">
            <div class="mt-5 ml-10 card w-96 bg-blue-800 text-white">
                <!-- <figure class="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-terminal" viewBox="0 0 16 16">
                        <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9M3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708z"/>
                        <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/>
                    </svg>
                </figure> -->
                    
                <div class="card-body">
                    <h1 class="card-title text-orange-300 text-3xl">Compliant to Industry Standard</h1>
                    <p>CCK is compliant to industry standards as a guarantee to our clients and to their customers. We ensure that their businesss is safe with us.</p>
                </div>
            </div>

            <div class="mt-5 ml-10 card w-96 bg-blue-800 border-white text-white">
                <!-- <figure class="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-terminal" viewBox="0 0 16 16">
                        <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9M3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708z"/>
                        <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/>
                    </svg>
                </figure> -->
                    
                <div class="card-body ">
                    <h1 class="card-title text-orange-300 text-3xl">Diverse Location</h1>
                    <p>We are primarily located in Asia with the expansion in different locations such as North America and other continents in the future.</p>
                </div>
            </div>
        </div>
    </div>

    <div>
        <h1 class="grid place-content-center font-bold mt-10 mb-5 text-yellow-300 uppercase text-5xl">CCK is an honest business.</h1>

        <p class="flex max-w-screen-xl mx-auto text-justify text-2xl mb-10">
          We ensure that our clients most valued assets - their customers are protected and secured as we operate in a high standard of international service. 
          We also guarantee that their business is protected against security risk while ensuring cost-effective business bringing confidence in our service delivery.
        </p>
    </div>
    
    <div class="pb-10 bg-blue-800 h-64 flex flex-col justify-center items-center">
      <h1 class="grid place-content-center font-bold mt-10 mb-5 text-white uppercase text-3xl">Our company will maximize the accomplishments and know-hows we have accumulated</h1>
      <p class="max-w-screen-xl mx-auto text-justify text-white text-2xl">
        to propose global division of work as your company's overseas base of operations, 
        and we will strive for innovative technology in various fields to provide solutions for your future.
      </p>
    </div>

    <div>
      <hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8" />
        <h1 class="grid place-content-center mx-auto font-bold text-yellow-300 text-3xl uppercase">Certification</h1>
      <hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8" />

      
    </div>

    <div>
      <hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8" />
        <h1 class="grid place-content-center mx-auto font-bold text-yellow-300 text-3xl uppercase">Accreditation</h1>
      <hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8" />
    </div>

    <div>
      <hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8" />
        <h1 class="grid place-content-center mx-auto font-bold text-yellow-300 text-3xl uppercase">Verification</h1>
      <hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8" />
    </div>

    <div class="pb-10 bg-blue-800 h-64 flex flex-col justify-center items-center">
      <h1 class="grid place-content-center font-bold mt-10 mb-5 text-white uppercase text-3xl">Our company is worthy to be trusted!</h1>
      <p class="max-w-screen-xl mx-auto text-justify text-white text-2xl">
        CCK ensures the future of every employee and aspires to be the company that customers bring new opportunities.
      </p>
    </div>
    <hr class="border-yellow-300 sm:mx-auto dark:border-yellow-300" />
</template>