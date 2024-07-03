package br.inf.ufg.backend;

import java.util.ArrayList;
import java.util.List;

public class TarefaService {

	private NotificacaoService notificacaoService;
	private List<String> tarefas = new ArrayList<>();
	
	public TarefaService(NotificacaoService notificacaoService) {
		this.notificacaoService = notificacaoService;
	}
	
	public void setNotificacaoService(NotificacaoService notificacaoService) {
		this.notificacaoService = notificacaoService;
	}

	public String adicionar(String task) {
		notificacaoService.enviarNotificacao();
		
		if (task == null || task.isBlank()) {
			return "O nome da tarefa nao pode estar vazio!";
		}
		tarefas.add(task);
		
		return String.format("Tarefa %s adicionada com sucesso!", task);
	}
	
	public String atualizar(String index, String task) {
		notificacaoService.enviarNotificacao();
		
		if (index == null || index.isBlank()) {
			return "O index da task nao pode estar vazio!";
		}
		if (task == null || task.isBlank()) {
			return "O nome da task nao pode estar vazio!";
		}
		
		Integer idx = Integer.parseInt(index) - 1;
		
		String taskAnterior = "";
		try {
			taskAnterior = tarefas.get(idx);
		} catch (IndexOutOfBoundsException ex) {
			return "Nenhuma tarefa encontrada para o indice informado!";
		}
		
		tarefas.set(idx, task);
				
		return String.format("Tarefa alterada com sucesso! %s -> %s", taskAnterior, task);
		
	}

	public String remover(String index) {
		notificacaoService.enviarNotificacao();
		
		Integer idx = Integer.parseInt(index) - 1;
		
		if (index == null || index.isBlank()) {
			return "O index da tarefa nao pode estar vazio!";
		}
		
		String task = "";
		try {
			task = tarefas.get(idx);
		} catch (IndexOutOfBoundsException ex) {
			return "Nenhuma tarefa encontrada para o indice informado!";
		}
		tarefas.remove(idx.intValue());
		
		return String.format("Tarefa %s removida com sucesso!", task);
	}
	
	public String listar() {
		notificacaoService.enviarNotificacao();
		
		if (tarefas.isEmpty()) {
			return "Nenhuma tarefa cadastrada";
		}
		String resposta = "";
		for (int i = 0; i < tarefas.size(); i++) {
			resposta += String.format("%d - %s \n", i + 1, tarefas.get(i));
		}
		
		return resposta;
	}
	
}
