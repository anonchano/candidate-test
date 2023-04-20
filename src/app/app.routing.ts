import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { TaxCompanyComponent } from './components/candidate-app/tax-company/tax-company.component';
import { DetailTaxCompanyComponent } from './components/candidate-app/detail-tax-company/detail-tax-company.component';
import { PreviewFileComponent } from './components/candidate-app/preview-file/preview-file.component';

const routes: Routes = [
  { path: '', redirectTo: 'tax-company', pathMatch: 'full' },
  { path: 'home', component: ComponentsComponent },
  { path: 'user-profile', component: ProfileComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'nucleoicons', component: NucleoiconsComponent },
  { path: 'detail', component: DetailTaxCompanyComponent },
  {
    path: 'tax-company', children: [
      {
        path: '', // child route path
        component: TaxCompanyComponent, // child route component that the router renders
      },
      {
        path: 'detail', // child route path
        component: DetailTaxCompanyComponent, // child route component that the router renders
      },
      {
        path: 'preview', // child route path
        component: PreviewFileComponent, // child route component that the router renders
      },
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule],
})

export class AppRoutingModule { }
