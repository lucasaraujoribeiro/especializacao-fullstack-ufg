package br.inf.ufg.backend.atividadepratica05springapirestfull.repository;
import br.inf.ufg.backend.atividadepratica05springapirestfull.model.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TagRepository extends JpaRepository<Tag, Long> {
}
