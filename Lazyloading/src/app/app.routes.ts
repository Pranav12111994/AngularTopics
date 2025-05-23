import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./app.component').then((m) => m.AppComponent),
        children: [
            {
                path: 'home',
                loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent)
            },
            {
                path: 'about',
                loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent)
            },
            {path: '', redirectTo: 'home', pathMatch: 'full'}
        ]
    }
];
