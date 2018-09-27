

require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

import VueSimplemde from 'vue-simplemde'

Vue.use(VueSimplemde)

import User from './Helpers/User'
window.User = User

import md from 'marked'
window.md = md

import Exception from './Helpers/Exception'
window.Exception = Exception

Vue.component('AppHome', require('./components/AppHome.vue'));
import router from './Router/router.js'

window.EventBus = new Vue();

const app = new Vue({
    el: '#app',
    router
});
