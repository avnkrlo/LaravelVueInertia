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
        <h1 class="grid mt-10 mb-5 text-3xl font-bold text-white uppercase place-content-center">Data Entry Quote - Data Entry Services Pricing</h1>
        <h1 class="flex items-center justify-center mb-5 text-xl text-white">Kindly fill the form below to get quote for your data entry requirements. You will get the quote within 24 hours.</h1>

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

    <h1 class="grid mt-10 ml-20 text-3xl font-bold text-white uppercase">Data Entry Services Pricing - Frequently Asked Questions (FAQs)</h1>
    <div class="grid pl-20 pr-20 mt-5 mb-5 place-content-center">
        <div class="border collapse collapse-plus">
        <input type="radio" name="my-accordion-3" checked="checked" /> 
            <div class="text-xl font-semibold text-orange-400 collapse-title ">
                How much do you charge for data entry services?
            </div>

            <div class="collapse-content"> 
                <p class="mb-2 text-white">For both online and offline data entry works, it costs $4 per hour and $700 per month (A Full Time Equivalent data entry operator).</p>
                <p class="mb-2 text-white">Please fill in the ‘data entry quote’ form for both hourly and FTE requirements. For hourly rates, you will get the total number of hours and the total data entry services pricing for performing/executing your project.</p>
                <p class="mb-2 text-white">For monthly rates, it will be easy for us to address you if we know about the nature of your data entry work.</p>
            </div>
        </div>

        <div class="border collapse collapse-plus">
        <input type="radio" name="my-accordion-3" /> 
            <div class="text-xl font-semibold text-orange-400 collapse-title">
                Are there any upfront costs?
            </div>
        
            <div class="collapse-content"> 
                <p class="mb-2 text-white">No upfront cost is charged for anyone who represents a company.</p>
                <p class="mb-2 text-white">If you prefer to outsource as an individual rather than a company's representative, you have to pay 50 percent of the total cost as an upfront cost. That too will be charged only for the first time. We will not charge for further projects.</p>
                <p class="mb-2 text-white">If you represent a company, you don’t have to pay a penny before outsourcing.</p>
            </div>
        </div>

        <div class="border collapse collapse-plus">
        <input type="radio" name="my-accordion-3" /> 
            <div class="text-xl font-semibold text-orange-400 collapse-title">
                How do you calculate costs?
            </div>
            <div class="collapse-content"> 
                <p class="mb-2 text-white">In the case of monthly works, the cost is fixed i.e., $700 per month.</p>
                <p class="mb-2 text-white">For hourly works, the cost is just $4. We calculate costs based on the total number of hours required to complete your entire project.</p>
            </div>
        </div>

        <div class="border collapse collapse-plus">
        <input type="radio" name="my-accordion-3" /> 
            <div class="text-xl font-semibold text-orange-400 collapse-title">
                Tell me about the payment cycle for Hourly Works.
            </div>
            <div class="collapse-content"> 
                <p class="mb-2 text-white">For hourly works, you have to make payment on the same day we deliver the output file as we stipulated in the quote.</p>
                <p class="mb-2 text-white">After completing the project we will send you the output along with the invoice. If you can’t pay on that time, prior information should be sent accordingly.</p>
            </div>
        </div>

        <div class="border collapse collapse-plus">
        <input type="radio" name="my-accordion-3" /> 
            <div class="text-xl font-semibold text-orange-400 collapse-title">
                What about the payment cycle for monthly works?
            </div>
            <div class="collapse-content"> 
                <p class="mb-2 text-white">In the case of monthly works, we prefer bi-weekly payment after the execution date. After making 2 bi-weekly payments, the payment has to be done monthly on the pre-determined date.</p>
                <p class="mb-2 text-white">If you wish to have different payment cycle, you can (or) please feel free to hash over that.</p>
            </div>
        </div>
        
        <div class="border collapse collapse-plus">
        <input type="radio" name="my-accordion-3" /> 
            <div class="text-xl font-semibold text-orange-400 collapse-title">
                How do you accept payment?
            </div>
            <div class="collapse-content"> 
                <p class="mb-2 text-white">We mostly work with the international clients. So we accept payments through PayPal or Wire Transfer.</p>
            </div>
        </div>

        <div class="border collapse collapse-plus">
        <input type="radio" name="my-accordion-3" /> 
            <div class="text-xl font-semibold text-orange-400 collapse-title">
                How abot the quality of work?
            </div>
            <div class="collapse-content"> 
                <p class="mb-2 text-white">Premium quality in our work is our strength. We are keen in providing utmost quality in our output.</p>
                <p class="mb-2 text-white">We will give a sample of our work through which you can come to an idea about our quality.</p>
            </div>
        </div>

        <div class="border collapse collapse-plus">
        <input type="radio" name="my-accordion-3" /> 
            <div class="text-xl font-semibold text-orange-400 collapse-title">
                What about the data protection?
            </div>
            <div class="collapse-content"> 
                <p class="mb-2 text-white">All major files are transmitted only through secured FTP server. We are solely responsible for the security of the data throughout the project period.</p>
                <p class="mb-2 text-white">We are also ready to sign SLAs or any other documents that support data protection.</p>
            </div>
        </div>

        <div class="border collapse collapse-plus">
        <input type="radio" name="my-accordion-3" /> 
            <div class="text-xl font-semibold text-orange-400 collapse-title">
                What about the turnaround time?
            </div>
            <div class="collapse-content"> 
                <p class="mb-2 text-white">Turnaround time will be determined separately for hourly rate and monthly rate works.</p>
                <p class="mb-2 text-white">For hourly rate works, we will work out a sample and impart you about the quantity of work done in an hour. From this sample work data, we will calculate the total number of hours required to complete the project. This will be apparently explained in our quote by stating the overall time assigned for the work.</p>
                <p class="mb-2 text-white">In the case of monthly rate works, we will give you the performance of a day’s work i.e., 8 hours as a sample from which you can know about the turnaround time for the project.</p>
            </div>
        </div>

        <div class="border collapse collapse-plus">
        <input type="radio" name="my-accordion-3" /> 
            <div class="text-xl font-semibold text-orange-400 collapse-title">
                How can we know about the status of the project and how our queries are handled?
            </div>
            <div class="collapse-content"> 
                <p class="mb-2 text-white">The status of the project will be reported within few hours upon your query via Email.</p>
                <p class="mb-2 text-white">We respond immediately if there are any major issues or updates. Our account manager will reply as early as possible to emails in case of urgent queries.</p>
                <p class="mb-2 text-white">Please remember, you are always welcome to contact us anytime via phone if there is any significant change in your project.</p>
            </div>
        </div>

        <div class="border collapse collapse-plus">
        <input type="radio" name="my-accordion-3" /> 
            <div class="text-xl font-semibold text-orange-400 collapse-title">
                Is there any agreement before outsourcing?
            </div>
            <div class="collapse-content"> 
                <p class="mb-2 text-white">Yes. We make an agreement for monthly works. We prepare SLA before starting any outsourcing task on a monthly basis.</p>
                <p class="mb-2 text-white">In the case of hourly work, instead of an agreement, we give you our quote along with all the terms and conditions associated with the project.</p>
            </div>
        </div>

        <div class="border collapse collapse-plus">
        <input type="radio" name="my-accordion-3" /> 
            <div class="text-xl font-semibold text-orange-400 collapse-title">
                Can I hire you on a trial period basis?
            </div>
            <div class="collapse-content"> 
                <p class="mb-2 text-white">Of course, yes, you can hire us based on the working period.</p>
                <p class="mb-2 text-white">You can hire us for a day’s period for quality as well as performance measurement and review our quote price.</p>
            </div>
        </div>

        <div class="border collapse collapse-plus">
        <input type="radio" name="my-accordion-3" /> 
            <div class="text-xl font-semibold text-orange-400 collapse-title">
                What is the eligibility of your data entry operators?
            </div>
            <div class="collapse-content"> 
                <p class="mb-2 text-white">Our data entry operators are undergraduates and they are experts in touch typing.</p>
                <p class="mb-2 text-white">We conduct various typing tests like 10 key tests, speed typing test, etc. and hire highly skilled data entry operators.</p>
            </div>
        </div>

        <div class="border collapse collapse-plus">
        <input type="radio" name="my-accordion-3" /> 
            <div class="text-xl font-semibold text-orange-400 collapse-title">
                I have a specialized data entry more of a Virtual Assistant work. Could you perform that?
            </div>
            <div class="collapse-content"> 
                <p class="mb-2 text-white">Yes. We can perform web search or any other requested VA works.</p>
                <p class="mb-2 text-white">Please explain your description/requirements clearly so that we can meet your expectations.</p>
            </div>
        </div>

        <div class="border collapse collapse-plus">
        <input type="radio" name="my-accordion-3" /> 
            <div class="text-xl font-semibold text-orange-400 collapse-title">
                Why is our phone number to be given mandatory?
            </div>
            <div class="collapse-content"> 
                <p class="mb-2 text-white">We use your phone number only to contact you in case of emergencies regarding your project on not getting your reply via e-mail. 
                    Otherwise, we never disturb you and never share or forward your phone number to other companies or anybody.
                </p>
            </div>
        </div>
    </div>
</template>
  