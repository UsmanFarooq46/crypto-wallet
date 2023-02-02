import { SharedService } from './../../Services/shared.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  windowWidth: number = window.innerWidth;
  walletPass: string = '';
  user: any;

  constructor(private router: Router, private service: SharedService) {}

  ngOnInit(): void {
    let storageUser: string = localStorage.getItem('user') || '';
    this.user = JSON.parse(storageUser);
    if (sessionStorage.getItem('token')) this.router.navigateByUrl('/profile');
    if (this.user?.address) {
      console.log('this.user?.address', this.user?.address);
    } else {
      this.router.navigateByUrl('/register');
    }
  }

  Login() {
    console.log('wallet pas: ', this.walletPass);
    let payload = {
      address: this.user.address,
      password: this.walletPass,
    };
    this.service.login(payload).subscribe(
      (resp) => {
        console.log('logged in', resp);
      },
      (err) => {
        console.log('err while logging', err);
      }
    );
  }
}
