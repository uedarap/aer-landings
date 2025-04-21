import { createApp } from 'vue'
import '/src/style.css'
import App from './Home.vue'
import router from '/src/plugins/router'

createApp(App).use(router).mount('#app-home')