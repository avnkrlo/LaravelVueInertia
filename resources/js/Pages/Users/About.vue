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

const goToWadline = () => {
  window.open('https://wadline.com')
}
</script>

<template>
    <!-- JUMBOTRON -->
    <section class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
        <div class="max-w-screen-xl mx-auto lg:py-56">
            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white uppercase md:text-5xl lg:text-6xl">
                The Japanese partner for your business needs - that's what we are!
            </h1>
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

    <div>
        <hr class="my-6 border-orange-300 sm:mx-auto dark:border-orange-300 lg:my-8" />
          <h1 class="grid mx-auto text-3xl font-bold text-orange-300 uppercase place-content-center">Our History</h1>
        <hr class="my-6 border-orange-300 sm:mx-auto dark:border-orange-300 lg:my-8" />

        <h1 class="grid mb-5 text-5xl font-semibold text-center text-white place-content-center">We Provide Superior Quality of Service</h1>
        <p class="flex max-w-screen-xl mx-auto text-xl text-justify text-white">
          The company’s work values emphasize the importance of inspired problem-solving, strategic management of operations and production, and creative solutions. 
          Furthermore, all the services that CCK offers are founded firmly on Japanese-standard quality.
        </p>

        <p class="flex max-w-screen-xl mx-auto mt-5 text-xl text-justify text-white">
          CCK City Network, Inc. is a BPO company located in Asia with 15 branches in four countries. 
          As an industry specialist in data entry services, CCK also conducts and owns different enterprises for software development, language education, digital marketing, and customer support. 
          Composed of talented data analysts and scientists, seasoned customer service advocates, inspired language experts, and creative technology engineers, the company is robust, 
          exhibiting the diversity of its capacity to serve our clients sedulously.

          Furthermore, CCK is compliant to industry standard as a guarantee to our clients and to their customers. 
          Ensuring that their business is safe with us is the primary composition of our dedication.
        </p>
    </div>
    
    <div class="flex flex-col items-center justify-center mt-10 bg-blue-800 shadow-2xl h-128">
        <div class="flex max-w-screen-xl mx-auto items-justify">
            <div class="ml-10 text-white bg-blue-800 card w-96">
                <!-- <figure class="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-terminal" viewBox="0 0 16 16">
                        <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9M3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708z"/>
                        <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/>
                    </svg>
                </figure> -->
                    
                <div class="card-body">
                    <h1 class="text-3xl text-orange-300 card-title">800 Global Employees</h1>
                    <p>We are made up of talented data scientists, league of customer service advocates, multi-lingual specialist, 
                      data analyst committed to upholding our values as well as what our clients value.</p>
                </div>
            </div>

            <div class="ml-10 text-white bg-blue-800 border-white card w-96">
                <!-- <figure class="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-terminal" viewBox="0 0 16 16">
                        <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9M3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708z"/>
                        <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/>
                    </svg>
                </figure> -->
                    
                <div class="card-body ">
                    <h1 class="text-3xl text-orange-300 card-title">￥30 Million Capital</h1>
                    <p>We have stable financial capability guaranteed by our Japanese partner banks including Sumitomi Mitsui, Resona, Mizuho Bank, Kiyo Bank, Tottori Bank and Hokkaido Bank.</p>
                </div>
            </div>

            <div class="ml-10 text-white bg-blue-800 border-white card w-96">
                <!-- <figure class="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-terminal" viewBox="0 0 16 16">
                        <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9M3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708z"/>
                        <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/>
                    </svg>
                </figure> -->

                <div class="card-body">
                    <h1 class="text-3xl text-orange-300 card-title">Multiple Languages</h1>
                    <p>We offer multi-language services in Japanese, English, Chinese, Filipino, and Bangladeshi.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="flex flex-col items-center justify-center bg-blue-800 shadow-2xl h-128">
        <div class="flex max-w-screen-xl mx-auto items-justify">
            <div class="ml-10 text-white bg-blue-800 card w-96">
                <!-- <figure class="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-terminal" viewBox="0 0 16 16">
                        <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9M3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708z"/>
                        <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/>
                    </svg>
                </figure> -->
                    
                <div class="card-body">
                    <h1 class="text-3xl text-orange-300 card-title">Compliant to Industry Standard</h1>
                    <p>CCK is compliant to industry standards as a guarantee to our clients and to their customers. We ensure that their businesss is safe with us.</p>
                </div>
            </div>

            <div class="ml-10 text-white bg-blue-800 border-white card w-96">
                <!-- <figure class="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-terminal" viewBox="0 0 16 16">
                        <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9M3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708z"/>
                        <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/>
                    </svg>
                </figure> -->
                    
                <div class="card-body ">
                    <h1 class="text-3xl text-orange-300 card-title">Diverse Location</h1>
                    <p>We are primarily located in Asia with the expansion in different locations such as North America and other continents in the future.</p>
                </div>
            </div>
        </div>
    </div>

    <div>
        <h1 class="grid mt-10 mb-5 text-5xl font-bold text-orange-300 uppercase place-content-center">CCK is an honest business.</h1>

        <p class="flex max-w-screen-xl mx-auto mb-10 text-xl text-justify text-white">
          We ensure that our clients most valued assets - their customers are protected and secured as we operate in a high standard of international service. 
          We also guarantee that their business is protected against security risk while ensuring cost-effective business bringing confidence in our service delivery.
        </p>
    </div>

    <div class="flex flex-row justify-center mb-10">
      <div class="flex flex-col">
        <div class="pt-5 pr-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-rocket-takeoff-fill" viewBox="0 0 16 16">
            <path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.6 3.6 0 0 0-.108-.563 2 2 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2 2 0 0 0-.16-.045 4 4 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.55 2.55 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361s.437 1.732-.36 2.531Z"/>
            <path d="M5.205 10.787a7.6 7.6 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925"/>
          </svg>
        </div>

        <div class="pt-10 pr-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
          </svg>
        </div>

        <div class="pt-10 pr-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-bullseye" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10m0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12"/>
            <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8"/>
            <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
          </svg>
        </div>
      </div>

      <div class="flex flex-col">
        <h1 class="text-2xl">Our Mission</h1>
        <p class="w-64 ml-2 text-white">
          To create sustainable employment while providing superior quality service to our clients.
        </p>

        <h1 class="text-2xl mt-5">Our Vision</h1>
        <p class="w-64 ml-2 text-white">
          Our vision is sustainable global business. We are committed and highly dedicated as vested partners of our clients and their business.
        </p>

        <h1 class="text-2xl mt-5">Our Goal</h1>
        <p class="w-64 ml-2 text-white font-bold">
          Quality.
        </p>
        <p class="w-64 ml-2 text-white">
          We provide superior quality of services that our clients need to sustain and grow their business.
        </p>

        <p class="w-64 ml-2 text-white font-bold">
          Accuracy.
        </p>
        <p class="w-64 ml-2 text-white">
          We deliver high level of accuracy. We understand the impact of errors in our client's business and their success.
        </p>

        <p class="w-64 ml-2 text-white font-bold">
          Data Security.
        </p>
        <p class="w-64 ml-2 text-white">
          We protect our client's business like ours. We guarantee top of the industry security measures and compliance to industry standards.
        </p>
      </div>

      <div class="flex flex-col items-center ml-5">
        <img src="Images/osma.jpg" class="min-content-height" style="width: 400px;"/>
      </div>
    </div>
    
    <div class="flex flex-col items-center justify-center h-64 pb-10 bg-blue-800">
      <h1 class="grid mt-10 mb-5 text-3xl font-bold text-white uppercase place-content-center">Our company will maximize the accomplishments and know-hows we have accumulated</h1>
      <p class="max-w-screen-xl mx-auto text-2xl text-justify text-white">
        to propose global division of work as your company's overseas base of operations, 
        and we will strive for innovative technology in various fields to provide solutions for your future.
      </p>
    </div>

    <div class="pb-10">
      <hr class="my-6 border-orange-300 sm:mx-auto dark:border-orange-300 lg:my-8" />
        <h1 class="grid mx-auto text-3xl font-bold text-orange-300 uppercase place-content-center">Certification</h1>
      <hr class="my-6 border-orange-300 sm:mx-auto dark:border-orange-300 lg:my-8" />

      <div class="flex max-w-screen-lg mx-auto items-justify">
            <div class="mt-5 ml-5 w-96">
                <img src="Images/peza.png">
            </div>

            <div class="mt-5 ml-5 w-96">
              <img src="Images/isms.png">
            </div>

            <div class="pt-5 mt-10 ml-20 w-96">
              <img src="Images/cpg.jpg">
            </div>
        </div>
    </div>

    <div>
      <hr class="my-6 border-orange-300 sm:mx-auto dark:border-orange-300 lg:my-8" />
        <h1 class="grid mx-auto text-3xl font-bold text-orange-300 uppercase place-content-center">Accreditation</h1>
      <hr class="my-6 border-orange-300 sm:mx-auto dark:border-orange-300 lg:my-8" />

      <div class="flex max-w-screen-md mx-auto items-justify">
        <div class="pt-4 mt-5 ml-5 w-96">
            <img src="Images/chamber1.png" class="bg-gray-300">
        </div>

        <div class="mt-5 ml-10 w-96">
          <img src="Images/jami1.png" class="bg-gray-300">
        </div>
      </div>
    </div>

    <div class="mb-10">
      <hr class="my-6 border-orange-300 sm:mx-auto dark:border-orange-300 lg:my-8" />
        <h1 class="grid mx-auto text-3xl font-bold text-orange-300 uppercase place-content-center">Verification</h1>
      <hr class="my-6 border-orange-300 sm:mx-auto dark:border-orange-300 lg:my-8" />

      <div class="grid place-content-center items-justify">
        <div class="w-64 mt-5">
            <button @click="goToWadline()">
              <img src="Images/wad-badge.png">
            </button>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-center justify-center h-64 pb-10 bg-blue-800">
      <h1 class="grid mt-10 mb-5 text-5xl font-bold text-white uppercase place-content-center">Our company is worthy to be trusted!</h1>
      <p class="max-w-screen-xl mx-auto text-2xl text-justify text-white">
        CCK ensures the future of every employee and aspires to be the company that customers bring new opportunities.
      </p>
    </div>
    <hr class="border-orange-300 sm:mx-auto dark:border-orange-300" />
</template>