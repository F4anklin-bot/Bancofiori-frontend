import { Component } from '@angular/core';
import { bootstrapPlus, bootstrapSearch } from '@ng-icons/bootstrap-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { Clients as ClientsModel } from '../models/clients';

@Component({
  selector: 'app-clients',
  imports: [NgIcon],
  templateUrl: './clients.html',
  styleUrl: './clients.css',
  viewProviders: [provideIcons({
    bootstrapPlus,
    bootstrapSearch
  })],
})
export class Clients {
  clients: ClientsModel[] = [];
}
