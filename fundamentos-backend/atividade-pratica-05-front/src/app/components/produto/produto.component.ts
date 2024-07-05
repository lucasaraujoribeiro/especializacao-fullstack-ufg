import {ChangeDetectorRef, Component, inject, OnInit} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {Produto, Tag} from "../../classes/produto.model";
import {MatIcon} from "@angular/material/icon";
import {ProdutoService} from "../../services/produto.service";
import {
  MatDialog,
} from '@angular/material/dialog';
import {ConfirmDialogComponent} from "../shared/confirm-dialog/confirm-dialog.component";
import {ProdutoFormDialogComponent} from "./produto-form-dialog/produto-form-dialog.component";
import {NotificationService} from "../../services/notification.service";
import {MatButton} from "@angular/material/button";


const ELEMENT_DATA: Produto[] = [];

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [MatTableModule, MatIcon, MatButton],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'preco', 'categoria', 'tags', 'acoes'];
  dataSource = ELEMENT_DATA;

  readonly dialog = inject(MatDialog);
  readonly notificationService = inject(NotificationService);
  readonly produtoService: ProdutoService = inject(ProdutoService);
  readonly changeDetectorRefs: ChangeDetectorRef = inject(ChangeDetectorRef);

  ngOnInit() {
    this.carregarProdutos();
  }

  novo() {
    const dialogRef = this.dialog.open(ProdutoFormDialogComponent, {
      width: '350px',
      enterAnimationDuration: '',
      exitAnimationDuration: '',
      data: {title: 'Cadastrar Produto'}
    });
    dialogRef.afterClosed().subscribe((produtoResult: Produto) => {
      if (produtoResult) {
        this.produtoService.save(produtoResult).subscribe(() => {
          this.notificationService.success('Produto cadastrado com sucesso!')
          this.carregarProdutos();
        });
      }
    });
  }

  editar(produto: Produto) {
    const dialogRef = this.dialog.open(ProdutoFormDialogComponent, {
      width: '400px',
      enterAnimationDuration: '',
      exitAnimationDuration: '',
      data: { produto, title: 'Editar Produto'}
    });
    dialogRef.afterClosed().subscribe((result: Produto) => {
      if (result) {
        this.produtoService.update(result).subscribe((response) => {
          this.notificationService.success('Produto atualizado com sucesso!')
          this.carregarProdutos();
        });
      }
    });
  }

  deletar(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      enterAnimationDuration: '',
      exitAnimationDuration: '',
      data: {title: 'Excluir Produto', message: 'Confirma a exclusão do produto?'}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.produtoService.delete(id).subscribe((response) => {
          this.notificationService.success('Produto deletado com sucesso!')
          this.carregarProdutos();
        });
      }
    });
  }

  carregarProdutos() {
    this.produtoService.findAll().subscribe((produtos: Produto[]) => {
      this.dataSource = produtos;
      this.changeDetectorRefs.detectChanges()
    });
  }

  getTagsDescriptions(tags: Tag[]) {
    return tags.map(tag => tag.nome).join(', ');
  }
}
