import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomToasterService {
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: string) {
    this.snackBar.open(message, 'X', {
      duration: 4000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
    });
  }
}
