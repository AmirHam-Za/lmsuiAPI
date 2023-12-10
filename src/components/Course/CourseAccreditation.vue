<template>
    <div class="flex justify-between border-l-4 border-primary-850 h-8 mt-10 mb-10">
        <h3 class="flex-1 font-medium leading-relaxed mb-6 sm:text-2xl text-primary-850 text-left tracking-wider ml-5">
            Accreditation and Disclosure Information
        </h3>
    </div>
    <div class="flex flex-wrap items-center mt-8 mb-10">
        <div class="w-full md:w-12/12 px-4 mr-auto ml-auto">
            <p v-html="course?.accreditation"></p>
        </div>
    </div>
</template>

<script lang="ts">
import Course from "@/types/Course";
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        course: {
            type  : Object as ()=> Course,
            required: false
        }
    },
});
</script>