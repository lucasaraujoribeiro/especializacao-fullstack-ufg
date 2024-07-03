package br.inf.ufg.backend;

public class EmailNotificacaoService implements NotificacaoService {

	@Override
	public void enviarNotificacao() {
		System.out.println("E-mail enviado com sucesso!");
	}

}
