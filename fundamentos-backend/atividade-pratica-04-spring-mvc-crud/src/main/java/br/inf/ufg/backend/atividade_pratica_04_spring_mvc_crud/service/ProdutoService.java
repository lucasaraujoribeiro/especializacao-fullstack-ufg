package br.inf.ufg.backend.atividade_pratica_04_spring_mvc_crud.service;

import br.inf.ufg.backend.atividade_pratica_04_spring_mvc_crud.model.Produto;
import br.inf.ufg.backend.atividade_pratica_04_spring_mvc_crud.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;

    public List<Produto> listarProdutos() {
        return produtoRepository.findAll();
    }

    public Produto salvarProduto(Produto produto) {
        return produtoRepository.save(produto);
    }

    public Produto findById(Long id) {
        return produtoRepository.findById(id).orElse(null);
    }

    public void delete(Long id) {
        produtoRepository.deleteById(id);
    }
}
