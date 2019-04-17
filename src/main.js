import Vue from 'vue';

/* Bootstrap */

import BootstrapVue from 'bootstrap-vue';
// import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-vue/dist/bootstrap-vue.min.css';

/* ScrollTo */

import VueScrollTo from 'vue-scrollto';

/* FontAwesome */

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText,
} from '@fortawesome/vue-fontawesome';

/* Component */

import IconButton from './components/icon_button';
import ButtonGroup from './components/button_group.vue';
import Collapse from './components/collapse.vue';

/* App */

import App from './app.vue';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

Vue.use(VueScrollTo, {
  duration: 1000,
});

library.add(fas);
library.add(far);
library.add(fab);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);
Vue.component('font-awesome-layers-text', FontAwesomeLayersText);

Vue.component('IconButton', IconButton);
Vue.component('ButtonGroup', ButtonGroup);
Vue.component('Collapse', Collapse);

new Vue({
  render: h => h(App),
}).$mount('#app');
