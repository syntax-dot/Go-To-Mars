import { createApp } from 'vue'
import App from './app/App.vue'
import { router } from './app/router'
import './app/styles/globals.scss'

createApp(App)
  .use(router)
  // .use(i18n)
  .mount('#app')
