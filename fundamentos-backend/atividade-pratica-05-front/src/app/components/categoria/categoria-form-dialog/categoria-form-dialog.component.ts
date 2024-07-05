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
import {Categoria} from "../../../classes/produto.model";

@Component({
  selector: 'app-categoria-form-dialog',
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
  templateUrl: './categoria-form-dialog.component.html',
  styleUrl: './categoria-form-dialog.component.css'
})
export class CategoriaFormDialogComponent {

  readonly dialogRef = inject<MatDialogRef<CategoriaFormDialogComponent>>(MatDialogRef);
  readonly data = inject<any>(MAT_DIALOG_DATA);
  readonly categoria: Categoria = {...this.data.categoria} || new Categoria();


  salvar() {
    this.dialogRef.close(this.categoria);
  }

  close() {
    this.dialogRef.close(undefined);
  }
}
