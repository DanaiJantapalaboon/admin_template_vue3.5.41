import './assets/main.css'
import './assets/datatables.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

router.beforeEach((to, from, next) => {
    document.title = to.meta.title + ' | Your App';
    next();
});

app.use(router)

app.mount('#app')