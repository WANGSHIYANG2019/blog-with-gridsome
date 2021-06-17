import Vue from 'vue'
import VueRouter from 'vue-router'
import PageOfUpdates from '../pages/NewIndex/Updates.vue'
import PageOfFriends from '../pages/NewIndex/Friends.vue'

Vue.use(VueRouter)
export default new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/updates',
            component: PageOfUpdates
        }, {
            path: '/friends',
            component: PageOfFriends
        },
        {
            path: '',
            redirect: '/updates'
        }
    ]
})