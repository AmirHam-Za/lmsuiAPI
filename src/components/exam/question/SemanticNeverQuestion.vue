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
                        <input type="radio" class="form-radio" id="never_always_1_{{ question.uuid }}"
                            value="Never">
                        <label class="form-check-label inline-block mr-10 text-gray-800"
                            for="never_always_1_{{ question.uuid }}">Never</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input type="radio" id="never_always_2_{{ question-.uuid }}" class="form-radio"
                            value="Infrequently">
                        <label class="form-check-label inline-block mr-10 text-gray-800"
                            for="never_always_2_{{ question.uuid }}">Infrequently</label>
                    </div>

                    <div class="form-check form-check-inline">
                        <input type="radio" id="never_always_3_{{ question.uuid }}" class="form-radio"
                             value="Sometimes">
                        <label class="form-check-label inline-block mr-10 text-gray-800"
                            for="never_always_3_{{ question.uuid }}">Sometimes</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input type="radio" id="never_always_4_{{ question.uuid }}" class="form-radio"
                            value="Frequently">
                        <label class="form-check-label inline-block mr-10 text-gray-800"
                            for="never_always_4_{{ question.uuid }}">Frequently</label>
                    </div>

                    <div class="form-check form-check-inline">
                        <input type="radio" id="never_always_5_{{ question.uuid }}" class="form-radio"
                           value="Always">
                        <label class="form-check-label inline-block mr-10 text-gray-800"
                            for="never_always_5_{{ question.uuid }}">Always</label>
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