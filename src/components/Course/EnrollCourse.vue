<template>
    <div class="flex flex-wrap">
        <div class="w-full md:w-2/12 px-4 text-center"></div>
        <div class="w-full md:w-8/12 px-4 text-center rounded-full">
            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
               <div class="text-center mb-8">
                    <div v-if="state.token">
                        <button type="button" @click="state.isOpen = true"  class="bg-primary-950 focus:outline-none focus:ring-4  focus:ring-primary-550 -mt-8  hover:bg-primary-850 px-5 py-3 rounded-full text-base text-center text-white uppercase text-md w-12/12">
                            Access this course
                        </button>
                    </div>
                    <div v-else>
                        <router-link :to="{name: 'itinerary', params: { id: course?.uuid }}"  class="bg-primary-950 focus:outline-none focus:ring-4 -mt-8 focus:ring-primary-550  hover:bg-primary-850 px-5 py-3 rounded-full text-base text-center text-white uppercase text-md w-4/12">
                           Enroll in this course
                        </router-link>
                    </div>
               </div>
                <div class="px-4 py-5 flex-auto">
                    <div class="lg:flex">
                       <div class="flex justify-between border-b-2 md:border-b-0 lg:border-b-0 md:border-r-2 lg:border-r-2 border-gray-500 h-20 pl-8 pr-8">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12" >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <div>
                                <span class="ml-4 lg:ml-6 mr-5 text-sm">Estimated Time</span>
                                <h3 class="-ml-12  mt-2 text-md text-gray-900">{{ course?.completion_time }}</h3>
                            </div>
                        </div>
                        <div class="flex justify-between border-b-2 md:border-b-0 lg:border-b-0 md:border-r-2 lg:border-r-2 border-gray-500 h-20 pl-8  md:pl-10 lg:pl-10 pr-10 mt-5 md:mt-0 lg:mt-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                            </svg>
                            <div>
                                <span class="mr-5 lg:ml-6 text-sm"> Release Date</span>
                                <h3 class="ml-2 lg:ml-6 mt-2 text-md text-gray-900">{{ $moment(course?.released_at).format("MMMM D, YYYY")  }}</h3>
                            </div>
                        </div>
                       <div class="flex justify-between h-20 pl-8  md:pl-10 lg:pl-10 pr-5 lg:pr-10 mt-5 md:mt-0 lg:mt-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"/>
                            </svg>
                            <div>
                                <span class="lg:ml-2 text-sm"> Expiration Date</span>
                                <h3 class="mt-2 ml-8 text-gray-900">{{ $moment(course?.expired_at).format("MMMM D, YYYY")  }}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-show="state.isOpen"
      class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"
      >
       <EnrollModel :course="course" @closeModel="closeModel"/>   
       
    </div>
</template>

<script lang="ts">
import Course from "@/types/Course";
import UserService from "@/services/UserService";
import { defineComponent, reactive, onMounted } from "vue";
import { Field, Form, ErrorMessage } from 'vee-validate';
import EnrollModel from "@/components/Course/EnrollModel.vue"


export default defineComponent({
    props: {
        course: {
            type  : Object as ()=> Course,
            required: false
        }
    },
    components: {
        Field,Form,ErrorMessage,EnrollModel
    },
    setup() { 

        interface State { 
            token: string | null,
            isOpen: boolean,
        }

        const state:State = reactive({
            token: null,
            isOpen: false,
        });

        const checkedLogedIn = () => { 
            state.token = UserService.isLogedInCheck();
        }

        const closeModel = (data: boolean) => {
            state.isOpen = false;
        };

        onMounted(() => {
            checkedLogedIn();
        });

        return {state,closeModel}
    }
});
</script>