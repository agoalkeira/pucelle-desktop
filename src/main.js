// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueFire from 'vuefire'
import jQuery from 'jquery'
import VueResource from 'vue-resource'
global.jQuery = jQuery
import vueScrollBehavior from 'vue-scroll-behavior'


Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueFire)

const router = new VueRouter({
    mode:'hash',
    base:'/',
    routes: [{
        path: '/',
        component: require('./components/Welcome.vue')
    },
    {
        path: '/pucelle-home',
        component: require('./components/Desktop.vue')
    },
    {
        path: '/pucelle-world',
        component: require('./components/PucelleWorld.vue')
    },
    {
        name: 'article_detail',
        path: '/pucelle-article/:idArticle',
        component: require('./components/PucelleWorldArticle.vue')
    },
    {
        path: '/pucelle-products',
        component: require('./components/PucelleProducts.vue')
    },
    {
        name: 'product_detail',
        path: '/pucelle-products/detail/:idProduct',
        component: require('./components/PucelleDetailProduct.vue')
    },
    {
        path: '/pucelle-news',
        component: require('./components/PucelleNews.vue')
    },
    {
        name: 'news_detail',
        path: '/pucelle-news/detail/:idNews',
        component: require('./components/PucelleNewsDetail.vue')
    },
    {
        name: 'pucelle_campaign',
        path: '/pucelle-campaign',
        component: require('./components/PucelleCampaign.vue')
    },
    {
        name: 'campaign_detail',
        path: '/pucelle-campaign/detail/:idCampaign',
        component: require('./components/PucelleCampaignDetail.vue')
    },
    {
        path: '/pucelle-contact-us',
        component: require('./components/ContactUs.vue')
    },
    {
        path:'*',
        redirect:'/'
    }],
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
      }
})

Vue.use(vueScrollBehavior, { router: router })

global.getIntRandom =function(min, max) {
            "use strict";
            if (max < min) {
                // Swap min and max
                [min, max] = [min, max];
            }

            // Generate random number n, where min <= n <= max
            let range = max - min + 1;
            return Math.floor(Math.random() * range) + min;
        }

Vue.config.productionTip = false

/* eslint-disable no-new */
var main=new Vue({
  el: '#app',
  router,
  render: h => h(require('./App.vue'))
})
