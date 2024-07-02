package org.example.aula02.atividadepratica4.execercicio1;

public class Pessoa {

    private String nome;
    private String sexo;
    private String cpf;
    private String endereco;

    public void mostrarDados() {
        System.out.println("NOME: " + nome);
        System.out.println("SEXO: " + sexo);
        System.out.println("CPF: " + cpf);
        System.out.println("ENDERECO: " + endereco);
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }
}
