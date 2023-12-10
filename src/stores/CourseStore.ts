import { defineStore } from 'pinia'
import CourseDataApi from "../api/CourseApi";
import { ref } from "vue";
import Course from '@/types/Course';
import Courses from '@/types/Courses';

export const useCourseStore = defineStore("course", ()=> {
   
  const courses = ref<Courses | null>(null);
  const course = ref<Course | null>(null);
  const itinerary = ref();
  const exam = ref();
      
  const getAllCourses = async () => { 
      try {
        await CourseDataApi.getAllCoursesAsync().then((response:any) => { 
            courses.value = response.data;
        });
      }
      catch (error) {
          console.log(error)
      }
  }
  
  const getCourse = async (data:object) => { 
    try { 
          await CourseDataApi.getCourseAsync(data).then((response:any) => { 
                course.value = response.data;
          });
        }
        catch (error) {
          console.log(error)
          course.value = null
        }
  }
  
  const getCourseItinerary = async (data: object) => { 
        try { 
          await CourseDataApi.getCourseItineraryAsync(data).then((response:any) => { 
                itinerary.value = response.data;
          });
        }
        catch (error) {
          console.log(error)
          course.value = null
        }
  }

   const getIteneraryExam = async (data: object) => { 
        try { 
          await CourseDataApi.getIteneraryExamAsync(data).then((response:any) => { 
                exam.value = response.data;
          });
        }
        catch (error) {
          console.log(error)
          course.value = null
        }
  }

  return { courses, course,itinerary,exam, getAllCourses, getCourse,getCourseItinerary,getIteneraryExam}
})