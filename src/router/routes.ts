import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/SecondLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Inicio.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('layouts/ThirdLayout.vue'),
    children: [
      {
        path: 'Login',
        name: 'Login',
        component: () => import('pages/Login.vue'),
      },
    ],
  },

  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'IndexPage',
        name: 'IndexPage',
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: 'Usuarios',
        name: 'Usuarios',
        component: () => import('pages/Usuarios.vue'),
      },
      {
        path: 'IndexPage',
        name: 'IndexPage',
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: 'NuevoUsuario',
        name: 'NuevoUsuario',
        component: () => import('pages/NuevoUsuario.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
