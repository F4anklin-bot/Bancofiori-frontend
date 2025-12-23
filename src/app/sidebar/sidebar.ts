import { Component } from '@angular/core';
import { bootstrapArrowLeftRight, bootstrapBank2, bootstrapHouse, bootstrapPerson } from '@ng-icons/bootstrap-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { matGroups2Sharp } from '@ng-icons/material-icons/sharp';
import { matAccountBalanceWalletRound } from '@ng-icons/material-icons/round';
import { matAccountCircle } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-sidebar',
  imports: [
    NgIcon,
    RouterLink,
    RouterLinkActive
],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
  viewProviders : [provideIcons({
    bootstrapBank2,
    bootstrapHouse,
    matGroups2Sharp,
    matAccountBalanceWalletRound,
    bootstrapArrowLeftRight,
    bootstrapPerson
  })]
})
export class Sidebar {

}
