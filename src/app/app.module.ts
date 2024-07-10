import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// prime imports
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DropdownModule } from 'primeng/dropdown';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { AnimateModule } from 'primeng/animate';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

import { TreeTableModule } from 'primeng/treetable'; 
import { ToastModule } from 'primeng/toast';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

// components imports
import { ButtonContainerComponent } from './containers/button-container/button-container.component';
import { TableContainerComponent } from './containers/table-container/table-container.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { ChartsOfAccountComponent } from './components/charts-of-account/charts-of-account.component';
import { SdNarrationComponent } from './components/sd-narration/sd-narration.component';
import { MaintainDocsComponent } from './components/maintain-docs/maintain-docs.component';
import { DaybookComponent } from './components/daybook/daybook.component';
import { CashBookComponent } from './components/cash-book/cash-book.component';
import { BankBookComponent } from './components/bank-book/bank-book.component';
import { PaymentComponent } from './components/payment/payment.component';
import { LedgerComponent } from './components/ledger/ledger.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonContainerComponent,
    TableContainerComponent,
    DashboardComponent,
    LoginComponent,
    SidebarComponent,
    ChartsOfAccountComponent,
    SdNarrationComponent,
    MaintainDocsComponent,
    DaybookComponent,
    CashBookComponent,
    BankBookComponent,
    PaymentComponent,
    LedgerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    FloatLabelModule,
    DropdownModule,
    OverlayPanelModule,
    AnimateModule,
    AnimateOnScrollModule,
    BrowserAnimationsModule,
    TreeTableModule,
    ToastModule,
    ReactiveFormsModule,
    HttpClientModule,
    TableModule,
    DialogModule,
    IconFieldModule,
    InputIconModule,
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    FloatLabelModule,
    DropdownModule,
    OverlayPanelModule,
    AnimateModule,
    AnimateOnScrollModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideClientHydration(),
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
