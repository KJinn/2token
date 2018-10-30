import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import iView from 'iview';
import 'iview/dist/styles/iview.css';

import axios from 'axios'
import VueAxios from 'vue-axios'
/*import Highcharts from 'highcharts/highstock';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsDrilldown from 'highcharts/modules/drilldown';
import Highcharts3D from 'highcharts/highcharts-3d';

HighchartsMore(Highcharts);
HighchartsDrilldown(Highcharts);
Highcharts3D(Highcharts);*/

Vue.config.productionTip = false;

Vue.use(iView);
Vue.use(VueAxios, axios);
// Vue.use(VueHighcharts, { Highcharts });

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
