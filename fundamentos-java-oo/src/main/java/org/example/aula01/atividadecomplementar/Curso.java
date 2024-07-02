package org.example.aula01.atividadecomplementar;

public class Curso {

    private String nome;
    private String turno;

    public void mostrarDados() {
        System.out.printf("\nnome: %s", nome);
        System.out.printf("\nturno: %s", turno);
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getTurno() {
        return turno;
    }

    public void setTurno(String turno) {
        this.turno = turno;
    }
}
