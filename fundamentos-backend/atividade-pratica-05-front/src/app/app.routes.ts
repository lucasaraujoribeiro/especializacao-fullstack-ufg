import { Routes } from '@angular/router';
import {ProdutoComponent} from "./components/produto/produto.component";
import {CategoriaComponent} from "./components/categoria/categoria.component";
import {TagComponent} from "./components/tag/tag.component";

export const routes: Routes = [
  {
    path: 'produto',
    component: ProdutoComponent
  },
  {
    path: 'categoria',
    component: CategoriaComponent
  },
  {
    path: 'tag',
    component: TagComponent
  }
];
