<template>
    <Form @submit="onSubmit" >
        <div class="max-w-2xl p-6 mx-4 bg-white rounded-md shadow-xl">
            <div class="flex items-center justify-between">
                <h3 class="text-2xl">Which participant type suits you best</h3>
            </div>
            <div class="border-b-1 border-t-2 mt-3"></div>
            <div class="mt-4">
                <div>
                    <label class="block ml-2 mt-4 mb-3 text-sm">
                        <span class="text-gray-700 text-lg ">Participant Type</span>
                        <select
                            class="mt-3 px-3 py-2 placeholder-slate-300 text-slate-600 relative bg-white  rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full"
                                name="stage" v-model="state.participant_type" required>
                                <option v-for="participantType in course?.participant_types" :key="participantType.uuid" :value="participantType.uuid" >{{ participantType.label }}</option>
                        </select>
                    </label>     
                </div>
                <div>
                    <label class="block ml-2 mt-4 mb-3 text-sm">
                        <span class="text-gray-700 text-lg">Speciality</span>
                            <select 
                                class="mt-3 px-3 py-2 placeholder-slate-300 text-slate-600 relative bg-white  rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full"
                                name="stage" v-model="state.speciality_id" required>
                                    <option v-for="speciality in course?.specialities" :key="speciality.uuid" :value="speciality.uuid" >{{ speciality.label }}</option>
                                <!-- <template v-for="speciality in course?.specialities" :key="speciality.uuid">
                                    <option :value="speciality.uuid">{{ speciality.label }}</option>
                                </template> -->
                            </select>
                    </label>     
                </div>
                <div class="border-b-1 border-t-2 mt-5 mb-3"></div>
                <div class="flex">
                    <div class="mt-2">
                        <a @click="$emit('closeModel', state.isOpen)"
                            class="px-6 py-2 text-blue-800 border border-blue-600 rounded cursor-pointer h-10 w-32 uppercase"
                            >Cancel</a>
                    </div>
                    <div>
                        <button class=" bg-primary-950 text-white text-lg h-10 px-6 w-32 py-2 ml-2 rounded">
                            <Spinner v-if="state.clickLoader"></Spinner> <span v-else class="text-center uppercase"> Submit</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </Form> 
</template>

<script lang="ts">
    import Course from "@/types/Course";
    import { defineComponent, reactive, onMounted,defineEmits } from "vue";
    import { Field, Form, ErrorMessage } from 'vee-validate';
    import EnrollService from "@/services/EnrollService";
    import Spinner from '@/components/Loader/TheSpinner.vue';
    import router from "@/router";

    

    export default defineComponent({
        props: {
            course: {
                type  : Object as ()=> Course,
                required: false
            }
        },
        components: {Field,Form,ErrorMessage,Spinner},
        emits: ['myEvent'],
        setup(props) { 

            interface State { 
                clickLoader: boolean,
                isOpen: boolean,
                participant_type: string | null,
                speciality_id : string | null,
            }

            const state: State = reactive({
                clickLoader: false as boolean,
                isOpen: false,
                participant_type :  null,
                speciality_id :  null
            });

            const onSubmit = async () => { 
                state.clickLoader = true;
                let data:object = {
                    participant_type : state.participant_type,
                    speciality_id: state.speciality_id,
                    course_uuid : props.course?.uuid
                }
                let res = await EnrollService.userEnroll(data);
                if (res) {
                    router.push({ name: 'itinerary', params: { id: props.course?.uuid } })
                } else { 
                    router.push({ name: 'course', params: { id: props.course?.uuid } })
                }
            }

            onMounted(() => {
                state.participant_type = props.course?.participant_types[0].uuid!;
                state.speciality_id  = props.course?.specialities[0].uuid!;
            });

          

            return {state,onSubmit}
        }



    });


    function emit(arg0: string, isOpen: boolean) {
        throw new Error("Function not implemented.");
    }

</script>