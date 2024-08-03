package br.inf.ufg.backend.atividadepratica06testesunitarios.repository;

import br.inf.ufg.backend.atividadepratica06testesunitarios.model.Produto;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(SpringExtension.class)
public class ProdutoRepositoryTests {
    @Mock
    private ProdutoRepository produtoRepository; // Mock do repositório

    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this); // Inicializa mocks e injectMocks
    }

    @Test
    public void testAddProduto() {
        when(produtoRepository.save(any(Produto.class))).thenAnswer(i -> {
            Produto p = i.getArgument(0);
            p.setId(1L); // Simular a geração de ID pelo banco de dados
            return p;
        });

        Long id = 1L;
        String nome = "Teste";
        double preco = 100;
        Produto produto = new Produto(id, nome, preco);

        Produto produtoSalvo = produtoRepository.save(produto);
        assertNotNull(produtoSalvo);
        assertNotNull(produtoSalvo.getId());
        assertEquals(produto.getNome(), produtoSalvo.getNome());
        assertEquals(produto.getPreco(), produtoSalvo.getPreco());
    }

    @Test
    public void testFindAll() {
        assertNotNull(produtoRepository.findAll());
    }

    @Test
    public void testFindById() {
        when(produtoRepository.findById(1L)).thenReturn(java.util.Optional.of(new Produto(1L, "Teste", 100)));
        assertNotNull(produtoRepository.findById(1L));
    }

    @Test
    public void testUpdate() {
        Long id = 1L;
        String nome = "Teste 2";
        double preco = 100;
        Produto produto = new Produto(id, nome, preco);

        when(produtoRepository.save(any(Produto.class))).thenReturn(produto);

        Produto produtoSalvo = produtoRepository.save(produto);
        assertNotNull(produtoSalvo);
        assertEquals(produtoSalvo.getId(), id);
        assertEquals(produtoSalvo.getNome(), nome);
        assertEquals(produtoSalvo.getPreco(), preco);
    }

    @Test
    public void testDelete() {
        Produto produto = new Produto(1L, "Teste", 100);
        produtoRepository.delete(produto);
    }
}
