<template>
   <div class="flex justify-between mb-2 border-l-4 border-blue-950 h-8 mt-8">
          <h3 class="flex-1 font-bold leading-relaxed mb-6 ml-3 sm:text-2xl text-blue-950 text-left tracking-wider">
           {{  exam?.assessment?.title }}
          </h3>
    </div>

   <div class="mt-5 mb-8">
      <template v-for="question in exam?.assessment?.questions" :key="question?.uuid">
         <div class="flex">
            <div class="w-4/4 lg:w-3/4 bg-primary-400 mb-4">
               <MultipleQuestion v-if="question?.type == 'multiple'" :question="question"></MultipleQuestion>
            </div>
         </div>
      </template>
   </div>
   
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MultipleQuestion from "./question/MultipleQuestion.vue"

export default defineComponent({
    props: {
        exam: {
            type  : Object,
            required: false
        },
   },
   components: {MultipleQuestion}
});
</script>