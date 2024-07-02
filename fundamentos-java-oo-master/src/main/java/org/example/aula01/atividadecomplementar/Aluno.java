package org.example.aula01.atividadecomplementar;

public class Aluno {

    private int matricula;
    private String nome;
    private String telefone;

    public void mostrarDados() {
        System.out.printf("\nmatricula: %d", matricula);
        System.out.printf("\nnome: %s", nome);
        System.out.printf("\ntelefone: %s", telefone);
    }

    public int getMatricula() {
        return matricula;
    }

    public void setMatricula(int matricula) {
        this.matricula = matricula;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }
}
