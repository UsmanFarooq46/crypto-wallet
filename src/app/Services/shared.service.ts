import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

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

  // profile
  getBalance(address: string) {
    return this.http
      .get(this.apiURL + 'users/balance', {
        params: new HttpParams().set('address', address),
      })
      // .toPromise();
  }
}
