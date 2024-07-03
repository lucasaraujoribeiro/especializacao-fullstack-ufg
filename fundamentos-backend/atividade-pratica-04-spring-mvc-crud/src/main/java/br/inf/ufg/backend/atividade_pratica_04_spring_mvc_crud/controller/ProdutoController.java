package br.inf.ufg.backend.atividade_pratica_04_spring_mvc_crud.controller;

import br.inf.ufg.backend.atividade_pratica_04_spring_mvc_crud.model.Produto;
import br.inf.ufg.backend.atividade_pratica_04_spring_mvc_crud.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class ProdutoController {

    @Autowired
    private ProdutoService produtoService;

    @GetMapping("/produtos")
    public String listarProdutos(Model model, @RequestParam(required = false) String sucesso) {
        model.addAttribute("produtos", produtoService.listarProdutos());
        model.addAttribute("sucesso", sucesso);
        return "produtos";
    }

    @GetMapping("/produtos/adicionar")
    public String mostrarFormularioAdicionarProduto() {
        return "adicionar-produto";
    }

    @PostMapping("/produtos")
    public String salvarProduto(@RequestParam(required = false) Long id, @RequestParam String nome, @RequestParam double preco, RedirectAttributes redirectAttributes) {
        Produto produto = new Produto();
        produto.setId(id);
        produto.setNome(nome);
        produto.setPreco(preco);
        produtoService.salvarProduto(produto);

        String msg = String.format("Produto %s com sucesso!", (id == null || id == 0) ? "adicionado" : "atualizado");
        redirectAttributes.addAttribute("sucesso", msg);
        return "redirect:/produtos";
    }

    @GetMapping("/produtos/{id}")
    public String consultarProduto(Model model, @PathVariable Long id) {
        model.addAttribute("produto", produtoService.findById(id));
        return "editar-produto";
    }

    @PostMapping("/produtos/{id}/excluir")
    public String deletarProduto(@PathVariable Long id, RedirectAttributes redirectAttributes) {
        produtoService.delete(id);
        redirectAttributes.addAttribute("sucesso", "Produto excluido com sucesso!");
        return "redirect:/produtos";
    }
}
