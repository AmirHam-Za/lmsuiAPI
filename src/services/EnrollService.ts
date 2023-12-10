import enrollApi from "@/api/EnrollApi";

class EnrollService { 
    async userEnroll(data:object) {
       const response =  await enrollApi.userEnrollAsync(data);
       return response;
    }
}

export default new EnrollService();