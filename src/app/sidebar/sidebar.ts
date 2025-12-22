import { Component } from '@angular/core';
import { bootstrapBank2 } from '@ng-icons/bootstrap-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-sidebar',
  imports: [
    NgIcon,
    RouterLink
],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
  viewProviders : [provideIcons({bootstrapBank2})]
})
export class Sidebar {

}
