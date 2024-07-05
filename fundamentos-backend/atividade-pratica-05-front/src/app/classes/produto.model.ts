export class Produto {
  id?: number;
  nome?: string;
  preco?: number;
  categoria?: Categoria;
  tags?: Tag[];
}

export class Categoria {
  id?: number;
  nome?: string;
}

export class Tag{
  id?: number;
  nome?: string;
}
