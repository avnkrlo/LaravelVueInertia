<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout.vue';

const items = [
  { src: 'Images/q1.png', alt: 'Slide 1' },
  { src: 'Images/q2.png', alt: 'Slide 2' },
  { src: 'Images/q3.png', alt: 'Slide 3' },
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

    <div class="pt-10">
        <h1 class="flex max-w-screen-xl mx-auto italic font-bold">Made of Honesty and Experience</h1>
        <p class="flex max-w-screen-xl mx-auto text-justify">
            Integrity is present in every level of interaction, simultaneously guaranteeing the security and protection of our clients’ valued assets. 
            CCK also keeps its customers and businesses away from security risks, bringing confidence in service delivery.
        </p>

        <h1 class="flex max-w-screen-xl mx-auto italic font-bold mt-10">Industries We Serve</h1>
        <p class="flex max-w-screen-xl mx-auto text-justify">
            With over 30 years of experience in handling cost-effective and secure business process outsourcing services, sales and marketing, and programming and software development, 
            CCK City Network, Inc. has been successful in engaging and innovating for an extensive variety of industries such as education, technology, real-estate, advertising, manufacturing, energy, 
            government, healthcare, retail, telecommunication, and trading. So, whether your growth objectives demand business processes, marketing, or technology, 
            with our industry experience and aptitude for innovation, we can make the best solutions for your business, big or small.
        </p>
    </div>

    <div class="pt-10">
      <h1 class="grid place-content-center">CCK is an honest business.</h1>
      <p class="flex max-w-screen-xl mx-auto text-justify">We ensure that our clients most valued assets - their customers are protected and secured as we operate in a high standard of international service. 
        We also guarantee that their business is protected against security risk while ensuring cost-effective business bringing confidence in our service delivery.
      </p>
    </div>

    <!-- CAROUSEL -->
    <div id="indicators-carousel" class="relative w-full pt-10" @mouseover="pause" @mouseleave="start">
        <!-- Carousel wrapper -->
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        <!-- Carousel items -->
        <div v-for="(item, index) in items" :key="index" class="absolute w-full h-full"
            :class="{'hidden': index !== currentIndex, 'block': index === currentIndex, 'duration-700 ease-in-out': true}">
            <img :src="item.src" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" :alt="item.alt">
        </div>
        
        </div>
        <!-- Slider indicators -->
        <div class="absolute z-30 flex space-x-3 -translate-x-1/2 rtl:space-x-reverse bottom-5 left-1/2">
        <button v-for="(item, index) in items" :key="index" type="button" class="w-3 h-3 rounded-full"
                :aria-current="index === currentIndex" :aria-label="'Slide ' + (index + 1)"
                @click="goToSlide(index)"></button>
        </div>
    </div>
</template>
  