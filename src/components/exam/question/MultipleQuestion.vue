<template>

   <div class="flex">
        <div class="px-4 py-3 rounded-lg ml-2 w-full">
            <div class="flex">
                <div class=" mt-1">
                    <p class="text-gray-700 text-base">{{ question?.question }}
                        <span v-if="question?.is_required == 1" class="font-bold text-base text-red-600">*</span>
                    </p>
                </div>
            </div>
            <div class="px-6 pt-2 pb-2">
                <div>
                    <template v-for="answer in question?.answers" :key="answer.uuid">
                        <div class="flex items-center mr-4 mt-2">
                            <input type="radio" id="inlineVheckbox{{ answer.uuid }}" class="form-radio">
                                <label for="inlineVheckbox{{ answer.uuid }}"
                                    class="ml-2 text-sm font-medium text-gray-900 ">
                                    {{ answer.answer }}</label> 
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        question: {
            type  : Object,
            required: false
        },
    },
});
</script>