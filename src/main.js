// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import jQuery from 'jquery'
import Tether from 'tether'
import 'bootstrap/dist/css/bootstrap.min.css'
global.jQuery = jQuery
global.Tether = Tether
var Bootstrap = require('bootstrap')
var draggable = require('vuedraggable');

//setup lodash
window._ = require('lodash');

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
