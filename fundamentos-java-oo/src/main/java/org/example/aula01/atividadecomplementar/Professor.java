package org.example.aula01.atividadecomplementar;

public class Professor {

    private String nome;
    private String telefone;

    public void mostrarDados() {
        System.out.printf("\nnome: %s", nome);
        System.out.printf("\ntelefone: %s", telefone);
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
