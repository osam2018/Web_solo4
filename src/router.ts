import Vue from 'vue'
import Router from 'vue-router'
import Friend from '@/views/sub-com/Friend.vue'
import Subscribe from './views/sub-com/Subscribe.vue'


Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'friend',
        component: Friend
        },
        {
            path: '/friend',
            name: 'friend',
            component: Friend
        },
        {
            path: '/subscribe',
            name: 'subscribe',
            component: Subscribe
        }
        // {
        //     path: '/',
        //     name: 'mypage',
        //     component: Mypage
        // },
        // {
        //     path: '/',
        //     name: 'home',
        //     component: Home
        // }, {
        //     path: '/home',
        //     name: 'home',
        //     component: Home
        // },
        // {
        //     path: '/about',
        //     name: 'about',
        //     component: About
        // }, {
        //     path: '/datapage',
        //     name: 'dataPage',
        //     component: DataPage
        // },
        // {
        //     path: '/sidepage',
        //     name: 'sidePage',
        //     component: SidePage,
        //     children: [
        //         {
        //             path: '/',
        //             component: SidePage1
        //         },
        //         {
        //             path: 'sidepage1',
        //             component: SidePage1
        //         },
        //         {
        //             path: 'sidepage2',
        //             component: SidePage2
        //         },
        //         {
        //             path: 'sidepage3',
        //             component: SidePage3
        //         },
        //         {
        //             path: 'sidepage4',
        //             component: SidePage4
        //         }
        //     ]
        // }
    ]
})
