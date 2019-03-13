import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import User from './views/User'
import Show from './views/Show'
import Error from './views/errors/404'
import Service from './views/Service'
import Primary from './layouts/Primary'

// posts
import PostIndex from './views/posts/Index'
import PostShow from './views/posts/Show'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      name:'primary',
      component:Primary,
      redirect:'/',
      children: [
        {
          path: '/',
          name: 'home',
          component: Home,
        },
        {
          path: '/about',
          name: 'about',
          component: About
        },
        {
          path: '/contact',
          name: 'contact',
          component: Contact
        },
        {
          path: '/user',
          name: 'user',
          component: User
        },
        {
          path: '/user/show/:id/:name',
          name: 'user-show',
          component: Show
        },
        {
          path: '/service',
          name: 'service',
          component: Service
        },
        {
          path: '/post',
          name: 'post',
          component: PostIndex
        },
        {
          path: '/show-post/:id',
          name: 'show-post',
          component: PostShow
        }
      ]
    },

    {
      path: '*',
      name: 'show-error',
      component: Error
    },

  ]
})
