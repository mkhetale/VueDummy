/*=========================================================================================
  File Name: main.js
  Description: main vue(js) file
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Version: 1.1
  Author: Pixinvent
  Author URL: hhttp://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import App from './App.vue'
//Vuetify
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
// Vuesax Component Framework
import Vuesax from 'vuesax'
import 'material-icons/iconfont/material-icons.css' //Material Icons
import 'vuesax/dist/vuesax.css'; // Vuesax
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
import VueCookies from 'vue-cookies';
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel)
Vue.use(VueCookies)
Vue.use(Vuesax)
Vue.use(Vuetify)

import '@/assets/globalCss/common.css'
// Theme Configurations
import '../themeConfig.js'

// Globally Registered Components
import './globalComponents.js'

// Styles: SCSS
import './assets/scss/main.scss'

// Tailwind
import '@/assets/css/main.css';

// Vue Router
import router from './router'

// Vuex Store
import store from './store/store'

// i18n
import i18n from './i18n/i18n'

// Vuesax Admin Filters
import './filters/filters'

// VeeValidate
import VeeValidate from 'vee-validate';
// Vue.use(VeeValidate);
Vue.use(VeeValidate, {
	events: 'blur'
})

// Google Maps
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
    load: {
        // Add your API key here
        key: '',
        libraries: 'places', // This is required if you use the Auto complete plug-in
    },
})

// PrismJS
import 'prismjs'
import 'prismjs/themes/prism.css'

// Feather font icon
require('./assets/css/iconfont.css')

Vue.config.productionTip = false

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')