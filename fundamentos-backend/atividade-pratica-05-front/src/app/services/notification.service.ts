import {inject, Injectable} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  MatDialog,
} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  readonly snackBar: MatSnackBar = inject(MatSnackBar);
  readonly dialog: MatDialog = inject(MatDialog);

  success(message: string) {
    this.openSnackBar(message, '', 'success-snackbar');
  }

  error(message: string) {
    this.openSnackBar(message, '', 'error-snackbar');
  }


  openSnackBar(
    message: string,
    action: string,
    className: string,
    duration = 2500
  ) {
    this.snackBar.open(message, action, {
      duration: duration,
      panelClass: [className],
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}

