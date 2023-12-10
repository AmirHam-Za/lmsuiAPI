<template>
    <div class="flex justify-between mb-2 border-l-4 border-blue-950 h-8 mt-8">
          <h3 class="flex-1 font-bold leading-relaxed mb-6 ml-3 sm:text-2xl text-blue-950 text-left tracking-wider">
            {{ exam?.title }}
          </h3>
    </div>
   <!-- <div class="mt-10">
     <p class=" w-full h-full" v-html="exam?.lesson?.content"></p>
   </div> -->

   <div class="mt-10" v-html="exam?.lesson?.content"></div>

   
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        exam: {
            type  : Object,
            required: false
        },
    },
});
</script>