package org.example.aula02.atividadepratica3;

import java.util.ArrayList;
import java.util.List;

public class Edificio {

    private String nome;
    private String endereco;
    private List<Apartamento> apartamentos;

    public Edificio(String nome, String endereco) {
        apartamentos = new ArrayList<>();
        this.nome = nome;
        this.endereco = endereco;
    }

    public void adicionarApartamento(int numero, int andar, double metragem, String situacao, Morador morador) {
        Apartamento apartamento = new Apartamento(numero, andar, metragem, situacao, this, morador);
        apartamentos.add(apartamento);
    }

    public void mostrarDados() {
        for (Apartamento ap: apartamentos) {
            System.out.println(ap.toString());
        }
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }
}
