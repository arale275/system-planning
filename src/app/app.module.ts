import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OAuthModule, OAuthService } from 'angular-oauth2-oidc';
import { AuthService } from './auth.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { SuccessComponent } from './success/success.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SuccessComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    RouterModule.forRoot([]),
    AppRoutingModule,
  ],
  providers: [AuthService, OAuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}



 

