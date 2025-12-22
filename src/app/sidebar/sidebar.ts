import { Component } from '@angular/core';
import { bootstrapArrowLeftRight, bootstrapBank2, bootstrapHouse } from '@ng-icons/bootstrap-icons';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { matGroups2Sharp } from '@ng-icons/material-icons/sharp';
import { matAccountBalanceWalletRound } from '@ng-icons/material-icons/round';

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
    bootstrapArrowLeftRight
  })]
})
export class Sidebar {

}
