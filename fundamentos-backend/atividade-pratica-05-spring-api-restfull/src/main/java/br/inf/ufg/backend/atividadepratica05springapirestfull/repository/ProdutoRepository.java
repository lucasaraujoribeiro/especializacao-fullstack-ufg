package br.inf.ufg.backend.atividadepratica05springapirestfull.repository;
import br.inf.ufg.backend.atividadepratica05springapirestfull.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {
}
