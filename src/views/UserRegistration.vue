<template>
    <div class="flex items-center p-6 h-screen mb-32  md:mb-10 lg:mb-10">
        <div class="flex-1 max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl ">
            <div class="">
                <div class="flex items-center justify-center p-6 sm:p-12 md:w-full">
                    <div class="w-full">
                        <div class="flex justify-between mb-2 border-l-4 border-primary-850 h-8">
                            <h4 class="flex font-bold leading-relaxed ml-3 text-xl lg:text-2xl text-primary-850 text-left tracking-wider">
                                Registration
                            </h4>
                        </div>
                        <Form @submit="onSubmit" class="mt-5">
                            <div class="lg:flex">
                                <div class="lg:w-2/4">
                                    <div class="block text-sm">
                                        <label class="text-gray-700 text-lg">First Name</label>
                                        <Field
                                            class="mt-1 px-3 py-2 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full"
                                            placeholder="First name" name="first_name" v-model="state.first_name"
                                            :rules="isRequired" required/>
                                        <span class="text-red-600"><ErrorMessage name="first_name" /></span> 
                                    </div>
                                </div>
                                <div class="lg:w-2/4">
                                    <div class="block text-sm lg:ml-4 mt-5 lg:mt-0 md:mt-0">
                                        <label class="text-gray-700 text-lg">Last Name</label>
                                        <Field
                                            class="mt-1 px-3 py-2 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full"
                                            placeholder="Last name" name="last_name" v-model="state.last_name"
                                            :rules="isRequired" required/>
                                            <span class="text-red-600"><ErrorMessage name="last_name" /></span>
                                    </div>
                                </div>
                            </div>
                            <div class="block  mt-5">
                                <label class="text-gray-700 text-lg">Email</label>
                                <Field
                                    class="mt-1 px-3 py-2 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full"
                                     placeholder="Ex. jhone@due.com" name="email" v-model="state.email"
                                    :rules="isRequired" required/>
                                    <span class="text-red-600"><ErrorMessage name="email" /></span>  
                            </div>

                            <div class="lg:flex mt-5">
                                <div class="lg:w-2/4">
                                    <div class="block text-sm">
                                        <label class="text-gray-700 text-lg">Street Address</label>
                                        <Field
                                            class="mt-1 px-3 py-2 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full"
                                            placeholder="Street Address" name="address" v-model="state.address"
                                            />
                                    </div>
                                </div>
                                <div class="lg:w-2/4">
                                    <div class="block text-sm ml-0 md:ml-4 lg:ml-4 mt-5 md:mt-0 lg:mt-0">
                                        <label class="text-gray-700 text-lg">City</label>
                                        <Field
                                            class="mt-1 px-3 py-2 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full"
                                            placeholder="City" name="city" v-model="state.city"
                                            />
                                    </div>
                                </div>
                            </div>


                            <div class="lg:flex mt-5">
                                <div class="lg:w-2/4">
                                    <div class="block text-sm">
                                        <label class="text-gray-700 text-lg">State</label>
                                        <Field
                                            class="mt-1 px-3 py-2 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full"
                                            placeholder="State" name="state" v-model="state.state"
                                            /> 
                                    </div>
                                </div>
                                <div class="lg:w-2/4">
                                    <div class="block text-sm ml-0 md:ml-4 lg:ml-4 mt-5 md:mt-0 lg:mt-0">
                                        <label class="text-gray-700 text-lg">Zip</label>
                                        <Field class="mt-1 px-3 py-2 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full"
                                            placeholder="Zip" name="zip" v-model="state.zip"/>      
                                    </div>
                                </div>
                            </div>
                            <div class="lg:flex mt-5">
                                 <div class="lg:w-2/4">
                                    <div class="block text-sm">
                                         <label class="text-gray-700 text-lg">Password</label>
                                <Field
                                    class="mt-1 px-3 py-2 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full"
                                    placeholder="******" type="password" name="password" v-model="state.password" :rules="isRequired" required/>
                                    <span class="text-red-600"><ErrorMessage name="password" /></span>
                                    </div>
                                 </div>
                                  <div class="lg:w-2/4">
                                    <div class="block text-sm ml-0  md:ml-4 lg:ml-4 mt-5 md:mt-0 lg:mt-0">
                                        <label class="text-gray-700 text-lg">Confirm Password</label>
                                 <Field
                                    class="mt-1 px-3 py-2 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full"
                                    placeholder="******" type="password" name="conf_password" :rules="isRequired" v-model="state.conf_password" required/>
                                    <span class="text-red-600" v-if="isInvalid">Password Not Match</span>
                                    </div>
                                 </div>
                            </div>

                            <div class="flex justify-between space-x-">
                                <button class="mt-8 bg-primary-950 text-white text-lg h-10 w-32 rounded">
                                 <Spinner v-if="state.clickLoader"></Spinner> <span v-else class="text-center uppercase"> Sign Up</span></button>
                                <div class="ml-10 md:ml-0 lg:ml-0 mt-6">
                                    <div class="mt-5 text-sm">Have an account? <router-link class="hover:text-blue-600" to="/login"> Login</router-link></div> 
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed } from "vue";
import { Field, Form, ErrorMessage } from 'vee-validate';
import UserService from "@/services/UserService";
import Spinner from '@/components/Loader/TheSpinner.vue';
import router from "@/router";

export default defineComponent({
    name: "registration-page",
    components: {Field, Form, ErrorMessage, Spinner},
    setup() { 
        const state = reactive({
            response: ref(),
            clickLoader: false as boolean,
            first_name: '' as string,
            last_name:  '' as string,
            address:    '' as string,
            city:       '' as string,
            state:      '' as string,
            zip:        '' as string,
            email:      '' as string,     
            password: '' as string,  
            conf_password: '' as string      
        });

        function isRequired(value:string) { 
            if (value) {
                return true;
            }
            return 'This is required';
        }  

        const isInvalid = computed(() => {
        return state.password !== state.conf_password;
        });

        const onSubmit = async () => { 
            state.clickLoader = true;
            let data:object = {
                first_name : state.first_name,
                last_name : state.last_name,
                address : state.address,
                city : state.city,
                state : state.state,
                zip : state.zip,
                email : state.email,
                password : state.password,
            }
            state.response = await UserService.userRegistration(data);
            if (state.response) {
                state.clickLoader = false;
                router.push('/login');
            } else { 
                state.clickLoader = false;
                router.push('/registration'); 
            }
        }

        return {state, isRequired, onSubmit, isInvalid}
    }
    
});
</script>