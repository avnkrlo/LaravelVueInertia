<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout.vue';

const imageUrl = 'Images/life3.jpg';
const imageRef = ref(null);

// Handle image scroll effect
const handleImageScroll = () => {
  if (imageRef.value) {
    const image = imageRef.value;
    const scrollPosition = window.scrollY;
    image.style.transform = `translateY(-${scrollPosition * 0.3}px)`; // Adjust multiplier for desired parallax effect
  }
};

// Slideshow functionality
const items = [
  { src: '/Images/q1.jpg', alt: 'Slide 1' },
  { src: '/Images/q2.jpg', alt: 'Slide 2' },
  { src: '/Images/q3.jpg', alt: 'Slide 3' },
];

const currentIndex = ref(0);
let interval = null;

const startSlideshow = () => {
  if (!interval) {
    interval = setInterval(nextSlide, 3000);
  }
};

const pauseSlideshow = () => {
  if (interval) {
    clearInterval(interval);
    interval = null;
  }
};

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % items.length;
};

// Back to top button functionality
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

// Setup event listeners
onMounted(() => {
  window.addEventListener('scroll', handleImageScroll);
  window.addEventListener('scroll', handleScroll);
  startSlideshow();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleImageScroll);
  window.removeEventListener('scroll', handleScroll);
  pauseSlideshow();
});

defineOptions({
  layout: AuthenticatedLayout,
});
</script>

<style scoped>
.slideshow {
  position: relative;
  z-index: 10;
  margin-top: 20px;
}

.slideshow-image {
  width: 100%;
  height: auto;
}
</style>


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

    <div class="mb-10">
        <hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8" />
          <h1 class="grid mx-auto text-4xl font-bold text-yellow-300 uppercase place-content-center">OUR BUSINESS</h1>
        <hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8" />

        <h1 class="grid mb-5 text-4xl font-bold text-white place-content-center">Made of Honesty and Experience</h1>
        <p class="flex max-w-screen-xl mx-auto text-xl text-justify text-white">
          Integrity is present in every level of interaction, simultaneously guaranteeing the security and protection of our clients’ valued assets. 
          CCK also keeps its customers and businesses away from security risks, bringing confidence in service delivery.
        </p>
    </div>
    
    <div class="mt-10">
      <Parallaxy
        :speed="0"
        class="relative flex justify-center items-center">
        <img src="Images/life3.jpg" class="h-84 md:w-3/4"/>
      </Parallaxy>

      <div class="mt-10">
        <div class="slideshow">
          <img :src="items[currentIndex].src" :alt="items[currentIndex].alt" class="slideshow-image" />
        </div>
      </div>
    </div>

    <!-- <hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8" /> -->
      <!-- <div class="flex items-center h-64 max-w-screen-lg mx-auto text-black bg-gray-600 carousel">
        <div id="slide1" class="relative flex items-center justify-center w-full carousel-item">
          <div>
            <p class="pl-20 text-2xl">"Invested and inspired, that's what we are."</p>
            <p class="flex pl-20 pr-20 text-md">The staggering brain power of our teams is composed of skilled and experienced employees, 
              consistently available to produce and perform.
            </p>
          </div>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" class="btn btn-circle">❮</a> 
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
            <a href="#slide3" class="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" class="relative flex items-center justify-center w-full carousel-item">
          <div>
            <p class="text-2xl">"How can we help you today?"</p>
            <p class="flex text-md">The services offered by CCK City Network, Inc. rest on the values of quality, accuracy, and data security.  
              The company understands the complex structure of sustaining and growing a business that relies on  the superior quality of services it needs, 
              the accuracy of the output it requires, and the security of data and information it owns. 
            </p>
          </div>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle">❮</a> 
            <a href="#slide1" class="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    <hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8" /> -->

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

    
    <div class="flex flex-col items-center justify-center h-64 bg-blue-600">
      <h1 class="text-5xl font-bold text-white mt-10">Stop there, we have something for you.</h1>
      <p class="max-w-screen-xl mx-auto mt-3 text-2xl text-justify text-white">
        Join our family and discover that working does not have to be stressful and demanding. 
        We treat each other in ways that foster healthy personal and professional spaces that we are always excited to have and experience.
      </p>

      <!-- <div class="flex items-center justify-center">
        <Link :href="route('contact.index')" class="inline-flex items-center justify-center px-10 py-3 text-3xl text-center text-white bg-orange-600 border border-orange-300 rounded-lg hover:text-orange-300 sm:ms-4 hover:bg-transparent focus:ring-4 focus:ring-orange-300">
             Contact Us
        </Link>  
      </div> -->
    </div>
    <hr class="border-yellow-300 sm:mx-auto dark:border-yellow-300" />
</template>