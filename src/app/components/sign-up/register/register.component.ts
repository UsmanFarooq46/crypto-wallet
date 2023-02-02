import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  createWallet: boolean = false;
  signupIntro: boolean = true;
  walletCreated: boolean = false;
  twelvePhrase: any = undefined;
  isSeedPhrase: boolean = false;
  isRecoveryPhase: boolean = false;
  isImportWalllet: boolean = false;

  isImportWalletClicked(event: boolean) {
    if (event == false) {
      this.createWallet = true;
      this.signupIntro = false;
      this.walletCreated = false;
      this.isSeedPhrase = false;
      this.isRecoveryPhase = false;
      this.isImportWalllet = false;
    } else {
      this.createWallet = false;
      this.signupIntro = false;
      this.walletCreated = false;
      this.isSeedPhrase = false;
      this.isRecoveryPhase = false;
      this.isImportWalllet = true;
    }
  }

  isWalletCreated(event: any) {
    this.twelvePhrase = event;
    this.createWallet = false;
    this.signupIntro = false;
    this.walletCreated = false;
    this.isSeedPhrase = true;
    this.isRecoveryPhase = false;
    this.isImportWalllet = false;
  }

  goToRecoveryPhrase(event: boolean) {
    this.createWallet = false;
    this.signupIntro = false;
    this.walletCreated = false;
    this.isSeedPhrase = false;
    this.isRecoveryPhase = true;
    this.isImportWalllet = false;
  }

  isBackButtonClicked(event: boolean) {
    if (event) {
      this.isRecoveryPhase = false;
      this.isSeedPhrase = true;
    }
  }
}
