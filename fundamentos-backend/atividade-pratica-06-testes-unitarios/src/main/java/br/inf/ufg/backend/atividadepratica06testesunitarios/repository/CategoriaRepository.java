package br.inf.ufg.backend.atividadepratica06testesunitarios.repository;
import br.inf.ufg.backend.atividadepratica06testesunitarios.model.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoriaRepository extends JpaRepository<Categoria, Long> {
}
