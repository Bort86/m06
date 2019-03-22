import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { RouterModule, Routes } from '@angular/router';
import { DnaFormComponent } from './dna-form/dna-form.component';
import { DnaValidatorDirective } from './Directives/dna-validator.directive';

const appRoutes: Routes = [
  {path:'patient-form', component:PatientFormComponent},
  {path:'dna-form', component:DnaFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PatientFormComponent,
    DnaFormComponent,
    DnaValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
