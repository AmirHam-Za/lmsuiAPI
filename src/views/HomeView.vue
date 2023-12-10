<template>
  <div class="container flex-grow mx-auto">
    <TheSearch />
    <section class="text-gray-600">
      <div class="container px-5 mt-10 mb-10 mx-auto">
        <div class="flex justify-between mb-2 border-l-4 border-primary-850 h-8">
          <h2 class="flex-1 font-medium leading-relaxed ml-3 text-xl md:text-2xl lg:text-2xl text-primary-850 text-left tracking-wider">
            Available Courses
          </h2>
        </div>

        <div id="loader" v-if="state?.loader">
          <Loader />
        </div>

        <div v-else>
            <!-- Single Conf-->
          <div v-if="state?.courses">
            <div class="flex flex-wrap mt-8">
              <div v-for="course in state.courses" :key="course?.uuid">
                  <TheCourse :course="course"></TheCourse>
              </div>
            </div>
          </div>

          <div v-else>
            <div class="flex flex-wrap mt-6">
              <h4 class="text-center">No Course Available</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
    import { defineComponent, reactive, ref, onMounted } from "vue";
    import CourseService from "@/services/CourseService";
    import Courses from "@/types/Courses";
    import TheCourse from "@/components/Course/TheCourse.vue";
    import TheSearch from "@/components/Course/TheSearch.vue";
    import Loader from '@/components/Loader/TheLoader.vue';
    export default defineComponent({
      name: "home-page",
      components: {Loader,TheCourse,TheSearch},
      setup() { 
        interface State { 
            courses: Courses | null,
            loader: boolean,
        }

        const state:State = reactive({
            courses: null,
            loader: true,
        });

        const getAllCourses = async () => {
          state.courses = await CourseService.getAllCourses();
          state.loader  = false
        }

        onMounted(() => {
          getAllCourses()
        });

        return { state, getAllCourses}
      }
  });
</script>
