import "@babel/polyfill";
import Vue from "vue";

Vue.config.productionTip = false;

/* Bootstrap */

import BootstrapVue from "bootstrap-vue";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.min.css";

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

library.add(fas);
library.add(far);
library.add(fab);

import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText
} from "@fortawesome/vue-fontawesome";

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("font-awesome-layers", FontAwesomeLayers);
Vue.component("font-awesome-layers-text", FontAwesomeLayersText);

/* Component */

import IconButton from "./components/icon_button.js";
import ButtonGroup from "./components/button_group.vue";
import Collapse from "./components/collapse.vue";

Vue.component("IconButton", IconButton);
Vue.component("ButtonGroup", ButtonGroup);
Vue.component("Collapse", Collapse);

/* App */

import App from "./app.vue";

new Vue({
  render: h => h(App)
}).$mount("#app");
