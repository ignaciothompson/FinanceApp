import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsService } from '../../services/accounts.service';
import { Account } from '../../models/account.model';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.css'],
  imports: [CommonModule],
})
export class AccountsListComponent implements OnInit {
  accounts: Account[] = [];

  constructor(private accountsService: AccountsService) {}

  ngOnInit(): void {
    this.accountsService.getAccounts().subscribe(
      (data: Account[]) => {
        this.accounts = data;
      },
      (error) => {
        console.error('Error fetching accounts data', error);
      }
    );
  }
}
