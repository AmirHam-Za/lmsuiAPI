<template>
    <div class="ml-1">
        <AssessmentExam v-if="item_type == 'assessment'" :exam="exam"></AssessmentExam>
        <EvaluationExam v-if="item_type == 'evaluation'" :exam="exam"></EvaluationExam>
        <LessonExam v-if="item_type == 'lesson'" :exam="exam"></LessonExam>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AssessmentExam from "./AssessmentExam.vue";
import EvaluationExam from "./EvaluationExam.vue";
import LessonExam from "./LessonExam.vue";

export default defineComponent({
    props: {
        exam: {
            type  : Object,
            required: false
        },
        item_type: {
            type  : String,
            required: false   
        }
    },
    components: {AssessmentExam, EvaluationExam, LessonExam},
});
</script>