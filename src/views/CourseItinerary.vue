<template>
    <div class="relative antialiased lg:flex">
        <nav class="absolute transform transition duration-300 inset-0 lg:relative z-10 w-82 lg:w-80 bg-primary-600 text-black h-screen p-4"
        :class="state.isOpen == true ? 'translate-x-0 opacity-100':'-translate-x-full opacity-0' ">
            <div class="flex justify-between">
                <span class="font-bold text-2xl sm:text-3xl"></span>
                <button class="p-2 rounded hover:bg-blue-800" @click="toggol">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>
            </div>
            <p class="bg-primary-500 rounded-full p-2 m-2"><span class="text-black ml-3 text-sm">Items completed: 0 of 4 items</span></p>
            <p class="bg-primary-500 rounded-full p-2 m-2 mt-5"><span class="text-black ml-3 text-sm">Course results: 0%  <button class="bg-primary-950 text-white h-6 px-4 w-30 py-1 ml-2 rounded-full text-xs">IN PROGRESS </button></span></p>
            <div class="flex justify-between mt-5 mb-5 border-l-4 border-primary-850 h-8 ml-2">
                <h6 class="flex-1 font-medium leading-relaxed ml-3 text-lg text-primary-850  text-left tracking-wider">
                    Course Itinerary
                </h6>
            </div>
            <ul class="mt-4 flex flex-col space-y-2 bg-primary-500 rounded-lg" v-for="chater in state.itinerary?.chapters" :key="chater.uuid">
                <div  class="flex items-center space-x-2 py-2 px-4 transition duration-200 ">
                    <span class="font-medium">{{ chater.title }}</span>
                </div>
                <template v-for="item in chater.chapter_items" :key="item.uuid">
                    <li class="hover:bg-primary-400 hover:text-black rounded p-2 text-lg cursor-pointer transition duration-200">
                        <button @click="loadExam(state.itinerary?.uuid,item.uuid,item.chapter_item_type,item.item_id)" class="flex space-x-2 py-2 px-4 w-full transition duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                            </svg> <span class="text-left text-sm font-light text-black ml-2">{{ item.title  }}</span>
                        </button>
                    </li>
                </template>
            </ul>
        </nav>

    <!-- Header -->
        <div class="relative lg:flex-grow m-4 ">
            <div class="flex">
                <button class="px-2 text-gray-800 transition duration-200 hover:text-black focus:outline-none mt-5"
                @click="toggol">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                        fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                        />
                    </svg>
                </button>
                <div class="bg-primary-550 text-white rounded-lg w-3/4 flex items-center space-x-2 px-4 mt-5 p-3">
                    <span class="font-normal">{{  state.itinerary?.title  }}</span>
                </div>
            </div>
            <div id="loader" v-if="state?.loader">
                <Loader />
            </div>
            <ItineraryExam :exam="state.exam" :item_type="state.item_type"></ItineraryExam>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, reactive, onMounted } from "vue";
    import CourseService from "../services/CourseService";
    import { useRoute } from 'vue-router'
    import Loader from '../components/Loader/TheLoader.vue'

    import ItineraryExam from "@/components/exam/ItineraryExam.vue";
   
    export default defineComponent({
        name:"course-itinerary",
        components: {Loader,ItineraryExam},

        setup() { 

            interface State { 
                itinerary: null,
                exam: null,
                item_type:string | null,
                loader: boolean,
                isOpen: boolean
            }

            const state:State = reactive({
                itinerary: null,
                exam: null,
                item_type:  null,
                loader: true,
                isOpen: true 
            });

            const loadCourseItinerary = async () => { 

                const route = useRoute()

                let data: object = {
                    course_uuid: route.params.id 
                }

                state.itinerary = await CourseService.getCourseItenerary(data)
                console.log('itinerary',state.itinerary);
                state.loader = false
            }

            const loadExam = async (course:string,chapter_item:string,item_type:string,item_uuid:string) => { 
                state.loader = true;
                let data: object = {
                    course_uuid : course,
                    chapter_item_id : chapter_item,
                    type : item_type,
                    item_id : item_uuid
                }
                state.item_type = item_type;
                state.exam = await CourseService.getIteneraryExam(data);
                data = {};

                console.log('exam',state.exam);
                state.loader = false
            }

            const toggol = () => {
                state.isOpen = !state.isOpen
                console.log("click",!state.isOpen);
            }

            onMounted(() => {
                loadCourseItinerary()
            });
            
            return {state, loadExam,toggol}
        } 
    })
</script>