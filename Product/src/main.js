import './styles/main_styles.css'
import './styles/f-a/css/font-awesome.min.css'
import './assets/plugins/bootstrap4/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import RequestManager from './plugins/api';


window.$api = new RequestManager();

loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
