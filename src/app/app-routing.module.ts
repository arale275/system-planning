import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SuccessComponent } from './success/success.component';
import { ExpiredTrialComponent } from './expired-trial/expired-trial.component';
import { SubscriptionPlansComponent } from './subscription-plans/subscription-plans.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'auth/facebook/callback', component: SuccessComponent },
  { path: 'expired-trial', component: ExpiredTrialComponent },
  { path: 'subscription-plans', component: SubscriptionPlansComponent },
  { path: 'support', component: SupportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
