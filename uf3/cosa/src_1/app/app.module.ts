import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ReservationEntryComponent } from './reservation-entry/reservation-entry.component';
import { ReservationManagementComponent } from './reservation-management/reservation-management.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InputValidationDirective } from './directives/input-validation.directive';
//import for the cookies, not for the wicked
import { CookieService } from 'ngx-cookie-service';
//import for pagination
import { NgxPaginationModule } from 'ngx-pagination';



const appRoutes: Routes = [
	{path:'new-reservation', component: ReservationEntryComponent},
	{path:'reservation-management', component: ReservationManagementComponent},
	{path:'**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ReservationEntryComponent,
    ReservationManagementComponent,
    PageNotFoundComponent,
    InputValidationDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, //routing
		FormsModule,
		NgxPaginationModule, //pagination
		RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only, for scroll and roll events
    )
  ],
  providers: [CookieService], //for cookies
  bootstrap: [AppComponent] // for boobietrap
})
export class AppModule { }
