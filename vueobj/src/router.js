import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import home from './components/home';
import group from './components/group';

import myorder from './components/myorder';
import user from './components/user';
import login from './components/login';
import reg from './components/reg';
import error from './components/error';

const routes =[
  {path:'/home',component:home},
  {path:'/group',component:group},  
  {path:'/myorder',component:myorder},
  {path:'/login',component:login},
  {path:'/reg',component:reg},
  {path:'/user',component:user},
  {path:'/',redirect:'/home'},        
  {path:'*',component:error}
]

export default new Router({
  routes
})
