import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    {path: '', component: LayoutComponent, children: [
        {path: 'home', loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent)},
        {path: 'about', loadComponent: () => import('./pages/about/about.component').then(c => c.AboutComponent)},
        {path: 'services', loadComponent: () => import('./pages/services/services.component').then(c => c.ServicesComponent)},
        {path: 'blog', loadComponent: () => import('./pages/blog/blog.component').then(c => c.BlogComponent)},
        {path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(c => c.ContactComponent)},
        {path: '', pathMatch: 'full', redirectTo: 'home'}
    ]},
];
