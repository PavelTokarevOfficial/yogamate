import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Anime from 'animejs';

const app = createApp(App);
app.config.globalProperties.$anime = Anime;
app.mount('#app');
