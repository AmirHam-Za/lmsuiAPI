<template>
    <div class="mb-8 flex items-center p-6 h-screen">
        <div class="flex-1 max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl ">
            <div class="">
                <div class="flex items-center justify-center p-6 sm:p-12 md:w-full">
                    <div class="w-full">
                        
                        <div class="flex justify-between mb-2 border-l-4 border-primary-850 h-8">
                            <h4 class="flex font-bold leading-relaxed ml-3 text-xl lg:text-2xl text-primary-850 text-left tracking-wider">
                                Login
                            </h4>
                        </div>

                        <Form @submit="onSubmit" class="mt-5">
                            <div class="block">
                                <label class="text-gray-700 text-lg">Email</label>
                                <Field
                                    class="mt-1 px-3 py-2 placeholder-slate-300 text-slate-600 relativ bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full"
                                     placeholder="Ex. jhone@due.com" name="email" v-model="state.email"
                                    :rules="isRequired" />
                                    <span class="text-red-600"><ErrorMessage name="email" /></span>
                            </div>

                            <div class="block mt-5">
                                <label class="text-gray-700 text-lg">Password</label>
                                <Field
                                    class="mt-1 px-3 py-2 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full"
                                    placeholder="******" type="password" name="password" v-model="state.password" :rules="isRequired" />
                                    <span class="text-red-600"><ErrorMessage name="password" /></span>
                            </div>
                            <div class="mt-3">
                              <span v-if="state.isNotMatch" class="text-red-600 m-3 mt-3">The credentials do not match our records.</span>
                            </div>
                            <div class="flex justify-between space-x-">
                                
                                <button class="mt-5 bg-primary-950 text-white text-lg h-10 w-32 rounded">
                                 <Spinner v-if="state.clickLoader"></Spinner> <span v-else class="text-center uppercase"> Login</span></button>

                                <div class="ml-10 md:ml-0 lg:ml-0">
                                    <div class="mt-5 text-sm">Don't have an account? <router-link class="hover:text-blue-600" to="/registration">Sign up</router-link></div> 
                                    <div class="mt-5 text-sm"> <router-link class="hover:text-blue-600" to="#">Forgot Password?</router-link></div> 
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
import { defineComponent, reactive, nextTick, ref } from "vue";
import { Field, Form, ErrorMessage } from 'vee-validate';
import UserService from "@/services/UserService";
import Spinner from '@/components/Loader/TheSpinner.vue';
import User from "@/types/User";

export default defineComponent({
  name: "login-page",
  components: {
    Field, Form, ErrorMessage, Spinner
  },

  setup() { 
    const state = reactive({
        clickLoader: false as boolean,
        authRerender: true as boolean,
        email:      '' as string,     
        password: '' as string,  
        isNotMatch:false as boolean,  
    });

    function isRequired(value:string) { 
        if (value) {
            return true;
        }
        return 'This is required';
    }  
    
    const onSubmit = async () => {
        state.clickLoader = true; 
        let data:object = {
            email : state.email,
            password : state.password,
        }

        const res = await UserService.userLogin(data);

        const user = JSON.parse(window.localStorage.getItem('user') || '{}') as User;

        const token = user.token

        if (!token) {
            state.isNotMatch = true
            state.clickLoader = false;
        } else { 
            window.location.href = '/';
        }
         

        // if (res.status !== 'undefined' && res.status !== null) { 
        //     state.isNotMatch = true
        //     state.clickLoader = false;
        // } else {
        //    state.clickLoader = false;
        //    window.location.href = '/';  
        // }
        // window.location.href = '/';//this line is incorrect.to be fixed later.
    } 
    
    return {state, isRequired, onSubmit}
  }
  
});

function emit(arg0: string, authRedender: any) {
  throw new Error("Function not implemented.");
}
</script>