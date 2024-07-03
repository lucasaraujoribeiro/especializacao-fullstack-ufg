package br.inf.ufg.backend.atividadepratica05springapirestfull.repository;
import br.inf.ufg.backend.atividadepratica05springapirestfull.model.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoriaRepository extends JpaRepository<Categoria, Long> {
}
