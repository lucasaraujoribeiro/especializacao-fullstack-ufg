package br.inf.ufg.backend.atividadepratica06testesunitarios.service;

import br.inf.ufg.backend.atividadepratica06testesunitarios.model.Produto;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
public class ProdutoServiceTest {

    @Autowired
    private ProdutoService service;

    @Test
    public void testAddProduct() {
        String nome = "Teste";
        double preco = 100;
        Produto produto = new Produto(null, nome, preco);
        Produto produtoSalvo = service.save(produto);
        assertNotNull(produtoSalvo);
        assertNotNull(produtoSalvo.getId());
        assertEquals(nome, produtoSalvo.getNome());
        assertEquals(preco, produtoSalvo.getPreco());
    }
    @Test
    public void testFindAll() {
        assertNotNull(service.findAll());
    }

    @Test
    public void testFindById() {
        String nome = "Teste";
        double preco = 100;
        Produto produto = new Produto(null, nome, preco);
        Produto produtoSalvo = service.save(produto);

        assertNotNull(service.findById(produtoSalvo.getId()));
    }

    @Test
    public void testUpdate() {
        String nome = "Produto Teste";
        double preco = 100;

        Produto produto = new Produto(null, nome, preco);
        Produto produtoSalvo = service.save(produto);

        Long id = produtoSalvo.getId();
        String novoNome = "Produto Teste - Alterado";
        double novoPreco = 200;
        Produto produtoAlterar = new Produto(id, novoNome, novoPreco);

        Produto produtoAlterado = service.save(produtoAlterar);
        assertNotNull(produtoAlterado);
        assertEquals(id, produtoAlterado.getId());
        assertEquals(novoNome, produtoAlterado.getNome());
        assertEquals(novoPreco, produtoAlterado.getPreco());
    }

    @Test
    public void testDelete() {
        String nome = "Produto Teste DELETE";
        double preco = 100;
        Produto produto = new Produto(null, nome, preco);
        Produto produtoSalvo = service.save(produto);

        service.deleteById(produtoSalvo.getId());
    }
}
