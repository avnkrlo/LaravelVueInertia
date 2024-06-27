<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const goToApplicationPage = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdthyARNEpM-ox5BAT_S2rjmUXMYsM5MSkvRsXOGcQj1nN-og/viewform');
}

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
            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white uppercase md:text-5xl lg:text-6xl">
                Come Join Our Team!
            </h1>
            <p class="text-4xl text-white">
                Great opportunity awaits you!
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

    <div class="pt-5 pb-5">
        <hr class="my-6 border-orange-300 sm:mx-auto dark:border-orange-300 lg:my-8" />
        <h1 class="flex max-w-screen-xl mx-auto mb-5 text-4xl font-bold text-orange-300">Why CCK City Network, Inc.</h1>
        <p class="flex max-w-screen-xl mx-auto text-xl text-justify">
            There are growing opportunities here at CCK. It offers an exciting way to exercise one's skills and challenge weaknesses to be turned into assets. 
            This company demonstrates innovation and invites development not only individually but as a team and family. 
            Its top notch reputation built in the industry would make anyone part of it proud and create a culture that pursues excellence.
        </p>

        <hr class="my-6 border-orange-300 sm:mx-auto dark:border-orange-300 lg:my-8" />
            <h1 class="grid mx-auto text-3xl font-bold text-orange-300 uppercase place-content-center">Life at CCK</h1>
        <hr class="my-6 border-orange-300 sm:mx-auto dark:border-orange-300 lg:my-8" />

        <p class="flex max-w-screen-xl mx-auto mb-5 text-xl text-justify">
            Here at CCK we remind ourselves that we are greater than our problems and refuse to give up on difficult tasks despite the tenacity and use these struggles to grow better. 
            We are determined to achieve our goals and ensure success in things being done. We foster an environment where relationships matter within our teammates to build our efficiency, innovate faster, and to learn from each other. 
            We believe that being disciplined is critical to our success, not only for one’s self but also for everyone in the team. 
            We carefully choose our decisions and consult one another to strengthen the culture of pursuing excellence here at CCK
        </p>
    </div>

    <div class="mb-10 bg-blue-600 shadow-2xl">
        <div class="flex max-w-screen-sm pt-5 pb-5 mx-auto">
            <figure class="relative max-w-sm cursor-pointer filter blur-sm hover:blur-none">
                <img class="h-64 w-128" src="Images/life1.jpg" alt="image description">

                <figcaption class="absolute px-4 text-lg text-white bottom-5">
                    <p>Here at CCK we remind each other that we are greater than our problems and refuse to give up on difficult tasks despite the tenacity and use these struggles to grow better.</p>
                </figcaption>
            </figure>

            <figure class="relative max-w-sm cursor-pointer filter blur-sm hover:blur-none">
                <img class="w-128" src="Images/life2.jpg" alt="image description">

                <figcaption class="absolute px-4 text-lg text-white bottom-20">
                    <p>We foster an environment where relationships matter within our teammates to build our efficiency, innovate faster, and to learn from each other.</p>
                </figcaption>
            </figure>
        </div>

        <div class="flex max-w-screen-sm pb-5 mx-auto ">
            <figure class="relative max-w-sm cursor-pointer filter blur-sm hover:blur-none">
                <img class="w-128" src="Images/life3.jpg" alt="image description">

                <figcaption class="absolute px-4 text-lg text-white bottom-20">
                    <p>We believe that being disciplined is critical to our success, not only for one's self but also for everyone in the team.</p>
                </figcaption>
            </figure>

            <figure class="relative max-w-sm cursor-pointer filter blur-sm hover:blur-none">
                <img class="h-64 w-128" src="Images/life4.jpg" alt="image description">

                <figcaption class="absolute px-4 text-lg text-white bottom-1">
                    <p>We carefully choose our decisions and consult one another to strengthen the culture of pursuing excellence here at CCK. 
                        We are determined to achieve our goals and ensure success in things being done.</p>
                </figcaption>
            </figure>
        </div>
    </div>

    <div>
        <hr class="my-6 border-orange-300 sm:mx-auto dark:border-orange-300 lg:my-8" />
            <h1 class="grid text-3xl font-bold text-orange-300 uppercase place-content-center">Job Opportunities</h1>
        <hr class="my-6 border-orange-300 sm:mx-auto dark:border-orange-300 lg:my-8" />


        <h1 class="grid text-5xl font-bold text-white uppercase place-content-center">DREAM BIG. SOAR HIGH. BE QUALIFIED.</h1>
        <p class="grid mt-5 text-3xl text-justify place-content-center">
            We may have something what you're looking for!
        </p>

        <div class="flex max-w-screen-lg mx-auto items-justify">
            <div class="mt-10 ml-20 shadow-xl card w-96 bg-base-300">
                <div class="text-justify card-body">
                    <h2 class="text-orange-300 card-title">DATA ENCODER</h2>
                    <p class="grid text-white">Entering accurate data while following all regulations and maintaining confidentiality as agreed with the client.</p>
                </div>
            </div>

            <div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300">
                <div class="text-justify card-body">
                    <h2 class="text-orange-300 card-title">ENGLISH TEST RATER</h2>
                    <p class="grid text-white place-content-center">Evaluates student responses to subject-related and open-ended questions according to a customer supplied scoring guide. 
                        Successfully internalizes training and customer scoring guide. Scorers will work in an office environment.</p>
                </div>
            </div>
        </div>

        <div class="flex max-w-screen-lg mx-auto items-justify">
            <div class="mt-10 ml-20 shadow-xl card w-96 bg-base-300">
                <div class="text-justify card-body">
                    <h2 class="text-orange-300 card-title">SOFTWARE DEVELOPER</h2>
                    <p class="grid text-white place-content-center">Design and Develop web application using ASP.NET MVC. and WCF Web. Provide web development and support on product sites using the following environments: 
                        Ubuntu, Apache, mySQL and PHP (LAMP) and/or Windows+WAMPServer package, Subversion(SVN)/GIT, Zend Framework, jQuery, XDebug Services. Smartphone (Android and iPhone), 
                        Windows APP, Server (PHP, mySQL), Client (HTML, Java, CSS, AJAX)</p>
                </div>
            </div>

            <div class="mt-10 ml-10 shadow-xl card w-96 bg-base-300">
                <div class="text-justify card-body">
                    <h2 class="text-orange-300 card-title">CALL CENTER AGENT</h2>
                    <p class="grid text-white">Be a person who handles incoming or outgoing customer calls for a business, 
                        handles account inquiries, customer complaints or support issues.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="flex flex-col items-center justify-center h-64 mt-10 bg-blue-800 ">
        <h1 class="text-5xl font-bold text-white">Be a part of our team!</h1>
        <p class="max-w-screen-xl mx-auto mt-5 text-2xl text-justify text-white">
            We will help you achieve your goals. We will help you build a career here in CCK.
        </p>
        
        <div class="grid mt-5 place-content-end">
            <button @click="goToApplicationPage()" class="inline-flex items-center justify-center px-10 py-3 text-3xl text-center text-white bg-orange-600 border border-orange-300 rounded-lg hover:text-orange-300 sm:ms-4 hover:bg-transparent focus:ring-4 focus:ring-orange-300">
                Join Us!
            </button>  
        </div>
    </div>
    <hr class="border-orange-300 sm:mx-auto dark:border-orange-300" />
</template>