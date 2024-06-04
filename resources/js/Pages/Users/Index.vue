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
        <div class="max-w-screen-xl px-4 py-24 mx-auto text-center lg:py-56">
            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
                It takes more than interest, we have plans and strategies specifically for your business needs.
            </h1>
        </div>
    </section>

    <div>
        <hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8" />
          <h1 class="grid place-content-center font-bold mb-10 text-yellow-300">OUR BUSINESS</h1>
        <hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8" />

        <h1 class="flex max-w-screen-xl mx-auto italic font-bold">Made of Honesty and Experience</h1>
        <p class="flex max-w-screen-xl mx-auto text-justify">
          Integrity is present in every level of interaction, simultaneously guaranteeing the security and protection of our clients’ valued assets. 
          CCK also keeps its customers and businesses away from security risks, bringing confidence in service delivery.
        </p>
    </div>
    
    <hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8" />
      <div class="flex items-center carousel max-w-screen-lg h-64 bg-gray-600 text-black mx-auto">
        <div id="slide1" class="carousel-item relative w-full flex justify-center items-center">
          <div>
            <p class="text-2xl pl-20">"Invested and inspired, that's what we are."</p>
            <p class="flex text-md pl-20 pr-20">The staggering brain power of our teams is composed of skilled and experienced employees, 
              consistently available to produce and perform.
            </p>
          </div>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle">❮</a> 
            <a href="#slide2" class="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" class="carousel-item relative w-full flex justify-center items-center">
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
          <h1 class="grid place-content-center font-bold mb-10 text-yellow-300">INDUSTRIES WE SERVE</h1>
        <hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8" />

        <p class="flex max-w-screen-xl mx-auto text-justify">
          With over 30 years of experience in handling cost-effective and secure business process outsourcing services, sales and marketing, and programming and software development, 
          CCK City Network, Inc. has been successful in engaging and innovating for an extensive variety of industries such as education, technology, real-estate, advertising, manufacturing, 
          energy, government, healthcare, retail, telecommunication, and trading. So, whether your growth objectives demand business processes, marketing, or technology, 
          with our industry experience and aptitude for innovation, we can make the best solutions for your business, big or small.
        </p>
    </div>

    <div>
      <hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8" />
          <h1 class="grid place-content-center font-bold mb-10 text-yellow-300">BLOGS</h1>
        <hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8" />
    </div>

    
    <div class="pb-10 bg-blue-600 h-64 flex flex-col justify-center items-center">
      <h1 class="text-white font-bold">Stop there, we have something for you.</h1>
      <p class="max-w-screen-xl mx-auto text-justify text-white">
        Join our family and discover that working does not have to be stressful and demanding. 
        We treat each other in ways that foster healthy personal and professional spaces that we are always excited to have and experience.
      </p>
    </div>
</template>