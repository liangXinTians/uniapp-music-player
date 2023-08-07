// import App from './App';
// import Vue from 'vue';
// import store from './store/index.js';
// import './uni.promisify.adaptor';
// // import PubFuc from './common/js/util.js';

// Vue.prototype.$store = store;
// Vue.config.productionTip = false;
// // Vue.prototype.$pubFuc = PubFuc;

// App.mpType = 'app';
// const app = new Vue({
//   ...App,
// });
// app.$mount();

import Vue from 'vue'
import App from './App'
import store from './store/index.js'

Vue.prototype.$store = store
Vue.config.productionTip = false

App.mpType = 'app'

import PubFn from 'common/js/utils.js'
Vue.prototype.$pubFn = PubFn;

const app = new Vue({
    ...App
})
app.$mount()

