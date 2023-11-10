import { createApp } from 'vue'
import App from './App.vue'
import '@/style/index.scss'
import pinia from '@/store'
import router from '@/router'
// import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/css';

const app=createApp(App)

app.use(pinia)
app.use(VueAwesomeSwiper)
app.use(router)
app.mount('#app')
