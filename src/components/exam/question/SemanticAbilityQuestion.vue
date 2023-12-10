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
                    <p>Limited Ability ---- Strong Ability</p>
                </div>
            </div>

            <div class="px-6 pt-4 pb-2">
                <div class="flex justify-start">
                    <div class="form-check form-check-inline">
                        <input type="radio" class="form-radio" id="ability_1_{{ question.uuid }}"
                           value="1">
                        <label class="form-check-label inline-block mr-10 text-gray-800"
                            for="ability_1_{{ question.uuid }}">1</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input type="radio" class="form-radio" id="ability_2_{{ question.uuid }}"
                            value="2">
                        <label class="form-check-label inline-block mr-10 text-gray-800"
                            for="ability_2_{{ question.uuid }}">2</label>
                    </div>

                    <div class="form-check form-check-inline">
                        <input type="radio" class="form-radio" id="ability_3_{{ question.uuid }}"
                            value="3">
                        <label class="form-check-label inline-block mr-10 text-gray-800"
                            for="ability_3_{{ question.uuid }}">3</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input type="radio" id="ability_4_{{ question.uuid }}" class="form-radio"
                            value="4">
                        <label class="form-check-label inline-block mr-10 text-gray-800"
                            for="ability_4_{{ question.uuid }}">4</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input type="radio" id="ability_5_{{ question.uuid }}" class="form-radio"
                            value="5">
                        <label class="form-check-label inline-block mr-10 text-gray-800"
                            for="ability_5_{{ question.uuid }}">5</label>
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