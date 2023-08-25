import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  private authSubscription: Subscription;

  constructor(private authService: AuthService, private router: Router) {
    // Subscribe to authentication state changes
    this.authSubscription =
      this.authService.authenticationStateChanged$.subscribe((isAuthorized) => {
        if (isAuthorized) {
          console.log('User is authorized. Redirecting to success page...');
          this.router.navigate(['/success']);
        } else {
          console.log(
            'User is not authorized. Redirecting to expired trial page...'
          );
          this.router.navigate(['/expired-trial']);
        }
      });
  }

  ngOnDestroy(): void {
    // Unsubscribe to prevent memory leaks
    this.authSubscription.unsubscribe();
  }

  loginWithGoogle(): void {
    console.log('Logging in with Google...');
    this.authService.loginWithGoogle();
  }
}
