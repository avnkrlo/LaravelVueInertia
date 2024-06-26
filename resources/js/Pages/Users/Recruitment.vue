<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

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
</script>

<template>
    <!-- JUMBOTRON -->
    <section class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
        <div class="max-w-screen-xl mx-auto lg:py-56">
            <h1 class="mb-5 text-2xl leading-none tracking-tight text-white">
                We have many job offers waiting for you.
            </h1>
            <p class="text-6xl font-bold text-white uppercase">
                Start your career here at CCK!
            </p>
            <p class="mt-5 text-5xl text-white">
                Your Dream Job Might Be Waiting For You.
            </p>
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

    <hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8" />
        <h1 class="grid mx-auto text-4xl font-bold text-yellow-300 uppercase place-content-center">CCK Recruitment</h1>
    <hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8" />

    <div class="flex max-w-screen-xl mx-auto items-justify">
        <div class="ml-10 shadow-xl card w-96 bg-base-300">
            <figure>
                <img src="Images/accounting.jpg" class="max-w-screen-sm"/>
            </figure>
            <div class="items-center card-body">
                <h2 class="card-title">Accounting Department</h2>
                <h2 class="underline card-title">Accounting Supervisor</h2>
                <h3 class="font-bold">Job Duties and Responsibilities:</h3>
                <p>● Complying with all company, local and national accounting and financial regulations.</p>
                <p>● Maintaining accurate financial records while compiling, analyzing, and reporting financial data.</p>
                <p>● Creating periodic reports, such as balance sheets and profit & loss statements.</p>
                <p>● Preparing revenue projections and forecasting expenditure to manage the company's budget.</p>
                <p>● Assisting in the computation of any tax related concerns and provision of optimal tax strategies.</p>
                <p>● Maintaining and reconciling balance sheet and general ledger accounts.</p>
                <p>● Assisting in all audit preparation, investigation and resolution of audit findings, account discrepancies etc.</p>
                <p>● Performing other accounting duties and supporting junior staff as required or assigned.</p>

                <h3 class="mt-5 font-bold">Job Qualifications:</h3>
                <p>● Bachelor's degree in Accountancy.</p>
                <p>● Certified Public Accountant.</p>
                <p>● With experience as an External Auditor.</p>

                <div class="justify-end card-actions">
                    <button class="btn btn-primary">Apply Now!</button>
                </div>
            </div>
        </div>

        <div class="ml-10 shadow-xl card w-96 bg-base-300">
            <figure>
                <img src="Images/data-entry.jpg" class="max-w-screen-sm">
            </figure>
            <div class="items-center text-justify card-body">
                <h2 class="card-title">Data Entry Department</h2>
                <h2 class="underline card-title">Data Entry Operator</h2>
                <h3 class="font-bold">Job Duties and Responsibilities:</h3>
                <p>● Entering all the data in different computer databases and handling accurate transactional records with strict confidentiality.</p>        

                <h3 class="mt-5 font-bold">Job Qualifications:</h3>
                <p>● Graduate/ Undergraduate of any bachelor's degree course.</p>
                <p>● Proven data entry work experience.</p>
                <p>● Good typing speed and accuracy.</p>
                <p>● Basic computer literacy skills.</p>
                <p>● Amenable to work in shifting schedule.</p>

                <div class="justify-end card-actions">
                    <button class="btn btn-primary">Apply Now!</button>
                </div>
            </div>
        </div>

        <div class="ml-10 shadow-lg card w-96 bg-base-300">
            <figure>
                <img src="Images/nurse.jpg"/>
            </figure>
            <div class="items-center text-justify card-body">
                <h2 class="card-title">HR & Admin Department</h2>
                <h2 class="underline card-title">Part-time Nurse</h2>
                <h3 class="font-bold">Job Duties and Responsibilities:</h3>
                <p>● Implementation of policies on HIV/AIDS, drug free workplace, Hepa B, and Anti TB.</p>        

                <h3 class="mt-5 font-bold">Job Qualifications:</h3>
                <p>● Bachelor's Degree in Nursing.</p>
                <p>● PRC Registered Nurse.</p>
                <p>● Accreditation in OSH Practice is required.</p>
                <p>● No Occupational Safety & Health Committee (DOLE findings).</p>
                <p>● With Certification in Basic Occupational Safety and Health (40 hours).</p>

                <div class="justify-end card-actions">
                    <button class="btn btn-primary">Apply Now!</button>
                </div>
            </div>
        </div>
    </div>

    <!-- MLD RECRUITMENT SECTION-->
    <hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8" />
        <h1 class="grid mx-auto text-2xl font-bold text-yellow-300 place-content-center">MULTILINGUAL PROCESSING DEPARTMENT</h1>
    <hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8" />

    <div class="flex max-w-screen-xl mx-auto mb-5">
        <div class="ml-10 shadow-xl card w-96 bg-base-300">
            <figure>
                <img src="Images/proofreader.jpg" class="max-w-screen-sm"/>
            </figure>
            <div class="items-center card-body">
                <h2 class="underline card-title">Proofreader</h2>
                <h3 class="font-bold">Job Duties and Responsibilities:</h3>
                <p>● Responsible in detecting errors in written English examinations.</p>

                <h3 class="mt-5 font-bold">Job Qualifications:</h3>
                <p>● No work related experience required.</p>
                <p>● Preferably with bachelor’s degree in broadcast, journalism, mass media communications, advertising or English but not necessary.</p>
                <p>● Graduates of other courses, undergraduates and students are very welcome to apply.</p>

                <div class="justify-end card-actions">
                    <button class="btn btn-primary">Apply Now!</button>
                </div>
            </div>
        </div>

        <div class="ml-10 shadow-xl card w-96 h-90 bg-base-300">
            <figure>
                <img src="Images/test-rater.jpg" class="max-w-screen-sm">
            </figure>
            <div class="items-center card-body">
                <h2 class="underline card-title">Test Rater</h2>
                <h3 class="font-bold">Job Duties and Responsibilities:</h3>
                <p>● Evaluate recorded voice responses to English speaking skill test.</p>        

                <h3 class="mt-5 font-bold">Job Qualifications:</h3>
                <p>● No work related experience required.</p>
                <p>● Preferably with bachelor’s degree in broadcast, journalism, mass media communications, advertising or English but not necessary.</p>
                <p>● Graduates of other courses, undergraduates and students are very welcome to apply.</p>

                <div class="justify-end card-actions">
                    <button class="btn btn-primary">Apply Now!</button>
                </div>
            </div>
        </div>

        <div class="ml-10 shadow-lg card w-96 bg-base-300">
            <figure>
                <img src="Images/sales-manager.jfif"/>
            </figure>
            <div class="items-center card-body">
                <h2 class="underline card-title">Sales Manager</h2>
                <h3 class="font-bold">Job Duties and Responsibilities:</h3>
                <p>● Develop and execute strategic business plans to expand the customer base and ensure a strong presence.</p>      
                <p>● Present, promote and sell products and services to new customers.</p>  
                <p>● Conduct cost-benefit and needs analysis of potential customers and meet the needs of new customers.</p>  
                <p>● Build, establish and maintain good business and customer relationships.</p>  
                <p>● Developing customer relationships through cold-calling.</p>  
                <p>● Resolve customer issues and complaints promptly to maximise satisfaction.</p>  
                <p>● Achieve agreed sales targets and results within timelines.</p>  
                <p>● Coordinate sales activities with team members and other departments.</p>  
                <p>● Manage sales team to achieve sales targets.</p>  
                <p>● Hire, set targets, coach and manage the performance of sales representatives.</p> 
                <p>● Report sales, revenue and expenses to management and present realistic forecasts.</p> 
                <p>● Keeping abreast of new products and competitors and identifying emerging markets and market changes.</p> 
                <p>● Continuous improvement through feedback.</p>   

                <h3 class="mt-5 font-bold">Job Qualifications:</h3>
                <p>● Bachelor's degree in business or related field.</p>
                <p>● Prioritization, time management and organizational skills.</p>
                <p>● Excellent selling, negotiation, communication and influencing skills.</p>
                <p>● Ability to create and deliver presentations tailored to the needs of the audience.</p>
                <p>● Ability to drive the sales process from plan to close.</p>
                <p>● Business acumen and industry expertise.</p>
                <p>● Highly motivated and target driven with a proven track record of sales success.</p>
                <p>● Experience of consistently meeting or exceeding targets as a sales representative or sales manager.</p>
                <p>● Excellent mentoring, coaching and people management skills and an open attitude to feedback.</p>

                <div class="justify-end card-actions">
                    <button class="btn btn-primary">Apply Now!</button>
                </div>
            </div>
        </div>
    </div>

    <!-- SD RECRUITMENT SECTION -->
    <hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8" />
        <h1 class="grid mx-auto text-2xl font-bold text-yellow-300 place-content-center">SOFTWARE DEVELOPMENT DEPARTMENT</h1>
    <hr class="my-6 border-yellow-300 sm:mx-auto dark:border-yellow-300 lg:my-8" />

    <div class="flex max-w-screen-md mx-auto mb-5 items-justify">
        <div class="ml-10 shadow-xl card w-96 bg-base-300">
            <figure>
                <img src="Images/back-end.jpg" class="max-w-screen-sm"/>
            </figure>
            <div class="items-center text-justify card-body">
                <h2 class="underline card-title">Back-End Engineer</h2>
                <h3 class="font-bold">Job Duties and Responsibilities:</h3>
                <p>● Complying with all company, local and national accounting and financial regulations.</p>
                <p>● Maintaining accurate financial records while compiling, analyzing, and reporting financial data.</p>
                <p>● Creating periodic reports, such as balance sheets and profit & loss statements.</p>
                <p>● Preparing revenue projections and forecasting expenditure to manage the company's budget.</p>
                <p>● Assisting in the computation of any tax related concerns and provision of optimal tax strategies.</p>
                <p>● Maintaining and reconciling balance sheet and general ledger accounts.</p>
                <p>● Assisting in all audit preparation, investigation and resolution of audit findings, account discrepancies etc.</p>
                <p>● Performing other accounting duties and supporting junior staff as required or assigned.</p>

                <h3 class="mt-5 font-bold">Job Qualifications:</h3>
                <p>● Bachelor's degree in Accountancy.</p>
                <p>● Certified Public Accountant.</p>
                <p>● With experience as an External Auditor.</p>

                <div class="justify-end card-actions">
                    <button class="btn btn-primary">Apply Now!</button>
                </div>
            </div>
        </div>

        <div class="ml-10 shadow-xl card w-96 h-90 bg-base-300">
            <figure>
                <img src="Images/front-end.jpg" class="max-w-screen-sm">
            </figure>
            <div class="items-center text-justify card-body">
                <h2 class="underline card-title">Front-End Engineer</h2>
                <h3 class="font-bold">Job Duties and Responsibilities:</h3>
                <p>● Entering all the data in different computer databases and handling accurate transactional records with strict confidentiality.</p>        

                <h3 class="mt-5 font-bold">Job Qualifications:</h3>
                <p>● Graduate/ Undergraduate of any bachelor's degree course.</p>
                <p>● Proven data entry work experience.</p>
                <p>● Good typing speed and accuracy.</p>
                <p>● Basic computer literacy skills.</p>
                <p>● Amenable to work in shifting schedule.</p>

                <div class="justify-end card-actions">
                    <button class="btn btn-primary">Apply Now!</button>
                </div>
            </div>
        </div>
    </div>

    <div class="flex flex-col items-center justify-center h-64 bg-blue-800 ">
      <h1 class="text-5xl font-bold text-white">Dream Big. Soar High. Make your dreams come true.</h1>
      <p class="max-w-screen-xl mx-auto mt-5 text-2xl text-justify text-white">
        Here are CCK, everything is possible.
      </p>
    </div>
    <hr class="border-yellow-300 sm:mx-auto dark:border-yellow-300" />
</template>
  