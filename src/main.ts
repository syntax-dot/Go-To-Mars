import { router } from './app/router/index'
import { createApp } from 'vue'
import App from './app/App.vue'
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

createApp(App)
  .use(router)
  .use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
  })
  .mount('#app')
