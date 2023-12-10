import http from "../api/HttpCommon";

const _http = http;

class CourseApi { 
    getAllCoursesAsync(): Promise<any> { 
        return _http.get("/courses");
    }
    getCourseAsync(data:object): Promise<any> { 
        return _http.get("/course",{params: data});
    }
    getCourseItineraryAsync(data:object): Promise<any> { 
        return _http.get("/itinerary",{params: data});
    }
    getIteneraryExamAsync(data:object): Promise<any> { 
        return _http.get("/exam",{params: data});
    }
}

export default new CourseApi();