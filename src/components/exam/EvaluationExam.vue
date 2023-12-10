<template>
    <div class="flex justify-between mb-2 border-l-4 border-blue-950 h-8 mt-8">
          <h3 class="flex-1 font-bold leading-relaxed mb-6 ml-3 sm:text-2xl text-blue-950 text-left tracking-wider">
           {{ exam?.evaluation?.title }}
          </h3>
    </div>

    <div class="mt-5">
        <template v-for="question in exam?.evaluation?.questions" :key="question?.uuid">
           <div class="flex">
                <div class="w-4/4 lg:w-3/4 bg-primary-400 mb-4">
                    <MultipleQuestion v-if="question?.type == 'multiple'" :question="question"></MultipleQuestion>
                    <SingleQuestion v-if="question?.type == 'single'" :question="question"></SingleQuestion>
                    <MultipleSelectQuestion v-if="question?.type == 'multi-select'" :question="question"></MultipleSelectQuestion>
                    <AgreeDisagreeQuestion v-if="question?.type == 'semantic'" :question="question"></AgreeDisagreeQuestion>
                    <SemanticPoorQuestion v-if="question?.type == 'semantic-fair'" :question="question"></SemanticPoorQuestion>
                    <SemanticAbilityQuestion v-if="question?.type == 'semantic-ability'" :question="question"></SemanticAbilityQuestion>
                    <SemanticNeverQuestion v-if="question?.type == 'semantic-frequent'" :question="question"></SemanticNeverQuestion>
                    <SemanticNeutralQuestion v-if="question?.type == 'semantic-neutral'" :question="question"></SemanticNeutralQuestion>
                    <ChoiceOptionQuestion v-if="question?.type == 'opinion'" :question="question"></ChoiceOptionQuestion>
                </div>
            </div>
        </template>
   </div>
   
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AgreeDisagreeQuestion from "./question/AgreeDisagreeQuestion.vue"
import MultipleQuestion from "./question/MultipleQuestion.vue"
import ChoiceOptionQuestion from "./question/ChoiceOptionQuestion.vue"
import MultipleSelectQuestion from "./question/MultipleSelectQuestion.vue"
import SemanticAbilityQuestion from "./question/SemanticAbilityQuestion.vue"
import SemanticNeutralQuestion from "./question/SemanticNeutralQuestion.vue"
import SemanticNeverQuestion from "./question/SemanticNeverQuestion.vue"
import SemanticPoorQuestion from "./question/SemanticPoorQuestion.vue"
import SingleQuestion from "./question/SingleQuestion.vue"

export default defineComponent({
    props: {
        exam: {
            type  : Object,
            required: false
        },
   },
    components: {
        MultipleQuestion, AgreeDisagreeQuestion, ChoiceOptionQuestion, MultipleSelectQuestion, SemanticAbilityQuestion,
        SemanticNeutralQuestion, SemanticNeverQuestion, SemanticPoorQuestion,
        SingleQuestion}
});
</script>