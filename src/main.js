import Vue from "vue";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";

// import "@/global-styles/designsystem.scss";
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

//transforms a number to sats or btc based on store
Vue.filter('unit', value => {
  if (store.state.system.unit === 'sats') {
    return Number(value);
  } else {
    return Number(value / 1e+8);
  }
});

//transforms a number to sats
Vue.filter('sats', value => Number(value));

//transforms a number to btc
Vue.filter('btc', value => Number(value / 1e+8));

//formats the unit
Vue.filter('formatUnit', unit => {
  if (unit === 'sats') {
    return 'Sats';
  } else if (unit === 'btc') {
    return 'BTC';
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
