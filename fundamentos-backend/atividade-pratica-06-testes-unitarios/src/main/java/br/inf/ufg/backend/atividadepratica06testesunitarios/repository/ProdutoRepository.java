package br.inf.ufg.backend.atividadepratica06testesunitarios.repository;
import br.inf.ufg.backend.atividadepratica06testesunitarios.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {
}
