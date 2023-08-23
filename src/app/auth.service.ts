import { Injectable } from '@angular/core';
import { OAuthService, AuthConfig } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private oauthService: OAuthService, private router: Router) {
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

  loginWithFacebook(): void {
    this.oauthService.initLoginFlow('facebook'); // Add this line
  }

  isAuthenticated(): boolean {
    return this.oauthService.hasValidAccessToken();
  }
}
