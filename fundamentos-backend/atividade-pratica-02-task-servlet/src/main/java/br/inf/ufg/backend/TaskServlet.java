package br.inf.ufg.backend;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/task")
public class TaskServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	List<String> tarefas = new ArrayList<>();
	
	public TaskServlet() {
	}
    
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.getWriter().println("TAREFAS");
		if (tarefas.isEmpty()) {
			response.getWriter().println("Nenhuma tarefa cadastrada");
			return;
		}
		for (int i = 0; i < tarefas.size(); i++) {
			response.getWriter().println(String.format("%d - %s", i + 1, tarefas.get(i)));;
		}
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String task = req.getParameter("task");
		if (task == null || task.isBlank()) {
			resp.getWriter().println("O nome da tarefa nao pode estar vazio!");
			return;
		}
		tarefas.add(task);
		resp.getWriter().println(String.format("Tarefa %s adicionada com sucesso!", task));
	}
	
	@Override
	protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String index = req.getParameter("index");
		String task = req.getParameter("task");
		
		if (index == null || index.isBlank()) {
			resp.getWriter().println("O index da task nao pode estar vazio!");
			return;
		}
		if (task == null || task.isBlank()) {
			resp.getWriter().println("O nome da task nao pode estar vazio!");
			return;
		}
		
		
		Integer idx = Integer.parseInt(index) - 1;
		
		String taskAnterior = "";
		try {
			taskAnterior = tarefas.get(idx);
		} catch (IndexOutOfBoundsException ex) {
			resp.getWriter().println("Nenhuma tarefa encontrada para o indice informado!");
			return;
		}
		
		tarefas.set(idx, task);
		
		resp.getWriter().printf("Tarefa alterada com sucesso! %s -> %s", taskAnterior, task);
		
	}

	@Override
	protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String index = req.getParameter("index");
		Integer idx = Integer.parseInt(index) - 1;
		
		if (index == null || index.isBlank()) {
			resp.getWriter().println("O index da tarefa nao pode estar vazio!");
			return;
		}
		
		String task = "";
		try {
			task = tarefas.get(idx);
		} catch (IndexOutOfBoundsException ex) {
			resp.getWriter().println("Nenhuma tarefa encontrada para o indice informado!");
			return;
		}
		tarefas.remove(idx.intValue());
		resp.getWriter().printf("Tarefa %s removida com sucesso!", task);
	}
}