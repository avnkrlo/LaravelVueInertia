<script setup>
import { Link, router, useForm } from '@inertiajs/vue3';
import { useToast } from 'vue-toastification';

const toast = useToast();

const form = useForm({
    email_address: null,
    password: null,
});

function submit() {
    form.post(route('login'))
}
</script>

<template>
    <main class="grid min-h-screen place-content-center">
        <form @submit.prevent="submit">
            <div class="shadow-xl card w-96">
                <figure class="px-10 pt-10">
                    <img src="Images/logo.jpg" alt="Shoes" class="rounded-xl" />
                </figure>

                <div class="card-body">
                    <label for="email_address" class="flex items-center gap-2 input input-bordered">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input id="email_address" type="text" class="grow" placeholder="Enter Email" v-model="form.email_address" required/>
                    </label>
                    <p class="text-red-600">{{ form.errors.email_address }}</p>

                    <label for="password" class="flex items-center gap-2 input input-bordered">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" fill="currentColor" class="w-4 h-4 opacity-70">
                            <path fill-rule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clip-rule="evenodd" /></svg>
                        <input id="password" type="password" class="grow" placeholder="Enter Password" v-model="form.password" required/>
                    </label>
                    <p class="text-red-600">{{ form.errors.password }}</p>
                    
                    <div class="form-control">
                        <label class="cursor-pointer label">
                            <span class="label-text">Remember me</span> 
                            <input type="checkbox" class="checkbox" />
                        </label>
                    </div>

                    <div class="card-actions">
                        <button type="submit" class="w-full max-w-xs btn btn-active btn-primary">LOGIN</button>
                        <Link :href="route('register.create')" class="w-full max-w-xs btn btn-active btn-ghost">CREATE AN ACCOUNT</Link>
                    </div>
                </div>
            </div>
        </form>
    </main>
</template>