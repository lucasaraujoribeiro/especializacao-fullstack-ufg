package br.inf.ufg.backend.atividade_pratica_04_spring_mvc_crud.repository;

import br.inf.ufg.backend.atividade_pratica_04_spring_mvc_crud.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {
}
