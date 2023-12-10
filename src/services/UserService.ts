import UserApi from "../api/userApi";

import { useUserStore } from "../stores/UserStore";
import User from "@/types/User";
import { createApp } from "vue";
import { createPinia } from 'pinia'
import App from '../App.vue'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)

const _useUserStore = useUserStore();

class userService { 
    async userRegistration(data:object) {
       const response =  await UserApi.userRegistrationAsync(data);
       return response;
    }

    async userLogin(data:object) { 
        await _useUserStore.getUser(data);
        console.log('user store data in service',_useUserStore.user);
        return _useUserStore.user;
    }

    isLogedInCheck() { 
        const user = JSON.parse(window.localStorage.getItem('user') || '{}') as User;
        const token = user.token
        console.log('token',window.localStorage.getItem('user'));
        return token ;

    }
}

export default new userService();