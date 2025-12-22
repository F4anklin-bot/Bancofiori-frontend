import { Component } from '@angular/core';
import { bootstrapBank2, bootstrapHouse } from '@ng-icons/bootstrap-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { RouterLink } from "@angular/router";
import { matGroups2Sharp } from '@ng-icons/material-icons/sharp';

@Component({
  selector: 'app-sidebar',
  imports: [
    NgIcon,
    RouterLink
],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
  viewProviders : [provideIcons({bootstrapBank2, bootstrapHouse,matGroups2Sharp})]
})
export class Sidebar {

}
