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

defineOptions({
    layout: AuthenticatedLayout,
})
</script>

<template>
    <!-- JUMBOTRON -->
    <section class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
        <div class="max-w-screen-xl mx-auto lg:py-56">
            <p class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white uppercase md:text-5xl lg:text-6xl">
              Our business is to guarantee the success of yours.
            </p>
            <p class="mt-5 text-2xl text-white">
              Every business is different; every business needs specific outsourcing services. 
              And we can help you there. CCK City Network, Inc. has the keys to help you accelerate the growth of your business.
            </p>
        </div>
    </section>

    <!-- Back to top button -->
    <button type="button" @click="scrollToTop" id="btn-back-to-top" ref="btnBackToTop" class="!fixed bottom-5 end-5 hidden rounded-full bg-orange-600 p-3 text-xs font-medium uppercase leading-tight text-white border border-orange-300 shadow-md transition duration-150 ease-in-out hover:bg-transparent hover:shadow-lg hover:text-orange-300 focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-600 active:shadow-lg" >
        <span class="[&>svg]:w-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
            </svg>
        </span>
    </button>

    <div>
        <hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8" />
          <h1 class="grid mx-auto text-4xl font-bold text-yellow-300 uppercase place-content-center">OUR BUSINESS</h1>
        <hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8" />

        <h1 class="grid mb-5 text-4xl font-bold text-white place-content-center">Made of Honesty and Experience</h1>
        <p class="flex max-w-screen-xl mx-auto text-xl text-justify text-white">
          Integrity is present in every level of interaction, simultaneously guaranteeing the security and protection of our clients’ valued assets. 
          CCK also keeps its customers and businesses away from security risks, bringing confidence in service delivery.
        </p>
    </div>
    
    <hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8" />
      <div class="flex items-center h-64 max-w-screen-lg mx-auto text-black bg-gray-600 carousel">
        <div id="slide1" class="relative flex items-center justify-center w-full carousel-item">
          <div>
            <p class="pl-20 text-2xl">"Invested and inspired, that's what we are."</p>
            <p class="flex pl-20 pr-20 text-md">The staggering brain power of our teams is composed of skilled and experienced employees, 
              consistently available to produce and perform.
            </p>
          </div>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle">❮</a> 
            <a href="#slide2" class="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" class="relative flex items-center justify-center w-full carousel-item">
          <div>
            <p class="text-2xl">"How can we help you today?"</p>
            <p class="flex text-md">The services offered by CCK City Network, Inc. rest on the values of quality, accuracy, and data security.  
              The company understands the complex structure of sustaining and growing a business that relies on  the superior quality of services it needs, 
              the accuracy of the output it requires, and the security of data and information it owns. 
            </p>
          </div>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle">❮</a> 
            <a href="#slide1" class="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    <hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8" />

    <div>
      <hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8" />
          <h1 class="grid mx-auto text-4xl font-bold text-yellow-300 uppercase place-content-center">INDUSTRIES WE SERVE</h1>
        <hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8" />

        <p class="flex max-w-screen-xl mx-auto text-xl text-justify text-white">
          With over 30 years of experience in handling cost-effective and secure business process outsourcing services, sales and marketing, and programming and software development, 
          CCK City Network, Inc. has been successful in engaging and innovating for an extensive variety of industries such as education, technology, real-estate, advertising, manufacturing, 
          energy, government, healthcare, retail, telecommunication, and trading. So, whether your growth objectives demand business processes, marketing, or technology, 
          with our industry experience and aptitude for innovation, we can make the best solutions for your business, big or small.
        </p>
    </div>

    <div>
      <hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8" />
          <h1 class="grid mx-auto text-4xl font-bold text-yellow-300 uppercase place-content-center">BLOGS</h1>
        <hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8" />
    </div>

    
    <div class="flex flex-col items-center justify-center h-64 pb-10 bg-blue-600">
      <h1 class="text-5xl font-bold text-white">Stop there, we have something for you.</h1>
      <p class="max-w-screen-xl mx-auto mt-5 text-2xl text-justify text-white">
        Join our family and discover that working does not have to be stressful and demanding. 
        We treat each other in ways that foster healthy personal and professional spaces that we are always excited to have and experience.
      </p>
    </div>
    <hr class="border-yellow-300 sm:mx-auto dark:border-yellow-300" />
</template>