import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import {environment} from '../environments/environment'
import { FormsModule } from '@angular/forms';
import { ConnectionFormComponent } from './components/connection-form/connection-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { AccueilComponent } from './components/accueil/accueil.component';
import { ChoixCategorieComponent } from './components/choix-categorie/choix-categorie.component';

@NgModule({
  declarations: [
    AccueilComponent,
    ChoixCategorieComponent,
    AppComponent,
    ConnectionFormComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    //ServiceWorkerModule.register('ngsw-worker.js',{ enabled: environment.production}),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,

    // Permet de faire les differents routerLink 
    RouterModule.forRoot ([
      { path: '', component: AccueilComponent },
      { path: 'choix-categorie', component: ChoixCategorieComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
