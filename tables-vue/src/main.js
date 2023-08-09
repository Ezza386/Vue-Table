import './assets/main.css';
import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import App from './App.vue';
import 'element-plus/dist/index.css'
import withUUID from "vue-uuid";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(ElementPlus);
app.mount('#app');
