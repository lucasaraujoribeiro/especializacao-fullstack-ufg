import {ChangeDetectorRef, Component, inject} from '@angular/core';
import {Produto, Tag} from "../../classes/produto.model";
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
import {MatDialog} from "@angular/material/dialog";
import {NotificationService} from "../../services/notification.service";
import {ConfirmDialogComponent} from "../shared/confirm-dialog/confirm-dialog.component";
import {TagService} from "../../services/tag.service";
import {TagFormDialogComponent} from "./tag-form-dialog/tag-form-dialog.component";

const ELEMENT_DATA: Tag[] = [];

@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [
    MatButton,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable,
    MatHeaderCellDef,
    MatIcon
  ],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.css'
})
export class TagComponent {

  displayedColumns: string[] = ['id', 'nome', 'acoes'];
  dataSource = ELEMENT_DATA;
  readonly dialog = inject(MatDialog);
  readonly notificationService = inject(NotificationService);
  readonly tagService: TagService = inject(TagService);
  readonly changeDetectorRefs: ChangeDetectorRef = inject(ChangeDetectorRef);

  ngOnInit() {
    this.carregar();
  }

  nova() {
    const dialogRef = this.dialog.open(TagFormDialogComponent, {
      width: '350px',
      enterAnimationDuration: '',
      exitAnimationDuration: '',
      data: {title: 'Cadastrar Tag'}
    });
    dialogRef.afterClosed().subscribe((tagResult: Produto) => {
      if (tagResult) {
        this.tagService.save(tagResult).subscribe(() => {
          this.notificationService.success('Tag cadastrado com sucesso!')
          this.carregar();
        });
      }
    });
  }

  editar(tag: Tag) {
    const dialogRef = this.dialog.open(TagFormDialogComponent, {
      width: '400px',
      enterAnimationDuration: '',
      exitAnimationDuration: '',
      data: {tag: tag, title: 'Editar Tag'}
    });
    dialogRef.afterClosed().subscribe((result: Tag) => {
      if (result) {
        this.tagService.update(result).subscribe((response) => {
          this.notificationService.success('Tag atualizada com sucesso!')
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
      data: {title: 'Excluir Tag', message: 'Confirma a exclusão do tag?'}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.tagService.delete(id).subscribe((response) => {
          this.notificationService.success('Tag deletada com sucesso!')
          this.carregar();
        });
      }
    });
  }

  carregar() {
    this.tagService.findAll().subscribe((tags: Tag[]) => {
      this.dataSource = tags;
      this.changeDetectorRefs.detectChanges()
    });
  }
}
