<template>
    <div class="flex-grow">
        <section class="text-gray-600">
            <div class="px-0 py-0 ">
                <div id="loader" v-if="state?.loader">
                    <Loader />
                </div>
                <div v-else>
                    <div>
                        <div class="relative flex content-center items-center justify-center"
                        style="min-height:60vh">
                        
                            <div class="absolute top-0 w-full h-full bg-center bg-cover"
                                    :style="{ 'background-image': 'url(https://lmsv2.mlieducation.org/' + state.course?.banner.path + ')' }">
                            </div>
                            <div class="container relative mx-auto">
                                <div class="items-center flex flex-wrap">
                                    <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                                        <div class="pr-12">
                                            <h1 class="text-white font-semibold text-2xl capitalize">
                                                {{ state?.course?.title }}
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section class="bg-white -mt-10">
                        <div class="container mx-auto px-4">
                            <EnrollCourse :course="state.course"/>

                            <CourseContent :course="state.course"/>

                            <CourseSpeaker :course="state.course"/>

                            <CourseAccreditation :course="state.course"/>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    </div>   
</template>

<script lang="ts">
    import { defineComponent, reactive, onMounted } from "vue";
    import CourseService from "../services/CourseService";
    import { useRoute } from 'vue-router'
    import Course from "../types/Course";
    import Loader from '../components/Loader/TheLoader.vue'
    import EnrollCourse from '../components/Course/EnrollCourse.vue'
    import CourseContent from '../components/Course/CourseContent.vue'
    import CourseSpeaker from '../components/Course/CourseSpeaker.vue'
    import CourseAccreditation from '../components/Course/CourseAccreditation.vue'

    export default defineComponent({
        name:"course-view",
        components: {
            Loader, EnrollCourse, CourseContent,
            CourseSpeaker, CourseAccreditation
        },

        setup() { 
            interface State { 
                course: Course | null,
                loader: boolean,
            }

            const state:State = reactive({
                course: null,
                loader: true,
            });

            const loadCourse = async () => { 
                const route = useRoute()
                let data:object = {
                    course_uuid: route.params.id 
                }

                state.course = await CourseService.getCourse(data)
                state.loader = false
            }

            onMounted(() => {
                loadCourse()
            });
            
            return {state}
        } 
    })
</script>