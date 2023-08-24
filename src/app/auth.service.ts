import { Injectable } from '@angular/core';
import { OAuthService, AuthConfig } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private oauthService: OAuthService,
    private router: Router,
    private http: HttpClient
  ) {
    this.configureOAuth();
  }

  private configureOAuth() {
    const authConfig: AuthConfig = {
      issuer: 'https://accounts.google.com',
      clientId:
        '138322093391-5cdehk0qqkhk6kf2b4ltc307kqnrnkih.apps.googleusercontent.com',
      redirectUri: window.location.origin + '/success', // Update the URL as needed
      scope: 'profile email',
      responseType: 'code',
      strictDiscoveryDocumentValidation: false,
    };

    this.oauthService.configure(authConfig);
    this.oauthService.setStorage(localStorage);

    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {});
  }

  loginWithGoogle() {
    this.oauthService.initLoginFlow();
  }

  isAuthenticated(): boolean {
    return this.oauthService.hasValidAccessToken();
  }

  getTrialExpirationDate(): Observable<any> {
    return this.http.get('/auth/trial-status');
  }
}
