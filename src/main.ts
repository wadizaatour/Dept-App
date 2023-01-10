import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from "pinia";
import { worker } from "./mocks/browser"
import router from './router' 
const listen = () => {
  if (process.env.NODE_ENV === 'development') {

    worker.start()
  }
}
listen()

createApp(App).use(router).use(createPinia()).mount('#app')
