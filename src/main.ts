import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from "pinia";
import { worker } from "./mocks/browser"

const listen = () => {
  if (process.env.NODE_ENV === 'development') {

    worker.start()
  }
}
listen()

createApp(App).use(createPinia()).mount('#app')
