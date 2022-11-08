import { router } from './app/router/index'
import { createApp } from 'vue'
import App from './app/App.vue'

createApp(App)
  .use(router)
  .mount('#app')
