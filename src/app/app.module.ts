import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { TopNavbarComponent } from './layout/top-navbar/top-navbar.component';
import { MainContainerComponent } from './layout/main-container/main-container.component';
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
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppComponent,
    SidebarComponent,
    TopNavbarComponent,
    MainContainerComponent,
    AccountsListComponent,
    AccountDetailComponent,
    TransactionListComponent,
    TransactionFormComponent,
    InvestmentsListComponent,
    InvestmentDetailComponent,
    InvestmentFormComponent,
    ProjectsListComponent,
    ProjectDetailComponent,
    ProjectItemFormComponent,
    SimulatorFormComponent,
    SimulatorResultComponent,
    DashboardComponent,
  ],
  providers: [],
})
export class AppModule {}
