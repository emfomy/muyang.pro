import "@babel/polyfill";
import Vue from "vue";

Vue.config.productionTip = false;

/* Bootstrap */

import BootstrapVue from "bootstrap-vue";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

/* ScrollTo */

import VueScrollTo from "vue-scrollto";

Vue.use(VueScrollTo, {
  duration: 1000
});

/* FontAwesome */

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText
} from "@fortawesome/vue-fontawesome";

library.add(fas);
library.add(far);
library.add(fab);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("font-awesome-layers", FontAwesomeLayers);
Vue.component("font-awesome-layers-text", FontAwesomeLayersText);

/* App */

import App from "./app.vue";
// import App from "./vue.vue";

new Vue({
  render: h => h(App)
}).$mount("#app");
