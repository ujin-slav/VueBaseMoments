import { createApp } from 'vue'
import App from './App.vue'
import components from './components/UI'
import router from "./router";
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const app = createApp(App)
app.use(BootstrapVue3)

components.forEach(component => {
    app.component(component.name, component)
})

app
    .use(router)
    .mount('#app')
