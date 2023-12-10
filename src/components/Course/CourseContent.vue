<template>
    <div class="flex flex-wrap items-center mt-10 mb-10">
        <div class="w-full md:w-12/12 mr-auto ml-auto">
            <p v-html="course?.content"></p>
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