import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Clients } from './clients/clients';
import { Comptes } from './comptes/comptes';
import { Operations } from './operations/operations';

export const routes: Routes = [

    {
        path : "",
        component : Dashboard,
    },

    {
        path : "clients",
        component : Clients,
    },

    {
        path : "account",
        component : Comptes,
    },

    {
        path : "operations",
        component : Operations,
    }
];
