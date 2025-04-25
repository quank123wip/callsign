export * from "./editor";

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.mount('#editor')