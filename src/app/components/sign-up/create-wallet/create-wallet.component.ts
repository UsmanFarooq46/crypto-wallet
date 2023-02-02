import { CustomToasterService } from './../../../Services/custom-toaster.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, FormBuilder, Validators } from '@angular/forms';
import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-create-wallet',
  templateUrl: './create-wallet.component.html',
  styleUrls: ['./create-wallet.component.scss'],
})
export class CreateWalletComponent {
  formGroup: any;
  @Output() isWalletCreated: any = new EventEmitter();
  isMatched: boolean = true;
  innerHeight: number = window.innerHeight;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: CustomToasterService,
    private service: SharedService
  ) {
    this.initForm();
  }

  initForm() {
    this.formGroup = this.fb.group({
      newPass: ['', [Validators.required, Validators.minLength(8)]],
      confirmPass: ['', Validators.required],
    });
  }

  get form() {
    return this.formGroup.controls;
  }

  submit() {
    if (this.isValidated()) {
      // this.isWalletCreated.emit('created');
      console.log('everything is right');
      let payload = {
        password: this.formGroup.value.newPass,
      };
      this.service.createWallet(payload).subscribe(
        (resp) => {
          console.log('wallet has created: ', resp);
          sessionStorage.setItem('token', resp.tokens);
          let user = resp.user;
          delete user.privateKey;
          localStorage.setItem('user', JSON.stringify(user));
          this.isWalletCreated.emit(resp);
        },
        (err) => {
          this.toastr.openSnackBar(
            err.error.message || 'Error occured in creating wallet'
          );
          console.log('error Occured: ', err);
        }
      );
    }
  }

  isValidated() {
    if (this.formGroup.invalid) {
      console.log('form is invalid: ', this.formGroup);

      this.formGroup.markAllAsTouched();
      return false;
    }
    this.isMatched = true;
    if (this.formGroup.value.newPass != this.formGroup.value.confirmPass) {
      this.isMatched = false;
      this.toastr.openSnackBar('Password does not match');

      return false;
    }
    return true;
  }
}
