package br.inf.ufg.backend.atividadepratica06testesunitarios.repository;
import br.inf.ufg.backend.atividadepratica06testesunitarios.model.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TagRepository extends JpaRepository<Tag, Long> {
}
