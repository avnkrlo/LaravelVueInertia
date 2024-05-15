<script setup>
import { reactive } from 'vue'
import { useToast} from 'vue-toastification';
import { router } from '@inertiajs/vue3';

const toast = useToast();

const form = reactive({
    department: null,
    first_name: null,
    last_name: null,
    email_address: null,
    password: null,
    confirm_password: null,
});

async function submit() {
    try {
        router.post('/store', form);
        toast.success("Account has been registered successfully!", {
            timeout: 2000,
        })
    }
    catch (error) {
        toast.error("An error ocurred!");
    }
    
}
</script>

<template>
    <form @submit.prevent="submit">
        <div className="flex card w-96 shadow-xl">
            <div className="card-body">
                <h1 className="flex font-bold uppercase">create an account</h1>
                <div class="divider"></div> 
                <label class="w-full max-w-xs uppercase font-thin">Choose Department
                    <select class="form-control select select-bordered ml-3 mt-2" id="department" v-model="form.department">
                        <option>Human Resources</option>
                        <option>Admin</option>
                        <option>Data Entry</option>
                        <option>Multi-Lingual</option>
                        <option>Software Development</option>
                        <option>IT</option>
                    </select>
                </label>

                <label for="first_name" class="form-label uppercase">First Name:</label>
                <input id="first_name" type="name" placeholder="Juan" v-model="form.first_name" class="form-control input input-bordered w-full max-w-xs ml-3" required/>
                
                <label for="last_name" class="form-label uppercase">Last Name:</label>
                <input id="last_name" type="text" placeholder="Dela Cruz" v-model="form.last_name" class="form-control input input-bordered w-full max-w-xs ml-3" required>
                
                <label for="email_address" class="form-label uppercase">Email Address:</label>
                <input id="email_address" type="text" placeholder="email.address@gmail.com" v-model="form.email_address" class="form-control input input-bordered w-full max-w-xs ml-3" required>

                <label for="password" class="form-label uppercase">Password:</label>
                <input id="password" type="password" placeholder="••••••••" v-model="form.password" class="form-control input input-bordered w-full max-w-xs ml-3" required>

                <label for="confirm_password" class="form-label uppercase">Confirm Password:</label>
                <input id="confirm_password" type="password" placeholder="••••••••" v-model="form.password_confirmation" class="form-control input input-bordered w-full max-w-xs ml-3" required>

                <div class="card-actions justify-center mt-2">
                    <!-- <Link :href="route('guest.index')" class="btn btn-active btn-primary w-full max-w-xs">login</Link> -->
                    <button type="submit" class="btn btn-active btn-ghost w-full max-w-xs">create account</button>
                </div>
            </div>
        </div>
    </form>
</template>