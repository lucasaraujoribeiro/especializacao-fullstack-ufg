import {Component, inject} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Tag} from "../../../classes/produto.model";
import {NotificationService} from "../../../services/notification.service";

@Component({
  selector: 'app-tag-form-dialog',
  standalone: true,
  imports: [
    MatButton,
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './tag-form-dialog.component.html',
  styleUrl: './tag-form-dialog.component.css'
})
export class TagFormDialogComponent {

  readonly dialogRef = inject<MatDialogRef<TagFormDialogComponent>>(MatDialogRef);
  readonly data = inject<any>(MAT_DIALOG_DATA);
  readonly notificationService = inject(NotificationService);
  readonly tag: Tag = {...this.data.tag} || new Tag();


  salvar() {
    if (this.isCamposValidos()) {
      this.dialogRef.close(this.tag);
    }
  }

  close() {
    this.dialogRef.close(undefined);
  }

  private isCamposValidos(): boolean {
    if (!this.tag.nome) {
      this.notificationService.error('Nome é obrigatório!')
      return false;
    }
    return true;
  }
}
