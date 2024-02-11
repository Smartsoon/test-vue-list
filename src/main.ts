import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import { store, key } from '@/store'

import './assets/main.css'
import 'primevue/resources/themes/aura-light-green/theme.css'
import '/node_modules/primeflex/primeflex.css';

import PrimeButton from 'primevue/button';
import PrimeTextInput from 'primevue/inputtext';
import PrimeCard from 'primevue/card';
import PrimeMenubar from 'primevue/menubar';
import PrimeSpinner from 'primevue/progressspinner';
import PrimePaginator from 'primevue/paginator';

const app = createApp(App)

app.component('PrimeButton', PrimeButton)
app.component('PrimeCard', PrimeCard)
app.component('PrimeMenubar', PrimeMenubar)
app.component('PrimeTextInput', PrimeTextInput)
app.component('PrimeSpinner', PrimeSpinner)
app.component('PrimePaginator', PrimePaginator)

app
    .use(PrimeVue)
    .use(router)
    .use(store, key)
    .mount('#app')
