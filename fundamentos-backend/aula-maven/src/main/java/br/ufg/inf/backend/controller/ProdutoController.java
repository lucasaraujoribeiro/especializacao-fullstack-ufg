package br.ufg.inf.backend.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import br.ufg.inf.backend.model.Produto;

@Controller
public class ProdutoController {
	
	private List<Produto> produtos = new ArrayList<>(Arrays.asList(new Produto(1L, "Notebook", 2000.00),
			new Produto(2L, "Smartphone", 1000.00)));
	
	@GetMapping("/produtos")
	public String listarProdutos(Model model) {
		model.addAttribute("produtos", produtos);
		return "produtos";
	}

	@GetMapping("/produtos/adicionar")
	public String mostrarFormularioAdicionarProduto() {
		return "adicionar-produto";
	}

	@PostMapping("/produtos")
	public String adicionarProduto(@RequestParam(name = "nome") String nome, @RequestParam(name = "preco") double preco, Model model) {
		Produto produto = new Produto();
		produto.setNome(nome);
		produto.setPreco(preco);
		produtos.add(produto);
		model.addAttribute("produtos", produtos);
		model.addAttribute("sucesso", "Produto adicionado com sucesso!");
		return "produtos";
	}
}