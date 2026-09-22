import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },

  // 회사소개 (Company Introduction)
  {
    path: '/about/greetings',
    name: 'AboutGreetings',
    component: () => import('../views/about/Greetings.vue'),
  },
  {
    path: '/about/history',
    name: 'AboutHistory',
    component: () => import('../views/about/CompanyHistory.vue'),
  },
  {
    path: '/about/organization',
    name: 'AboutOrganization',
    component: () => import('../views/about/Organization.vue'),
  },
  {
    path: '/about/clients',
    name: 'AboutClients',
    component: () => import('../views/about/Clients.vue'),
  },
  {
    path: '/about/location',
    name: 'AboutLocation',
    component: () => import('../views/about/Location.vue'),
  },

  // 주요사업 (Main Business)
  {
    path: '/business/process-analyzer',
    name: 'ProcessAnalyzer',
    component: () => import('../views/business/ProcessAnalyzer.vue'),
  },
  {
    path: '/business/cems',
    name: 'CEMS',
    component: () => import('../views/business/CEMS.vue'),
  },
  {
    path: '/business/utility-analyzer',
    name: 'UtilityAnalyzer',
    component: () => import('../views/business/UtilityAnalyzer.vue'),
  },
  {
    path: '/business/gas-analyzer',
    name: 'GasAnalyzer',
    component: () => import('../views/business/GasAnalyzer.vue'),
  },
  {
    path: '/business/swas',
    name: 'SWAS',
    component: () => import('../views/business/SWAS.vue'),
  },
  {
    path: '/business/closed-loop',
    name: 'ClosedLoop',
    component: () => import('../views/business/ClosedLoop.vue'),
  },

  // 취급제품 (Products)
  {
    path: '/products/analyzer',
    name: 'AnalyzerPart',
    component: () => import('../views/products/AnalyzerPart.vue'),
  },
  {
    path: '/products/instrument',
    name: 'InstrumentPart',
    component: () => import('../views/products/InstrumentPart.vue'),
  },
  {
    path: '/products/electrical',
    name: 'ElectricalPart',
    component: () => import('../views/products/ElectricalPart.vue'),
  },
  {
    path: '/products/hvac',
    name: 'HVAC',
    component: () => import('../views/products/HVAC.vue'),
  },
  {
    path: '/products/fire',
    name: 'FireExtinguisher',
    component: () => import('../views/products/FireExtinguisher.vue'),
  },

  // 자료실 (Resources)
  {
    path: '/resources/performance',
    name: 'BusinessPerformance',
    component: () => import('../views/resources/BusinessPerformance.vue'),
  },
  {
    path: '/resources/catalog',
    name: 'Catalog',
    component: () => import('../views/resources/Catalog.vue'),
  },
  {
    path: '/resources/certificate',
    name: 'Certificate',
    component: () => import('../views/resources/Certificate.vue'),
  },

  // 고객지원 (Customer Support)
  {
    path: '/customer-support/notices',
    name: 'Notices',
    component: () => import('../views/customer-support/Notices.vue'),
  },
  {
    path: '/customer-support/inquiry',
    name: 'Inquiry',
    component: () => import('../views/customer-support/Inquiry.vue'),
  },
  {
    path: '/customer-support/admin',
    name: 'Admin',
    component: () => import('../views/customer-support/Admin.vue'),
  },
  {
    path: '/error',
    name: 'Error',
    component: () => import('../views/ErrorPage.vue'),
    props: { errorCode: '500', errorMessage: '서버에 문제가 발생했습니다.' },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/ErrorPage.vue'),
    props: { errorCode: '404', errorMessage: '페이지를 찾을 수 없습니다.' },
  },
]

// GitHub Pages 환경에서는 새로고침 시 404 방지를 위해 hash 모드를 기본으로 지원하며,
// VITE_ROUTER_MODE=history 설정 시 HTML5 히스토리 모드로도 구동 가능합니다.
const routerMode = import.meta.env.VITE_ROUTER_MODE || 'hash'
const history =
  routerMode === 'history'
    ? createWebHistory(import.meta.env.BASE_URL)
    : createWebHashHistory(import.meta.env.BASE_URL)

const router = createRouter({
  history,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  },
})

export default router
