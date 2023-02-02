import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-singup-intro',
  templateUrl: './singup-intro.component.html',
  styleUrls: ['./singup-intro.component.scss'],
})
export class SingupIntroComponent {
  @Output() isImportWalletClicked: any = new EventEmitter();

  buttonClicked(isClicked: boolean) {
    this.isImportWalletClicked.emit(isClicked);
  }
}
