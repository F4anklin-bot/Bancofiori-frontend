import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Clients } from './clients/clients';

export const routes: Routes = [

    {
        path : "",
        component : Dashboard,
    },

    {
        path : "/clients",
        component : Clients,
    }
];
