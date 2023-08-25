import { Injectable } from '@angular/core';
import { OAuthService, OAuthEvent } from 'angular-oauth2-oidc';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authenticationStateSubject = new BehaviorSubject<boolean>(false);
  authenticationStateChanged$ = this.authenticationStateSubject.asObservable();

  constructor(private oauthService: OAuthService) {
    oauthService.events.subscribe((event: OAuthEvent) => {
      if (event.type === 'token_received') {
        this.authenticationStateSubject.next(true);
      } else if (event.type === 'token_expires' || event.type === 'logout') {
        this.authenticationStateSubject.next(false);
      }
    });
  }

  loginWithGoogle(): void {
    this.oauthService.initLoginFlow();
  }

  isAuthenticated(): boolean {
    return this.oauthService.hasValidAccessToken();
  }

  logout(): void {
    this.oauthService.logOut();
  }
}
