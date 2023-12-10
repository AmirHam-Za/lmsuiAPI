<template>
  <router-link :to="{name: 'course', params: { id: course?.uuid }}">
    <div class="max-w-sm w-full lg:max-w-full lg:flex mt-4">
      <img v-if="course?.thumb.path !=null"
          class="object-cover h-42 md:h-58 lg:h-58" :src="'https://lmsv2.mlieducation.org/'+ course?.thumb.path"
          :alt="course?.thumb.name" />        
      
      <img v-else class="object-cover h-48"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDvqSCx7xcaN-TMoOANaAI82JhDjct3UCIfsPGonu4otCtZOYpSNXn15jcpzQ8A0wcpoQ&usqp=CAU"
          alt="Image not found" />

      <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div class="mb-8">
          <div class="text-gray-900 font-normal text-medium md:text-xl lg:text-xl mb-2">{{ course?.title.substring(0,68)}}</div>
            <div class="lg:flex justify-between space-x- mt-8">
              <div class="flex justify-between border-b-2 md:border-b-0 lg:border-b-0 md:border-r-2 lg:border-r-2 border-gray-500 h-20 ml-5 md:ml-0 lg:ml-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                    class="w-12 h-12">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <div>
                    <span class="ml-4 mr-5 text-sm text-gray-400">Estimated Time</span>
                    <h3 class="ml-4 mt-2 text-md mr-4 text-gray-900">{{ course?.completion_time }}</h3>
                  </div>
              </div>
              <div class="flex justify-between border-b-2 md:border-b-0 lg:border-b-0 md:border-r-2 lg:border-r-2 border-gray-500 h-20 ml-5 mt-5 md:mt-0 lg:mt-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                <div>
                  <span class="ml-4 mr-5 text-sm text-gray-400"> Release Date</span>
                  <h3 class="ml-4 mr-5 mt-2 text-md text-gray-900">{{ $moment(course?.released_at).format("MMMM D, YYYY")  }}</h3>
                </div>
              </div>
              <div class="flex justify-between ml-5 mt-5 md:mt-0 lg:mt-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                      viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"/>
                  </svg>
                  <div>
                    <span class="ml-4 mr-5 text-sm text-gray-400"> Expiration Date</span>
                    <h3 class="ml-4 mt-2 text-md text-gray-900">{{ $moment(course?.expired_at).format("MMMM D, YYYY")  }}</h3>
                  </div>
              </div>
              
              
            </div>
          </div>
          <div class="flex justify-between space-x-">
            <div class="text-sm mt-2">
              <p class="text-gray-900 leading-none " v-html="course?.short_text"></p>
            </div>
            <div>
                <button class="rounded-lg px-2 py-2 border-2 border-primary-950 text-primary-950 hover:bg-primary-950 hover:text-white duration-300 whitespace-nowrap">Access this Course</button>
            </div>
          </div>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">
import Courses from "@/types/Courses";
import { defineComponent } from "vue";

export default defineComponent({
    props: {
      course : {
        type  : Object as ()=> Courses,
        required: false
      }
    },
});
</script>