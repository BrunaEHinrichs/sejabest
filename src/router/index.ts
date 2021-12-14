import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [

  {
    path: '/',
    name: 'LayoutBase',
    component: () => import('@/views/LayoutBase.vue'),
    children: [
      {
        path: '/',
        name: 'HomeEquity',
        component: () => import('@/views/HomeEquity.vue'),
      },
      {
        path: 'simulator',
        name: 'simulator',
        component: () => import('@/views/Simulator.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
