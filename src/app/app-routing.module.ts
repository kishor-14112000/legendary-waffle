import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ChartsOfAccountComponent } from './components/charts-of-account/charts-of-account.component';
import { LedgerComponent } from './components/ledger/ledger.component';
import { BankBookComponent } from './components/bank-book/bank-book.component';
import { CashBookComponent } from './components/cash-book/cash-book.component';
import { DaybookComponent } from './components/daybook/daybook.component';
import { MaintainDocsComponent } from './components/maintain-docs/maintain-docs.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SdNarrationComponent } from './components/sd-narration/sd-narration.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'charts-of-accounts', component: ChartsOfAccountComponent },
  { path: 'ledger', component: LedgerComponent },
  { path: 'bank-book', component: BankBookComponent },
  { path: 'cash-book', component: CashBookComponent },
  { path: 'daybook', component: DaybookComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'maintain-docs', component: MaintainDocsComponent },
  { path: 'sd-narration', component: SdNarrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
