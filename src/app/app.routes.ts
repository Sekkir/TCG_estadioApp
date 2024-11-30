import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'productos',
    loadComponent: () => import('./pages/productos/productos.page').then((m) => m.ProductosPage),
    children: [
      {
        path: 'lista-productos',
        loadComponent: () =>
          import('./tabs/lista-productos/lista-productos.component').then(
            (m) => m.ListaProductosComponent
          ),
      },
      {
        path: 'actualizar-producto',
        loadComponent: () =>
          import('./tabs/actualizar-producto/actualizar-producto.component').then(
            (m) => m.ActualizarProductoComponent
          ),
      },
      {
        path: 'agregar-producto',
        loadComponent: () =>
          import('./tabs/agregar-producto/agregar-producto.component').then(
            (m) => m.AgregarProductoComponent
          ),
      },
      {
        path: '',
        redirectTo: 'productos', // Redirige al tab lista-productos por defecto
        pathMatch: 'full',
      },
    ],
  },
];

