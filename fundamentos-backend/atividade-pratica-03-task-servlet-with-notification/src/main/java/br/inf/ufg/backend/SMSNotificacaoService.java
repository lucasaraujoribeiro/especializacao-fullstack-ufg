package br.inf.ufg.backend;

public class SMSNotificacaoService implements NotificacaoService {

	@Override
	public void enviarNotificacao() {
		System.out.println("SMS enviado com sucesso!");
	}

}
