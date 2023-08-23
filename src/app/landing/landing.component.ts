import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent {
  constructor(private authService: AuthService) {}

  loginWithGoogle() {
    this.authService.loginWithGoogle();
  }

  loginWithFacebook() {
    this.authService.loginWithFacebook();
  }
}


