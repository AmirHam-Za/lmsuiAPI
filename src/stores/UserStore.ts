import { defineStore } from 'pinia'
import UserApi from "../api/userApi";
import {unref,computed,onMounted } from "vue";

export const useUserStore = defineStore("user", ()=> {

    const user = localStorage.getItem('user');
    const isLoggedIn = computed(() => !!unref(user));

    const getUser =async (data: object) => { 
        try { 
            await UserApi.userLoginAsync(data).then((response:any) => { 
                const res = JSON.stringify(response.data);
                localStorage.setItem('user', res);
                console.log('L store test',localStorage.getItem('user'));
            }); 
        }
        catch (error) {
            console.log(error)
        }
    }

    return {user,isLoggedIn, getUser}
})