import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  showMenu: boolean = false;
  showAssets: boolean = true;
  windowWidth: number = window.innerWidth;

  constructor(private clipBoard: ClipboardService) {
  }

  ngOnInit(): void {
    console.log("what is inner width: ",this.windowWidth);
    
  }

  copyToClipBoard(text: string) {
    this.clipBoard.copyFromContent(text);
  }
}
