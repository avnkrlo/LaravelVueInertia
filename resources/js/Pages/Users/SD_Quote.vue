<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useForm } from '@inertiajs/vue3';

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
    email: null,
    country: null,
    contact: null,
    file: null,
    note: null
});
</script>

<template>
    <!-- Back to top button -->
    <button type="button" @click="scrollToTop" id="btn-back-to-top" ref="btnBackToTop" class="!fixed bottom-5 end-5 hidden rounded-full bg-orange-600 p-3 text-xs font-medium uppercase leading-tight text-white border border-orange-300 shadow-md transition duration-150 ease-in-out hover:bg-transparent hover:shadow-lg hover:text-orange-300 focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-600 active:shadow-lg">
        <span class="[&>svg]:w-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
            </svg>
        </span>
    </button>

    <div class="mb-5 pt-10">
        <h1 class="grid mt-10 mb-5 text-3xl font-bold text-white uppercase place-content-center">Software Development Quote - Software Development Services Pricing</h1>
        <h1 class="flex items-center justify-center mb-5 text-xl text-white">Kindly fill the form below to get quote for your software development requirements. You will get the quote within 24 hours.</h1>

        <div class="flex flex-row justify-center">
            <form @submit.prevent="form.post('/submit')" class="flex flex-col justify-center">

                <!-- name -->
                <label for="name" class="block text-sm font-medium leading-6 text-white">Full Name</label>
                    <input v-model="form.name" type="text" name="first-name" id="first-name" autocomplete="given-name" class="mb-3 block w-full rounded-md border-0 pl-2 py-1.5 text-white shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 text-xl sm:text-sm sm:leading-6 md:text-md md:leading-6 lg:text-lg lg:leading-6">
                <div v-if="form.errors.name" class="text-red-600">{{ form.errors.name }}</div>

                <!-- email -->
                <label for="email" class="block text-sm font-medium leading-6 text-white">Business Email Address</label>
                    <input v-model="form.email" type="text" name="email" id="email" autocomplete="email" class="mb-3 block w-full rounded-md border-0 pl-2 py-1.5 text-white shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 text-xl sm:text-sm sm:leading-6 md:text-md md:leading-6 lg:text-lg lg:leading-6">
                <!-- <input type="text" v-model="form.email" class="mb-3 rounded-md"> -->
                <div v-if="form.errors.email" class="text-red-600">{{ form.errors.email }}</div>

                <!-- country -->
                <label for="country" class="block text-sm font-medium leading-6 text-white">Country</label>
                <div>
                    <select v-model="form.country" id="country" name="country" autocomplete="country-name" class="mb-3 block w-full rounded-md border-0 pl-1 py-1.5 text-white shadow-sm ring-1 ring-inset ring-orange-300 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:max-w-xs text-xl sm:text-sm sm:leading-6 md:text-md md:leading-6 lg:text-lg lg:leading-6">
                        <option disabled selected>Select a Country</option>
                        <option>Afghanistan</option>
                        <option>Albania</option>
                        <option>Algeria</option>
                        <option>Andorra</option>
                        <option>Angola</option>
                        <option>Antigua and Barbuda</option>
                        <option>Argentina</option>
                        <option>Armenia</option>
                        <option>Australia</option>
                        <option>Austria</option>
                        <option>Azerbaijan</option>
                        <option>Bahamas</option>
                        <option>Bahrain</option>
                        <option>Bangladesh</option>
                        <option>Barbados</option>
                        <option>Belarus</option>
                        <option>Belgium</option>
                        <option>Belize</option>
                        <option>Benin</option>
                        <option>Bhutan</option>
                        <option>Bolivia</option>
                        <option>Bosnia and Herzegovina</option>
                        <option>Botswana</option>
                        <option>Brazil</option>
                        <option>Brunei</option>
                        <option>Bulgaria</option>
                        <option>Burkina Faso</option>
                        <option>Burundi</option>
                        <option>Cabo Verde</option>
                        <option>Cambodia</option>
                        <option>Cameroon</option>
                        <option>Canada</option>
                        <option>Central African Republic</option>
                        <option>Chad</option>
                        <option>Chile</option>
                        <option>China</option>
                        <option>Colombia</option>
                        <option>Comoros</option>
                        <option>Congo, Democratic Republic of the</option>
                        <option>Congo, Republic of the</option>
                        <option>Costa Rica</option>
                        <option>Croatia</option>
                        <option>Cuba</option>
                        <option>Cyprus</option>
                        <option>Czech Republic</option>
                        <option>Denmark</option>
                        <option>Djibouti</option>
                        <option>Dominica</option>
                        <option>Dominican Republic</option>
                        <option>East Timor (Timor-Leste)</option>
                        <option>Ecuador</option>
                        <option>Egypt</option>
                        <option>El Salvador</option>
                        <option>Equatorial Guinea</option>
                        <option>Eritrea</option>
                        <option>Estonia</option>
                        <option>Eswatini</option>
                        <option>Ethiopia</option>
                        <option>Fiji</option>
                        <option>Finland</option>
                        <option>France</option>
                        <option>Gabon</option>
                        <option>The Gambia</option>
                        <option>Georgia</option>
                        <option>Germany</option>
                        <option>Ghana</option>
                        <option>Greece</option>
                        <option>Grenada</option>
                        <option>Guatemala</option>
                        <option>Guinea</option>
                        <option>Guinea-Bissau</option>
                        <option>Guyana</option>
                        <option>Haiti</option>
                        <option>Honduras</option>
                        <option>Hungary</option>
                        <option>Iceland</option>
                        <option>India</option>
                        <option>Indonesia</option>
                        <option>Iran</option>
                        <option>Iraq</option>
                        <option>Ireland</option>
                        <option>Israel</option>
                        <option>Italy</option>
                        <option>Jamaica</option>
                        <option>Japan</option>
                        <option>Jordan</option>
                        <option>Kazakhstan</option>
                        <option>Kenya</option>
                        <option>Kiribati</option>
                        <option>Korea, North</option>
                        <option>Korea, South</option>
                        <option>Kosovo</option>
                        <option>Kuwait</option>
                        <option>Kyrgyzstan</option>
                        <option>Laos</option>
                        <option>Latvia</option>
                        <option>Lebanon</option>
                        <option>Lesotho</option>
                        <option>Liberia</option>
                        <option>Libya</option>
                        <option>Liechtenstein</option>
                        <option>Lithuania</option>
                        <option>Luxembourg</option>
                        <option>Madagascar</option>
                        <option>Malawi</option>
                        <option>Malaysia</option>
                        <option>Maldives</option>
                        <option>Mali</option>
                        <option>Malta</option>
                        <option>Marshall Islands</option>
                        <option>Mauritania</option>
                        <option>Mauritius</option>
                        <option>Mexico</option>
                        <option>Micronesia, Federated States of</option>
                        <option>Moldova</option>
                        <option>Monaco</option>
                        <option>Mongolia</option>
                        <option>Montenegro</option>
                        <option>Morocco</option>
                        <option>Mozambique</option>
                        <option>Myanmar (Burma)</option>
                        <option>Namibia</option>
                        <option>Nauru</option>
                        <option>Nepal</option>
                        <option>Netherlands</option>
                        <option>New Zealand</option>
                        <option>Nicaragua</option>
                        <option>Niger</option>
                        <option>Nigeria</option>
                        <option>North Macedonia</option>
                        <option>Norway</option>
                        <option>Oman</option>
                        <option>Pakistan</option>
                        <option>Palau</option>
                        <option>Panama</option>
                        <option>Papua New Guinea</option>
                        <option>Paraguay</option>
                        <option>Peru</option>
                        <option>Philippines</option>
                        <option>Poland</option>
                        <option>Portugal</option>
                        <option>Qatar</option>
                        <option>Romania</option>
                        <option>Russia</option>
                        <option>Rwanda</option>
                        <option>Saint Kitts and Nevis</option>
                        <option>Saint Lucia</option>
                        <option>Saint Vincent and the Grenadines</option>
                        <option>Samoa</option>
                        <option>San Marino</option>
                        <option>Sao Tome and Principe</option>
                        <option>Saudi Arabia</option>
                        <option>Senegal</option>
                        <option>Serbia</option>
                        <option>Seychelles</option>
                        <option>Sierra Leone</option>
                        <option>Singapore</option>
                        <option>Slovakia</option>
                        <option>Slovenia</option>
                        <option>Solomon Islands</option>
                        <option>Somalia</option>
                        <option>South Africa</option>
                        <option>Spain</option>
                        <option>Sri Lanka</option>
                        <option>Sudan</option>
                        <option>Sudan, South</option>
                        <option>Suriname</option>
                        <option>Sweden</option>
                        <option>Switzerland</option>
                        <option>Syria</option>
                        <option>Taiwan</option>
                        <option>Tajikistan</option>
                        <option>Tanzania</option>
                        <option>Thailand</option>
                        <option>Togo</option>
                        <option>Tonga</option>
                        <option>Trinidad and Tobago</option>
                        <option>Tunisia</option>
                        <option>Turkey</option>
                        <option>Turkmenistan</option>
                        <option>Tuvalu</option>
                        <option>Uganda</option>
                        <option>Ukraine</option>
                        <option>United Arab Emirates</option>
                        <option>United Kingdom</option>
                        <option>United States</option>
                        <option>Uruguay</option>
                        <option>Uzbekistan</option>
                        <option>Vanuatu</option>
                        <option>Vatican City</option>
                        <option>Venezuela</option>
                        <option>Vietnam</option>
                        <option>Yemen</option>
                        <option>Zambia</option>
                        <option>Zimbabwe</option>
                    </select>
                </div>
                <!-- <select v-model="form.country" class="w-full max-w-xs mb-3 select select-bordered"></select> -->
                <div v-if="form.errors.country" class="text-red-600">{{ form.errors.country }}</div>

                <!-- contact -->
                <label for="contact" class="block text-sm font-medium leading-6 text-white">Primary Contact Number</label>
                    <input v-model="form.contact" type="text" name="contact" id="contact" autocomplete="contact" class="mb-3 block w-full rounded-md border-0 pl-2 py-1.5 text-white shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 text-xl sm:text-sm sm:leading-6 md:text-md md:leading-6 lg:text-lg lg:leading-6">
                <!-- <input type="text" v-model="form.contact" class="mb-3 rounded-md"> -->
                <div v-if="form.errors.contact" class="text-red-600">{{ form.errors.contact }}</div>

                <!-- upload file -->
                <label for="file" class="block text-sm font-medium leading-6 text-white">Upload a Sample File</label>
                    <!-- <input type="file" name="file" id="file" class="mb-3 block w-full rounded-md border-0 pl-2 py-1.5 text-white shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xl sm:text-sm sm:leading-6"> -->
                <input type="file" class="mb-3 rounded-md">
                <div v-if="form.errors.file" class="text-red-600">{{ form.errors.file }}</div>

                <!-- note -->
                <label for="note" class="block text-sm font-medium leading-6 text-white">Brief description about your need</label>
                    <textarea v-model="form.note" id="note" name="note" rows="3" class="block w-full rounded-md border-0 pl-2 py-1.5 text-white shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 text-xl sm:text-sm sm:leading-6 md:text-md md:leading-6 lg:text-lg lg:leading-6"></textarea>
                <!-- <textarea  class="textarea textarea-bordered"></textarea> -->
                <div v-if="form.errors.note" class="text-red-600">{{ form.errors.note }}</div>
                
                <button @click="formQuoteSubmit()" class="justify-center py-2 mt-5 text-xl text-center text-white uppercase bg-orange-600 border border-orange-300 rounded-lg hover:text-orange-300 hover:bg-transparent focus:ring-4 focus:ring-orange-600">
                    Submit
                </button>

                *All Fields are Mandatory
            </form>
        </div>
    </div>
</template>
  