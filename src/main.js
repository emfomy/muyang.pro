import Vue from 'vue';

import './main/bootstrap-vue';
import './main/vue-scrollto';
import './main/fontawesome';
import './main/components';

import App from './app.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
