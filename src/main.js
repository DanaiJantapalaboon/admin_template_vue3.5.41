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

// login page before enter vue app
// const isLoggedIn = localStorage.getItem('loggedIn');

// if (!isLoggedIn) {
//   window.location.href = '/login.html';
// } else {
//   const app = createApp(App);
//   app.use(router);
//   app.mount('#app');
// }