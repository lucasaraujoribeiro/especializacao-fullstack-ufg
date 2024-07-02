package org.example.aula02.exemplo1;

public class PessoaFisica extends Pessoa {

    private String cpf;
    private char sexo;
    private int estadoCivil;

    public PessoaFisica(String nome) {
        super(nome);
    }

    public void mostrarDados() {
        System.out.println("NOME: " + getNome());
        System.out.println("CPF: " + cpf);
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public char getSexo() {
        return sexo;
    }

    public void setSexo(char sexo) {
        this.sexo = sexo;
    }

    public int getEstadoCivil() {
        return estadoCivil;
    }

    public void setEstadoCivil(int estadoCivil) {
        this.estadoCivil = estadoCivil;
    }
}
