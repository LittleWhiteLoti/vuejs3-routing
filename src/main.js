import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'

import Subpage from './components/Subpage'

let app = createApp(App)

app.use(router)

// I'm registering these as global components. They could be localized.
app.component("Subpage", Subpage)

app.mount('#app')
