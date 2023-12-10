<template>
  <div>
      <nav class="border-b bg-primary-950 text-white flex-shrink-0 items-center px-3 sm:px-0 py-4 w-full">  
          <div class="flex container max-w-screen-2xl mx-auto justify-end space-x-2"
          >
          </div>

        <div class="container max-w-screen-2xl mx-auto flex justify-between h-14">
             <!-- Brand-->
            <router-link to="/" class="flex items-center cursor-pointer mb-3">
              <!-- Logo-->
              <div
                class="rounded text-cool-gray-50 font-bold flex justify-center text-3xl pt-0.5"
              >
                 <img class="w-44"
                  src="https://lms.llsce.org/assets/images/logo-lls.png"
                  alt="LEUKEMIA & LYMPHOMA SOCIETY"
                />
              </div>

             
            </router-link>
                        <!-- Navbar Toggle Button -->
            <button @click="manuResponse"
              class="block md:hidden text-cool-gray-50 p-2 rounded hover:border focus:border focus:bg-red-400 my-2 mr-5"
              type="button"
              aria-controls="navbar-main"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
                        <!-- Nav Links-->
            <ul
              class="md:flex text-gray-500 font-sm md:font-medium lg:font-medium md:text-md lg:text-md ml-6 mt-4 uppercase origin-top"
              :class=" state.showMenu == true ?  'block absolute top-14 border-b bg-white w-full p-2 z-50':  'hidden' " id="navbar-main"
            >
              <li
                class="px-3 cursor-pointer flex items-center"
                :class="state.showMenu == true ? 'py-1' : ''"
              >
                <router-link to="/"
                  class="text-black lg:text-gray-200  transition ease-in-out delay-150 duration-300 hover:text-gray-400"
                  >Home</router-link>
                
              </li>
              
              
              <li class="space-x-8 ml-3 lg:ml-6 cursor-pointer flex items-center" :class="state.showMenu == true ? 'py-1' : ''"
              >
              
                <router-link to="/login"  v-if="!state?.token"
                    class="text-black lg:text-gray-200 transition ease-in-out delay-150 duration-300 hover:text-gray-400"
                  >Login</router-link>
                
                 <span  v-if="state?.token"  @click="userLogout"
                    class="text-black lg:text-gray-200 transition ease-in-out delay-150 duration-300 hover:text-gray-400"
                  >Logout</span>
              </li>
            </ul>
        </div>
      </nav>
    </div>
</template>
<script lang="ts">
  import router from "@/router";
  import User from "@/types/User";
  import { defineComponent, reactive, onMounted } from "vue";
   export default defineComponent({
      name:"course-view",
      setup() { 
          interface State { 
              token: string | null,
              showMenu: boolean
          }

          const state:State = reactive({
              token: null,
              showMenu: false
          });

          const authChecked = () => { 
            const user = JSON.parse(window.localStorage.getItem('user') || '{}') as User;
            state.token = user.token
          }

          const userLogout = () => { 
            window.localStorage.removeItem('user')
            window.location.href = '/';//this line is incorrect.to be fixed later.
          }

          const manuResponse = () => {
            state.showMenu = !state.showMenu
            console.log("click",!state.showMenu);
          }

          onMounted(() => {
              authChecked()
          });

          return {state,userLogout,manuResponse}
      } 
  })
</script>