import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-twelve-phrase',
  templateUrl: './twelve-phrase.component.html',
  styleUrls: ['./twelve-phrase.component.scss'],
})
export class TwelvePhraseComponent implements OnInit {
  @Output() gotoRecoveryPhrase: any = new EventEmitter();
  @Input() seedPhrase: string = '';
  string =
    'crime floor later network melt fiber various dignity message cable ostrich parent';

  splittedStringArray: any = [];

  gotoRecoveryPhase() {
    this.gotoRecoveryPhrase.emit(true);
  }

  ngOnInit(): void {
    console.log('what is seed phrase: ', this.seedPhrase);
  }
}
