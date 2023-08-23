import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SuccessComponent } from './success/success.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'auth/facebook/callback', component: SuccessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
