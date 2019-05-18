import Vue from 'vue';

import './main/bootstrap';
import './main/components';
import './main/fontawesome';
import './main/scrollto';

import App from './app.vue';
import './assets/scss/main.scss';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
