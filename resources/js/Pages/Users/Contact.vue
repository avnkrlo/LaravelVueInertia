<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useForm } from '@inertiajs/vue3';
// import TextField from '@/Components/TextField.vue';
// import TextArea from '@/Components/TextArea.vue';

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

const form = useForm({
    name: null,
    company: null,
    email: null,
    contact: null,
    service: null,
    file: null,
    note: null
});

// const parentModel = ref(null)
// const quote = ref({
//     name: '',
//     businessEmail: '',
//     country: '',
//     contact: ''
// })

// const nameComponent = ref({
//     type: 'text',
//     placeholder: ' Your Name',
//     label: 'Name',
//     errorMessage: null,
//     pattern: '',
//     minLength: 2,
//     maxLength: 30
// });

// const businessEmailComponent = ref({
//     type: 'email',
//     placeholder: ' Email',
//     label: 'Email',
//     errorMessage: null,
//     pattern: '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$',
//     minLength: 5,
//     maxLength: 100
// });

// const countryComponent = ref({
//     type: 'text',
//     placeholder: ' Country',
//     label: 'Country',
//     errorMessage: null,
//     pattern: '',
//     minLength: 2,
//     maxLength: 20,
// });

// const contactComponent = ref({
//     type: 'text',
//     placeholder: ' Contact Number',
//     label: 'Contact',
//     errorMessage: null,
//     pattern: '((\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}',
//     minLength: null,
//     maxLength: null,
// });

// const isFormValid = ref (true);

// const validateForm = (isValid) => {
//     isFormValid.value = isValid
// }

// const formQuoteSubmit = () => {
//     if (!isFormValid.value) {
//         alert('Form not valid')
//     } else {
//         console.log('Form Submit', quote.value)
//     }
// }

const goToCCK_JP = () => {
    window.open('https://cck.co.jp');
}
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

    <!-- Back to top button -->
    <button type="button" @click="scrollToTop" id="btn-back-to-top" ref="btnBackToTop" class="!fixed bottom-5 end-5 hidden rounded-full bg-orange-600 p-3 text-xs font-medium uppercase leading-tight text-white border border-orange-300 shadow-md transition duration-150 ease-in-out hover:bg-transparent hover:shadow-lg hover:text-orange-300 focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-600 active:shadow-lg">
        <span class="[&>svg]:w-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
            </svg>
        </span>
    </button>

    <div>
        <h1 class="grid mt-10 mb-5 text-4xl font-bold text-white uppercase place-content-center">Get in touch with our amazing team, and let's talk strategy!</h1>
        <h1 class="flex items-center justify-center mb-5 text-2xl text-white">Contact us for your Data Entry and Software Developement nees by filling the form below:</h1>
        
        <div class="flex flex-row justify-center">
            <div class="pr-10 ">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30890.92697538384!2d121.05758400000002!3d14.578216!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c86ab72ce775%3A0x89ad8bdd71dc8a8e!2sOne%20San%20Miguel%20Building!5e0!3m2!1sen!2sph!4v1718777000857!5m2!1sen!2sph" width="500" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <!-- <form @submit.prevent="form.post('/submit')" class="flex flex-col justify-center ml-10">
                <TextField
                    v-model="quote.name"
                    :component-data="nameComponent"
                    @form-validate="validateForm"
                />

                <TextField
                    v-model="quote.businessEmail"
                    :component-data="businessEmailComponent"
                    @form-validate="validateForm"
                />

                <TextField
                    v-model="quote.country"
                    :component-data="countryComponent"
                    @form-validate="validateForm"
                />

                <TextField
                    v-model="quote.contact"
                    :component-data="contactComponent"
                    @form-validate="validateForm"
                />

                <input type="file" @input="" class="w-full max-w-xs file-input file-input-bordered" />

                <button @click="formQuoteSubmit()" class="justify-center py-3 text-xl text-center text-white bg-orange-600 border border-orange-300 rounded-lg hover:text-orange-300 sm:ms-4 hover:bg-transparent focus:ring-4 focus:ring-orange-300">
                    Send Message
                </button>
            </form> -->
            

            <form @submit.prevent="form.post('/submit')" class="flex flex-col justify-center">
                <!-- name -->
                <label for="name" class="text-white">Full Name</label>
                    <input v-model="form.name" type="text" name="name" id="name" autocomplete="given-name" class="mb-3 block w-full rounded-md border-0 pl-2 py-1.5 text-white shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 text-xl sm:text-sm sm:leading-6 md:text-md md:leading-6 lg:text-lg lg:leading-6">
                <div v-if="form.errors.name" class="text-red-600">{{ form.errors.name }}</div>

                <!-- company name -->
                <label for="company" class="text-white">Company Name</label>
                    <input v-model="form.company" type="text" name="company" id="company" autocomplete="given-name" class="mb-3 block w-full rounded-md border-0 pl-2 py-1.5 text-white shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 text-xl sm:text-sm sm:leading-6 md:text-md md:leading-6 lg:text-lg lg:leading-6">
                <div v-if="form.errors.company" class="text-red-600">{{ form.errors.company }}</div>

                <!-- email -->
                <label for="email" class="text-white">Business Email Address</label>
                    <input v-model="form.email" type="text" name="email" id="email" autocomplete="email" class="mb-3 block w-full rounded-md border-0 pl-2 py-1.5 text-white shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 text-xl sm:text-sm sm:leading-6 md:text-md md:leading-6 lg:text-lg lg:leading-6">
                <div v-if="form.errors.email" class="text-red-600">{{ form.errors.email }}</div>

                <!-- contact -->
                <label for="contact" class="text-white">Primary Contact Number</label>
                    <input v-model="form.contact" type="text" name="contact" id="contact" autocomplete="contact" class="mb-3 block w-full rounded-md border-0 pl-2 py-1.5 text-white shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 text-xl sm:text-sm sm:leading-6 md:text-md md:leading-6 lg:text-lg lg:leading-6">
                <div v-if="form.errors.contact" class="text-red-600">{{ form.errors.contact }}</div>

                <!-- service -->
                <label for="service" class="text-white">Services Required</label>
                <select v-model="form.service" id="service" name="service" autocomplete="service" class="block w-full rounded-md border-0 pl-1 py-1.5 text-white shadow-sm ring-1 ring-inset ring-orange-300 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:max-w-xs text-xl sm:text-sm sm:leading-6 md:text-md md:leading-6 lg:text-lg lg:leading-6">
                    <option disabled selected>Select a Service</option>
                    <option>Data Entry</option>
                    <option>Software Development</option>
                    <option>Both</option>
                </select>
                <div v-if="form.errors.service" class="text-red-600">{{ form.errors.service }}</div>

                <!-- note -->
                <label for="note" class="text-white">Send a Note</label>
                    <textarea v-model="form.note" id="note" name="note" rows="3" class="block w-full rounded-md border-0 pl-2 py-1.5 text-white shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 text-xl sm:text-sm sm:leading-6 md:text-md md:leading-6 lg:text-lg lg:leading-6"></textarea>
                <div v-if="form.errors.note" class="text-red-600">{{ form.errors.note }}</div>

                <button @click="formQuoteSubmit()" class="justify-center py-2 mt-5 text-xl text-center text-white uppercase bg-orange-600 border border-orange-300 rounded-lg hover:text-orange-300 hover:bg-transparent focus:ring-4 focus:ring-orange-300">
                    Submit
                </button>
            </form>

            <div class="flex flex-col mt-5 ml-10">
                <h1 class="text-xl font-bold text-white uppercase">Contact Us:</h1>
                
                <div class="flex flex-row mt-3">
                    <svg class="mt-1" height="16px" width="16px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 293.334 293.334" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path style="fill:#ffffff;" d="M146.667,0C94.903,0,52.946,41.957,52.946,93.721c0,22.322,7.849,42.789,20.891,58.878 c4.204,5.178,11.237,13.331,14.903,18.906c21.109,32.069,48.19,78.643,56.082,116.864c1.354,6.527,2.986,6.641,4.743,0.212 c5.629-20.609,20.228-65.639,50.377-112.757c3.595-5.619,10.884-13.483,15.409-18.379c6.554-7.098,12.009-15.224,16.154-24.084 c5.651-12.086,8.882-25.466,8.882-39.629C240.387,41.962,198.43,0,146.667,0z M146.667,144.358 c-28.892,0-52.313-23.421-52.313-52.313c0-28.887,23.421-52.307,52.313-52.307s52.313,23.421,52.313,52.307 C198.98,120.938,175.559,144.358,146.667,144.358z"></path> <circle style="fill:#010002;" cx="146.667" cy="90.196" r="21.756"></circle> </g> </g> </g></svg>
                    <p class="w-64 ml-2 text-white">
                        3502 One San Miguel Avenue Condominium, San Miguel Avenue, Ortigas Center, Pasig City
                    </p>
                </div>

                <div class="flex flex-row mt-3">
                    <svg class="mt-1" height="16px" width="16px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 473.806 473.806" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path style="fill:#ffffff;" d="M374.456,293.506c-9.7-10.1-21.4-15.5-33.8-15.5c-12.3,0-24.1,5.3-34.2,15.4l-31.6,31.5c-2.6-1.4-5.2-2.7-7.7-4 c-3.6-1.8-7-3.5-9.9-5.3c-29.6-18.8-56.5-43.3-82.3-75c-12.5-15.8-20.9-29.1-27-42.6c8.2-7.5,15.8-15.3,23.2-22.8 c2.8-2.8,5.6-5.7,8.4-8.5c21-21,21-48.2,0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5c-6-6.2-12.3-12.6-18.8-18.6 c-9.7-9.6-21.3-14.7-33.5-14.7s-24,5.1-34,14.7c-0.1,0.1-0.1,0.1-0.2,0.2l-34,34.3c-12.8,12.8-20.1,28.4-21.7,46.5 c-2.4,29.2,6.2,56.4,12.8,74.2c16.2,43.7,40.4,84.2,76.5,127.6c43.8,52.3,96.5,93.6,156.7,122.7c23,10.9,53.7,23.8,88,26 c2.1,0.1,4.3,0.2,6.3,0.2c23.1,0,42.5-8.3,57.7-24.8c0.1-0.2,0.3-0.3,0.4-0.5c5.2-6.3,11.2-12,17.5-18.1c4.3-4.1,8.7-8.4,13-12.9 c9.9-10.3,15.1-22.3,15.1-34.6c0-12.4-5.3-24.3-15.4-34.3L374.456,293.506z M410.256,398.806 C410.156,398.806,410.156,398.906,410.256,398.806c-3.9,4.2-7.9,8-12.2,12.2c-6.5,6.2-13.1,12.7-19.3,20 c-10.1,10.8-22,15.9-37.6,15.9c-1.5,0-3.1,0-4.6-0.1c-29.7-1.9-57.3-13.5-78-23.4c-56.6-27.4-106.3-66.3-147.6-115.6 c-34.1-41.1-56.9-79.1-72-119.9c-9.3-24.9-12.7-44.3-11.2-62.6c1-11.7,5.5-21.4,13.8-29.7l34.1-34.1c4.9-4.6,10.1-7.1,15.2-7.1 c6.3,0,11.4,3.8,14.6,7c0.1,0.1,0.2,0.2,0.3,0.3c6.1,5.7,11.9,11.6,18,17.9c3.1,3.2,6.3,6.4,9.5,9.7l27.3,27.3 c10.6,10.6,10.6,20.4,0,31c-2.9,2.9-5.7,5.8-8.6,8.6c-8.4,8.6-16.4,16.6-25.1,24.4c-0.2,0.2-0.4,0.3-0.5,0.5 c-8.6,8.6-7,17-5.2,22.7c0.1,0.3,0.2,0.6,0.3,0.9c7.1,17.2,17.1,33.4,32.3,52.7l0.1,0.1c27.6,34,56.7,60.5,88.8,80.8 c4.1,2.6,8.3,4.7,12.3,6.7c3.6,1.8,7,3.5,9.9,5.3c0.4,0.2,0.8,0.5,1.2,0.7c3.4,1.7,6.6,2.5,9.9,2.5c8.3,0,13.5-5.2,15.2-6.9 l34.2-34.2c3.4-3.4,8.8-7.5,15.1-7.5c6.2,0,11.3,3.9,14.4,7.3c0.1,0.1,0.1,0.1,0.2,0.2l55.1,55.1 C420.456,377.706,420.456,388.206,410.256,398.806z"></path> <path style="fill:#ffffff;" d="M256.056,112.706c26.2,4.4,50,16.8,69,35.8s31.3,42.8,35.8,69c1.1,6.6,6.8,11.2,13.3,11.2c0.8,0,1.5-0.1,2.3-0.2 c7.4-1.2,12.3-8.2,11.1-15.6c-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3,3.7-15.6,11 S248.656,111.506,256.056,112.706z"></path> <path style="fill:#ffffff;" d="M473.256,209.006c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2,3.7-15.5,11 c-1.2,7.4,3.7,14.3,11.1,15.6c46.6,7.9,89.1,30,122.9,63.7c33.8,33.8,55.8,76.3,63.7,122.9c1.1,6.6,6.8,11.2,13.3,11.2 c0.8,0,1.5-0.1,2.3-0.2C469.556,223.306,474.556,216.306,473.256,209.006z"></path> </g> </g> </g></svg>
                    <p class="flex flex-col w-64 ml-2 text-white">
                        +632-53100435
                    </p>
                </div>
            </div>

        </div>

        <!-- <div class="flex items-center justify-center mt-10">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15445.46348769192!2d121.05758400000002!3d14.578216!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c86ab72ce775%3A0x89ad8bdd71dc8a8e!2sOne%20San%20Miguel%20Building!5e0!3m2!1sen!2sph!4v1718347514370!5m2!1sen!2sph" width="1170" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div> -->
    </div>

    <h1 class="grid mt-20 mb-5 text-5xl font-bold text-yellow-300 uppercase place-content-center">Office Headquarters</h1>
    <div class="flex flex-col items-center justify-center mt-10 bg-blue-800 shadow-2xl h-128">
        <div class="flex max-w-screen-xl mx-auto items-justify">
            <div class="ml-10 text-white bg-blue-800">
                <figure class="pt-5 pl-8">
                    <svg width="101px" height="101px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet" fill="#000000">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path fill="#006A4D" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z"></path>
                            <circle fill="#F42A41" cx="16" cy="17.5" r="7"></circle>
                        </g>
                    </svg>
                </figure>
                    
                <div class="card-body">
                    <h1 class="text-3xl text-orange-300 card-title">Chittagong 4000 Tinpur</h1>
                    <p>28 Jubilee Road, Kader Tower 7F 13-14 Tin Pool Chittagong 4000</p>
                </div>

                <iframe class="pl-8 mb-10 pt-9" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d230.64870722596132!2d91.828473!3d22.339302!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a6edd82901%3A0x550eb12ded50c520!2s128%20Jubilee%20Rd%2C%20Chittagong%204000%2C%20Bangladesh!5e0!3m2!1sen!2sph!4v1718256125320!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div class="ml-5 text-white bg-blue-800 border-white">
                <figure class="pt-5 pl-8">
                    <svg height="101px" width="101px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 496 496" xml:space="preserve" fill="#000000">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path style="fill:#FFFFFF;" d="M496,369.6c0,27.2-21.6,46.4-48,46.4H48c-26.4,0-48-19.2-48-46.4V126.4C0,99.2,21.6,80,48,80h400 c26.4,0,48,19.2,48,46.4V369.6z"></path>
                            <path style="fill:#E9F3F4;" d="M48,80h400c26.4,0,48,19.2,48,46.4v243.2c0,27.2-25.6,46.4-52,46.4"></path>
                            <g><path style="fill:#D9ECED;" d="M496,368.8c0,27.2-21.6,47.2-48,47.2H48c-26.4,0-48-20.8-48-48"></path>
                                <path style="fill:#D9ECED;" d="M48,80h400c26.4,0,48,19.2,48,46.4V216"></path>
                            </g>
                            <circle style="fill:#EC1C24;" cx="248" cy="248" r="103.2"></circle>
                                <path style="fill:#CE0909;" d="M175.2,175.2c40-40,105.6-40,146.4,0c40,40,40,105.6,0,146.4"></path>
                        </g>
                    </svg>
                </figure>
                    
                <div class="card-body">
                    <h1 class="text-3xl text-orange-300 card-title">Wakayama Headquarters</h1>
                    <p>12-8 Kitadejima, Wakayama City</p>
                    <button @click="goToCCK_JP()" class="text-xl text-white underline">www.cck-co.jp</button>
                </div>

                <iframe class="pt-0 pl-8 pb-9" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6597.985069804087!2d135.195089!3d34.223209!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000b32d37fcc853%3A0xef2ca88cc0b5a347!2zSmFwYW4sIOOAkjY0MC04MzE3IFdha2F5YW1hLCBLaXRhZGVqaW1hLCAxMi04IOOCt-ODhuOCo-ODk-ODqw!5e0!3m2!1sen!2sph!4v1718256257632!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>

    <h1 class="grid mt-10 mb-5 text-5xl font-bold text-yellow-300 uppercase place-content-center">Other Branches</h1>
    <h1 class="grid mt-10 mb-5 text-2xl font-bold text-white uppercase place-content-center">Japan</h1>
    <div>
        <!-- First Set of Offer Cards -->
        <div class="flex max-w-screen-xl mx-auto items-justify">
            <div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300">
                <!-- <figure class="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-database" viewBox="0 0 16 16">
                        <path d="M4.318 2.687C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4c0-.374.356-.875 1.318-1.313M13 5.698V7c0 .374-.356.875-1.318 1.313C10.766 8.729 9.464 9 8 9s-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777A5 5 0 0 0 13 5.698M14 4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13zm-1 4.698V10c0 .374-.356.875-1.318 1.313C10.766 11.729 9.464 12 8 12s-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777A5 5 0 0 0 13 8.698m0 3V13c0 .374-.356.875-1.318 1.313C10.766 14.729 9.464 15 8 15s-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13s3.022-.289 4.096-.777c.324-.147.633-.323.904-.525"/>
                    </svg>
                </figure> -->
                
                <div class="card-body">
                    <h2 class="card-title">Tokyo Head Office</h2>
                    <p class="text-xl">1-6-35 Shinsuna, Koto-ku, Tokyo East Square Tokyo 7F</p>
                </div>
            </div>

            <div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300">
                <!-- <figure class="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" class="bi bi-printer" viewBox="0 0 16 16">
                        <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
                        <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1"/>
                    </svg>
                </figure> -->
                
                <div class="card-body">
                    <h2 class="card-title">Sapporo Office</h2>
                    <p>50 6F, Katsura Odori Building, 1-14-2 Odori Nishi, Chuo-ku, Sapporo</p>
                </div>
            </div>

            <div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300">
                <!-- <figure class="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" class="bi bi-file-earmark-text" viewBox="0 0 16 16">
                        <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
                        <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
                    </svg>
                </figure> -->
                
                <div class="card-body">
                    <h2 class="card-title">Tohoku Office</h2>
                    <p>1-3-3 Nakasato, Ishinomaki City, Miyagi Prefecture Nakasato Central Building 4F</p>
                </div>
            </div>
        </div>

        <!-- Second Set of Offer Cards -->
        <div class="flex max-w-screen-xl mx-auto items-justify">
            <div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300">
                <!-- <figure class="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-database" viewBox="0 0 16 16">
                        <path d="M4.318 2.687C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4c0-.374.356-.875 1.318-1.313M13 5.698V7c0 .374-.356.875-1.318 1.313C10.766 8.729 9.464 9 8 9s-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777A5 5 0 0 0 13 5.698M14 4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13zm-1 4.698V10c0 .374-.356.875-1.318 1.313C10.766 11.729 9.464 12 8 12s-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777A5 5 0 0 0 13 8.698m0 3V13c0 .374-.356.875-1.318 1.313C10.766 14.729 9.464 15 8 15s-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13s3.022-.289 4.096-.777c.324-.147.633-.323.904-.525"/>
                    </svg>
                </figure> -->
                
                <div class="card-body">
                    <h2 class="card-title">Niigata Office</h2>
                    <p class="text-xl">Kiyama No. 3 Building, 2-4-1 Yoneyama, Chuo-ku, Niigata, Niigata</p>
                </div>
            </div>

            <div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300">
                <!-- <figure class="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" class="bi bi-printer" viewBox="0 0 16 16">
                        <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
                        <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1"/>
                    </svg>
                </figure> -->
                
                <div class="card-body">
                    <h2 class="card-title">C-Work (Tokyo)</h2>
                    <p class="text-xl">2-2-4 Kojimachi , Chiyoda-ku, Tokyo Kojimachi Central Building 4F</p>
                </div>
            </div>

            <div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300">
                <!-- <figure class="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" class="bi bi-file-earmark-text" viewBox="0 0 16 16">
                        <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
                        <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
                    </svg>
                </figure> -->
                
                <div class="card-body">
                    <h2 class="card-title">Shizuoka Office</h2>
                    <p class="text-xl">3-38 Kotobukicho, Mishima City, Shizuoka Prefecture Tanaka Building 2F</p>
                </div>
            </div>
        </div>

        <!-- Second Set of Offer Cards -->
        <div class="flex max-w-screen-xl mx-auto items-justify">
            <div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300">
                <!-- <figure class="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-database" viewBox="0 0 16 16">
                        <path d="M4.318 2.687C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4c0-.374.356-.875 1.318-1.313M13 5.698V7c0 .374-.356.875-1.318 1.313C10.766 8.729 9.464 9 8 9s-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777A5 5 0 0 0 13 5.698M14 4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13zm-1 4.698V10c0 .374-.356.875-1.318 1.313C10.766 11.729 9.464 12 8 12s-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777A5 5 0 0 0 13 8.698m0 3V13c0 .374-.356.875-1.318 1.313C10.766 14.729 9.464 15 8 15s-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13s3.022-.289 4.096-.777c.324-.147.633-.323.904-.525"/>
                    </svg>
                </figure> -->
                
                <div class="card-body">
                    <h2 class="card-title">Osaka Branch Office</h2>
                    <p class="text-xl">2-3-1, Ohiraki, Fukushima-ku, Osaka Panekyo Osaka Center Building 4F</p>
                </div>
            </div>

            <div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300">
                <!-- <figure class="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" class="bi bi-printer" viewBox="0 0 16 16">
                        <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
                        <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1"/>
                    </svg>
                </figure> -->
                
                <div class="card-body">
                    <h2 class="card-title">Tottori Branch Office</h2>
                    <p class="text-xl">1-100 Chiyomi, Tottori-shi, Tottori Aisin Chiyomi Building 10F</p>
                </div>
            </div>

            <div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300">
                <!-- <figure class="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" class="bi bi-file-earmark-text" viewBox="0 0 16 16">
                        <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
                        <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
                    </svg>
                </figure> -->
                
                <div class="card-body">
                    <h2 class="card-title">Fukuoka Office</h2>
                    <p class="text-xl">2-14-35 Tenjin, Chuo-ku, Fukuoka-shi, Fukuoka Nomura Real Estate Tenjin Building 7F</p>
                </div>
            </div>
        </div>
    </div>

    <h1 class="grid mt-10 mb-5 text-2xl font-bold text-white uppercase place-content-center">Philippines</h1>
    <div class="pb-10">
        <div class="grid mx-auto text-justify place-content-center ">
            <div class="mt-5 ml-10 shadow-xl card w-96 bg-base-300">
                <!-- <figure class="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" class="bi bi-file-earmark-text" viewBox="0 0 16 16">
                        <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
                        <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
                    </svg>
                </figure> -->
                    
                <div class="card-body">
                    <h2 class="card-title">City Computer BPO Philippines, Inc.</h2>
                    <p class="text-xl">2F J & V Building, Brgy. Nancayasan, McArthur H-way, Urdaneta City Pangasinan 2428</p>
                </div>
            </div>
        </div>
    </div>

    <div class="flex flex-col items-center justify-center h-64 bg-blue-800 ">
      <h1 class="text-5xl font-bold text-white">Join us Now!</h1>
      <p class="max-w-screen-xl mx-auto mt-5 text-2xl text-justify text-white">
        We've got exciting offers just for you!
      </p>
    </div>
    <hr class="border-yellow-300 sm:mx-auto dark:border-yellow-300" />
</template>
  