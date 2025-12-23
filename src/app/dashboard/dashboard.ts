import { Component } from '@angular/core';
import { bootstrapCreditCardFill } from '@ng-icons/bootstrap-icons';
import { NgIcon, provideIcons } from "@ng-icons/core";
import { matAccountBalanceWalletRound } from '@ng-icons/material-icons/round';
import { matGroups2Sharp } from '@ng-icons/material-icons/sharp';

@Component({
  selector: 'app-dashboard',
  imports: [NgIcon],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  viewProviders: [provideIcons({
    matGroups2Sharp,
    matAccountBalanceWalletRound,
    bootstrapCreditCardFill
  })]
})
export class Dashboard {

}
