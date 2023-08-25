import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OAuthModule, OAuthService } from 'angular-oauth2-oidc';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SuccessComponent } from './success/success.component';
import { HomeComponent } from './home/home.component';
import { ExpiredTrialComponent } from './expired-trial/expired-trial.component';
import { SubscriptionPlansComponent } from './subscription-plans/subscription-plans.component';
import { SupportComponent } from './support/support.component';
import { AuthService } from './auth.service'; // Make sure the path is correct

@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    HomeComponent,
    ExpiredTrialComponent,
    SubscriptionPlansComponent,
    SupportComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    OAuthModule.forRoot(), // Import OAuthModule here
    RouterModule.forRoot([]),
    AppRoutingModule,
  ],
  providers: [AuthService, OAuthService], // Add AuthService and OAuthService as providers
  bootstrap: [AppComponent],
})
export class AppModule {}
