package br.inf.ufg.backend.atividadepratica06testesunitarios.controller;

import br.inf.ufg.backend.atividadepratica06testesunitarios.model.Produto;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ProdutoControllerIntegrationTest {
    @Autowired
    private TestRestTemplate restTemplate;
    @Test
    public void testSalvarProduto() {
        String nome = "Produto Salvar - Teste Integracao API RestFull";
        double preco = 100;

        Produto produto = new Produto(null, nome, preco);
        ResponseEntity<Produto> response = restTemplate.postForEntity("/api/produtos", produto, Produto.class);
        assertEquals(HttpStatus.OK, response.getStatusCode());

        Produto produtoSalvo = response.getBody();
        assertNotNull(produtoSalvo);
        assertNotNull(produtoSalvo.getId());
        assertEquals(nome, produtoSalvo.getNome());
        assertEquals(preco, produtoSalvo.getPreco());
    }

    @Test
    public void testBuscarTodosProdutos() {
        ResponseEntity<Produto[]> response = restTemplate.getForEntity("/api/produtos", Produto[].class);
        assertEquals(HttpStatus.OK, response.getStatusCode());
    }

    @Test
    public void testBuscarProdutoPorId() {
        ResponseEntity<Produto> response = restTemplate.getForEntity("/api/produtos/1", Produto.class);
        assertEquals(HttpStatus.OK, response.getStatusCode());
    }

    @Test
    public void testAtualizarProduto() {
        String nome = "Produto Atualizar - Teste Integracao API RestFull";
        double preco = 100;

        Produto produto = new Produto(null, nome, preco);
        ResponseEntity<Produto> response = restTemplate.postForEntity("/api/produtos", produto, Produto.class);
        assertEquals(HttpStatus.OK, response.getStatusCode());

        Produto produtoSalvo = response.getBody();
        assertNotNull(produtoSalvo);
        assertNotNull(produtoSalvo.getId());
        assertEquals(nome, produtoSalvo.getNome());
        assertEquals(preco, produtoSalvo.getPreco());

        Long id = produtoSalvo.getId();
        String novoNome = "Produto Atualizar - Alterado";
        double novoPreco = 200;
        Produto produtoAlterar = new Produto(id, novoNome, novoPreco);

        restTemplate.put("/api/produtos/" + id, produtoAlterar);
        ResponseEntity<Produto> responseAlterado = restTemplate.getForEntity("/api/produtos/" + id, Produto.class);
        assertEquals(HttpStatus.OK, responseAlterado.getStatusCode());

        Produto produtoAlterado = responseAlterado.getBody();
        assertNotNull(produtoAlterado);
        assertEquals(id, produtoAlterado.getId());
        assertEquals(novoNome, produtoAlterado.getNome());
        assertEquals(novoPreco, produtoAlterado.getPreco());
    }

    @Test
    public void testDeletarProduto() {
        String nome = "Produto Deletar - Teste Integracao API RestFull";
        double preco = 100;

        Produto produto = new Produto(null, nome, preco);
        ResponseEntity<Produto> response = restTemplate.postForEntity("/api/produtos", produto, Produto.class);
        assertEquals(HttpStatus.OK, response.getStatusCode());

        Produto produtoSalvo = response.getBody();
        assertNotNull(produtoSalvo);
        assertNotNull(produtoSalvo.getId());
        assertEquals(nome, produtoSalvo.getNome());
        assertEquals(preco, produtoSalvo.getPreco());

        restTemplate.delete("/api/produtos/" + produtoSalvo.getId());
        ResponseEntity<Produto> responseDeletado = restTemplate.getForEntity("/api/produtos/" + produtoSalvo.getId(), Produto.class);
        assertEquals(HttpStatus.NOT_FOUND, responseDeletado.getStatusCode());
    }
}
