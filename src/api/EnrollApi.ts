import http from "../api/HttpCommon";

const _http = http;

class EnrollApi { 
    userEnrollAsync(data: object): Promise<any> { 
        return _http.post("/enroll",data);
    }
}

export default new EnrollApi();