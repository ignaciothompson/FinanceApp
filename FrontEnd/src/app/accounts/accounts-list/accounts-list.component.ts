import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccountsService } from '../../services/accounts.service';
import { Account } from '../../models/data.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.css'],
  imports: [CommonModule, FormsModule],
})
export class AccountsListComponent implements OnInit {
  accounts: Account[] = [];
  newAccount: Account = { id: 0, name: '', balance: 0, symbol: '', investments: null };

  constructor(private accountsService: AccountsService, private router: Router) {}

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

  onSubmit() {
    // this.accountsService.addAccount(this.newAccount).subscribe(
    //   (account: Account) => {
    //     this.accounts.push(account);
    //     this.newAccount = { id: 0, name: '', balance: 0, symbol: '', investments: null };
    //   },
    //   (error) => {
    //     console.error('Error adding account', error);
    //   }
    // );
  }

  redirectToAccount(accountId: number) {
    this.router.navigate(['/accounts', accountId]);
  }
}
