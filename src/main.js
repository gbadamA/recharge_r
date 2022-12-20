import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from './store'
import BootstrapVue from 'bootstrap-vue';
import VueScrollReveal from 'vue-scroll-reveal';
import ScrollLoader from 'vue-scroll-loader';
import InfiniteLoading from 'vue-infinite-loading';
import titleMixin from './mixins/titleMixin';
import Multiselect from 'vue-multiselect'
import SuiVue from 'semantic-ui-vue';
import Notifications from 'vue-notification'
import Vuex from 'vuex'
import VTooltip from 'v-tooltip'
import VueTheMask from 'vue-the-mask'
import VueProgressBar from 'vue-progressbar'
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import VueSmoothScroll from 'vue2-smooth-scroll'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import VueSelectInputUi from 'vue-select-input-ui';
import 'vue-select-input-ui/dist/vue-select-input-ui.css';


Vue.use(VueSelectInputUi);
Vue.use(VueToast);

Vue.use(BootstrapVue);
Vue.use(ScrollLoader);
Vue.mixin(titleMixin);
Vue.use(Vuex);
Vue.use(InfiniteLoading);
Vue.use(SuiVue);
Vue.use(Notifications);
Vue.use(VTooltip);
Vue.use(VueTheMask);
Vue.use(VueLoading);
Vue.use(VueSmoothScroll);
Vue.use(VueProgressBar, {
    color: 'rgb(190, 150, 39)',
    failedColor: 'red',
    height: '5px'
})
Vue.component('multiselect', Multiselect)
    // Using ScrollReveal's default configuration
Vue.use(VueScrollReveal, {
    class: 'v-scroll-reveal',
    duration: 800,
    scale: 1,
    distance: '10px',
    mobile: false
});
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");