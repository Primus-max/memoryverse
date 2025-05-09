import './assets/main.css';

import { createApp } from 'vue';

import { createPinia } from 'pinia';
import { createPiniaColada } from 'pinia-colada';

import App from './App.vue';
import i18n from './i18n';
import router from './router';

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(createPiniaColada())
app.use(router)
app.use(i18n)

app.mount('#app')
