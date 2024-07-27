import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'; // Assuming you have a Vuex store

const app = createApp(App);

app.use(router);
app.use(store); // Assuming you have a Vuex store
app.mount('#app');
