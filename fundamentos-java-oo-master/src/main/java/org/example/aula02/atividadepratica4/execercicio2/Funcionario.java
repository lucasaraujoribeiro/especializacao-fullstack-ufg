package org.example.aula02.atividadepratica4.execercicio2;

public class Funcionario {

    private String nome;
    private String sobrenome;

    public void mostrarDados() {
        System.out.println("Nome: " + nome);
        System.out.println("Sobrenome: " + sobrenome);
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }

}
