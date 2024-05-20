<script setup>
import { Link, useForm } from '@inertiajs/vue3';
import { useToast} from 'vue-toastification';
import { router } from '@inertiajs/vue3';

const toast = useToast();

const form = useForm({
    department: null,
    first_name: null,
    last_name: null,
    email_address: null,
    password: null,
    password_confirmation: null,
});

function submit() {
    form.post(route('register.store'), {
        preserveScroll: true,
        onSuccess: () => {
            toast.success("Account has been registered successfully!", {timeout: 2000}),
            router.visit(route('guest.index'))
        },
    })
}
</script>

<template>
    <main class="grid min-h-screen place-content-center">
        <form @submit.prevent="submit">
            <div className="card w-96 shadow-xl">
                <div className="card-body">
                    <h1 className="font-bold uppercase">create an account</h1>
                    <div class="divider"></div> 
                    <label for="department" class="w-full max-w-xs font-thin uppercase">Choose Department
                        <select class="mt-2 ml-3 form-control select select-bordered" id="department" v-model="form.department">
                            <option>Human Resources</option>
                            <option>Admin</option>
                            <option>Data Entry</option>
                            <option>Multi-Lingual</option>
                            <option>Software Development</option>
                            <option>IT</option>
                        </select> 
                    </label>

                    <label for="first_name" class="uppercase form-label">First Name:</label>
                    <input id="first_name" type="name" placeholder="Input First Name" v-model="form.first_name" class="w-full max-w-xs ml-3 form-control input input-bordered" required/>
                    
                    <label for="last_name" class="uppercase form-label">Last Name:</label>
                    <input id="last_name" type="text" placeholder="Input Last Name" v-model="form.last_name" class="w-full max-w-xs ml-3 form-control input input-bordered" required>
                    
                    <label for="email_address" class="uppercase form-label">Email Address:</label>
                    <input id="email_address" type="text" placeholder="Input Email" v-model="form.email_address" class="w-full max-w-xs ml-3 form-control input input-bordered" required>
                    <p class="text-red-600">{{ form.errors.email_address }}</p>

                    <label for="password" class="uppercase form-label">Password:</label>
                    <input id="password" type="password" placeholder="Input Password" v-model="form.password" class="w-full max-w-xs ml-3 form-control input input-bordered" required>
                    <p class="text-red-600">{{ form.errors.password }}</p>

                    <label for="password_confirmation" class="uppercase form-label">Confirm Password:</label>
                    <input id="password_confirmation" type="password" placeholder="Confirm Password" v-model="form.password_confirmation" class="w-full max-w-xs ml-3 form-control input input-bordered">
                    <p class="text-red-600">{{ form.errors.password_confirmation }}</p>

                    <div class="justify-center mt-2 card-actions">
                        <button type="submit" class="w-full max-w-xs btn btn-active btn-primary">CREATE ACCOUNT</button>
                        <Link :href="route('auth.index')" class="w-full max-w-xs btn btn-active btn-ghost">LOGIN</Link>
                    </div>
                </div>
            </div>
        </form>
    </main>
</template>