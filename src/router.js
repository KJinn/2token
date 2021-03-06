import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Main from './components/Main.vue'
import Doc from './components/Doc.vue'
import testchart from './components/testchart.vue'

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main
        },
        {
            path: '/Doc',
            name: 'Doc',
            component: Doc
        },
        {
            path: '/testchart',
            name: 'testchart',
            component: testchart
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
});

export default router;

