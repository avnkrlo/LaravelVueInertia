<script setup>
import { reactive } from 'vue'
import { router } from '@inertiajs/vue3'

const form = reactive({
    department: null,
    first_name: null,
    last_name: null,
    email_address: null,
    password: null,
})

function submit() {
    router.post('/store', form)
}
</script>

<template>
    <form @submit.prevent="submit">
        <div className="flex card w-96 shadow-xl">
            <div className="card-body">
                <h1 className="flex font-bold uppercase">create an account</h1>
                <label class="form-control w-full max-w-xs uppercase font-thin">Choose Department
                    <select class="select select-bordered ml-3 mt-2" id="department" v-model="form.department">
                        <option>Human Resourcess</option>
                        <option>Admin</option>
                        <option>Data Entry</option>
                        <option>Multi-Lingual</option>
                        <option>Software Development</option>
                        <option>IT</option>
                    </select>
                </label>

                <label for="first_name" class="uppercase font-thin">First Name:</label>
                <input id="first_name" type="text" placeholder="Juan" v-model="form.first_name" class="input input-bordered w-full max-w-xs ml-3" required/>
                
                <label for="last_name" class="uppercase font-thin">Last Name:</label>
                <input id="last_name" type="text" placeholder="Dela Cruz" v-model="form.last_name" class="input input-bordered w-full max-w-xs ml-3" required>
                
                <label for="email_address" class="uppercase font-thin">Email Address:</label>
                <input id="email_address" type="text" placeholder="email.address@gmail.com" v-model="form.email_address" class="input input-bordered w-full max-w-xs ml-3" required>

                <label for="password" class="uppercase font-thin">Password:</label>
                <input id="password" type="password" placeholder="•••••••" v-model="form.password" class="input input-bordered w-full max-w-xs ml-3" required>

                <div class="card-actions justify-center">
                    <!-- <Link :href="route('guest.index')" class="btn btn-active btn-primary">LOGIN</Link>
                    <Link :href="route('guest.store')" class="btn btn-active btn-ghost">CREATE AN ACCOUNT</Link> -->
                </div>
            </div>
        </div>
    </form>
</template>