import { Routes } from '@angular/router';
import { CloudComponent } from './cloud/cloud.component';

export const routes: Routes = [
    {
        path: 'cloud',
        component: CloudComponent
    },
    {
        path: '',
        redirectTo: '/cloud',
        pathMatch: 'full'
    }
];
