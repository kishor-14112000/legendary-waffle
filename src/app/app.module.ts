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

// components imports
import { ButtonContainerComponent } from './containers/button-container/button-container.component';
import { TableContainerComponent } from './containers/table-container/table-container.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonContainerComponent,
    TableContainerComponent,
    DashboardComponent,
    LoginComponent,
    SidebarComponent
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
    BrowserAnimationsModule
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
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
