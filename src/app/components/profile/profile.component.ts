import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { SharedService } from 'src/app/Services/shared.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  showMenu: boolean = false;
  showAssets: boolean = true;
  windowWidth: number = window.innerWidth;
  userBalance: number = 0;
  userAddress: string = '';
  constructor(
    private clipBoard: ClipboardService,
    private service: SharedService
  ) {}

  async ngOnInit() {
    let user: any = localStorage.getItem('user');
    this.userAddress = JSON.parse(user).address;
    console.log('before calling api ');
    await this.getBalace().catch((err) =>
      console.log('err in getting balance')
    );
    console.log('after calling api: ');
  }

  async getBalace() {
    // let balance: number;
    const categories$ = this.service.getBalance(this.userAddress);
    let balancefromapi = await lastValueFrom(categories$);
    console.log('balance from api: ', balancefromapi);
  }

  public async loadCategories() {}

  copyToClipBoard(text: string) {
    this.clipBoard.copyFromContent(text);
    console.log('address: ', text);
  }

  openlink(address: string) {
    let url = `https://goerli.etherscan.io/address/${address}`;
    window.open(url, '_blank');
  }
}
