import { basicActtions } from '../../shared-ui/header/basic-actions';
import { CustomToasterService } from './../../Services/custom-toaster.service';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-send-transaction',
  templateUrl: './send-transaction.component.html',
  styleUrls: ['./send-transaction.component.scss'],
})
export class SendTransactionComponent extends basicActtions implements OnInit {
  windowWidth: number = window.innerWidth;
  balance: any;
  addressTo: string = '';
  transferAmount: number = 0;

  constructor(
    private service: SharedService,
    private toaster: CustomToasterService
  ) {
    super();
  }

  ngOnInit(): void {
    let user: any = localStorage.getItem('user');
    user = JSON.parse(user);
    this.getBalance(user.address);
  }

  getBalance(address: string) {
    this.service.getBalance(address).subscribe({
      next: (resp: any) => (this.balance = resp),
      error: (err) =>
        this.toaster.openSnackBar(
          err.error.message || 'error in getting balance'
        ),
    });
  }

  sendTransaction() {
    console.log(this.isValidEthereumAddress(this.addressTo));
    this.isValidEthereumAddress(this.addressTo);
    
  }

  isValidEthereumAddress(address: string) {
    const pattern = /^0x[0-9a-fA-F]{40}$/;
    if (address == '' || address == undefined || address == null) {
      console.log('addres:', address);
      this.toaster.openSnackBar('Please add address');
      return false;
    }
    if (this.transferAmount < 1) {
      this.toaster.openSnackBar('please add amount to transfer');
      return;
    }
    if (!pattern.test(address)) {
      this.toaster.openSnackBar('address is not in right format');
      return pattern.test(address);
    }
    return true;
  }
}
