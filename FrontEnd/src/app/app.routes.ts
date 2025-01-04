import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { TopNavbarComponent } from './layout/top-navbar/top-navbar.component';
import { MainContainerComponent } from './layout/main-container/main-container.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountsListComponent } from './accounts/accounts-list/accounts-list.component';
import { AccountDetailComponent } from './accounts/account-detail/account-detail.component';
import { TransactionListComponent } from './accounts/transaction-list/transaction-list.component';
import { TransactionFormComponent } from './accounts/transaction-form/transaction-form.component';
import { InvestmentsListComponent } from './investments/investments-list/investments-list.component';
import { InvestmentDetailComponent } from './investments/investment-detail/investment-detail.component';
import { InvestmentFormComponent } from './investments/investment-form/investment-form.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ProjectItemFormComponent } from './projects/project-item-form/project-item-form.component';
import { SimulatorFormComponent } from './simulator/simulator-form/simulator-form.component';
import { SimulatorResultComponent } from './simulator/simulator-result/simulator-result.component';

export const routes: Routes = [
  // Dashboard
  { path: 'dashboard', component: DashboardComponent },
  // Accounts Routes
  { path: 'accounts', component: AccountsListComponent },
  { path: 'accounts/:id', component: AccountDetailComponent },
  { path: 'transactions', component: TransactionListComponent },
  { path: 'transactions/new', component: TransactionFormComponent },
  
  // Investments Routes
  { path: 'investments', component: InvestmentsListComponent },
  { path: 'investments/:id', component: InvestmentDetailComponent },
  { path: 'investments/new', component: InvestmentFormComponent },
  
  // Projects Routes
  { path: 'projects', component: ProjectsListComponent },
  { path: 'projects/:id', component: ProjectDetailComponent },
  { path: 'projects/new', component: ProjectItemFormComponent },
  
  // Simulator Routes
  { path: 'simulator', component: SimulatorFormComponent },
  { path: 'simulator/result', component: SimulatorResultComponent },
  
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    BrowserModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
