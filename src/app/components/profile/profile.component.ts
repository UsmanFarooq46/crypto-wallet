import { CustomToasterService } from './../../Services/custom-toaster.service';
import { basicActtions } from '../../shared-ui/header/basic-actions';
import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { SharedService } from 'src/app/Services/shared.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent extends basicActtions implements OnInit {
  showMenu: boolean = false;
  showAssets: boolean = true;
  windowWidth: number = window.innerWidth;
  userBalance: any;
  currencySymbol: string = '';
  userAddress: string = '';
  exchangeRate: number = 0;
  constructor(
    private clipBoard: ClipboardService,
    private service: SharedService,
    private toaster: CustomToasterService
  ) {
    super();
  }

  async ngOnInit() {
    let user: any = localStorage.getItem('user');
    this.userAddress = JSON.parse(user).address;
    console.log('before calling api ');
    await this.getBalace().catch((err) =>
      console.log('err in getting balance')
    );
    console.log('after calling api: ', this.userBalance);
    this.ETHIntoUSD();
  }

  async getBalace() {
    const categories$ = this.service.getBalance(this.userAddress);
    let balancefromapi: any = await lastValueFrom(categories$);
    console.log('balance from api: ', balancefromapi);
    this.userBalance = balancefromapi;
    return this.userBalance;
  }

  public async loadCategories() {}

  copyToClipBoard(text: string) {
    this.clipBoard.copyFromContent(text);
    console.log('address: ', text);
    let num = '2.456789';
    let decimalPlaces = 2;
    let roundedNum = this.customRound(+num, decimalPlaces);
    console.log('round number : ', roundedNum);
  }

  openlink(address: string) {
    let url = `https://goerli.etherscan.io/address/${address}`;
    window.open(url, '_blank');
    this.showMenu = false;
  }

  ETHIntoUSD() {
    this.service.getExchangeRateOfETHtoUSD().subscribe({
      next: (resp: any) => {
        // console.log('what is exchange rate: ', resp);
        console.log(
          "resp['data']['rates']['USD'];",
          resp['data']['rates']['USD']
        );
        this.exchangeRate = resp['data']['rates']['USD'];
      },
      error: (err) => {
        this.toaster.openSnackBar('error' + err.message);
      },
    });
  }
}
