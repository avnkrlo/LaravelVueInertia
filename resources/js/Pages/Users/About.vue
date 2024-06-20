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
        <hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8" />
          <h1 class="grid mx-auto text-3xl font-bold text-yellow-300 uppercase place-content-center">Our History</h1>
        <hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8" />

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
        <h1 class="grid mt-10 mb-5 text-5xl font-bold text-yellow-300 uppercase place-content-center">CCK is an honest business.</h1>

        <p class="flex max-w-screen-xl mx-auto mb-10 text-2xl text-justify text-white">
          We ensure that our clients most valued assets - their customers are protected and secured as we operate in a high standard of international service. 
          We also guarantee that their business is protected against security risk while ensuring cost-effective business bringing confidence in our service delivery.
        </p>
    </div>
    
    <div class="flex flex-col items-center justify-center h-64 pb-10 bg-blue-800">
      <h1 class="grid mt-10 mb-5 text-3xl font-bold text-white uppercase place-content-center">Our company will maximize the accomplishments and know-hows we have accumulated</h1>
      <p class="max-w-screen-xl mx-auto text-2xl text-justify text-white">
        to propose global division of work as your company's overseas base of operations, 
        and we will strive for innovative technology in various fields to provide solutions for your future.
      </p>
    </div>

    <div class="pb-10">
      <hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8" />
        <h1 class="grid mx-auto text-3xl font-bold text-yellow-300 uppercase place-content-center">Certification</h1>
      <hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8" />

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
      <hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8" />
        <h1 class="grid mx-auto text-3xl font-bold text-yellow-300 uppercase place-content-center">Accreditation</h1>
      <hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8" />

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
      <hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8" />
        <h1 class="grid mx-auto text-3xl font-bold text-yellow-300 uppercase place-content-center">Verification</h1>
      <hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8" />

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
    <hr class="border-yellow-300 sm:mx-auto dark:border-yellow-300" />
</template>