// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3000'; // Update with your server's URL

  constructor(private http: HttpClient) {}

  checkTrialStatus(): Observable<any> {
    return this.http.get(`${this.apiUrl}/auth/trial-status`);
  }
}
