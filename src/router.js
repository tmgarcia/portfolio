import Vue from 'vue';
import Router from 'vue-router';
const Home = () => import(/* webpackChunkName: "home" */'./views/Home.vue');
const Projects = () => import(/* webpackChunkName: "projects" */'./views/Projects.vue');
const Demos = () => import(/* webpackChunkName: "demos" */'./views/Demos.vue');
const About = () => import(/* webpackChunkName: "about" */'./views/About.vue');
const Contact = () => import(/* webpackChunkName: "contact" */'./views/Contact.vue');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/demos',
      name: 'demos',
      component: Demos
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
  ]
})
