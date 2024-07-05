import {ChangeDetectorRef, Component, inject, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable
} from "@angular/material/table";
import {MatIcon} from "@angular/material/icon";
import {Categoria, Produto} from "../../classes/produto.model";
import {MatDialog} from "@angular/material/dialog";
import {NotificationService} from "../../services/notification.service";
import {ProdutoFormDialogComponent} from "../produto/produto-form-dialog/produto-form-dialog.component";
import {ConfirmDialogComponent} from "../shared/confirm-dialog/confirm-dialog.component";
import {CategoriaService} from "../../services/categoria.service";
import {CategoriaFormDialogComponent} from "./categoria-form-dialog/categoria-form-dialog.component";

const ELEMENT_DATA: Categoria[] = [];

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [
    MatButton,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatIcon,
    MatRow,
    MatRowDef,
    MatTable,
    MatHeaderCellDef
  ],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'acoes'];
  dataSource = ELEMENT_DATA;

  readonly dialog = inject(MatDialog);
  readonly notificationService = inject(NotificationService);
  readonly categoriaService: CategoriaService = inject(CategoriaService);
  readonly changeDetectorRefs: ChangeDetectorRef = inject(ChangeDetectorRef);

  ngOnInit() {
    this.carregar();
  }

  nova() {
    const dialogRef = this.dialog.open(CategoriaFormDialogComponent, {
      width: '350px',
      enterAnimationDuration: '',
      exitAnimationDuration: '',
      data: {title: 'Cadastrar Categoria'}
    });
    dialogRef.afterClosed().subscribe((categoriaResult: Produto) => {
      if (categoriaResult) {
        this.categoriaService.save(categoriaResult).subscribe(() => {
          this.notificationService.success('Categoria cadastrado com sucesso!')
          this.carregar();
        });
      }
    });
  }

  editar(categoria: Categoria) {
    const dialogRef = this.dialog.open(CategoriaFormDialogComponent, {
      width: '400px',
      enterAnimationDuration: '',
      exitAnimationDuration: '',
      data: { categoria: categoria, title: 'Editar Categoria'}
    });
    dialogRef.afterClosed().subscribe((result: Categoria) => {
      if (result) {
        this.categoriaService.update(result).subscribe((response) => {
          this.notificationService.success('Categoria atualizada com sucesso!')
          this.carregar();
        });
      }
    });
  }

  deletar(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      enterAnimationDuration: '',
      exitAnimationDuration: '',
      data: {title: 'Excluir Categoria', message: 'Confirma a exclusão do categoria?'}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.categoriaService.delete(id).subscribe((response) => {
          this.notificationService.success('Categoria deletada com sucesso!')
          this.carregar();
        });
      }
    });
  }

  carregar() {
    this.categoriaService.findAll().subscribe((categorias: Produto[]) => {
      this.dataSource = categorias;
      this.changeDetectorRefs.detectChanges()
    });
  }
}
