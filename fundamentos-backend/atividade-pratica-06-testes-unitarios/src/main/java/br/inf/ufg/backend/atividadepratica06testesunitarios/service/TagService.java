package br.inf.ufg.backend.atividadepratica06testesunitarios.service;

import br.inf.ufg.backend.atividadepratica06testesunitarios.model.Tag;
import br.inf.ufg.backend.atividadepratica06testesunitarios.repository.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TagService {

    @Autowired
    private TagRepository tagRepository;

    public List<Tag> findAll() {
        return tagRepository.findAll();
    }

    public Tag save(Tag tag) {
        return tagRepository.save(tag);
    }

    public Tag findById(Long id) {
        return tagRepository.findById(id).orElse(null);
    }

    public void deleteById(Long id) {
        tagRepository.deleteById(id);
    }
}
