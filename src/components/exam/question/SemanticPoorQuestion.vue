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
                <div class="flex justify-start">
                    <div class="form-check form-check-inline">
                        <input type="radio" class="form-radio" id="poor_1_{{ question.uuid }}"
                         value="Poor">
                        <label class="form-check-label inline-block mr-10 text-gray-800"
                            for="poor_1_{{ question.uuid }}">Poor</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input type="radio" class="form-radio" id="poor_2_{{ question.uuid }}"
                           value="Fair">
                        <label class="form-check-label inline-block mr-10 text-gray-800"
                            for="poor_2_{{ question.uuid }}">Fair</label>
                    </div>

                    <div class="form-check form-check-inline">
                        <input type="radio" class="form-radio" id="poor_3_{{ question.uuid }}"
                            value="Good">
                        <label class="form-check-label inline-block mr-10 text-gray-800"
                            for="poor_3_{{ question.uuid }}">Good</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input type="radio" id="poor_4_{{ $question->uuid }}" class="form-radio"
                            value="Excellent">
                        <label class="form-check-label inline-block mr-10 text-gray-800"
                            for="poor_4_{{ question.uuid }}">Excellent</label>
                    </div>
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