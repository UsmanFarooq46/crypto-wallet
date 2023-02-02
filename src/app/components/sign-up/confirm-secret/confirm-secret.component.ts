import { CustomToasterService } from './../../../Services/custom-toaster.service';
import { Router } from '@angular/router';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirm-secret',
  templateUrl: './confirm-secret.component.html',
  styleUrls: ['./confirm-secret.component.scss'],
})
export class ConfirmSecretComponent implements OnInit {
  unOrderedPhrase: any = [];
  selectedList: any = [];
  @Input() seedPhraseString: string = '';
  @Output() isBackButtonClicked = new EventEmitter();

  constructor(private router: Router, private toaster: CustomToasterService) {}

  ngOnInit(): void {
    this.seedPhraseString = this.seedPhraseString.trim();
    let splittedArray = this.seedPhraseString.split(' ');
    splittedArray.sort(() => Math.random() - 0.5);
    this.createArraySeedPhrase(splittedArray);
    // this.unOrderedPhrase = splittedArray;
  }

  createArraySeedPhrase(array: any) {
    for (let i = 0; i < array.length; i++) {
      this.unOrderedPhrase.push({
        isSelected: false,
        phrase: array[i],
      });
    }
  }


  select(item: any) {
    for (let i = 0; i < this.unOrderedPhrase.length; i++) {
      if (this.unOrderedPhrase[i] == item) {
        this.unOrderedPhrase[i].isSelected = true;
        this.selectedList.push(item.phrase);
      }
    }
  }

  backButton() {
    this.isBackButtonClicked.emit(true);
  }

  compared_completed() {
    let string = this.selectedList.join(' ');
    if (string != this.seedPhraseString) {
      this.toaster.openSnackBar("does'nt match");
      return;
    }
    this.router.navigateByUrl('/profile');
  }
}
