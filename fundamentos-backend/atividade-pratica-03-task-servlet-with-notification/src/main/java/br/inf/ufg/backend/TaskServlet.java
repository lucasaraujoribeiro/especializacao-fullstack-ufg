package br.inf.ufg.backend;

import java.io.IOException;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/task")
public class TaskServlet extends HttpServlet {
	
	private static final long serialVersionUID = 1L;
	
	private EmailNotificacaoService emailNotificacaoService = new EmailNotificacaoService();
	private TarefaService tarefaService = new TarefaService(emailNotificacaoService);
	
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.getWriter().print(tarefaService.listar());
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String task = req.getParameter("task");
		resp.getWriter().print(tarefaService.adicionar(task));
	}
	
	@Override
	protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String index = req.getParameter("index");
		String task = req.getParameter("task");
		resp.getWriter().print(tarefaService.atualizar(index, task));
	}

	@Override
	protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		tarefaService.setNotificacaoService(new SMSNotificacaoService());
		String index = req.getParameter("index");
		resp.getWriter().print(tarefaService.remover(index));
	}
}