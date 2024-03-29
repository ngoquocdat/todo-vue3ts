import { createApp } from 'vue'

// Use Element Plus lib
import ElementPlus from 'element-plus'

import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
