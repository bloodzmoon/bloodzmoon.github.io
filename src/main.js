import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Unicon from 'vue-unicons'
import {
  uniHomeAlt,
  uniDiary,
  uniAt,
  uniSearch,
  uniCodeBranch,
  uniStarMonochrome,
  uniGithubAltMonochrome,
} from 'vue-unicons/src/icons'

Unicon.add([
  uniHomeAlt,
  uniDiary,
  uniAt,
  uniSearch,
  uniCodeBranch,
  uniStarMonochrome,
  uniGithubAltMonochrome,
])
Vue.use(Unicon)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
