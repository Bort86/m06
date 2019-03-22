import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ReservationEntryComponent } from './reservation-entry/reservation-entry.component';
import { ReservationManagementComponent } from './reservation-management/reservation-management.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
	{ path: 'new-reservation', component: ReservationEntryComponent },
	{ path: 'reservation-management', component: ReservationManagementComponent },
	{ path: '',
	 redirectTo: '/new-reservation',
	 pathMatch: 'full'
 	},
	{ path: '**', component: PageNotFoundComponent } ];

@NgModule({
  declarations: [
    AppComponent,
    ReservationEntryComponent,
    ReservationManagementComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		FormsModule,
		RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
