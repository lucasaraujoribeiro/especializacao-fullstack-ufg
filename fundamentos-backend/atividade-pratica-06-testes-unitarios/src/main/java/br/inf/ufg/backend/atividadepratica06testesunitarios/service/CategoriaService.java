package br.inf.ufg.backend.atividadepratica06testesunitarios.service;

import br.inf.ufg.backend.atividadepratica06testesunitarios.model.Categoria;
import br.inf.ufg.backend.atividadepratica06testesunitarios.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoriaService {

    @Autowired
    private CategoriaRepository categoriaRepository;

    public List<Categoria> findAll() {
        return categoriaRepository.findAll();
    }

    public Categoria save(Categoria categoria) {
        return categoriaRepository.save(categoria);
    }

    public Categoria findById(Long id) {
        return categoriaRepository.findById(id).orElse(null);
    }

    public void deleteById(Long id) {
        categoriaRepository.deleteById(id);
    }
}
