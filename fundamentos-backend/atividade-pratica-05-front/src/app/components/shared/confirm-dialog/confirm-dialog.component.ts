import {Component, inject} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
    imports: [
        MatButton,
        MatDialogActions,
        MatDialogClose,
        MatDialogContent,
        MatDialogTitle
    ],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.css'
})
export class ConfirmDialogComponent {
  readonly dialogRef = inject<MatDialogRef<ConfirmDialogComponent>>(MatDialogRef);
  readonly data = inject<{title: string, message: string}>(MAT_DIALOG_DATA);

  closeDialog(result: boolean) {
    this.dialogRef.close(result);
  }

}
