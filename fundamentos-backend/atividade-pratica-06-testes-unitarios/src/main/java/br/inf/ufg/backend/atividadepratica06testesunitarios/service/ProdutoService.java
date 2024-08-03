package br.inf.ufg.backend.atividadepratica06testesunitarios.service;

import br.inf.ufg.backend.atividadepratica06testesunitarios.model.Produto;
import br.inf.ufg.backend.atividadepratica06testesunitarios.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;

    public List<Produto> findAll() {
        return produtoRepository.findAll();
    }

    public Produto save(Produto produto) {
        return produtoRepository.save(produto);
    }

    public Produto findById(Long id) {
        return produtoRepository.findById(id).orElse(null);
    }

    public void deleteById(Long id) {
        produtoRepository.deleteById(id);
    }
}
