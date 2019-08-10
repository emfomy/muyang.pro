import Vue from 'vue';

import './plugins/bootstrap';
import './plugins/components';
import './plugins/fontawesome';
import './plugins/scrollto';

import App from './app.vue';
import './assets/scss/main.scss';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
