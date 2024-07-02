package org.example.aula01.atividadecomplementar;

public class Disciplina {

    private String nome;

    public void mostrarDados() {
        System.out.printf("\nnome: %s", nome);
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}
