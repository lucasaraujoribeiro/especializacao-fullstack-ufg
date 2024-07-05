import {Component, inject, OnInit} from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef, MatDialogTitle
} from "@angular/material/dialog";

import {Categoria, Produto, Tag} from "../../../classes/produto.model";
import {MatOption, MatSelect} from "@angular/material/select";
import {CategoriaService} from "../../../services/categoria.service";
import {TagService} from "../../../services/tag.service";

@Component({
  selector: 'app-produto-form-dialog',
  standalone: true,
  imports: [
    MatDialogContent,
    MatFormField,
    MatDialogActions,
    FormsModule,
    MatDialogClose,
    MatButton,
    MatInput,
    MatDialogTitle,
    MatLabel,
    MatSelect,
    MatOption,
    ReactiveFormsModule
  ],
  templateUrl: './produto-form-dialog.component.html',
  styleUrl: './produto-form-dialog.component.css'
})
export class ProdutoFormDialogComponent implements OnInit {

  readonly dialogRef = inject<MatDialogRef<ProdutoFormDialogComponent>>(MatDialogRef);
  readonly data = inject<any>(MAT_DIALOG_DATA);
  readonly categoriaService = inject(CategoriaService);
  readonly tagService = inject(TagService);
  readonly produto: Produto = {...this.data.produto} || new Produto();
  categoriaid = this.produto.categoria?.id;
  tagsIds: any[] = this.produto.tags?.map(tag => tag.id) || [];

  categorias: Categoria[] = [];
  tags: Tag[] = [];

  ngOnInit() {
    this.carregarCategorias();
    this.carregarTags();
  }

  salvar() {
    this.produto.categoria = this.categorias.find(categoria => categoria.id === this.categoriaid);
    this.produto.tags = this.tags.filter(tag => this.tagsIds.includes(tag.id));
    this.dialogRef.close(this.produto);
  }

  close() {
    this.dialogRef.close(undefined);
  }

  carregarCategorias() {
    this.categoriaService.findAll().subscribe((categorias: Categoria[]) => {
      this.categorias = categorias;
    });
  }

  carregarTags() {
    this.tagService.findAll().subscribe((tags: Tag[]) => {
      this.tags = tags;
    });
  }
}
