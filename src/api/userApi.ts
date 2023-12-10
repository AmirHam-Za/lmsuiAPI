import http from "../api/HttpCommon";

const _http = http;

class UserApi { 
    userRegistrationAsync(data: object): Promise<any> { 
        return _http.post("/register",data);
    }
    userLoginAsync(data: object): Promise<any> { 
        return _http.post("/login",data);
    }
}

export default new UserApi();