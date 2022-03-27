import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js'
import './index.css'
createApp(App).use(store).mount('#app')
