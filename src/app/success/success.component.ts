import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.authenticationStateChanged$.subscribe(isAuthorized => {
      if (isAuthorized) {
        // Redirect to desired page (e.g., dashboard)
        this.router.navigate(['/dashboard']); // Replace with the actual path
      } else {
        // User is not authorized, redirect to expired trial page
        this.router.navigate(['/expired-trial']);
      }
    });
  }
}
