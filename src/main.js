import Vue from 'vue';
import App from './App.vue';
import router from './router';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import "animate.css/animate.css";
import "./assets/css/main.css"

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCartShopping, faArrowRight, faEye, faBagShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
library.add(faCartShopping, faArrowRight, faBagShopping, faEye, faSearch);

Vue.use(Toast);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');