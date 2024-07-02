package org.example.aula03.atividadecomplementar.exercicio_02_gerenciamentotarefas;

public class Bug implements Priorizavel {

    int nivelPrioridade;

    @Override
    public void definirPrioridade(int nivelPrioridade) {
        this.nivelPrioridade = nivelPrioridade;
    }
}
