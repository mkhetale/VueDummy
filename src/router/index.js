/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  Object Strucutre:
  					path => router path
  					name => router name
  					component(lazy loading) => component to load
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Version: 1.1
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'
// import test from './test'
// import Attribute from './attribute'
// import Cms from './cms'
// import Influencer from './influencer'
// import Campaign from './campaign'
// import Brands from './brands'
// import VueCookies from 'vue-cookies'
// import store from '../store/store';


Vue.use(Router)

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	scrollBehavior () {
		return { x: 0, y: 0 }
	},
	routes: [

		{
	// =============================================================================
	// MAIN LAYOUT ROUTES
	// =============================================================================
			path: '',
			component: () => import('@/layouts/main/Main.vue'),
			children: [
		// =============================================================================
		// Theme Routes
		// =============================================================================
				{
					path: '/',
					redirect: '/pages/login',
					component: () => import('@/views/pages/Login')
				},
				{
					path: '/dashboard',
					name: 'dashboard',
					component: () => import('@/pages/dashboard'),
				},
				
			]
		},
		{
			path: '',
			component: () => import('@/layouts/full-page/FullPage.vue'),
			children: [
		// =============================================================================
		// PAGES
		// =============================================================================
				{
					path: '/pages/login',
					name: 'pageLogin',
					component: () => import('@/views/pages/Login.vue')
				}
			]
		}
	]
})

// router.beforeEach((to, from, next) => {
// 	if (to.path === '/' || to.path === '/pages/login') {
// 	  next()
// 	} else if (VueCookies.isKey('auth')) {
// 		next()
// 	}
// 	 else {
// 	  next({
// 		path: '/',
// 		query: {
// 		  redirect: to.path,
// 		}
// 	  })
// 	}
//   })

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
	if (appLoading) {
		appLoading.style.display = "none";
	}
})

export default router