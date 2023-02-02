import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  apiURL: string = environment.apiUrl;
  constructor(private http: HttpClient) {}

  // createWallet()
  createWallet(payload: any) {
    return this.http.post<any>(this.apiURL + 'auth/register', payload);
  }

  login(payload: any) {
    return this.http.post<any>(this.apiURL + 'auth/login', payload);
  }
}
