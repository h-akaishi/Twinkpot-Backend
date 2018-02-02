import Vue from 'vue/dist/vue.esm.js'
import VueRouter from 'vue-router'
import Home from '../components/mobile/Home.vue'
import All from '../components/mobile/All.vue'
import Modal from '../components/mobile/Modal.vue'
import Place from '../components/mobile/Place.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/home', component: Home },
        { path: '/home/all', component: All },
        { path: '/home/post/:id', name: 'showPost', component: Modal },
        { path: '/home/place/:name', name: 'place', component: Place },
    ],
})