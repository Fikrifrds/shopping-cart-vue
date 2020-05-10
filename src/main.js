import Vue from "vue";
import store from "./store";
import App from "./App.vue";
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
