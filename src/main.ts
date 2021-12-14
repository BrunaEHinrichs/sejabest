import { createApp } from 'vue';
import router from '@/router/index';
import '@/assets/css/tailwind.css';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
/* eslint-disable */
import VueTheMask from 'vue-the-mask';
import App from './App.vue';

library.add(VueTheMask);
library.add(fas);
dom.watch();

const app = createApp(App);
app.use(router).mount('#app');
