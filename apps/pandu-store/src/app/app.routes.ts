import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component: NxWelcomeComponent,
        pathMatch: 'full',
    },
    {
        path: 'products',
        loadComponent: () =>
          import('@pandu-monorepo/products').then((m) => m.ProductsComponent),
    },
    {
        path: 'orders',
        loadComponent: () =>
          import('@pandu-monorepo/orders').then((m) => m.OrdersComponent),
    },
];
