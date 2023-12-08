import * as vR from 'vue-router'
import Dashboard from '@pages/Dashboard.vue';

const _routes:Array<vR.RouteRecordRaw> = [
    // Path & Component are mandatory
    {
        path: "/",
        component: Dashboard,
        name: 'home'
    },
    {
        path: "/demo",
        component: ()=> import(@pages/Demo.vue), // lazy load, only read on request
        name: 'home'
    },
    {
        path: "/",
        component: Dashboard,
        name: 'home'
    }
]

const router = vR.createRouter({
    history: vR.createWebHashHistory(),
    routes: _routes, 

});

export default router;