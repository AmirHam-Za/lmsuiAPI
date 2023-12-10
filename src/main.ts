import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia';
import './index.css'
import MomentPlugin from "./plugin/moment-plugin";

const app = createApp(App)

app.use(router).use(createPinia()).use(MomentPlugin).mount('#app')
