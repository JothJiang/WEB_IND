import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import Data from '../views/Data.vue'
import Count from '../views/Count.vue'
import Indicator from '../views/Indicator.vue'
import Operator from '../views/Operator.vue'
import User from '../views/User.vue'
import Login from '../views/Login.vue'
Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        component:Main,
        redirect:'/indicator',
        children:[
            {path: 'home', component: Home},
            {path: 'main', component: Main},
            {path: 'data', component: Data},
            {path: 'count', component: Count},
            {path: 'indicator', name:'indicator',component: Indicator},
            {path: 'operator', component: Operator},
            {path: 'user', component: User}
        ]
    },
    {
        path:'/login',
        name:'login',
        component:Login
    }
]

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

export default router

