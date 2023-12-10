<template>
    <div class="flex justify-between border-l-4 border-primary-850 h-8 mt-10 mb-10">
        <h3 class="flex-1 font-medium leading-relaxed mb-6 sm:text-2xl text-primary-850 text-left tracking-wider ml-5"
        >Speakers</h3>
    </div>
    <div class="p-1 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <div v-for="speaker in course?.speakers" :key="speaker.uuid"  >
            <div class="rounded overflow-hidden shadow-lg">
                <div class="flex items-center justify-center">
                    <img class="w-1/2 " :src="'https://lmsv2.mlieducation.org/'+ speaker.avatar" alt="Mountain">
                </div>
                <div class="px-6 py-4">
                        <div class="font-medium text-xl mb-2">{{ speaker.name }}, {{ speaker.initials }}</div>
                        <div v-html="speaker.designation"></div>
                        <p class="mt-4" v-html="speaker.description"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Course from "@/types/Course";

export default defineComponent({
    props: {
        course: {
            type  : Object as ()=> Course,
            required: false
        }
    },
});
</script>